
//declaração de variáveis
var btCalc = Number(document.getElementById("btnCalcular"));
var resultado = document.getElementById("result")
var num1 = 0

//evento do botão
btnCalcular.addEventListener("click", calcular);


//calcular media
function calcular(){
    num1 = Number(document.getElementById("n1").value);
    var res = []
    if (num1>=0){
    while(num1>=0) {
        res.push(num1)
        console.log(num1)
        num1--
        }
        resultado.innerText = res
    } else if(num1<0){
        while(num1<=0) {
        res.push(num1)
        num1++
        console.log(res)
        }
        resultado.innerText = res
    }
        
}