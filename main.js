const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "A contracepçaão é o ato de evitar a gravidez.Os métodos desse controle incluem medicamentos, procedimentos, dispositivose comportamentos. ",
        alternativas: [
            {
                texto: "Métodos de barreira: como preservativos masculinos e femininos, diafragma e esponja contraceptiva.",
                afirmacao: "Métodos hormonais: como pílulas anticoncepcionais, adesivos, anéis vaginais e injetáveis. "
            },
            {
                texto: "Dispositivos intrauterinos (DIU): como DIU hormonal e DIU de cobre.",
                afirmacao: "Métodos de emergência: como pílula do dia seguinte e DIU de cobre como contracepção de emergência."
            }
        ]
    },
    {
        enunciado: "Métodos de contracepção natural e métodos de contracepção comportamental podem ser alternativas para aqueles que preferem evitar métodos hormonais ou dispositivos",
  alternativas: [
            {
                texto: "Métodos de contracepção natural, como o método de temperatura basal e o método do muco cervical, são baseados na observação dos sinais do corpo para identificar os períodos férteís e não ter relaçoẽs sexuais durante esses s períodos. Esses métodos podem ser atraentes para quem deseja evitar o uso de hormônios e dispositivos, e também podem contribuir para uma maior compreensão do próprio ciclo menstrual. No entanto, a eficácia desses métodos pode ser reduzida se não forem seguidos com rigor.",
                afirmacao: "Métodos de contracepção natural oferecem uma alternativa aos métodos hormonais e dispositivos, mas sua eficácia depende de um monitoramento e consistente dos sinais corporais."
            },
            {
                texto: "Métodos de contracepção comportamental, como a abstinência periódica e a técnica do calendário, envolvem o uso de técnicas para evitar a gravidez sem recorrer a métodos contraceptivos tradicionais. Esses métodos requerem que os indivíduos monitorem os ciclos menstruais e evitem relações sexuais durante os períodos férteis para reduzir o risco de gravidez. Eles são uma opção para quem busca uma abordagem menos invasiva e natural, embora a adesão correta seja essencial para alcançar a eficácia desejada.",
                afirmacao: "Métodos de contracepção comportamental podem servir como uma alternativa aos métodos tradicionais, exigindo um alto grau de comprometimento e precisão para serem eficazes na prevenção da gravidez."
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho escrito, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
        alternativas: [
            {
                texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao: "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA."
            },
            {
                texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética."
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
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
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();