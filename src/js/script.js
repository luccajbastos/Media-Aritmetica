function qs(a){
    return document.querySelector(a);
}

let numeros = qs('#numero');
let inputResultado = qs('#resultado');
let quadroQuantidade = qs('.quadro--quantidade');
let quadroResultado = qs('.quadro--resultado');
let msgError = qs('.quadro--erro');
let erro = qs('.erro');

let media = 0;
quadroResultado.style.display = 'none';
msgError.style.display = 'none';


function showError(a){
    msgError.style.display = 'flex';
    erro.innerHTML = a;
    setInterval(() => {
        msgError.style.display = 'none';
    }, 5000)
}

function proxQuantidade(){
    if(numeros.value){
        notas = numeros.value.split(",").map((item) => {
            return parseInt(item, 10);
        });
        quadroQuantidade.style.display = 'none';
        quadroResultado.style.display = 'flex';

        console.log(notas);
        let soma = 0;
        for(let i in notas){
            soma += notas[i];
            media = media+i.length;
        }
        resultado = (soma/media);
        inputResultado.value = resultado;

    } else {
        showError("Erro! Entrada inválida.");
    }
}

