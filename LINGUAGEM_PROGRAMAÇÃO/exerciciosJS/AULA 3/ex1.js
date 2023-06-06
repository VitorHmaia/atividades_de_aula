console.log("Hi!")
var n = 10
var n2 = 1
var media = (n+n2)/2

/*if(media>=7){
    console.log('O aluno está aprovado, a média é', media)
    } else if(media>=5){
        console.log('Recuperação, ', media)
            }else{
                console.log('Reprovado, ', media)
                }
*/

switch(n){
    case 1:
        console.log("O valor é 1")
        break
    
    case 2:
        console.log("O valor é 2")
        break

    default:
        console.log("NaN")
        break
}

var date = new Date()
var hora = data.getHours()
var dia = data.getDay()

/*
0 - doming
6 - sábado
*/