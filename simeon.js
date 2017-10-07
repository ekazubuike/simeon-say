//DOM selectors
const	quads 		= document.querySelectorAll(".quad"),
		modeBtns 	= document.querySelectorAll(".mode"),
		container	= document.querySelector(".container"),
		newGame		= document.querySelector("#newGame");

//variables
let 	counter = 0,
		event;

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


function setupQuads(){
	//iterate over divs, assigning unique sound to each one on click
	for (let i=0; i<quads.length;i++) {
	  quads[i].addEventListener("mousedown", function(){
	    sounds[i].play();
	  });
	}
	//opacity effects
	quads.forEach(function(quad){
		quad.addEventListener("mouseover", function(){
			this.style.opacity = 1.0;
		});
		quad.addEventListener("mouseout", function(){
			this.style.opacity = 0.75;
		});
		quad.addEventListener("mousedown", function(){
			this.style.opacity = 0.5;
		});
		quad.addEventListener("mouseup", function(){
			this.style.opacity = 1.0;
		});
	});
}

setupQuads();

// function triggerEvent(el, type){
//    if ('createEvent' in document) {
//         // modern browsers, IE9+
//         var e = document.createEvent('HTMLEvents');
//         e.initEvent(type, false, true);
//         el.dispatchEvent(e);
//     } else {
//         // IE 8
//         var e = document.createEventObject();
//         e.eventType = type;
//         el.fireEvent('on'+e.eventType, e);
//     }
// }

newGame.addEventListener("click",function(){
  squiggle.play();
});

//counter event listener
container.addEventListener("click", function(){
	counter++;
	console.log(counter);
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

