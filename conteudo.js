/* =========================================================================
   CONTEÚDO DO SITE — EDITE AQUI
   -------------------------------------------------------------------------
   Tudo que aparece no site está neste arquivo. Troque os textos entre
   [colchetes] pelos dados reais e salve (Commit changes).
   - Cuidado para não apagar aspas "  vírgulas ,  ou chaves { }.
   - Imagens: envie para a pasta /imagens e coloque o caminho aqui
     (ex.: "imagens/foto.jpg"). Sem imagem, o site mostra um fundo neutro.
   - Para remover um item de uma lista, apague o bloco { ... }, inclusive
     a vírgula depois dele. Para adicionar, copie um bloco e cole abaixo.
   ========================================================================= */

const SITE = {
  empresa: {
    nome: "[NOME DA EMPRESA]",
    sufixo: "Engenharia",
    logo: "",                                   // ex.: "imagens/logo.png" (vazio = logo em texto)
    tituloAba: "[Nome da Empresa] Engenharia — PCI, NR-12 e Projetos Mecânicos",
    descricaoGoogle: "[Descrição curta para o Google: serviços e cidade de atuação]",
    regiao: "[Cidade / região de atendimento]",
    whatsapp: "5500000000000",                  // só números: 55 + DDD + número
    whatsappExibicao: "([DDD]) [00000-0000]",
    mensagemWhatsapp: "Olá! Vim pelo site e gostaria de um orçamento.",
    email: "[contato@suaempresa.com.br]",
    endereco: "[Endereço completo]",
    horario: "[Seg. a sex., 8h às 18h]",
    instagram: "",                              // ex.: "https://instagram.com/suaempresa" (vazio = esconde)
    linkedin: "",                               // ex.: "https://linkedin.com/in/seuperfil" (vazio = esconde)
    cnpj: "[00.000.000/0000-00]",
    corPrincipal: "#f28c28",                    // destaques e botões
    corEscura: "#0f2233",                       // fundo do topo, faixas e rodapé
  },

  banner: {
    selo: "Engenharia Mecânica",
    titulo: "[Frase principal: o que a empresa resolve para o cliente]",
    texto: "[Um parágrafo curto explicando a proposta da empresa e para quem ela trabalha.]",
    imagem: "imagens/banner.jpg",
    botao1: "Ver serviços",
    botao2: "Solicitar orçamento",
    destaques: ["[Destaque 1]", "[Destaque 2]", "[Destaque 3]"],   // ex.: "Responsável técnico com ART"
  },

  servicos: {
    titulo: "Áreas de atuação",
    texto: "[Frase curta apresentando os serviços.]",
    botao: "Solicitar orçamento",
    lista: [
      {
        icone: "🔥",
        titulo: "PCI — Proteção Contra Incêndio",
        texto: "[Descreva o serviço de PCI em 1–2 frases.]",
        itens: ["[Item do serviço]", "[Item do serviço]", "[Item do serviço]", "[Item do serviço]"],
        imagem: "imagens/servico-pci.jpg",
      },
      {
        icone: "⚙️",
        titulo: "Projetos de NR-12",
        texto: "[Descreva o serviço de NR-12 em 1–2 frases.]",
        itens: ["[Item do serviço]", "[Item do serviço]", "[Item do serviço]", "[Item do serviço]"],
        imagem: "imagens/servico-nr12.jpg",
      },
      {
        icone: "📐",
        titulo: "Projetos Mecânicos",
        texto: "[Descreva os projetos mecânicos específicos em 1–2 frases.]",
        itens: ["[Item do serviço]", "[Item do serviço]", "[Item do serviço]", "[Item do serviço]"],
        imagem: "imagens/servico-mecanico.jpg",
      },
    ],
  },

  processo: {
    titulo: "Como trabalhamos",
    lista: [
      { titulo: "[Etapa 1]", texto: "[Ex.: Visita técnica e levantamento]" },
      { titulo: "[Etapa 2]", texto: "[Ex.: Proposta e cronograma]" },
      { titulo: "[Etapa 3]", texto: "[Ex.: Desenvolvimento do projeto]" },
      { titulo: "[Etapa 4]", texto: "[Ex.: Entrega com ART e acompanhamento]" },
    ],
  },

  numeros: [
    { valor: "[00]+", legenda: "[projetos entregues]" },
    { valor: "[00]+", legenda: "[clientes atendidos]" },
    { valor: "[00]", legenda: "[anos de experiência]" },
    { valor: "[00]", legenda: "[cidades atendidas]" },
  ],

  engenheiro: {
    titulo: "Sobre o engenheiro",
    nome: "[Nome do Engenheiro]",
    cargo: "Engenheiro Mecânico — CREA [UF 000000]",
    texto: "[Conte a formação, a experiência e o que motiva o trabalho. Dois parágrafos curtos funcionam bem.]",
    foto: "imagens/engenheiro.jpg",
    formacao: ["[Formação / especialização]", "[Certificação ou curso]", "[Experiência relevante]"],
  },

  diferenciais: {
    titulo: "Por que nos escolher",
    lista: [
      { titulo: "[Diferencial 1]", texto: "[Explique em uma frase.]" },
      { titulo: "[Diferencial 2]", texto: "[Explique em uma frase.]" },
      { titulo: "[Diferencial 3]", texto: "[Explique em uma frase.]" },
      { titulo: "[Diferencial 4]", texto: "[Explique em uma frase.]" },
    ],
  },

  clientes: {
    titulo: "Quem já confiou no nosso trabalho",
    mostrar: true,                              // false = esconde esta seção
    lista: [                                     // logo em imagens/clientes/ ou só o nome
      { nome: "[Cliente]", imagem: "" },
      { nome: "[Cliente]", imagem: "" },
      { nome: "[Cliente]", imagem: "" },
      { nome: "[Cliente]", imagem: "" },
      { nome: "[Cliente]", imagem: "" },
    ],
  },

  depoimentos: {
    titulo: "O que dizem os clientes",
    mostrar: true,
    lista: [
      { nome: "[Nome]", cargo: "[Cargo — Empresa]", texto: "[Depoimento do cliente.]" },
      { nome: "[Nome]", cargo: "[Cargo — Empresa]", texto: "[Depoimento do cliente.]" },
      { nome: "[Nome]", cargo: "[Cargo — Empresa]", texto: "[Depoimento do cliente.]" },
    ],
  },

  perguntas: {
    titulo: "Perguntas frequentes",
    lista: [
      { pergunta: "[Pergunta frequente]", resposta: "[Resposta.]" },
      { pergunta: "[Pergunta frequente]", resposta: "[Resposta.]" },
      { pergunta: "[Pergunta frequente]", resposta: "[Resposta.]" },
      { pergunta: "[Pergunta frequente]", resposta: "[Resposta.]" },
    ],
  },

  contato: {
    titulo: "Vamos conversar sobre o seu projeto",
    texto: "[Frase convidando o cliente a pedir orçamento.]",
  },
};
