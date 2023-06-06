//condicional FOR

/*for(contador = 0; contador<=10; contador++){
        console.log(contador)
}
*/
/* Array - Vetor (MATRIZ 1D) - Linha
                 (MATRIZ 2D) - Linha e Coluna
Coluna
                 (MATRIZ 3D) - Linha, Coluna, Camada

    Armazena uma sequência de valores
    No mesmo array armazenar diferentes valores

    SINTAXE: []
 */

/*Acessando Array
    Forma 1: Acessar pela posição do ITEM;
    [0] -> Obtem o primeiro item da Array

    Forma 2: Acessar pelo valor do ITEM
    ["1"] -> Busca e retonra o valor com o nome.
*/

//Vetor série de dados
const nomes = ["Gabriel", "Rafael", 3, "Vítor", 4, "Renan", 1, "Samuel", "Lucas"];

const numeros = [];

//iterar = (passar por) cada nome e mostrá-lo

//1° Atributo - lenght (comprimento) 
console.log(nomes.length)

//2° Adicionando itens.push()
//nomes.push("valor manual")

/*3° Removendo itens - .pop() último
                     - .shift() primeiro
                     - .splice(posição, itens, "valor")
*/
//nomes.pop("valor manual")

for(aluno = 0; aluno<nomes.length; aluno++){
    //iterou e mostrou o nome de cada aluno.

    if(typeof nomes[aluno] == 'string'){
        console.log(nomes[aluno])
    } 
    else{
        numeros.push(nomes[aluno])
        nomes.splice(aluno,1)
    }
}

console.log(numeros)
console.log(nomes)