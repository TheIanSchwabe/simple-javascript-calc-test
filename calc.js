// JavaScript-based calculator with basic functions

var numberOne = 0;
var numberTwo = 0;
var answer;
var equationType;
var addingTo = true;
var whichNumber = 'numberOne';
var clearButton = 'AC';
var decimalAdded = false;
var decimalPlaces = 1;
var previousEquations = ["/ ","/ ","/ ","/ ","/ ","/ "];

function UpdateDisplay () {
	if (addingTo === false){
		document.getElementById("livepreview").innerHTML = answer;
	}
	else if (whichNumber === 'numberOne'){
		document.getElementById("livepreview").innerHTML = numberOne;
	}
	else if (whichNumber === 'numberTwo'){
		document.getElementById("livepreview").innerHTML = numberTwo;
	}
	
	document.getElementById("clear").innerHTML = clearButton;
    document.getElementById("eq1").innerHTML = previousEquations[0];
    document.getElementById("eq2").innerHTML = previousEquations[1];
    document.getElementById("eq3").innerHTML = previousEquations[2];
    document.getElementById("eq4").innerHTML = previousEquations[3];
    document.getElementById("eq5").innerHTML = previousEquations[4];
    document.getElementById("eq6").innerHTML = previousEquations[5];
}

function addANumber (derp){
    if (addingTo == false){
        return;
    }
	if (whichNumber === 'numberOne'){
		if (decimalAdded == true){
			decimalPlaces *= 10;
			if (numberOne < 0){
				numberOne -= derp / decimalPlaces;
			}
			else {
				numberOne += derp / decimalPlaces;
			}
			UpdateDisplay();
			return;
		}
        if (clearButton === 'AC'){
            clearButton = 'C';
        }
		numberOne *= 10;
		if (numberOne < 0){
			numberOne -= derp;
		}
		else {
			numberOne += derp;
		}
	}
	else if (whichNumber === 'numberTwo'){
		if (decimalAdded == true){
			decimalPlaces *= 10;
			if (numberTwo < 0){
				numberTwo -= derp / decimalPlaces;
			}
			else {
				numberTwo += derp / decimalPlaces;
			}
			UpdateDisplay();
			return;
		}
        if (clearButton === 'AC'){
            clearButton = 'C';
        }
		numberTwo *= 10;
		if (numberTwo < 0){
			numberTwo -= derp;
		}
		else {
			numberTwo += derp;
		}
	}
	UpdateDisplay ();
}

function ChangeSign () {
	if (whichNumber === 'numberOne'){
		numberOne *= -1;
	}
	else if (whichNumber === 'numberTwo'){
		numberTwo *= -1;
	}
	UpdateDisplay();
}

function AddDecimal () {
	decimalAdded = true;
	UpdateDisplay();
}

function Clear () {
	if (clearButton === 'AC'){
		AllClear ();
		return;
	}
	else {
		if (whichNumber === 'numberOne'){
			numberOne = 0;
		}
		else if (whichNumber === 'numberTwo'){
			numberTwo = 0;
		}
		decimalAdded = false;
		clearButton = 'AC';
	}
	UpdateDisplay ();
}

function AllClear () {
	numberTwo = 0;
	numberOne = 0;
	answer = 0;
	addingTo = true;
	whichNumber = 'numberOne';
	document.getElementById("whatyoudoin").innerHTML = "*";
	decimalAdded = false;
	decimalPlaces = 1;
	UpdateDisplay ();
}

function Percentage () {
    if (whichNumber === 'numberOne'){
        numberOne /= 100;
    }
    else if (whichNumber === 'numberTwo'){
        numberTwo /= 100;
    }
    UpdateDisplay();
}

function Part2 (equation){
	if (addingTo == false){
		numberOne = answer;
		numberTwo = 0;
		addingTo = true;
	}
	decimalAdded = false;
	decimalPlaces = 1;
	whichNumber = 'numberTwo';
	clearButton = 'C';
	equationType = equation;
	document.getElementById("whatyoudoin").innerHTML = numberOne + " " + equationType + " *";
	UpdateDisplay ();
}

function Solve () {
	if (whichNumber == "numberTwo"){
		if (equationType === '+'){
			answer = numberOne + numberTwo;
		}
		else if (equationType === '-'){
			answer = numberOne - numberTwo;
		}
		else if (equationType === '*'){
			answer = numberOne * numberTwo;
		}
		else if (equationType === '÷'){
			answer = numberOne / numberTwo;
		}
        LogEquation();
		addingTo = false;
		decimalAdded = false;
		decimalPlaces = 1;
		document.getElementById("whatyoudoin").innerHTML = "*";
		clearButton = 'AC';
		UpdateDisplay();
		
	}
	else {
		return;
	}
}

function LogEquation () {
    'use strict';
    previousEquations[5] = previousEquations[4];
    previousEquations[4] = previousEquations[3];
    previousEquations[3] = previousEquations[2];
    previousEquations[2] = previousEquations[1];
    previousEquations[1] = previousEquations[0];
    previousEquations[0] = '/ ' + numberOne + " " + equationType + " " + numberTwo + " = " + answer;
}