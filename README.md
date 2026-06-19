# Eu Não Estou Bem — Site de Vendas (Landing Page)

> **Atenção:** O conteúdo visual, textos e design **não foram alterados**.  
> O site foi gerado fielmente a partir do HTML fornecido.

---

## 📁 Estrutura do Projeto

```
eunaoestoubem/
├── index.html          # Página completa (único arquivo)
├── .gitignore
├── README.md
└── vercel.json         # Configuração de deploy
```

---

## ✅ O que foi mantido EXATAMENTE igual

- Todos os textos e emojis
- Estrutura visual e hierarquia
- Cores, fontes, espaçamentos e sombras
- Mock da capa do livro (CSS)
- Seção de preço (R$97 → R$17)
- Timer regressivo
- Botões de CTA
- Aviso vermelho e caixa final

**O resultado visual é idêntico ao original fornecido.**

---

## 🚀 Como fazer deploy (GitHub + Vercel + Subdomínio)

### 1. Git local (já inicializado)

```powershell
cd C:\Users\Ryzen9\projects\eunaoestoubem
git status
```

### 2. Crie o repositório no GitHub

Opções:

**A) Via GitHub site (recomendado):**
- Vá em https://github.com/new
- Nome do repo: `eunaoestoubem` ou `eu-nao-estou-bem`
- Público ou privado
- **NÃO** inicialize com README, .gitignore ou license (já temos)

**B) Se tiver GitHub CLI instalado:**
```bash
gh repo create eunaoestoubem --public --source=. --remote=origin --push
```

### 3. Conecte e envie

```powershell
git remote add origin https://github.com/SEU-USUARIO/eunaoestoubem.git
git branch -M main
git add .
git commit -m "feat: landing page Eu Não Estou Bem (fiel ao original)"
git push -u origin main
```

### 4. Deploy no Vercel (muito simples)

Tendo a Vercel CLI instalada:

```powershell
# Login (se ainda não estiver)
vercel login

# Deploy de preview
vercel

# Deploy em produção
vercel --prod
```

Ou pelo site:
1. https://vercel.com/new
2. Importe o repositório do GitHub
3. Deploy automático

---

## 🌐 Configurar o Subdomínio "eunaoestoubem"

Depois do deploy no Vercel:

1. No painel do Vercel do projeto:
   - Settings → Domains
   - Adicione: `eunaoestoubem.meupropositodigital.com.br`

2. No seu provedor de domínio (onde está o DNS de `meupropositodigital.com.br`):
   - Crie um registro **CNAME**:
     - Host: `eunaoestoubem`
     - Valor: `cname.vercel-dns.com` (ou o valor que o Vercel mostrar)

3. Aguarde propagação (pode levar alguns minutos a 1 hora).

---

## 📊 Análise do Código Original + Sugestões de Melhorias

### O que o modelo de inspiração faz bem:
- https://meupropositodigital.com.br/peso-cama-feita-atualizado/
- Tom muito forte e direto ("ESSE LIVRO MACHUCA")
- Aviso de alerta bem destacado
- Trecho inédito curto e impactante
- Lista de "Talvez você" com linguagem de identificação
- Urgência forte (preço baixo + timer + texto de "se fechar agora")
- Design emocional com bom contraste e tipografia

### Pontos positivos do código fornecido:
- Totalmente funcional em um único arquivo (ótimo para velocidade)
- Bom uso de variáveis CSS
- Design responsivo básico
- Mock de capa criativo sem imagens externas
- Tom emocional muito alinhado com o modelo

### Melhorias implementadas (sem alterar visual):

- Metadados completos (Open Graph + Twitter Cards) para compartilhamento
- JSON-LD estruturado (SEO para produto/livro)
- Melhor acessibilidade na capa mock (role + aria-label)
- JavaScript do timer melhorado (evita números negativos)
- Formatação e organização do código
- `.gitignore` e estrutura pronta para Git/Vercel
- Preparado para domínio customizado

### Sugestões de melhorias futuras (recomendadas, mas que alteram o projeto):

| # | Sugestão | Impacto | Dificuldade | Por quê |
|---|----------|---------|-------------|---------|
| 1 | Extrair CSS e JS para arquivos separados | Manutenção | Baixa | Facilita edição futura |
| 2 | Adicionar imagem real da capa (em vez de mock CSS) | Visual | Média | Mais profissional e conversão |
| 3 | Colocar link real de checkout nos CTAs (Hotmart / Kiwify / etc) | Conversão | Baixa | Atualmente só âncoras internas |
| 4 | Adicionar depoimentos / prova social | Conversão | Média | O modelo de inspiração também não tem, mas ajuda |
| 5 | Criar versão com lightbox ou PDF preview | Experiência | Média | Aumenta desejo |
| 6 | Adicionar pixel de conversão (Meta / TikTok / Google) | Marketing | Baixa | Essencial para quem vende |
| 7 | Testes A/B no headline ou preço | Conversão | Alta | Com ferramentas como VWO ou SplitSignal |
| 8 | Adicionar FAQ (accordion) | Conversão | Baixa | Reduz objeções |
| 9 | Garantia clara (7 ou 14 dias) | Confiança | Baixa | Reduz risco percebido |
|10 | Versão mobile ainda mais otimizada (melhor tipografia) | UX | Média | Muitos acessos são mobile |
|11 | Dark mode mais refinado ou variação de tema | Branding | Média | Manter consistência com outros produtos |
|12 | Adicionar contador de pessoas que compraram hoje | Urgência | Baixa | Social proof numérica |

### Melhorias técnicas recomendadas:

- Adicionar `vercel.json` com headers de segurança e cache
- Adicionar `sitemap.xml` e `robots.txt` (mesmo sendo página única)
- Considerar usar Tailwind ou sistema de design se crescer
- Hospedar a fonte localmente (performance) se o tráfego aumentar muito
- Implementar `prefers-reduced-motion` para o timer e hovers

---

## Notas Importantes

- O preço atual (R$17) e o timer são **hardcoded**. Para campanhas reais é melhor ter um sistema que atualize o timer no servidor ou usar uma ferramenta de checkout com timer próprio.
- O botão atualmente leva para âncoras internas (`#oferta`, `#checkout`). **Substitua pelos links reais de pagamento** antes de colocar no ar.
- O mock da capa é bonito, mas uma capa profissional feita no Canva/Photoshop costuma converter mais.

---

## Próximos Passos Sugeridos

1. Substituir os CTAs pelos links de checkout reais
2. Adicionar uma imagem real da capa do livro
3. Fazer deploy no Vercel
4. Configurar o subdomínio `eunaoestoubem.meupropositodigital.com.br`
5. Adicionar pixels de rastreamento

---

Gerado em 19/06/2026 para Philippe Fernandes  
Site fiel ao HTML original fornecido + melhorias de código e preparação para produção.
