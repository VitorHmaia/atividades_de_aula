var vetor = [2,3,4,5,6,3,2,4,6,3,2,3,4,44,5,65]
console.log(pesquisar(6))

function pesquisar(n){
    let aux = [];

    for (let i = 0; i<vetor.length; i++){
        if(vetor[i]===n)
            aux.push(i)
    }
    if(aux.length==0)
        return `O número ${n} não foi encontrado`
    return `O número ${n} foi encontrado no(s) índice(s) ${aux}` 
}