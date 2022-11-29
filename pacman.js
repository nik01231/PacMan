var x = 0; 
var dir = 0; 
var face = 0; 

let width = window.innerWidth; 

const looks = [
    ['images/pacman1.png', 'images/pacman2.png'],
    ['images/pacman3.png', 'images/pacma n4.png']
];

function run() {
    let img = document.getElementById('pacman'); 
    let faceWidth = img.width; 
    face = (face + 1) % 2; 
    dir = reachEnd(dir, faceWidth, x, width); /
    img.src = looks[dir][face]; 
    if (dir) x -= 20; else x += 20; 
    img.style.left = x + 'px'; 

setInterval(run, 300); 

function reachEnd(dir, faceWidth, x, width) {
    
    if (dir == 0 && x + faceWidth > width) dir = 1; if (dir == 1 && x < 0) dir = 0;
    return dir; 