// Monta a página a partir do conteudo.js — não precisa editar este arquivo.
(function () {
  const S = SITE, E = S.empresa;
  const $ = (id) => document.getElementById(id);
  const esc = (t) => String(t ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const whatsLink = (msg) => `https://wa.me/${E.whatsapp}?text=${encodeURIComponent(msg || E.mensagemWhatsapp)}`;
  const setText = (id, t) => { const el = $(id); if (el) el.textContent = t ?? ""; };
  const bgImg = (el, src) => {
    if (!src || !el) return;
    const i = new Image();
    i.onload = () => { el.style.backgroundImage = `url("${src}")`; el.classList.add("com-imagem"); };
    i.src = src;
  };

  const root = document.documentElement.style;
  root.setProperty("--cor", E.corPrincipal);
  root.setProperty("--escura", E.corEscura);
  document.title = E.tituloAba;
  document.querySelector('meta[name="description"]').content = E.descricaoGoogle;

  const logoHTML = E.logo
    ? `<img src="${esc(E.logo)}" alt="${esc(E.nome)}">`
    : `<span class="logo-marca">${esc(E.nome.replace(/[\[\]]/g, "").charAt(0) || "E")}</span><span><strong>${esc(E.nome)}</strong><small>${esc(E.sufixo)}</small></span>`;
  $("logo").innerHTML = logoHTML;
  $("footer-logo").innerHTML = logoHTML;
  document.querySelectorAll("[data-whats]").forEach((a) => (a.href = whatsLink()));

  // Banner
  setText("banner-selo", S.banner.selo);
  setText("banner-titulo", S.banner.titulo);
  setText("banner-texto", S.banner.texto);
  setText("banner-botao1", S.banner.botao1);
  setText("banner-botao2", S.banner.botao2);
  $("banner-destaques").innerHTML = (S.banner.destaques || []).map((d) => `<li>${esc(d)}</li>`).join("");
  bgImg($("hero-img"), S.banner.imagem);

  // Serviços
  setText("servicos-titulo", S.servicos.titulo);
  setText("servicos-texto", S.servicos.texto);
  $("servicos-lista").innerHTML = S.servicos.lista.map((s, i) => `
    <article class="servico ${i % 2 ? "invertido" : ""}">
      <div class="servico-img" data-img="${esc(s.imagem)}"><span>${esc(s.icone)}</span></div>
      <div class="servico-body">
        <span class="servico-num">0${i + 1}</span>
        <h3>${esc(s.titulo)}</h3>
        <p>${esc(s.texto)}</p>
        <ul class="check">${(s.itens || []).map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
        <a class="btn btn-primary btn-sm" target="_blank" rel="noopener"
           href="${whatsLink(`Olá! Gostaria de um orçamento de: ${s.titulo}`)}">${esc(S.servicos.botao)}</a>
      </div>
    </article>`).join("");
  document.querySelectorAll(".servico-img").forEach((el) => bgImg(el, el.dataset.img));
  $("form-servico").innerHTML = S.servicos.lista.map((s) => `<option>${esc(s.titulo)}</option>`).join("") + "<option>Outro</option>";

  // Processo
  setText("processo-titulo", S.processo.titulo);
  $("processo-lista").innerHTML = S.processo.lista.map((p) =>
    `<li><h3>${esc(p.titulo)}</h3><p>${esc(p.texto)}</p></li>`).join("");

  // Números
  $("numeros-lista").innerHTML = S.numeros.map((n) =>
    `<div class="numero"><strong>${esc(n.valor)}</strong><span>${esc(n.legenda)}</span></div>`).join("");

  // Engenheiro
  const G = S.engenheiro;
  setText("eng-titulo", G.titulo);
  setText("eng-nome", G.nome);
  setText("eng-cargo", G.cargo);
  setText("eng-texto", G.texto);
  $("eng-formacao").innerHTML = (G.formacao || []).map((f) => `<li>${esc(f)}</li>`).join("");
  bgImg($("eng-foto"), G.foto);

  // Diferenciais
  setText("dif-titulo", S.diferenciais.titulo);
  $("dif-lista").innerHTML = S.diferenciais.lista.map((d, i) =>
    `<div class="dif"><span>${String(i + 1).padStart(2, "0")}</span><h3>${esc(d.titulo)}</h3><p>${esc(d.texto)}</p></div>`).join("");

  // Clientes
  if (S.clientes.mostrar === false) $("clientes").remove();
  else {
    setText("clientes-titulo", S.clientes.titulo);
    $("clientes-lista").innerHTML = S.clientes.lista.map((c) =>
      `<div class="logo-item">${c.imagem ? `<img src="${esc(c.imagem)}" alt="${esc(c.nome)}" loading="lazy">` : `<span>${esc(c.nome)}</span>`}</div>`).join("");
  }

  // Depoimentos
  if (S.depoimentos.mostrar === false) {
    $("depoimentos").remove();
    document.querySelector('[data-secao="depoimentos"]')?.remove();
  } else {
    setText("dep-titulo", S.depoimentos.titulo);
    $("dep-lista").innerHTML = S.depoimentos.lista.map((d) => `
      <blockquote class="dep">
        <p>${esc(d.texto)}</p>
        <footer><strong>${esc(d.nome)}</strong><span>${esc(d.cargo)}</span></footer>
      </blockquote>`).join("");
  }

  // FAQ
  setText("faq-titulo", S.perguntas.titulo);
  $("faq-lista").innerHTML = S.perguntas.lista.map((q) =>
    `<details class="pergunta"><summary>${esc(q.pergunta)}</summary><p>${esc(q.resposta)}</p></details>`).join("");

  // Contato
  setText("contato-titulo", S.contato.titulo);
  setText("contato-texto", S.contato.texto);
  $("contato-info").innerHTML = [
    ["WhatsApp", E.whatsappExibicao], ["E-mail", E.email], ["Endereço", E.endereco],
    ["Atendimento", E.horario], ["Região", E.regiao],
  ].filter((x) => x[1]).map(([l, t]) => `<li><small>${l}</small>${esc(t)}</li>`).join("");

  $("form").addEventListener("submit", (ev) => {
    ev.preventDefault();
    const f = new FormData(ev.target);
    const msg = `Olá! Meu nome é ${f.get("nome")}.\nTelefone: ${f.get("telefone")}\nServiço: ${f.get("servico")}\n\n${f.get("mensagem")}`;
    window.open(whatsLink(msg), "_blank");
  });

  // Rodapé
  setText("footer-texto", `© ${new Date().getFullYear()} ${E.nome} ${E.sufixo} · CNPJ ${E.cnpj}`);
  $("footer-links").innerHTML = [["Instagram", E.instagram], ["LinkedIn", E.linkedin]]
    .filter((x) => x[1]).map(([n, u]) => `<a href="${esc(u)}" target="_blank" rel="noopener">${n}</a>`).join("");

  // Menu mobile + sombra no topo
  $("menu-toggle").addEventListener("click", () => $("nav").classList.toggle("aberto"));
  document.querySelectorAll("#nav a").forEach((a) => a.addEventListener("click", () => $("nav").classList.remove("aberto")));
  addEventListener("scroll", () => $("header").classList.toggle("rolado", scrollY > 10));
})();
