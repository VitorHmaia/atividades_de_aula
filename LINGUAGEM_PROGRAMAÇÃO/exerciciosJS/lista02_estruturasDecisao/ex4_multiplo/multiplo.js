
//declaração de variáveis
var btCalc = Number(document.getElementById("btnCalcular"));
var resultado = 0
var num1 = 0
var num2 = 0

//evento do botão
btnCalcular.addEventListener("click", calcular);


//calcular media
function calcular(){
    var num1 = Number(document.getElementById("n1").value);
    var num2 = Number(document.getElementById("n2").value);
    resultado = num1%num2

    if(resultado==0 && num1>num2){
    document.getElementById("result").innerHTML = " É MÚLTIPLO"
    }else{
        document.getElementById("result").innerHTML = " NÃO É MÚLTIPLO"
    }

}
