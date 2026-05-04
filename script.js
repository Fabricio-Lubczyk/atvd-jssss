const textarea = document.getElementById("add-texto")
const botaoadd = document.getElementById("botao-add")




let lista_nomes = ["Kawan do js", "fabzerasiuuu", "Ûésley", "acerólâ", ]

function renderizar(){
    for(let item of lista_nomes){
        let elemento  = document.createElement('li')
        const lista_pagina = document.getElementById("lista")
        elemento.innerText = item
        lista_pagina.appendChild(elemento)
    }
}

document.addEventListener("DOMContentLoaded", ()=>{
    renderizar()
})