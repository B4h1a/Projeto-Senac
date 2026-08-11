// ======================================================
// CONQUISTE SEU PRIMEIRO EMPREGO
// Projeto SENAC
// Desenvolvido por:
// Victor Hugo Bahia Cardoso dos Santos
// Carlos Roberto Ferreira Junior
// Eduardo de Souza Soares
// Vitor Hugo Pereira Teixeira
// ======================================================

// ========================================
// ELEMENTOS DA TELA
// ========================================



const menu = document.getElementById("menu");
const intro = document.getElementById("intro");
const game = document.getElementById("game");
const finalScreen = document.getElementById("final");

const startButton = document.getElementById("startButton");
const introButton = document.getElementById("introButton");

const playerName = document.getElementById("playerName");
const playerLabel = document.getElementById("playerLabel");

const phaseTitle = document.getElementById("phaseTitle");
const phaseProgress = document.getElementById("phaseProgress");

const question = document.getElementById("question");
const description = document.getElementById("description");

const phaseImage = document.getElementById("phaseImage");

const choice1 = document.getElementById("choice1");
const choice2 = document.getElementById("choice2");
const choice3 = document.getElementById("choice3");

const expBar = document.getElementById("expBar");
const qualBar = document.getElementById("qualBar");
const habBar = document.getElementById("habBar");
const netBar = document.getElementById("netBar");
const empBar = document.getElementById("empBar");

const finalName = document.getElementById("finalName");
const finalText = document.getElementById("finalText");

const statExp = document.getElementById("statExp");
const statQual = document.getElementById("statQual");
const statHab = document.getElementById("statHab");
const statNet = document.getElementById("statNet");
const statEmp = document.getElementById("statEmp");

const achievementList =
    document.getElementById("achievementList");

const qrCode = document.getElementById("qrCode");

const shareButton = document.getElementById("share");

const creditsButton =
    document.getElementById("creditsButton");

const closeCredits =
    document.getElementById("closeCredits");

const creditsScreen =
    document.getElementById("creditsScreen");

const backResult =
    document.getElementById("backResult");

const backMenu =
    document.getElementById("backMenu");
const restartButton =
    document.getElementById("restart");


const stars = document.getElementById("stars");



// ========================================
// JOGADOR
// ========================================

let jogador = {

    nome: "",

    experiencia: 0,

    qualificacao: 0,

    habilidades: 0,

    networking: 0,

    empregabilidade: 0,

    fase: 0,

    estrelas: 0,

    conquistas: []

};
// ========================================
// LINK DO PROJETO
// ========================================

const GAME_URL =
    "https://b4h1a.github.io/conquiste-seu-primeiro-emprego/";

// ========================================
// FASES DO JOGO
// ========================================

