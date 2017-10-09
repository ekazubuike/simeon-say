//DOM selectors
const	quads 		= document.querySelectorAll(".quad"),
		modeBtns 	= document.querySelectorAll(".mode"),
		container	= document.querySelector(".container"),
		newGame		= document.querySelector("#newGame"),
		replayBtn	= document.querySelector("#replayBtn"),
		message		= document.querySelector("#message");

//variables
let 	counter			= 0,
		playerSequence	= [],
		simeonSequence	= [];

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

init();
function init(){
	setupMode();
	setupQuads();
	simeonSequence = [];
	generateNext();
	playSequence(0);
	playerSequence = [];
}

function setupQuads(){
	for (let i=0; i<quads.length;i++) {
		//play sound on mousedown
		quads[i].addEventListener("mousedown", function(){
			sounds[i].play();
		});
		assignValues();
	}
	//opacity effects
	quads.forEach(function(quad){
		quad.addEventListener("mousedown", function(){
			this.classList.remove("normal");
			this.classList.add("dull");
		});
		quad.addEventListener("mouseup", function(){
			this.classList.remove("dull");
			this.classList.add("normal");
		});
	});
}

function assignValues(){
	playerSequence = [];
	for (let i = 0; i < quads.length; i++){
		quads[i].addEventListener("click", function(){
				playerSequence.push(i);
				checkSequence(playerSequence, simeonSequence);
			});
	}
}

//event listeners
//newgame
newGame.addEventListener("click",function(){
	message.innerHTML = "";
	simeonSequence = [];
	generateNext();
	playSequence(0);
	playerSequence = [];
});

//replay button
replayBtn.addEventListener("click", function(){playSequence(0)});

//generate random sequence
function generateNext(){
	simeonSequence.push(Math.floor(Math.random()*4));
}

//play machine sequence
function playSequence(index){
	if(simeonSequence.length > index) {
		setTimeout(function(){
			quads[simeonSequence[index]].classList.remove("normal");
			quads[simeonSequence[index]].classList.add("highlight");
			sounds[simeonSequence[index]].play();
			setTimeout(function(){
				quads[simeonSequence[index]].classList.remove("highlight");
				playSequence(++index);
			}, 500);
		}, 500);
	}
}	

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

function checkSequence(arr1, arr2){
	for(let i = 0; i < arr1.length; i++){
			if (arr1[i] !== arr2[i]) {
				return message.textContent = "WRONG PATTERN!";
			}
		} 
	message.textContent = "CORRECT!";
	generateNext();
	playSequence(0);
}


