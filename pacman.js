var x = 0; //set current x-position to 0
var dir = 0; //set direction to right
var face = 0; //set face image to 0

let width = window.innerWidth; //set play zone to browser window width

//Declare a two-dimensional array with two faces for each direction
const looks = [
    ['images/pacman1.png', 'images/pacman2.png'],
    ['images/pacman3.png', 'images/pacma n4.png']
];

function run() {
    let img = document.getElementById('pacman'); //get browser window 'pacman' item
    let faceWidth = img.width; //set face size to 'pacman' width
    face = (face + 1) % 2; //change face
    dir = reachEnd(dir, faceWidth, x, width); //check for direction-change
    img.src = looks[dir][face]; //set face to right direction and facial expression
    if (dir) x -= 20; else x += 20; //add or remove pixels depending on direction
    img.style.left = x + 'px'; //update 'pacman' position
}

setInterval(run, 300); //execute 'run' function every 100ms

function reachEnd(dir, faceWidth, x, width) {
    //Flip direction if reach end of play zone
    if (dir == 0 && x + faceWidth > width) dir = 1; if (dir == 1 && x < 0) dir = 0;
    return dir; //return direction
}