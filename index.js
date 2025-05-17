let playerScore1 =parseInt(document.getElementById("player-score1").textContent);

let playerScore2 =parseInt(document.getElementById("player-score2").textContent);

function addScoresOf1(points){
    playerScore1 += points;
    document.getElementById("player-score1").textContent = playerScore1;
}

function addScoresOf2(points){
    playerScore2 += points;
    document.getElementById("player-score2").textContent = playerScore2;
}