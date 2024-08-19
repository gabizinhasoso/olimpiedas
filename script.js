const caixaPrincipal = document.querySelector(".caixa-principal");

const caixaPerguntas = document.querySelector(".caixa-perguntas");

const caixaAlternativas = document.querySelector(".caixa-alternativas");

const caixaResultado = document.querySelector(".caixa-resultado");

const caixaResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
     enunciado: "Qual é o mascote oficial dos Jogos Olímpicos de Paris 2024?",
       alternativa: [
           " O mascote de Paris 2024 é a Phryge Olímpica. A mascote se baseia nos pequenos gorros tradicionais da Frígia, nos quasi seu formato foi inspirado..",
           "O nome e o design foram escolhidos como símbolo de liberdade e para representar figuras alegóricas da republica francesa."
       ]
    },
    
    {
     enunciado: "Qual é a diferença entre Jogos Olímpicos de Verão e de Inverno",
      alternativas: [
           "Os Jogos de Verão, tambem cohecido como Jogos da OLimpíada, é um evento multiesportivo realizado a cada quatro anos, normalmente em julho ou agosto.",
            "Os Jogos de inverno também saõ realizados a cada quatro anos,no inverno da cidade anfitriã, com competições multiesportivas realizadas na neve e no gelo"
       ]
    },
    {
        enunciado: "Quais esportes estarão nos Jogos olímpicos de Paris 2024 ",
      alternativas: [
               "Basquete 3x3, Tiro com arco, Nado artístico, Boxe, Volei na praia,",
               "Canoagem de velocidade, saltos ornamentais, Judo,Escalada esportiva"
       ]
    }
     ];

     let atual = 0;
     let perguntaAtual;

function mostraPergunta(){
     perguntaAtual = perguntas[atual];
     caixaPerguntas.textContent = perguntaAtual.enunciado;
     caixaAlternativas.textContent= "";
     mostraAlternativas();
    
    }
function mostraAlternativas(){
   for(const alternativa of perguntaAtual.alternativas){
    const botaoAlternativas= document.creatElement("button");
    botaoAlternativas.textContent = alternativa;
    caixaAlternativas.appendChild(botaoAlternativas);

   }
}

     mostraPergunta();