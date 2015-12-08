var data = [
    {data: [[0,22.4]], label: "Extreme Poverty"},
    {data: [[1,77.6]]}
];

window.onload = function () {
    Flotr.draw(document.getElementById("chart"), data, {
        title: "How Much of the World Lives on $1.25/Day?",

        pie: {
            show: true
        },

        yaxis: {
            showLabels: false
        },

        xaxis: {
            showLabels: false
        },

        grid: {
        horizontalLines: false,
        verticalLines: false
        }
    });
};