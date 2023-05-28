
var data = new Date()
var hora = data.getHours()
var dia = data.getDay()
var min = data.getMinutes()


/*let data = new Date();
function formatarData(data){'' //formatar data em dd/mm/aaaa
    let newDate = new Date(data);
    return `${newDate.getDate()/newDate.getMonth()+1/newDate.getFullYear()}`;
}
console.log(formatarData(data));
*/
//var dataManual = (new Date()).toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo'})

//Desafio 1 - Bom dia, Tarde e Noite
    if(hora<12){
        console.log(`Bom dia! São ${hora} horas e ${min} minutos`)
        }
        else if(hora>18 && hora<24){
            console.log(`Boa Noite! São ${hora} horas e ${min} minutos`)
        }
            else{
                console.log(`Boa Tarde! São ${hora} horas e ${min} minutos`)
                }

//Desafio 2
console.log(dia)

    switch(dia){
        case 0:
            console.log(`Hoje é Domingo`);
            break;

        case 1:
            console.log(`Hoje é Segunda-feira`);
            break;

        case 2:
            console.log(`Hoje é Terça-feira`);
            break;

        case 3:
            console.log(`Hoje é Quarta-feira`);
            break; 

        case 4:
            console.log(`Hoje é Quinta-feira`);
            break; 

        case 5:
            console.log(`Hoje é Sexta-feira`);
            break; 

        default:
            console.log(`Hoje é Sábado`);
    }




