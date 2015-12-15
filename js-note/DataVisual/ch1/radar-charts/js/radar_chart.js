var players = [
    { player: "Son", points: 17.2, rebounds: 7.9, assists: 1.6,
      steals: 0.8, blocks: 0.8 },
    { player: "Grandpa",  points:  5.4, rebounds: 2.6, assists: 1.2,
      steals: 1.0, blocks: 0.5 },
    { player: "Daugther",   points: 28.0, rebounds: 8.4, assists: 6.1,
      steals: 1.9, blocks: 0.8 },
    { player: "Mom",    points: 22.3, rebounds: 5.0, assists: 4.5,
      steals: 1.7, blocks: 1.3 },
    { player: "Dad", points: 10.2, rebounds: 2.9, assists: 3.6,
      steals: 1.4, blocks: 0.2 }
];

var team = {
    points:   98.2,
    rebounds: 41.3,
    assists:  19.3,
    steals:    8.5,
    blocks:    5.3
};

var get_player = function(name) {
    for (var i=0; i<players.length; i++) {
        if (players[i].player === name) return players[i]; }
}

// Normalizing players data
// Ex:  LeBron James’s scoring as 28.0
//      we’ll show it as 29 percent (28.0/98.2)
var player_data = function(name) {
    var obj = {}, i = 0;
    obj.label = name;
    obj.data = [];
    for (var key in team) {
        obj.data.push([i, 100*get_player(name)[key]/team[key]]);
        i++;
    };
    return obj;
};

var labels = [
    [0, "Happy"],
    [1, "Sad"],
    [2, "Scared"],
    [3, "Angry"],
    [4, "Normal"]
];

window.onload = function () {
    Flotr.draw(document.getElementById("chart"),
        [
            player_data("Dad"),
            player_data("Mom"),
            player_data("Son"),
            player_data("Daugther"),
            player_data("Grandpa")
        ],
        {
            title:
                "Family Emotion Analysis",
            radar: { show: true },
            grid: { circular: true, },
            xaxis: { ticks: labels, },
            yaxis: { showLabels: false, min:0, max: 33, }
        }
    );
};