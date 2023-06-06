
//function mdc(){
/*    n1 = parseInt(document.getElementById("n1").value);
    n2 = parseInt(document.getElementById("n2").value);


    if(n1==n2){
        let result = document.getElementById("result");
        result.innerText = n1;
    } else{
        let ctrl;
            n1>n2 ? ctrl=n2 : ctrl=n1

        while (n1%ctrl != 0 || n2%ctrl != 0) 
            ctrl--

            result.innerText = ctrl;
    }
}
*/
var btn = document.getElementById("btnCalcular");
var bt = document.getElementById("btnFatorial");
var res = document.getElementById('result')
//btn.addEventListener("click", executar);
bt.addEventListener("click", fatorial);

/*function executar(){
    let n1 = parseInt(document.getElementById('n1').value)
    let n2 = parseInt(document.getElementById('n2').value)
    
    if(n1>n2){
        result.innerText=mdc(n1,n2)
    }else{
        result.innerText=mdc(n2,n1)
    }
}

function mdc(maior, menor){
    if(menor==0)
        return maior
    
    return mdc(menor,maior%menor)
}
*/

function fatorial(){
    let n1 = parseInt(document.getElementById('n1').value)
    let fat = 1
    let aux = 1
    if(n1<0){
        result.innerText="Indefinido"
    }else{
        result.innerText=calc(n1,res,fat,aux)
    }
}

function calc(numero,res,fat,aux){ 
    console.log(aux)
    if(numero == 1 || numero == 0)
        return res = 1
    else{
        res = fat * aux
        if(aux == numero)
        return res
    }

    return calc(numero,res,res,aux+1)
}

