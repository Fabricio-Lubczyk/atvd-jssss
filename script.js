const textarea = document.getElementById("add-texto")
const botaoadd = document.getElementById("botao-add")
const botaoremove = document.getElementById("botao-remove")
const botaoremovelast = document.getElementById("botao-remove-last")

let lista_nomes = ["Kawan do js", "fabzerasiuuu", "Ûésley", "acerólâ" ]

function renderizar(){
    const lista_pagina = document.getElementById("lista")
    lista_pagina.innerHTML = ""

    for(let item of lista_nomes){
        let elemento  = document.createElement('li')
        elemento.innerText = item
        lista_pagina.appendChild(elemento)
    }
}

botaoadd.addEventListener('click', function() {
    const nome = textarea.value;

    if (nome.trim() !== "") {
        lista_nomes.push(nome);
        renderizar();
        
        textarea.value = '';
        textarea.focus();
    }
});

document.addEventListener("DOMContentLoaded", ()=>{
    renderizar()
})