const fases = [

    // ======================================================
    // FASE 1
    // ======================================================

    {
        titulo: "Primeiro Passo",

        imagem: "assets/estudante.jpg",

        descricao:
            "Você acabou de concluir seus estudos e percebe que conseguir o primeiro emprego pode ser mais difícil do que imaginava. Você ainda não possui experiência profissional e precisa decidir qual será sua primeira estratégia para entrar no mercado de trabalho. Qual caminho você escolherá?",

        opcoes: [

            {
                texto: "Investir em cursos de capacitação",

                efeitos: {
                    qualificacao: 20,
                    habilidades: 15,
                    empregabilidade: 10
                }
            },

            {
                texto: "Procurar emprego imediatamente",

                efeitos: {
                    experiencia: 10,
                    empregabilidade: 5
                }
            },

            {
                texto: "Preparar um currículo e buscar orientação",

                efeitos: {
                    qualificacao: 10,
                    empregabilidade: 15,
                    networking: 5
                }
            }

        ]
    },


    // ======================================================
    // FASE 2
    // ======================================================

    {
        titulo: "Jovem Aprendiz",

        imagem: "assets/jovem.jpg",

        descricao:
            "Você encontra uma oportunidade de Jovem Aprendiz em uma empresa da sua cidade. A vaga oferece a possibilidade de aprender como funciona o ambiente profissional, desenvolver novas habilidades e adquirir sua primeira experiência. Porém, a rotina exigirá comprometimento e responsabilidade.",

        opcoes: [

            {
                texto: "Participar e aproveitar a oportunidade",

                efeitos: {
                    experiencia: 30,
                    empregabilidade: 20,
                    habilidades: 10
                }
            },

            {
                texto: "Recusar para procurar uma vaga melhor",

                efeitos: {
                    empregabilidade: -10
                }
            },

            {
                texto: "Participar, mas continuar buscando outras oportunidades",

                efeitos: {
                    experiencia: 20,
                    networking: 10,
                    empregabilidade: 15
                }
            }

        ]
    },


    // ======================================================
    // FASE 3
    // ======================================================

    {
        titulo: "Networking",

        imagem: "assets/netw.jpg",

        descricao:
            "Durante sua busca por emprego, você descobre que acontecerá um evento profissional com estudantes, trabalhadores e representantes de várias empresas. O evento pode ser uma boa oportunidade para conhecer pessoas, trocar contatos e descobrir novas vagas, mas você terá que sair da sua zona de conforto.",

        opcoes: [

            {
                texto: "Participar do evento e conhecer profissionais",

                efeitos: {
                    networking: 25,
                    empregabilidade: 20,
                    habilidades: 5
                }
            },

            {
                texto: "Não participar e continuar procurando sozinho",

                efeitos: {}
            },

            {
                texto: "Participar e entregar seu currículo para empresas",

                efeitos: {
                    networking: 30,
                    empregabilidade: 15,
                    experiencia: 5
                }
            }

        ]
    },


    // ======================================================
    // FASE 4
    // ======================================================

    {
        titulo: "Currículo",

        imagem: "assets/curriculo.jpg",

        descricao:
            "Você encontrou algumas vagas que combinam com seus objetivos, mas percebe que seu currículo ainda está simples e não destaca suas principais qualidades. Agora você precisa decidir como apresentar sua formação, seus conhecimentos e suas experiências para chamar a atenção dos recrutadores.",

        opcoes: [

            {
                texto: "Revisar e melhorar o currículo",

                efeitos: {
                    qualificacao: 10,
                    empregabilidade: 20,
                    habilidades: 5
                }
            },

            {
                texto: "Enviar o currículo do jeito que está",

                efeitos: {
                    empregabilidade: -15
                }
            },

            {
                texto: "Pedir ajuda para melhorar o currículo",

                efeitos: {
                    networking: 10,
                    qualificacao: 10,
                    empregabilidade: 20
                }
            }

        ]
    },


    // ======================================================
    // FASE 5
    // ======================================================

    {
        titulo: "Entrevista",

        imagem: "assets/cand.jpg",

        descricao:
            "Depois de enviar seu currículo para várias empresas, você finalmente recebe uma oportunidade para participar de uma entrevista. A vaga exige comunicação, responsabilidade e vontade de aprender. Agora você precisa decidir como irá se preparar para aumentar suas chances de conseguir o emprego.",

        opcoes: [

            {
                texto: "Estudar sobre a empresa e treinar",

                efeitos: {
                    habilidades: 20,
                    empregabilidade: 25,
                    qualificacao: 10
                }
            },

            {
                texto: "Ir para a entrevista sem preparação",

                efeitos: {
                    empregabilidade: -10,
                    experiencia: 5
                }
            },

            {
                texto: "Pedir conselhos para alguém experiente",

                efeitos: {
                    networking: 15,
                    habilidades: 10,
                    empregabilidade: 15
                }
            }

        ]
    },


    // ======================================================
    // FASE 6
    // ======================================================

    {
        titulo: "LinkedIn",

        imagem: "assets/linkedin.jpg",

        descricao:
            "Você percebe que muitas empresas utilizam o LinkedIn para encontrar candidatos. Seu perfil ainda está incompleto e possui poucas informações sobre sua formação e seus objetivos profissionais. Você precisa decidir como utilizar a plataforma para aumentar sua presença no mercado de trabalho.",

        opcoes: [

            {
                texto: "Criar um perfil completo e profissional",

                efeitos: {
                    networking: 20,
                    empregabilidade: 20,
                    qualificacao: 5
                }
            },

            {
                texto: "Ignorar o LinkedIn por enquanto",

                efeitos: {
                    empregabilidade: -10
                }
            },

            {
                texto: "Criar o perfil e começar a fazer contatos",

                efeitos: {
                    networking: 30,
                    empregabilidade: 15
                }
            }

        ]
    },


    // ======================================================
    // FASE 7
    // ======================================================

    {
        titulo: "Feira de Empregos",

        imagem: "assets/stand.jpg",

        descricao:
            "Na sua cidade acontecerá uma feira de empregos com diversas empresas procurando novos profissionais. Você poderá conversar diretamente com recrutadores, conhecer diferentes áreas de atuação e entregar seu currículo. Essa pode ser uma oportunidade importante para descobrir caminhos que ainda não conhecia.",

        opcoes: [

            {
                texto: "Participar e conversar com recrutadores",

                efeitos: {
                    networking: 25,
                    experiencia: 10,
                    empregabilidade: 15
                }
            },

            {
                texto: "Não participar e continuar em casa",

                efeitos: {}
            },

            {
                texto: "Participar e pesquisar diferentes áreas",

                efeitos: {
                    networking: 15,
                    qualificacao: 10,
                    empregabilidade: 20
                }
            }

        ]
    },


    // ======================================================
    // FASE 8
    // ======================================================

    {
        titulo: "Curso Gratuito",

        imagem: "assets/cert.jpg",

        descricao:
            "Durante sua busca por oportunidades, você encontra um curso gratuito com certificado. O conteúdo pode ajudar a melhorar seus conhecimentos e fortalecer seu currículo. Porém, será necessário organizar seu tempo para conseguir estudar e concluir o curso.",

        opcoes: [

            {
                texto: "Fazer o curso e conquistar o certificado",

                efeitos: {
                    qualificacao: 25,
                    habilidades: 10,
                    empregabilidade: 10
                }
            },

            {
                texto: "Não fazer o curso e focar nas vagas",

                efeitos: {
                    experiencia: 5
                }
            },

            {
                texto: "Fazer o curso e aplicar o conhecimento em projetos",

                efeitos: {
                    qualificacao: 20,
                    habilidades: 25,
                    empregabilidade: 15
                }
            }

        ]
    },


    // ======================================================
    // FASE 9
    // ======================================================

    {
        titulo: "Duas Oportunidades",

        imagem: "assets/escolha.jpg",

        descricao:
            "Depois de algum tempo procurando emprego, você recebe duas oportunidades diferentes. A primeira é um estágio que oferece bastante aprendizado e experiência, mas possui uma remuneração menor. A segunda oferece um salário melhor, porém apresenta poucas oportunidades de desenvolvimento profissional. Qual caminho você seguirá?",

        opcoes: [

            {
                texto: "Escolher o estágio para aprender",

                efeitos: {
                    experiencia: 20,
                    habilidades: 15,
                    empregabilidade: 10
                }
            },

            {
                texto: "Escolher o emprego com salário maior",

                efeitos: {
                    empregabilidade: 15,
                    experiencia: 10
                }
            },

            {
                texto: "Avaliar as duas propostas antes de decidir",

                efeitos: {
                    qualificacao: 10,
                    habilidades: 10,
                    empregabilidade: 20
                }
            }

        ]
    },


    // ======================================================
    // FASE 10
    // ======================================================

    {
        titulo: "Aprendizado Contínuo",

        imagem: "assets/graf.jpg",

        descricao:
            "Você finalmente conseguiu entrar no mercado de trabalho, mas percebe que sua carreira está apenas começando. Novas tecnologias, ferramentas e conhecimentos surgem constantemente. Agora você precisa decidir se continuará investindo no seu desenvolvimento profissional ou se ficará apenas com aquilo que já aprendeu.",

        opcoes: [

            {
                texto: "Continuar estudando e se especializar",

                efeitos: {
                    qualificacao: 20,
                    habilidades: 15,
                    empregabilidade: 15
                }
            },

            {
                texto: "Parar de estudar e focar apenas no trabalho",

                efeitos: {
                    experiencia: 15,
                    empregabilidade: -15
                }
            },

            {
                texto: "Trabalhar e estudar por meio de projetos práticos",

                efeitos: {
                    experiencia: 15,
                    habilidades: 20,
                    empregabilidade: 20
                }
            }

        ]
    }

];
// ======================================================
// CONTROLE DAS TELAS
// ======================================================

