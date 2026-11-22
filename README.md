# Site institucional — Engenharia / Prevenção contra incêndio

Site de uma página só, feito em HTML/CSS/JS puro (não precisa instalar nada).

## Como editar

**Todos os textos ficam no arquivo [`conteudo.js`](conteudo.js).**

1. Abra `conteudo.js` aqui no GitHub e clique no lápis ✏️ (Edit).
2. Troque o que estiver entre aspas: nome da empresa, WhatsApp, e-mail, serviços, depoimentos etc.
3. Clique em **Commit changes**. Em 1–2 minutos o site publicado é atualizado.

Cuidado só para não apagar aspas `"`, vírgulas `,` ou chaves `{ }`.

## Imagens

Envie as fotos para a pasta [`imagens/`](imagens) (botão **Add file → Upload files**) com estes nomes, ou mude os caminhos no `conteudo.js`:

| Arquivo | Onde aparece | Tamanho sugerido |
|---|---|---|
| `imagens/banner.jpg` | Fundo do topo | 1920×900 |
| `imagens/servico-1.jpg` … `servico-6.jpg` | Cards de serviços | 800×500 |
| `imagens/sobre.jpg` | Seção "Sobre nós" | 900×900 |
| `imagens/logo.png` | Logo (preencha `logo:` no conteudo.js) | altura ~100px |
| `imagens/clientes/*.png` | Logos de clientes | ~300×150 |

Enquanto uma imagem não existir, o site mostra um fundo escuro no lugar.

## Publicar (GitHub Pages)

Settings → Pages → *Build and deployment* → Source: **Deploy from a branch** → Branch: `main` / `(root)` → Save.
O endereço aparece no topo da mesma página. Para usar domínio próprio, preencha **Custom domain**.

## Cores

No `conteudo.js`, em `empresa`, troque `corPrincipal` (botões/destaques) e `corEscura` (menu/rodapé).
