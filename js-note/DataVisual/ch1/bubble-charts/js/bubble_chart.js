var katrina = [
    { north: 23.2, west: 75.5, wind:  35 },
    { north: 24.0, west: 76.4, wind:  35 },
    { north: 25.2, west: 77.0, wind:  45 },
    { north: 26.0, west: 77.6, wind:  45 },
    { north: 26.2, west: 78.7, wind:  50 },
    { north: 26.1, west: 79.9, wind:  75 },
    { north: 25.5, west: 80.7, wind:  75 },
    { north: 25.1, west: 82.2, wind: 100 },
    { north: 24.8, west: 82.9, wind: 100 },
    { north: 24.4, west: 84.0, wind: 110 },
    { north: 24.4, west: 84.6, wind: 115 },
    { north: 25.1, west: 86.8, wind: 145 },
    { north: 25.7, west: 87.7, wind: 160 },
    { north: 26.5, west: 88.6, wind: 175 },
    { north: 27.9, west: 89.5, wind: 160 },
    { north: 29.7, west: 89.6, wind: 135 },
    { north: 30.8, west: 89.6, wind: 105 },
    { north: 31.9, west: 89.6, wind:  75 },
    { north: 32.9, west: 88.9, wind:  65 },
    { north: 34.7, west: 88.4, wind:  50 },
];

function get_points(source_array, filter_function) {
    var result = [];
    for (var i=0; i<source_array.length; i++) {
        if ( (typeof filter_function === "undefined")
            || (typeof filter_function !== "function")
            || filter_function(source_array[i]) ) {
               result.push([
                   source_array[i].west * -1,
                   source_array[i].north,
                   source_array[i].wind
                ]);
       }
    }
    // console.log(result);
    return result;
}

window.onload = function () {
    Flotr.draw(
        document.getElementById("chart"),
        [
          {
            data: get_points(katrina, function(obs) {
                return (obs.wind < 39);
            }),
            color: "#74add1",
            bubbles: {show:true, baseRadius: 0.3, lineWidth: 1},
          },
          {
            data: get_points(katrina, function(obs) {
                return (obs.wind >= 39) && (obs.wind < 74);
            }),
            color: "#abd9e9",
            bubbles: {show:true, baseRadius: 0.3, lineWidth: 1},
          },
          {
            data: get_points(katrina, function(obs) {
                return (obs.wind >= 74) && (obs.wind < 95);
            }),
            color: "#ffffbf",
            label: "Category 1",
            bubbles: {show:true, baseRadius: 0.3, lineWidth: 1},
          },
          {
            data: get_points(katrina, function(obs) {
                return (obs.wind >= 95) && (obs.wind < 110);
            }),
            color: "#fee090",
            label: "Category 2",
            bubbles: {show:true, baseRadius: 0.3, lineWidth: 1},
          },
          {
            data: get_points(katrina, function(obs) {
                return (obs.wind >= 110) && (obs.wind < 130);
            }),
            color: "#fdae61",
            label: "Category 3",
            bubbles: {show:true, baseRadius: 0.3, lineWidth: 1},
          },
          {
            data: get_points(katrina, function(obs) {
                return (obs.wind >= 130) && (obs.wind < 157);
            }),
            color: "#f46d43",
            label: "Category 4",
            bubbles: {show:true, baseRadius: 0.3, lineWidth: 1},
          },
          {
            data: get_points(katrina, function(obs) {
                return (obs.wind >= 157);
            }),
            color: "#d73027",
            label: "Category 5",
            bubbles: {show:true, baseRadius: 0.3, lineWidth: 1},
          },
        ],
        {
            grid: {
                backgroundImage : "./images/gulf.png",
                horizontalLines : false,
                verticalLines: false
            },
            yaxis: {showLabels: false, min: 23.607, max: 33.657},
            xaxis: {showLabels: false, min: -94.298, max: -77.586},

            // "sw": south west
            legend: {position: "sw", backgroundOpacity: 0,},
        }
     );
};