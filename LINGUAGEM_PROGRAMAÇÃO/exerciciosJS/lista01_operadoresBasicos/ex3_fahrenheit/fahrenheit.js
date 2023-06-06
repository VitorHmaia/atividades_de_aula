
//declaração de variáveis
var btCalc = Number(document.getElementById("btnCalcular"));
var resultado = 0
var num1 = 0

//evento do botão
btnCalcular.addEventListener("click", calcular);

//função calcular
function calcular(){
    //media
    var num1 = Number(document.getElementById("n1").value);
    resultado = (num1 * (9/5)) +32
    document.getElementById("result").innerHTML = resultado.toFixed(1) + "°F"
}