function mostrarTela(nome) {

    document
        .querySelectorAll(".screen")
        .forEach(tela => {

            tela.classList.remove("active");

        });

    if (nome === "menu")
        menu.classList.add("active");

    if (nome === "intro")
        intro.classList.add("active");

    if (nome === "game")
        game.classList.add("active");

    if (nome === "final")
        finalScreen.classList.add("active");

    if (nome === "certificate")
        document
            .getElementById("certificateScreen")
            .classList.add("active");
    if (nome === "credits")
        creditsScreen.classList.add("active");


}

// ======================================================
// INICIAR JOGO
// ======================================================

function iniciarJogo() {

    const nome = playerName.value.trim();

    if (nome === "") {

        alert("Digite seu nome para começar!");

        playerName.focus();

        return;

    }

    jogador.nome = nome;

    playerLabel.textContent = nome;

    mostrarTela("intro");

}
// ======================================================
// COMEÇAR A HISTÓRIA
// ======================================================

function iniciarHistoria() {

    jogador.fase = 0;

    atualizarBarras();

    carregarFase();

    mostrarTela("game");

}
// ======================================================
// EVENTOS
// ======================================================

startButton.addEventListener("click", iniciarJogo);

introButton.addEventListener("click", iniciarHistoria);


// ======================================================
// INÍCIO
// ======================================================

