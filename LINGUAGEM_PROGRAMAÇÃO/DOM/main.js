//VAR: Escopo global
//variável pode ser acessada em qq parte do code
/*
    getElementById - Pega elemento por ID.

    getElementByClass - Pega elemento por Classe.

    querySelector - Pega um objeto por classe, id.

    querySelectorAll - Pega todos os objetos daquela id/classe
*/

    //coleta o endereço


//Eventos:
/*
    Quando algum evento aconceter, faça uma tarefa
    addEventListener("Evento", "função")
 */

    var btSubmit = document.getElementById("enviar")
    var btlimpa = document.getElementById("limpar")

    //chamando evento p submit
    btSubmit.addEventListener("click", coletaDados)
    btlimpa.addEventListener("click", limparDados)


    //Comando Nome. Parâmetros

    function coletaDados(){
        var endereco = document.getElementById("endereço").value
        //coleta o nascimento
        var nascimento = document.getElementById("nasc").value
        //coleta o nome
        var nome = document.querySelector("#nome").value

        let nome_coletado = nome
        let end_coletado = endereco
        let nasc_coletado = nascimento
        console.log(nome_coletado)
        console.log(end_coletado)
        console.log(nasc_coletado)
    }

    function limparDados(){

        document.getElementById("nome").value = ""
        document.getElementById("endereço").value = ""
        document.getElementById("nasc").value = 0

        return "Limpo"
    }
    