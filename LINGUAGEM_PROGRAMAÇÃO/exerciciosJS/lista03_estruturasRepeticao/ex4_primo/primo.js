
//declaração de variáveis
var btCalc = Number(document.getElementById("btnCalcular"));
var resultado = document.getElementById("result")
var num1 = 0
var res = 0

//evento do botão
btnCalcular.addEventListener("click", calcular);


//calcular media
function calcular(){
    num1 = Number(document.getElementById("n1").value);
    res= 1
    for(var i = 1;i<= num1; i++){
        res *= i;
    }
console.log(res)

resultado.innerHTML = res
}