mostrarTela("menu");
// ======================================================
// CARREGAR FASE
// ======================================================

function carregarFase() {

    const fase = fases[jogador.fase];

    // Atualiza título
    phaseTitle.textContent = fase.titulo;

    // Atualiza contador
    const porcentagem = Math.round((jogador.fase / fases.length) * 100);

    phaseProgress.textContent =
        `Fase ${jogador.fase + 1} de ${fases.length} • ${porcentagem}% concluído`;

    atualizarProgresso();

    // Atualiza imagem
    phaseImage.src = fase.imagem;

    // Atualiza texto
    question.textContent = fase.titulo;

    description.textContent = fase.descricao;

    // Atualiza botões
    choice1.textContent = fase.opcoes[0].texto;
    choice2.textContent = fase.opcoes[1].texto;
    choice3.textContent = fase.opcoes[2].texto;

    choice1.onclick = () => escolher(0);
    choice2.onclick = () => escolher(1);
    choice3.onclick = () => escolher(2);

    atualizarBarras();

    animarTroca()

}
// ======================================================
// ESCOLHER OPÇÃO
// ======================================================

function escolher(indice) {

    const fase = fases[jogador.fase];

    const escolha = fase.opcoes[indice];

    aplicarEfeitos(escolha.efeitos);

    jogador.fase++;

    if (jogador.fase >= fases.length) {

        finalizarJogo();

        return;

    }

    carregarFase();

}
// ======================================================
// APLICAR EFEITOS
// ======================================================

function aplicarEfeitos(efeitos) {

    for (const atributo in efeitos) {

        jogador[atributo] += efeitos[atributo];

        if (jogador[atributo] < 0) {

            jogador[atributo] = 0;

        }

        if (jogador[atributo] > 200) {

            jogador[atributo] = 200;

        }

    }

    atualizarBarras();
    verificarConquistas();
    salvarJogo();

}
// ======================================================
// BARRAS
// ======================================================

