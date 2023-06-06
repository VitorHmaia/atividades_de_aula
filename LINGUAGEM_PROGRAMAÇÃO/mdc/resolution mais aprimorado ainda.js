
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
var result = document.getElementById('result')
btn.addEventListener("click", executar);

function executar(){
    let n1 = parseInt(document.getElementById('n1').value)
    let n2 = parseInt(document.getElementById('n2').value)
    
    if(n1>n2){
        result.innerText=mdc(n1,n2)
    }else{
        result.innerText=mdc(n2,n1)
    }
}

function mdc(maior, menor){
    if(maior%menor==0)
        return menor
    for(let ctrl=parseInt(menor/2);ctrl>=1;ctrl--){
        if(maior%ctrl==0 && menor%ctrl==0){
            return ctrl
        }
    }
}
