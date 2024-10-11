const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [//abre a lista de objetos (itens)
    {//abre o item
        enunciado: "Vocẽ acha que o COI está errado",
        alternativas: [{
            texto: "Sim",
            afirmação: "Sim, não tem sentido o esporte mais praticado não ser olímpico"
        },
        {
            texto: "Não",
            afirmação: "O COI está correto e o futsal não tem o direito de ser olímpico"
        }
        ]
    },
    {
        enunciado: "Você acha que o esporte pode ser mais valorizado se tornando olímpico",
        alternativas: [{
            texto: "Sim, se tornara mais valorizado",
            afirmação: "sim será por causa da visagem do esporte"
        },
        {
            texto:"Não se tornara mais valorizado",
            afirmação:"o futsal não tem porque ser valorizado"
        }
        ]
    },
    {
        enunciado: "A falta de concenso da FIFA e o COI prejudica o futsal",
        alternativas: [{
            texto: "Sim",
            afirmação: "Pois a copa do mundo poderia ser um ano após as olímpiadas e o esporte se tornara olímpico, para não bater datas"
        },
        {
            texto: "Não",
            afirmação: "A copa do mundo é mais importante que as olimpiadas"
        }
        ]
    }
]
let posicao = 0;
let perguntaAtual;
let respostas = "";


function mostraPergunta() {
    if (posicao>=perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    caixaAlternativa.textContent = " ";
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",  () => respostasSelecionadas(alternativa));
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}
function respostasSelecionadas(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmação;
    respostas += afirmacoes + " ";
    posicao++;
    mostraPergunta();
}
function mostraResultado(){
    caixaPergunta.textContent = "Confira suas respostas: ";
    textoResultado.textContent = respostas; 
    caixaAlternativa.textContent = "";
}
mostraPergunta();
