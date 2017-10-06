//select all four divs
const quads = document.querySelectorAll(".quad");

const modeBtns = document.querySelectorAll(".mode");

//store sounds in array
const clay = new Howl({
  src: ['sounds/clay.mp3']
});
const moon = new Howl({
  src: ['sounds/moon.mp3']
});
const ufo = new Howl({
  src: ['sounds/ufo.mp3']
});
const strike = new Howl({
  src: ['sounds/strike.mp3']
});
const squiggle = new Howl({
  src: ['sounds/squiggle.mp3']
});
const sounds = [clay, moon, ufo, strike];

//iterate over divs, assigning unique sound to each one on click
for (let i=0; i<quads.length;i++) {
  quads[i].addEventListener("click", function(){
    sounds[i].play();
  });
}

document.querySelector("#newGame").addEventListener("click",function(){
  squiggle.play();
});

function setupMode(){
	for (let i = 0; i < modeBtns.length; i++) {
		modeBtns[i].addEventListener("click", function(){
			modeBtns[0].classList.remove("selected");
			modeBtns[1].classList.remove("selected");
			this.classList.add("selected");
			if(this.textContent === "hard mode") {
				quads[0].classList.add("rotate1");
				quads[1].classList.add("rotate2");
				quads[2].classList.add("rotate3");
				quads[3].classList.add("rotate4");
			} else {
				quads[0].classList.remove("rotate1");
				quads[1].classList.remove("rotate2");
				quads[2].classList.remove("rotate3");
				quads[3].classList.remove("rotate4");
			}
		});
	}

}

setupMode();

