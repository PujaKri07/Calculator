let CurrentDisplay = '';
document.querySelector('#Input-Display').value = CurrentDisplay;
function ClearButton(){
    CurrentDisplay = '';
    document.querySelector('#Input-Display').value = CurrentDisplay;
}
function pressButton(str){
    CurrentDisplay += str;
    document.querySelector('#Input-Display').value = CurrentDisplay;
}
function EvaluateButton(){
    CurrentDisplay = eval(CurrentDisplay);
    document.querySelector('#Input-Display').value = CurrentDisplay;
}

