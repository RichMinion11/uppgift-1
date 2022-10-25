

const elemBtnCalc = document.getElementById("btn-calc");
const elemCalcScreen = document.getElementById("calc-screen");


function btnCalc() {                    // denna funktion tar hand om beräkningen 
    /* your code here */
    sum = result;

    elemCalcScreen.innerHTML = sum;     // show the result on screen
}

function addDigit(thisSign) {           // lägg till siffra
    elemCalcScreen.innerHTML += thisSign;
}

function btnBackSpace() {               // ta bort
    let calcScreen = elemCalcScreen.innerHTML;
    calcScreen = calcScreen.slice(0, -1);
    elemCalcScreen.innerHTML = calcScreen;
    
}

function btnClearAll() {
    let calcScreen = elemCalcScreen.innerHTML;
    calcScreen = ' '
    elemCalcScreen.innerHTML = calcScreen;

}

function btnConvertToDollar() {
    let calcScreen = elemCalcScreen.innerHTML;
    calcScreen = (calcScreen * 0.089)
    elemCalcScreen.innerHTML = calcScreen;

}

function btnConvertToEuro() {
    let calcScreen = elemCalcScreen.innerHTML;
    calcScreen = (calcScreen * 0.091)
    elemCalcScreen.innerHTML = calcScreen;

}

function btnConvertToNewton() {
    let calcScreen = elemCalcScreen.innerHTML;
    calcScreen = (calcScreen * 9.8)
    elemCalcScreen.innerHTML = calcScreen;

}