const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A contracpção é o ato de evitar a gravidez. Os métodos desse controle incluem medicamentos, procedimentos, dispostivos e comportamentos",
        alternativas: [
            {
                texto: "Métodos de Barreira: como preservativos masculinos e femininos, diafragma e esponja contraceptiva.",
                afirmacao: "Métodos Hormonais: como pílulas anticoncepcionais, adesivos, anéis, vaginais e injetáveis."
            },
            {
                texto: "Dispositivos Intrauterinos (DIU): como Diu Hormonal e Diu de Cobre.",
                afirmacao: "Métodos de Emergência: como pílula do dia seguinte e Diu de Cobre como contracepção de emergência."
            }
        ]
    },
    {
        enunciado: "Métodos de contracepção natural e métodos de contracepção comportamental podem ser alternativas para aqueles que preferem evitar métodos hormonais ou dispositivos.",
        alternativas: [
            {
                texto: "Métodos de contracepção natural, como o método de temperatura basal e o método do muco cervical, são baseados na observação dos sinais do corpo para identificar os períodos férteis e não ter relações sexuais durante esses períodos. Esses métodos podem ser atraentes para quem deseja evitar o uso de hormônios e dispositivos, e também podem contribuir para uma maior compreensão do próprio ciclo menstrual. No entanto, a eficácia desses métodos pode ser reduzida se não forem seguidos com rigor.",
                afirmacao: "Métodos de contracepção natural oferecem uma alternativa aos métodos hormonais e dispositivos, mas sua eficácia depende de um monitoramento cuidadoso e consistente dos sinais corporais."
            },
            {
                texto: "Métodos de contracepção comportamental, como a abstinência periódica e a técnica do calendário, envolvem o uso de técnicas para evitar a gravidez sem recorrer a métodos contraceptivos tradicionais. Esses métodos requerem que os indivíduos monitorem os ciclos menstruais e evitem relações sexuais durante os períodos férteis para reduzir o risco de gravidez. Eles são uma opção para quem busca uma abordagem menos invasiva e natural, embora a adesão correta seja essencial para alcançar a eficácia desejada.",
                afirmacao: "Métodos de contracepção comportamental podem servir como uma alternativa aos métodos tradicionais, exigindo um alto grau de comprometimento e precisão para serem eficazes na prevenção da gravidez."
            }
        ]
    },
    {
        enunciado: "O coito interrompido é um método contraceptivo natural menos eficaz, enquanto os métodos cirúrgicos oferecem uma solução permanente para evitar a gravidez. Ambos requerem considerações cuidadosas e não protegem contra ISTs",
        alternativas: [
            {
                texto: "Coito Interrompido: O coito interrompido, também conhecido como retirada ou método de retirada, consiste na remoção do pênis da vagina antes da ejaculação para evitar que o esperma entre em contato com o óvulo. Este método depende do controle e do timing do parceiro, sendo menos eficaz do que outros métodos devido ao risco de liberação de esperma durante o pré-ejaculatório.",
                afirmacao: "Embora o coito interrompido seja uma opção sem custo e sem efeitos colaterais físicos, sua eficácia é significativamente menor, o que destaca a importância de considerar métodos adicionais ou alternativos para uma proteção mais confiável"
            },
            {
                texto: "Métodos Cirúrgicos - Laqueadura e Vasectomia: são métodos permanentes de contracepção. A laqueadura envolve a obstrução ou corte das trompas de Falópio na mulher, enquanto a vasectomia corta ou sela os ductos deferentes no homem. Ambos são altamente eficazes, mas irreversíveis na maioria dos casos.",
                afirmacao: "Os métodos cirúrgicos oferecem uma solução permanente para a contracepção, o que torna crucial a decisão informada e o consentimento consciente antes de optar por esse tipo de procedimento."
            }
        ]
    },
    {
        enunciado: "Você achou esse informativo útil?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Fico Feliz em ajudar!"
            },
            {
                texto: "Não",
                afirmacao: "Que pena, espero profundamnte que você tenha aprendido algo!"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal = afirmacoes;
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Você chegou ao fim do formulário";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();


