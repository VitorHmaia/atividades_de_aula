
//declaração de variáveis
var btCalc = Number(document.getElementById("btnCalcular"));
var resultado = 0
var num1 = 0

//evento do botão
btnCalcular.addEventListener("click", calcular);


//calcular media
function calcular(){
    var num1 = Number(document.getElementById("n1").value);
    resultado = num1%2

    if(resultado==0){
    document.getElementById("result").innerHTML = " É PAR"
    }else{
        document.getElementById("result").innerHTML = " ÍMPAR"
    }

}