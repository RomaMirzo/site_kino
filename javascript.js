//function for new films
let images = [
    "assets/img/matrix.png",
    "assets/img/max.png",
    "assets/img/inter.png",
    "assets/img/cloud.png"
];
var num = 0;

function next_films() {
    let new_movies_img = document.getElementById('new_movies_img');
    num++
    if(num >= images.length) {
        num = 0;
    }
    new_movies_img.src = images[num];
}

function prev_films() {
    let new_movies_img = document.getElementById('new_movies_img');
    num--
    if(num < 0) {
        num = images.length-1;
    }
    new_movies_img.src = images[num];
}

//function for new series
let images_series = [
    "assets/img/dead.png",
    "assets/img/silicon.png",
    "assets/img/breakingbad.png",
    "assets/img/xfiles.png"
];

function next_series() {
    let new_series_img = document.getElementById('new_series_img');
    num++
    if(num >= images_series.length) {
        num = 0;
    }
    new_series_img.src = images_series[num];
}

function prev_series() {
    let new_series_img = document.getElementById('new_series_img');
    num--
    if(num < 0) {
        num = images_series.length-1;
    }
    new_series_img.src = images_series[num];
}

// search
function search() {
    let search_form = document.getElementById("search_form");
    let login = document.getElementById("login");
    alert("Don't look for anything yet");
    let url = 'Hello, World!';
    document.write(url);
}