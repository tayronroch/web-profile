# Portfolio Pessoal - Tayron Rocha

Portfolio pessoal desenvolvido com React + Vite, integrado com a API do GitHub para exibir estatísticas e repositórios em tempo real.

**Live Demo**: [tayronrocha.com](https://tayronrocha.com)

## Features

- Design moderno e responsivo
- Suporte a Dark Mode
- Integração com GitHub API
  - Estatísticas em tempo real (repos, stars, forks, seguidores)
  - Top 5 linguagens mais usadas
  - Repositórios em destaque
  - Cards visuais com GitHub Readme Stats
- Animações e transições suaves
- Performance otimizada
- HTTPS com certificado SSL automático
- Docker pronto para deploy

## Tecnologias

- **Frontend**: React 18 + Vite
- **Styling**: TailwindCSS
- **Icons**: React Icons
- **Carousel**: React Slick
- **Deploy**: Docker + Nginx + Coolify + Traefik
- **CI/CD**: Coolify (auto-deploy via GitHub)

## Instalação Local

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Passos

1. Clone o repositório:
```bash
git clone https://github.com/tayronroch/web-profile.git
cd web-profile
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env.local
```

Edite o `.env.local` com suas credenciais:
```bash
VITE_GITHUB_USERNAME=seu_username
VITE_GITHUB_TOKEN=seu_token_aqui  # Opcional
```

4. Execute o projeto:
```bash
npm run dev
```

5. Acesse: `http://localhost:5173`

## Variáveis de Ambiente

| Variável | Descrição | Obrigatório |
|----------|-----------|-------------|
| `VITE_GITHUB_USERNAME` | Seu username do GitHub | ✅ Sim |
| `VITE_GITHUB_TOKEN` | Token de acesso do GitHub | ❌ Opcional* |

**Nota**: O token é opcional, mas recomendado para evitar rate limit da API (60 req/hora sem token, 5000 req/hora com token).

### Como obter o GitHub Token:

1. Acesse: [github.com/settings/tokens](https://github.com/settings/tokens)
2. Clique em "Generate new token (classic)"
3. Selecione as permissões: `public_repo`, `read:user`
4. Copie o token gerado

## Deploy

Este projeto está configurado para deploy no **Coolify** com **Traefik**.

### Deploy Rápido:

1. No Coolify, crie um novo projeto
2. Conecte o repositório GitHub
3. Configure as variáveis de ambiente
4. Faça o deploy

Para instruções detalhadas, consulte o [**DEPLOY.md**](./DEPLOY.md), que inclui:

- ✅ Configuração completa do Coolify
- ✅ Labels do Traefik configuradas
- ✅ Certificado SSL automático (Let's Encrypt)
- ✅ Redirects HTTP → HTTPS
- ✅ Health checks
- ✅ Security headers
- ✅ Troubleshooting

### Deploy com Docker:

```bash
docker-compose up -d --build
```

## Estrutura do Projeto

```
web-profile/
├── src/
│   ├── components/
│   │   ├── Header.jsx           # Cabeçalho com navegação
│   │   ├── Home.jsx              # Seção inicial/hero
│   │   ├── Skills.jsx            # Habilidades técnicas
│   │   ├── GitHubStats.jsx       # Estatísticas do GitHub
│   │   ├── FeaturedRepos.jsx     # Repositórios em destaque
│   │   ├── Projects.jsx          # Projetos
│   │   ├── Blog.jsx              # Blog/artigos
│   │   └── FloatButtons.jsx      # Botões flutuantes
│   ├── App.jsx                   # Componente principal
│   └── main.jsx                  # Entry point
├── public/                       # Assets públicos
├── Dockerfile                    # Configuração Docker
├── docker-compose.yml            # Compose com labels Traefik
├── nginx.conf                    # Configuração Nginx
├── .env.example                  # Template de variáveis
├── DEPLOY.md                     # Instruções de deploy
└── README.md                     # Este arquivo
```

## Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## Segurança

- Headers de segurança configurados no Nginx
- HTTPS obrigatório com redirect automático
- HSTS habilitado (força HTTPS por 1 ano)
- Container Docker otimizado (Alpine)
- Variáveis de ambiente não commitadas

## Health Check

Endpoint de health check disponível em:
```
https://tayronrocha.com/health
```

Retorna: `healthy`

## Troubleshooting

### GitHub API Rate Limit

Se você atingir o rate limit da API do GitHub:
- Configure o `VITE_GITHUB_TOKEN` no `.env.local`
- Isso aumenta o limite de 60 para 5000 requisições/hora

### Repositórios não carregam

Verifique:
1. Se o username está correto no `.env.local`
2. Se o token está válido (se configurado)
3. Console do navegador para erros

Para mais problemas, consulte a seção **Troubleshooting** no [DEPLOY.md](./DEPLOY.md).

## To-Do

- ❌ Adicionar seção de certificações
- ❌ Integrar blog com API
- ❌ Adicionar analytics
- ❌ Testes automatizados
- ❌ Modo offline com cache

## Contato

- **Website**: [tayronrocha.com](https://tayronrocha.com)
- **LinkedIn**: [linkedin.com/in/tayronroch](https://www.linkedin.com/in/tayronroch/)
- **GitHub**: [github.com/tayronroch](https://github.com/tayronroch)
- **Email**: [contato@tayronrocha.com](mailto:contato@tayronrocha.com)

## Licença

Este projeto é pessoal e de código aberto. Sinta-se livre para usar como referência!
