/*let vetor = [3, 4, 1, 5, 9, 8, 10, 2  ] 
let aux

console.log(vetor[i])
for(let i = 0; i<(vetor.length-1)/2; i++){
    aux=vetor[i]
    vetor[i]=vetor[vetor.length-1-i]
    vetor[vetor.length-1-i] = aux
} 
console.log(vetor) 
console.log(aux)

//outro metodo pra for
var contFim = num.length-1

for(let aux = 0; aux<(vetor.length-1)/2; i++){
    aux = cont
} */

//Ordenar vetor em crescente
/*var num = [3,6,1,7,9,4,2]
 
for (var i = 0; i < num.length; i++) {
      for (var j = 0; j < (num.length - i - 1); j++) {
               if(num[j] > num[j+1]) {
                       var tmp = num[j]; 
            num[j] = num[j+1]; 
            num[j+1] = tmp; 
        }
    }        
}

console.log(num)

*/

var arr = [2,7,0,2,7,5,6,8,10,23,54,71,49,343,234,7,7,7,7,7,7,7]
var aux = "Encontrado"
var n = []
var cont = 0
var n2 = true
var n1 = true
var a = 6
var b = 3

for (var k = 0; k < arr.length; k++) {
    //console.log(arr[k])
    if (arr[k]===a){
        //console.log("Número encontrado")
        n.push(k)
        n1 = false
    } else if(arr[k]===b){
        cont++
        aux = "encontrado " + cont + " vezes"
        n2 = false
    }
}

//console.log("O índice do número 2 é " + n)
//console.log("O número 7 foi " + aux)

if (n1==false)
    console.log("O índice do número " + a + " é " + n)
    else if(n1==true) {
        console.log("O índice do número " + a + " não foi encontrado")
    }

if (n2==false)
    console.log("O número  " + b + " foi " + aux)
    else if(n2==true){
        console.log("O número " + b + " não foi encontrado")
    }




