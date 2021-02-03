'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* ****************************************** DONNEES ****************************************** */
/*************************************************************************************************/
let slider = [
    "./images/1.jpg",
    "./images/2.jpg",
	"./images/3.jpg",
	"./images/4.jpg",
	"./images/5.jpg",
    "./images/6.jpg"
];

let picTitle = [
	"Street Art",
	"Fast Road",
	"Colorful Building",
	"Light Building",
	"Night City",
    "Paris"
];

let i=1;
let bool = true;
let pic = document.querySelector("figure").children[0];
let picName = document.querySelector("figure").children[2]; 
let toggle = setInterval(slideAuto,2000);
let previousI = 0;

/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/

function slideAuto(){
    pic.setAttribute("src", slider[i]);
	console.log(pic);     
	console.log(i);
	picName.innerHTML = picTitle[i];
    i++;
    if(i>=6){
    	i=0;
    }  
};

function toggleSlide() {
	let buttonPause = document.getElementById("slider-toggle");
	buttonPause.addEventListener("click", function(){
		if(bool == true){
	 		window.clearInterval(toggle);
	 		console.log("pause");
	 		bool = false;
	    }
	    else if(bool == false){
	    	toggle = setInterval(slideAuto,2000);
	    	console.log("start");
	    	bool = true;
	    }
	});
};


function onClickNext(){
	i++
	if(i>=6){						
		i = 0;
	}
	let NextPic = slider[i];
	pic.setAttribute("src", slider[i]);
	picName.innerHTML= picTitle[i];
};

function onClickPrevious(){
	i--;	
	if(i < 0){
		i = 5;
	}
	let PrevPic = slider[i];
	pic.setAttribute("src", slider[i]);
	picName.innerHTML = picTitle[i];
};

function onClickRandom() {
	do {
		i = parseInt(slider.length * Math.random());
	} while (i == previousI);
		console.log("previoui", previousI);
		pic.setAttribute("src", slider[i]);
		previousI = i;
		console.log("i= ", i);
};

/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/

toggleSlide();

let buttonNext = document.getElementById("slider-next");
buttonNext.addEventListener("click", onClickNext);

let buttonPrevious = document.getElementById("slider-previous");
buttonPrevious.addEventListener("click", onClickPrevious);

let buttonRandom = document.getElementById("slider-random");
buttonRandom.addEventListener("click", onClickRandom);
