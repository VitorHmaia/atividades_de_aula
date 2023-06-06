
//declaração de variáveis
var btCalc = Number(document.getElementById("btnCalcular"));
var resultado = 0
var num1 = 0
var num2 = 0

//evento do botão
btnCalcular.addEventListener("click", calcular);

//função calcular
function calcular(){
    //media
    var num1 = Number(document.getElementById("n1").value);
    var num2 = Number(document.getElementById("n2").value);
    resultado = (num1 + num2)/2
    document.getElementById("result").innerHTML = resultado
}


