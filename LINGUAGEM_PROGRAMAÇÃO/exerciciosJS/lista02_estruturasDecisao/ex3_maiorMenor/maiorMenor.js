
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

    if(num1 > num2){
    document.getElementById("result").innerHTML = " DIG1 É MAIOR"
    } else if(num1==num2){
        document.getElementById("result").innerHTML = " IGUAIS"
    }else{
        document.getElementById("result").innerHTML = " DIG2 É MAIOR"
    }

}
