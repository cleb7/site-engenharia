/* =========================================================================
   CONTEÚDO DO SITE — EDITE AQUI
   -------------------------------------------------------------------------
   Todos os textos, telefones, serviços, depoimentos e imagens do site ficam
   neste arquivo. Basta trocar o que está entre aspas e salvar (commit).
   - Imagens: envie para a pasta /imagens e coloque o caminho aqui
     (ex.: "imagens/minha-foto.jpg"). Se a imagem não existir, o site mostra
     um fundo escuro no lugar, então nada quebra.
   - Para remover um item de uma lista (serviço, depoimento...), apague o
     bloco { ... } inteiro, incluindo a vírgula.
   ========================================================================= */

const SITE = {
  empresa: {
    nome: "SUA EMPRESA",
    sufixo: "ENGENHARIA",              // aparece ao lado do nome no logo
    logo: "",                           // ex.: "imagens/logo.png" (vazio = logo em texto)
    titulo: "Sua Empresa Engenharia — Prevenção contra incêndio",
    descricao: "Projetos preventivos, alvarás e regularização junto ao Corpo de Bombeiros.",
    regiao: "Atendemos toda a região de Sua Cidade. Atendimento presencial mediante agendamento.",
    whatsapp: "5548999999999",          // só números, com 55 + DDD
    whatsappExibicao: "(48) 99999-9999",
    mensagemWhatsapp: "Olá! Vim pelo site e gostaria de um orçamento.",
    email: "contato@suaempresa.com.br",
    endereco: "Rua Exemplo, 123 — Centro, Sua Cidade/SC",
    horario: "Segunda a sexta, das 8h às 18h",
    instagram: "https://instagram.com/suaempresa",
    cnpj: "00.000.000/0001-00",
    corPrincipal: "#e04848",            // cor dos botões e destaques
    corEscura: "#1d1d1f",               // cor do menu e rodapé
  },

  banner: {
    titulo: "Especialistas em soluções de prevenção contra incêndio na sua região",
    texto: "Cuidamos de todo o processo para deixar sua edificação regularizada junto ao Corpo de Bombeiros, com rapidez, transparência e acompanhamento do início ao fim.",
    imagem: "imagens/banner.jpg",
    botao1: "Conheça nossos serviços",
    botao2: "Contato",
  },

  clientes: {
    titulo: "Empresas que confiam no nosso trabalho",
    // Coloque os logos em imagens/clientes/ e liste aqui. Se não tiver logo, deixe imagem vazia: aparece o nome.
    lista: [
      { nome: "Cliente 1", imagem: "" },
      { nome: "Cliente 2", imagem: "" },
      { nome: "Cliente 3", imagem: "" },
      { nome: "Cliente 4", imagem: "" },
      { nome: "Cliente 5", imagem: "" },
      { nome: "Cliente 6", imagem: "" },
    ],
  },

  servicos: {
    titulo: "Serviços",
    texto: "Atuamos em todas as etapas da prevenção contra incêndio: do projeto à liberação final da sua edificação.",
    botao: "Quero esse serviço",
    lista: [
      {
        titulo: "PPCI — Projeto Preventivo Contra Incêndio",
        texto: "Desenvolvemos o projeto preventivo de acordo com as normas vigentes e acompanhamos a análise até a aprovação.",
        imagem: "imagens/servico-1.jpg",
      },
      {
        titulo: "Alvarás do Corpo de Bombeiros",
        texto: "Executamos os sistemas previstos no projeto e cuidamos da emissão dos alvarás e certificados necessários.",
        imagem: "imagens/servico-2.jpg",
      },
      {
        titulo: "Regularização de Edificações Existentes",
        texto: "Resolvemos pendências de imóveis já construídos, apontando o caminho mais econômico para a regularização.",
        imagem: "imagens/servico-3.jpg",
      },
      {
        titulo: "Laudos Técnicos com ART",
        texto: "Emitimos laudos de funcionamento dos sistemas preventivos, com Anotação de Responsabilidade Técnica.",
        imagem: "imagens/servico-4.jpg",
      },
      {
        titulo: "Inspeção Pré-Vistoria",
        texto: "Conferimos os sistemas antes da vistoria oficial e corrigimos o que for preciso para evitar reprovações.",
        imagem: "imagens/servico-5.jpg",
      },
      {
        titulo: "Consultoria Técnica",
        texto: "Orientação especializada para arquitetos, construtoras e proprietários em qualquer fase da obra.",
        imagem: "imagens/servico-6.jpg",
      },
    ],
  },

  depoimentos: {
    titulo: "O que os nossos clientes falam",
    lista: [
      { nome: "Nome do Cliente", cargo: "Síndico — Condomínio Exemplo", texto: "Atendimento excelente e muito rápido. Resolveram toda a documentação sem dor de cabeça." },
      { nome: "Nome do Cliente", cargo: "Proprietária — Loja Exemplo", texto: "Profissionais atenciosos, explicaram cada etapa e cumpriram todos os prazos combinados." },
      { nome: "Nome do Cliente", cargo: "Gerente — Empresa Exemplo", texto: "Recomendo! Conseguimos o alvará antes do previsto e com um custo menor do que esperávamos." },
    ],
  },

  numeros: {
    titulo: "Segurança no projeto, economia garantida",
    lista: [
      { valor: "+ R$ 000.000", legenda: "de economia gerada aos clientes" },
      { valor: "+ 000", legenda: "projetos aprovados" },
      { valor: "+ 00", legenda: "anos de experiência" },
    ],
  },

  sobre: {
    titulo: "Sobre nós",
    texto: "Conte aqui a história da sua empresa: quando começou, quem são os responsáveis técnicos, em que região atua e o que vocês fazem de diferente. Um ou dois parágrafos curtos funcionam melhor.",
    imagem: "imagens/sobre.jpg",
    pilares: [
      { titulo: "Missão", texto: "Escreva aqui a missão da empresa." },
      { titulo: "Visão", texto: "Escreva aqui a visão da empresa." },
      { titulo: "Valores", texto: "Ética, transparência, compromisso com prazos e segurança em primeiro lugar." },
    ],
  },

  diferenciais: {
    titulo: "Motivos para escolher a Sua Empresa",
    lista: [
      { icone: "🎯", titulo: "Especialização", texto: "Equipe dedicada exclusivamente à área de prevenção contra incêndio." },
      { icone: "⚡", titulo: "Qualidade e agilidade", texto: "Processos organizados para entregar no prazo, sem retrabalho." },
      { icone: "🛡️", titulo: "Garantia", texto: "Acompanhamos o seu processo até a aprovação final." },
    ],
  },

  contato: {
    titulo: "Faça um orçamento!",
    texto: "Entre em contato conosco e receba uma proposta sem compromisso.",
  },
};
