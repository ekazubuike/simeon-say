//select all four divs
var quads = document.querySelectorAll(".quad");
//store sounds in array
var clay = new Howl({
  src: ['sounds/clay.mp3']
});
var moon = new Howl({
  src: ['sounds/moon.mp3']
});
var ufo = new Howl({
  src: ['sounds/ufo.mp3']
});
var strike = new Howl({
  src: ['sounds/strike.mp3']
});
var squiggle = new Howl({
  src: ['sounds/squiggle.mp3']
});
var sounds = [clay, moon, ufo, strike];

//iterate over divs, assigning unique sound to each one on click
for (let i=0; i<quads.length;i++) {
  quads[i].addEventListener("click", function(){
    sounds[i].play();
  });
}

document.querySelector("#newGame").addEventListener("click",function(){
  squiggle.play();
});

