//Ativar links do Menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link){
    // pega o valor dentro da url
    const url = location.href;
    // pega o valor dentro do href
    const href = link.href;

    // verificar se dentro da url tem o valor href
    if(url.includes(href)){
        // adiciona classe ativo
        link.classList.add("ativo");
    }
}

links.forEach(ativarLink)



//ativar Links do orçamento setando o seguro e bicicleta

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro){

    const elemento = document.getElementById(parametro);
    if(elemento){
        elemento.checked = true;
    }
}

parametros.forEach(ativarProduto);


//Perguntas Frequentes
const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event){
    const pergunta = event.currentTarget;
    const controls = pergunta.getAttribute("aria-controls");
    const resposta = document.getElementById(controls);

    
    resposta.classList.toggle("ativa");
    const ativa = resposta.classList.contains("ativa");
    pergunta.setAttribute("aria-expanded", ativa);
}


function eventosPerguntas(pergunta){
    pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);
