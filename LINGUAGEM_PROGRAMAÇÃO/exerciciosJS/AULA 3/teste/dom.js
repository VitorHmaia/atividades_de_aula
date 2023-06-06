//var p = document.getElementsByTagName('p')[1]
//alert(p.innerHTML)

var p = document.querySelector('pp1')
document.write(p.innerHTML)


box.addEventListener("mouseenter", enter) //chama a function através do monitoramento da tag
box.addEventListener("mouseout", sair)

function enter(){
    var box = document.getElementById("button")
    box.style.backgroundColor="yellow"
}

function sair(){
    var box = document.getElementById("button")
    box.style.backgroundColor="blue"
}