// Monta a página a partir do conteudo.js — não precisa editar este arquivo.
(function () {
  const S = SITE, E = S.empresa;
  const $ = (id) => document.getElementById(id);
  const esc = (t) => String(t ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const whatsLink = (msg) => `https://wa.me/${E.whatsapp}?text=${encodeURIComponent(msg || E.mensagemWhatsapp)}`;
  const img = (src, cls) => src ? `<img class="${cls}" src="${esc(src)}" alt="" loading="lazy" onerror="this.remove()">` : "";

  document.documentElement.style.setProperty("--cor", E.corPrincipal);
  document.documentElement.style.setProperty("--escura", E.corEscura);
  document.title = E.titulo;
  document.querySelector('meta[name="description"]').content = E.descricao;

  $("regiao").textContent = E.regiao;
  $("logo").innerHTML = E.logo
    ? `<img src="${esc(E.logo)}" alt="${esc(E.nome)}">`
    : `<strong>${esc(E.nome)}</strong> <span>${esc(E.sufixo)}</span>`;
  $("whats-numero").textContent = E.whatsappExibicao;
  $("header-whats").href = whatsLink();
  document.querySelectorAll("[data-whats]").forEach((a) => (a.href = whatsLink()));

  // Banner
  $("banner-titulo").textContent = S.banner.titulo;
  $("banner-texto").textContent = S.banner.texto;
  $("banner-botao1").textContent = S.banner.botao1;
  $("banner-botao2").textContent = S.banner.botao2;
  if (S.banner.imagem) {
    const i = new Image();
    i.onload = () => (document.querySelector(".hero").style.backgroundImage =
      `linear-gradient(90deg, rgba(0,0,0,.78), rgba(0,0,0,.25)), url("${S.banner.imagem}")`);
    i.src = S.banner.imagem;
  }

  // Clientes
  $("clientes-titulo").textContent = S.clientes.titulo;
  $("clientes-lista").innerHTML = S.clientes.lista.map((c) =>
    `<div class="logo-item">${c.imagem ? `<img src="${esc(c.imagem)}" alt="${esc(c.nome)}" loading="lazy">` : `<span>${esc(c.nome)}</span>`}</div>`).join("");

  // Serviços
  $("servicos-titulo").textContent = S.servicos.titulo;
  $("servicos-texto").textContent = S.servicos.texto;
  $("servicos-lista").innerHTML = S.servicos.lista.map((s) => `
    <article class="card">
      <div class="card-img">${img(s.imagem, "")}</div>
      <div class="card-body">
        <h3>${esc(s.titulo)}</h3>
        <p>${esc(s.texto)}</p>
        <a class="btn btn-primary btn-sm" target="_blank" rel="noopener"
           href="${whatsLink(`Olá! Tenho interesse no serviço: ${s.titulo}`)}">${esc(S.servicos.botao)}</a>
      </div>
    </article>`).join("");

  // Números
  $("numeros-titulo").textContent = S.numeros.titulo;
  $("numeros-lista").innerHTML = S.numeros.lista.map((n) =>
    `<div class="numero"><strong>${esc(n.valor)}</strong><span>${esc(n.legenda)}</span></div>`).join("");

  // Sobre
  $("sobre-titulo").textContent = S.sobre.titulo;
  $("sobre-texto").textContent = S.sobre.texto;
  $("sobre-img").innerHTML = img(S.sobre.imagem, "");
  $("sobre-pilares").innerHTML = S.sobre.pilares.map((p) =>
    `<div class="pilar"><h4>${esc(p.titulo)}</h4><p>${esc(p.texto)}</p></div>`).join("");

  // Diferenciais
  $("diferenciais-titulo").textContent = S.diferenciais.titulo;
  $("diferenciais-lista").innerHTML = S.diferenciais.lista.map((d) =>
    `<div class="dif"><div class="dif-icone">${esc(d.icone)}</div><h3>${esc(d.titulo)}</h3><p>${esc(d.texto)}</p></div>`).join("");

  // Depoimentos
  $("depoimentos-titulo").textContent = S.depoimentos.titulo;
  $("depoimentos-lista").innerHTML = S.depoimentos.lista.map((d) => `
    <blockquote class="dep">
      <div class="estrelas">★★★★★</div>
      <p>“${esc(d.texto)}”</p>
      <footer><strong>${esc(d.nome)}</strong><span>${esc(d.cargo)}</span></footer>
    </blockquote>`).join("");

  // Contato
  $("contato-titulo").textContent = S.contato.titulo;
  $("contato-texto").textContent = S.contato.texto;
  $("contato-info").innerHTML = [
    ["📱", E.whatsappExibicao], ["✉️", E.email], ["📍", E.endereco], ["🕒", E.horario],
  ].filter((x) => x[1]).map(([i, t]) => `<li><span>${i}</span>${esc(t)}</li>`).join("");

  $("form").addEventListener("submit", (ev) => {
    ev.preventDefault();
    const f = new FormData(ev.target);
    const msg = `Olá! Meu nome é ${f.get("nome")}.\nTelefone: ${f.get("telefone")}\nCidade: ${f.get("cidade")}\n\n${f.get("mensagem")}`;
    window.open(whatsLink(msg), "_blank");
  });

  // Rodapé
  $("footer-texto").textContent = `© ${new Date().getFullYear()} ${E.nome} ${E.sufixo} — CNPJ ${E.cnpj}`;
  if (E.instagram) $("footer-insta").href = E.instagram; else $("footer-insta").remove();

  // Menu mobile
  $("menu-toggle").addEventListener("click", () => $("nav").classList.toggle("aberto"));
  document.querySelectorAll("#nav a").forEach((a) => a.addEventListener("click", () => $("nav").classList.remove("aberto")));
})();
