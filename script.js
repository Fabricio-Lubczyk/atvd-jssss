const textarea = document.getElementById("add-texto")
const botaoadd = document.getElementById("botao-add")
const botaoremove = document.getElementById("botao-remove")
const botaoremovelast = document.getElementById("botao-remove-last")
const botaoMaiusculo = document.getElementById("maiusculo")

let lista_nomes = ["Kawan do js", "fabzerasiuuu", "Ûésley", "acerólâ"]

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
        lista_nomes.unshift(nome);
        renderizar();
        
        textarea.value = '';
        textarea.focus();
    }
});

botaoremove.addEventListener("click", function(){
    lista_nomes.shift();
    renderizar();
})

botaoremovelast.addEventListener("click", function(){
    lista_nomes.pop();
    renderizar();
})

botaoMaiusculo.addEventListener("click", function(){
    let resultado = "";
    lista_nomes.forEach(function(nome){
        resultado += nome.toUpperCase() + " ";
    })
    document.getElementById("result").textContent = resultado;
})

function contador() {
    let contador = 0;

    for (let i = 0; i < lista_nomes.length; i++) {
        if (lista_nomes[i].length > 5) {
            contador++;
        }
    }

    document.getElementById("resultado").textContent =
        "total de nomes com mais de 5 letras: " + contador;
}

function filtrar(){
    const maiores = lista_nomes.filter(function(nome){
        return nome.length > 5;
    })

    document.getElementById("res").textContent = maiores.join(", ");
}

document.addEventListener("DOMContentLoaded", ()=>{
    renderizar()
})