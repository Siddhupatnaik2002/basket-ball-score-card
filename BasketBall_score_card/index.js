
let homePoint = 0;
let guestPoint = 0;

let homeScore = document.getElementById("home-el");

let guestScore = document.getElementById("guest-el");

function add_1(team){
    if (team == "home"){
        homePoint+=1;
        homeScore.textContent = homePoint;
    }
    else{
        guestPoint+=1;
        guestScore.textContent = guestPoint;
    }

    highScore();
}

function add_2(team){
    if (team == "home"){
        homePoint+=2;
        homeScore.textContent = homePoint;
    }
    else{
        guestPoint+=2;
        guestScore.textContent = guestPoint;
    }
    highScore();
}

function add_3(team){
    if (team == "home"){
        homePoint+=3;
        homeScore.textContent = homePoint;
    }
    else{
        guestPoint+=3;
        guestScore.textContent = guestPoint;
    }
    highScore();
}

function newGame(){
    homePoint = 0;
    homeScore.textContent=0;

    guestPoint = 0;
    guestScore.textContent = 0;

    homeScore.style.textShadow = " 0 0 0 ";
    homeScore.style.backgroundColor = "#080001"

    guestScore.style.textShadow = " 0 0 0 ";
    guestScore.style.backgroundColor = "#080001";
}

function highScore(){

    if (homePoint>guestPoint){
        guestScore.style.textShadow = " 0 0 0 ";
        guestScore.style.backgroundColor = "#080001";
        homeScore.style.textShadow = " 0 0 3px black";
        homeScore.style.backgroundColor = "#E3B505"
    }

    else if (homePoint<guestPoint){
        homeScore.style.textShadow = " 0 0 0 ";
        homeScore.style.backgroundColor = "#080001"
        guestScore.style.textShadow = " 0 0 3px black";
        guestScore.style.backgroundColor = "#E3B505";
    }

    else {
        guestScore.style.textShadow = " 0 0 0 ";
        guestScore.style.backgroundColor = "#080001";

        homeScore.style.textShadow = " 0 0 0 ";
        homeScore.style.backgroundColor = "#080001";
    }
}
