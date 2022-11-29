// Function to make a button run away when the mouse hovers over it
function moveFree() {
    var mv = document.getElementById('free')
    move(mv);
    };
	
function moveBasic () {
	var mv = document.getElementById('basic')
    move(mv);
    };
	
function moveDeluxe() {
	var mv = document.getElementById('deluxe')
	move(mv);
	};

function move(butt) {
	butt.style.position= "absolute";
	let w = window.innerWidth;
	let h = window.innerHeight;
	var randx = Math.floor(Math.random() * w/1.5 + 50);
    var randy = Math.floor(Math.random() * h/1.5 + 20);
    butt.style.left=randx + "px";
    butt.style.top=randy + "px";
	butt.style.padding='10px';
	butt.style.width = '100px';
	butt.style.height = '40px';
}

function nice() {
	alert("Nice");
}

// Alerts the user that a feature is not available at the moment
function notActive() {
		alert("We apologize for the inconvience but this feature is currently unavailable at the moment. Please try again later. -Stream Team");
};