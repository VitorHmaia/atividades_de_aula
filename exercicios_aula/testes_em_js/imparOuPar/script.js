//Declara var número
var n = prompt('Digite um número');
var resultado = n % 2 ===0? 'par':'impar'; //Compara o resto do resulto e verifica se é estritamente igual - função ternária ( ?: ), logo, compara uma condição true or false, e retorna uma expressão caso seja true e outra caso seja false
    alert(`número ${n} é ${resultado}`); // mostra var e se ele é par ou ímpar, caso a entradar var for string, sempre dará ímpar
   
   
    /*if (n % 2 === 0 && n % 2 !==0){
        alert(`Você não digitou um número!`)
    } */