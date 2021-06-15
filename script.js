const nomePersonagem1 =  document.querySelector('#nome-personagem1');
const botao = document.querySelector('button');

function adicionaInfo(el,json){
    el.querySelector("img").src = json.image
    el.querySelector("p").innerHTML = json.name
}

gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 671);
}

var r1 = gerarValorAleatorio()
var r2 = gerarValorAleatorio()
var r3 = gerarValorAleatorio()
var r4 = gerarValorAleatorio()


async function personagem(numero){
    const r = await fetch(`https://rickandmortyapi.com/api/character/${numero}`)
    const j = await r.json()
    return j
}



personagem(r1).then(e=> adicionaInfo(b1,e) )
personagem(r2).then(e=> adicionaInfo(b2,e) )
personagem(r3).then(e=> adicionaInfo(b3,e) )
personagem(r4).then(e=> adicionaInfo(b4,e) )