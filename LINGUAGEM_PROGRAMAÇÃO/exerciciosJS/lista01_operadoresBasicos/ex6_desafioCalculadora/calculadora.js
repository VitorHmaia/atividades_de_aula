
//declaração de variáveis
var btCalc = Number(document.getElementById("btnCalcular"));
var resultado = 0
var num1 = 0
var num2 = 0

//evento do botão
btnSomar.addEventListener("click", somar);
btnSub.addEventListener("click", subtrair);
btnMult.addEventListener("click", multiplicar);
btnDiv.addEventListener("click", dividir);

//somar
function somar(){
    //media
    var num1 = Number(document.getElementById("n1").value);
    var num2 = Number(document.getElementById("n2").value);
    resultado = num1+num2
    document.getElementById("result").innerHTML = resultado.toFixed(2)
}

//subtrair
function subtrair(){
    //media
    var num1 = Number(document.getElementById("n1").value);
    var num2 = Number(document.getElementById("n2").value);
    resultado = num1-num2
    document.getElementById("result").innerHTML = resultado.toFixed(2)
}

//mult
function multiplicar(){
    //media
    var num1 = Number(document.getElementById("n1").value);
    var num2 = Number(document.getElementById("n2").value);
    resultado = num1*num2
    document.getElementById("result").innerHTML = resultado.toFixed(2)
}

//div
function dividir(){
    //media
    var num1 = Number(document.getElementById("n1").value);
    var num2 = Number(document.getElementById("n2").value);
    resultado = num1/num2
    document.getElementById("result").innerHTML = resultado.toFixed(2)
}




