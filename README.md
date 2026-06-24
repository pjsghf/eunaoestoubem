# Eu Não Estou Bem — Landing Page (Atualizado)

> Todas as melhorias de design, efeitos e código foram implementadas mantendo **100% dos textos e tom emocional** do original.

## 📁 Nova Estrutura

```
eunaoestoubem/
├── index.html
├── css/
│   └── style.css          ← Estilos completos + melhorias
├── js/
│   └── script.js          ← Todos os efeitos e interações
├── .gitignore
├── README.md
└── vercel.json
```

---

## ✅ O que foi mantido EXATAMENTE

- Todos os textos originais (sem nenhuma alteração de conteúdo)
- Tom emocional cru e acolhedor
- Cores, tipografia e identidade visual principal
- Aviso vermelho, trecho, sintomas, preço R$17, timer, final warning

---

## 🚀 Melhorias Implementadas

### Design
- Container mais largo em desktop (620px)
- Nova seção **“O que você vai encontrar dentro”**
- Seção de **depoimentos** (3 placeholders — substitua)
- **Garantia** clara de 7 dias
- Hierarquia de preço melhorada (R$17 muito mais destacado)
- Mais “ar” e espaçamento entre seções
- Cards com hover sutil

### Efeitos e Micro-interações
- **Efeito de tilt 3D** na capa do livro (mouse + toque)
- **Animações de entrada** suaves nas seções (scroll reveal)
- CTAs com brilho dourado + efeito de ripple no clique
- Timer fica vermelho e pulsa quando falta menos de 2 minutos
- **Sticky CTA** no mobile (aparece após rolar)
- Hover mais rico nos cards e botões
- Respeito total a `prefers-reduced-motion`

### Código & Performance
- CSS e JS extraídos (muito mais fácil de manter)
- Preload de fontes
- IntersectionObserver para animações (performático)
- Data attributes nos CTAs (pronto para analytics/pixels)
- Acessibilidade melhorada (focus visible)
- Estrutura preparada para imagem real da capa

---

## 📸 Como colocar a capa real do livro

1. Crie a pasta `images/` dentro do projeto
2. Coloque sua capa como `images/capa.jpg` (ou .png/webp)
3. No `index.html`, substitua o bloco `.mock-book` por:

```html
<img src="images/capa.jpg" alt="Capa do livro Eu Não Estou Bem" class="book-cover">
```

O efeito de tilt continuará funcionando.

---

## 🔗 Links de Checkout

Atualmente os botões vão para âncoras internas (`#oferta`, `#checkout`).

**Substitua** os `href` pelos seus links reais de pagamento (Hotmart, Kiwify, etc).

Exemplo:
```html
<a href="https://pay.hotmart.com/SEULINK" class="cta" data-cta="oferta">Quero ler agora</a>
```

---

## 📊 O que ainda falta você me fornecer

Por favor, me envie o que puder para eu finalizar:

1. **Imagem da capa do livro** (jpg/png/webp idealmente em boa resolução)
2. **Link real de checkout/pagamento** (o botão principal)
3. **Depoimentos reais** (se tiver — ou confirme se quer manter os exemplos)
4. **Texto exato da garantia** (7 dias? 14 dias? condições?)
5. **Imagem para Open Graph** (opcional — pode ser a própria capa)
6. **Link do subdomínio final** (para atualizar as meta tags)
7. ~~**Pixel de rastreamento** (Meta já instalado)~~ — Meta Pixel já está configurado (só falta o ID)

---

## 📈 Meta Pixel instalado

O **Meta Pixel** já foi adicionado ao site:

- **PageView**: Dispara automaticamente ao carregar a página.
- **ViewContent**: Dispara automaticamente após **5 segundos** de permanência no site (útil para identificar visitantes engajados).

**Como configurar:**

1. Abra o arquivo `index.html`
2. Procure por `YOUR_PIXEL_ID_HERE` (aparece 2 vezes)
3. Substitua pelo seu **Pixel ID** real (encontrado no Meta Business Suite → Eventos → Pixels)

O código está logo após a tag `<head>`.

Se quiser adicionar outros eventos (AddToCart no clique do botão, Purchase após checkout, etc.), me avise.

---

## Deploy

O projeto está pronto para Vercel.

Depois de colocar os arquivos no GitHub:

```bash
vercel --prod
```

Depois configure o domínio `eunaoestoubem.meupropositodigital.com.br`.

---

Gerado em 19/06/2026 — Todas as sugestões anteriores foram aplicadas.
