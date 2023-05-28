
var idade = Number(prompt('Digite sua idade!'));

if (idade >= 18){
    alert('Pode prosseguir ao site.')
}
    else{
        alert('Restrito acesso para menores de idade!');
         window.location.href = "http://www.google.com.br";
    }