// At least for now, the World Bank has a nasty bug in their
// API implementation. Their server converts the name of the
// JSONP callback function to lowercase. By default, jQuery
// uses a callback function of the form `jQuery9876_1234`
// (except the number strings are **much** longer) and so
// the JSONP response that the World Bank returns fails
// trying to execute `jquery9876_1234`. To workaround this
// bug, we'll intercept all of jQuery's AJAX calls before
// they're executed. We look for the World Bank callback
// parameter `prefix=` and, if it's present and the value isn't
// lowercase, create a lowercase wrapper function around the
// real callback that jQuery has created.
$.ajaxSetup({
  beforeSend: function(xhr, settings) {
    var prefix = settings.url.match(/prefix=(.*?)&/);
    if (prefix.length > 1) {
      var callback = prefix[1];
      if (callback !== callback.toLowerCase()) {
        window[callback.toLowerCase()] =
          new Function("response", callback + "(response)");
      }
    }
  }
});

var deferredRegionsRequest = $.getJSON(
    "http://api.worldbank.org/regions/?prefix=?",
    {format: "jsonp"}
);

var deferredRegionsAvailable = $.Deferred();
deferredRegionsRequest.done(function(response) {
    deferredRegionsAvailable.resolve(
        $.map(
            $.grep(response[1], function(regionObj) {
                return (regionObj.id != "");
            }),
            function(regionObj) {
                return {
                    code: regionObj.code,
                    name: regionObj.name.replace(" (all income levels)","")
                };
            }
        )
    );
});

var deferredAllDataAvailable = $.Deferred();
deferredRegionsAvailable.done(function(regions) {
    $.each(regions, function(idx, regionObj) {
        regionObj.deferredDataRequest = $.getJSON(
            "http://api.worldbank.org/countries/"
               + regionObj.code
               + "/indicators/NY.GDP.MKTP.CD"
               + "?prefix=?"
            ,{ format: "jsonp", per_page: 9999 }
        );
        regionObj.deferredDataAvailable = $.Deferred();
        regionObj.deferredDataRequest.done(function(response) {
            regionObj.rawData = response[1] || [];
            regionObj.deferredDataAvailable.resolve();
        });
    });
    $.when.apply(this,$.map(regions, function(regionObj) {
        return regionObj.deferredDataAvailable
    })).done(function() {
        deferredAllDataAvailable.resolve(regions);
    });
});

var deferredChartDataReady = $.Deferred();
deferredAllDataAvailable.done(function(regions) {
    $.each(regions, function(idx, regionObj) {
        regionObj.flotData = $.map(
            $.grep(regionObj.rawData, function(dataObj) {
                return (dataObj.value !== null);
            }),
            function(dataObj) {
                return [[
                    parseInt(dataObj.date),
                    parseFloat(dataObj.value)/1e12
                ]];
            }
        )
    })
    deferredChartDataReady.resolve(regions);
});

deferredChartDataReady.done(function(regions) {
    $.plot($("#chart"),
        $.map(regions, function(regionObj) {
            return {
                label: regionObj.name,
                data:  regionObj.flotData
            };
        })
        ,{ legend: { position: "nw"} }
    );
});