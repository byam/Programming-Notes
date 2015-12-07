var wins = [[[0,28]],[[1,28]],[[2,21]],[[3,20]],[[4,19]]];
var teams = [
    [0, "MCI"],
    [1, "MUN"],
    [2, "ARS"],
    [3, "TOT"],
    [4, "NEW"]
];

window.onload = function () {
    Flotr.draw(document.getElementById("chart"), wins, {
        title: "Premier League Wins (2011-2012)",

        colors: ["#89AFD2", "#1D1D1D", "#DF021D", "#0E204B", "#E67840"],

        bars: {
            show: true,
            barWidth: 0.5,
            shadowSize: 0,
            fillOpacity: 1,
            lineWidth: 0
        },

        yaxis: {
            min: 0,
            tickDecimals: 0
        },

        xaxis: {
            ticks: teams
        },

        grid: {
        horizontalLines: false,
        verticalLines: false
        }
    });
};