function atualizarBarras() {

    expBar.value = jogador.experiencia;

    qualBar.value = jogador.qualificacao;

    habBar.value = jogador.habilidades;

    netBar.value = jogador.networking;

    empBar.value = jogador.empregabilidade;

}
// ======================================================
// ANIMAÇÃO
// ======================================================

function animarTroca() {

    const card = document.querySelector(".game-card");

    card.style.opacity = 0;

    card.style.transform = "translateY(20px)";

    setTimeout(() => {

        card.style.opacity = 1;

        card.style.transform = "translateY(0)";

    }, 200);

}
// ======================================================
// TOAST (CONQUISTAS)
// ======================================================

const toast = document.getElementById("toast");

function mostrarToast(texto) {

    if (!toast) {
        console.warn("Elemento #toast não encontrado.");
        return;
    }

    toast.innerHTML = texto;

    toast.style.display = "block";

    toast.style.opacity = "1";

    setTimeout(() => {

        toast.style.opacity = "0";

        setTimeout(() => {

            toast.style.display = "none";

        }, 300);

    }, 2500);

}
// ======================================================
// CONQUISTAS
// ======================================================

function verificarConquistas() {

    if (

        jogador.qualificacao >= 40 &&

        !jogador.conquistas.includes("Cursos")

    ) {

        jogador.conquistas.push("Cursos");

        mostrarToast("🏆 Conquista: Especialista em Cursos");

    }

    if (

        jogador.networking >= 25 &&

        !jogador.conquistas.includes("Networking")

    ) {

        jogador.conquistas.push("Networking");

        mostrarToast("🤝 Conquista: Networking Master");

    }

    if (

        jogador.experiencia >= 30 &&

        !jogador.conquistas.includes("Experiência")

    ) {

        jogador.conquistas.push("Experiência");

        mostrarToast("💼 Conquista: Primeira Experiência");

    }

}
// ======================================================
// PROGRESSO
// ======================================================

const progressFill =
    document.getElementById("progressFill");

function atualizarProgresso() {

    const porcentagem =

        ((jogador.fase) / fases.length) * 100;

    progressFill.style.width =

        porcentagem + "%";

}
// ======================================================
// SALVAR
// ======================================================

function salvarJogo() {

    localStorage.setItem(

        "empregoSave",

        JSON.stringify(jogador)

    );

}
// ======================================================
// FINAL DO JOGO
// ======================================================

