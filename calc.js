var numberOne = 0;
var numberTwo = 0;
var answer;
var equationType;
var addingTo = true;
var whichNumber = 'numberOne';
var clearButton = 'AC'
var decimalAdded = false;
var decimalPlaces = 1;

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
}

function addANumber (derp){
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
	document.getElementById("whatyoudoin").innerHTML = " ";
	decimalAdded = false;
	decimalPlaces = 1;
	UpdateDisplay ();
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
	document.getElementById("whatyoudoin").innerHTML = numberOne + " " + equationType;
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
		addingTo = false;
		decimalAdded = false;
		decimalPlaces = 1;
		document.getElementById("whatyoudoin").innerHTML = " ";
		clearButton = 'AC';
		UpdateDisplay();
		
	}
	else {
		return;
	}
}
