
//declaração de variáveis
var btCalc = Number(document.getElementById("btnCalcular"));
var resultado = document.getElementById("result")
var num1 = 0
var num2 = 0


//evento do botão
btnCalcular.addEventListener("click", calcular);


//calcular media
function calcular(){
    var res = []
    num1 = Number(document.getElementById("n1").value);
    num2 = Number(document.getElementById("n2").value);

    if(num1>num2){
        while(num1>num2) {
            res.push(num1)
            console.log(num1)
            num1--
        } 
    } else{
        while(num1<num2) {
            res.push(num1)
            console.log(num1)
            num1++
            } 
    }

    resultado.innerText = res
}