function finalizarJogo() {

    mostrarTela("final");

    finalName.textContent = jogador.nome;

    // Calcula a pontuação total
    const pontos =
        jogador.experiencia +
        jogador.qualificacao +
        jogador.habilidades +
        jogador.networking +
        jogador.empregabilidade;

    let mensagem = "";
    let estrelas = 1;

    // ========================================
    // MENSAGENS DE RESULTADO
    // ========================================

    if (pontos >= 400) {

        mensagem =
            "🚀 Excelente! Você demonstrou muita dedicação durante sua jornada. " +
            "Suas escolhas mostram que você está preparado para enfrentar novos desafios " +
            "e continuar crescendo profissionalmente. Continue buscando conhecimento, " +
            "desenvolvendo suas habilidades e aproveitando as oportunidades que surgirem.";

        estrelas = 5;

    }

    else if (pontos >= 300) {

        mensagem =
            "🌟 Muito bem! Você tomou várias decisões importantes para construir seu futuro. " +
            "Sua jornada mostrou dedicação, vontade de aprender e capacidade de aproveitar " +
            "boas oportunidades. Continue desenvolvendo suas habilidades e fortalecendo " +
            "seu conhecimento para alcançar seus objetivos.";

        estrelas = 4;

    }

    else if (pontos >= 200) {

        mensagem =
            "👏 Parabéns! Você deu passos importantes na construção da sua carreira. " +
            "Algumas escolhas poderiam ter sido diferentes, mas cada experiência faz parte " +
            "do aprendizado. Continue estudando, buscando oportunidades e acreditando no " +
            "seu potencial.";

        estrelas = 3;

    }

    else if (pontos >= 100) {

        mensagem =
            "📚 Sua jornada está apenas começando! Você já deu alguns passos importantes, " +
            "mas ainda existem muitas oportunidades para aprender e evoluir. " +
            "Invista em sua qualificação, desenvolva novas habilidades e não tenha medo " +
            "de tentar novamente.";

        estrelas = 2;

    }

    else {

        mensagem =
            "💡 Toda jornada profissional começa com uma primeira tentativa. " +
            "Algumas escolhas dificultaram seu caminho, mas isso também faz parte do aprendizado. " +
            "Continue estudando, desenvolvendo suas habilidades e aproveitando as oportunidades. " +
            "Você pode tentar novamente e construir um resultado ainda melhor!";

        estrelas = 1;

    }

    // ========================================
    // MOSTRAR RESULTADO
    // ========================================

    finalText.textContent = mensagem;



    // ========================================
    // ESTRELAS
    // ========================================

    stars.innerHTML = "";

    for (let i = 0; i < estrelas; i++) {

        stars.innerHTML += "⭐";

    }

    // ========================================
    // ESTATÍSTICAS
    // ========================================

    statExp.textContent = jogador.experiencia;

    statQual.textContent = jogador.qualificacao;

    statHab.textContent = jogador.habilidades;

    statNet.textContent = jogador.networking;

    statEmp.textContent = jogador.empregabilidade;

    // ========================================
    // CONQUISTAS
    // ========================================

    if (achievementList) {

        achievementList.innerHTML = "";

        if (jogador.conquistas.length === 0) {

            achievementList.innerHTML =
                "<li>Nenhuma conquista desbloqueada.</li>";

        }

        else {

            jogador.conquistas.forEach(conquista => {

                achievementList.innerHTML +=
                    `<li>✅ ${conquista}</li>`;

            });

        }

    }

}
// ========================================
// QR CODE
// ========================================

function gerarQRCode() {

    QRCode.toCanvas(

        qrCode,

        GAME_URL,

        {

            width: 180,

            margin: 2

        },

        function (error) {

            if (error) {

                console.error(error);

            }

        }

    );

}
// ========================================
// COMPARTILHAR
// ========================================

async function compartilhar() {

    const texto =

        `🎮 Jogue "Conquiste seu Primeiro Emprego"!

${GAME_URL}`;

    if (navigator.share) {

        try {

            await navigator.share({

                title: "Conquiste seu Primeiro Emprego",

                text: texto,

                url: GAME_URL

            });

        } catch (e) {

            console.log(e);

        }

    }

    else {

        navigator.clipboard.writeText(GAME_URL);

        alert("Link copiado para a área de transferência!");

    }

}
// ========================================
// CERTIFICADO
// ========================================


shareButton.addEventListener(

    "click",

    compartilhar

);
restartButton.addEventListener(
    "click",
    novoJogo
);


backResult.addEventListener("click", () => {

    mostrarTela("final");

});

backMenu.addEventListener("click", novoJogo);
// ======================================================
// NOVO JOGO
// ======================================================

function novoJogo() {

    // Reinicia os atributos do jogador
    jogador = {

        nome: "",

        experiencia: 0,

        qualificacao: 0,

        habilidades: 0,

        networking: 0,

        empregabilidade: 0,

        fase: 0,

        estrelas: 0,

        conquistas: []

    };

    // Limpa o nome digitado
    playerName.value = "";

    // Zera as barras
    atualizarBarras();

    // Zera a barra de progresso
    if (typeof atualizarProgresso === "function") {
        atualizarProgresso();
    }

    // Remove o save automático
    localStorage.removeItem("empregoSave");

    // Volta para o menu
    mostrarTela("menu");

}
creditsButton.addEventListener("click", () => {

    mostrarTela("credits");

});

closeCredits.addEventListener("click", () => {

    mostrarTela("menu");

});