var vetor = [2,3,4,5,6,3,2,4,6,3,2,3,4,44,5,65]
console.log(pesquisar(66))

function pesquisar(n){
    for (let i = 0; i<vetor.length; i++){
        if(vetor[i]===n)
            return i;
    }
    return `O número ${n} não foi encontrado`
}