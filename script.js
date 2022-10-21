
//  enable clear screen funtionallity 

// function clearScreen() {
//     document.getElementById("result").value = "";
// }

function resultScreen(input) {
    document.getElementById("result").value += input;
}
 

function calculate() {
    var resExtract = document.getElementById("result").value;
    var operation = eval(resExtract);
    document.getElementById("result").value = operation;
}