let lista_nomes = ["AAAA", "BBBB", "CCCC", "DDDD"]

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