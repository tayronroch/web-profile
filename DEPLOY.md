# Deploy no Coolify

Este documento contém instruções para fazer o deploy da aplicação no Coolify.

## Pré-requisitos

1. Coolify instalado e configurado
2. Traefik configurado no Coolify
3. Domínio apontado para o servidor (tayronrocha.com)
4. GitHub token (opcional, mas recomendado)

## Configuração no Coolify

### 1. Criar novo projeto

1. Acesse o Coolify
2. Crie um novo projeto
3. Conecte o repositório GitHub: `https://github.com/tayronroch/web-profile`

### 2. Configurar Build

- **Build Type**: Dockerfile
- **Dockerfile Path**: `./Dockerfile`
- **Build Context**: `.`

### 3. Configurar Variáveis de Ambiente

No painel de Environment Variables do Coolify, adicione:

```bash
VITE_GITHUB_USERNAME=tayronroch
VITE_GITHUB_TOKEN=seu_token_aqui  # Opcional
```

**Para obter o GitHub Token:**
1. Acesse: https://github.com/settings/tokens
2. Clique em "Generate new token (classic)"
3. Selecione as permissões: `public_repo`, `read:user`
4. Copie o token e cole na variável de ambiente

### 4. Configurar Rede

- **Network**: Certifique-se de que o container está na rede `traefik`
- As labels do Traefik já estão configuradas no `docker-compose.yml`

### 5. Configurar Domínio

No Coolify, configure os domínios:
- `tayronrocha.com`
- `www.tayronrocha.com`

O Traefik irá:
- Redirecionar HTTP → HTTPS automaticamente
- Redirecionar www → non-www
- Gerar certificados SSL automaticamente com Let's Encrypt

## Deploy Manual (via Docker Compose)

Se preferir fazer deploy manual sem o Coolify:

```bash
# Clone o repositório
git clone https://github.com/tayronroch/web-profile.git
cd web-profile

# Copie o .env.example e configure
cp .env.example .env.local
# Edite o .env.local com suas credenciais

# Build e deploy
docker-compose up -d --build
```

## Verificação

Após o deploy, verifique:

1. **Health Check**: `https://tayronrocha.com/health`
   - Deve retornar: `healthy`

2. **Aplicação**: `https://tayronrocha.com`
   - Deve carregar a página principal

3. **Certificado SSL**:
   - Verifique se o certificado Let's Encrypt foi gerado
   - Deve ter o cadeado verde no navegador

4. **Redirecionamentos**:
   - `http://tayronrocha.com` → `https://tayronrocha.com`
   - `https://www.tayronrocha.com` → `https://tayronrocha.com`

## Troubleshooting

### Labels do Traefik não funcionam

Verifique se o container está na rede correta:
```bash
docker network ls
docker network inspect traefik
```

### Certificado SSL não gerado

Verifique os logs do Traefik:
```bash
docker logs traefik
```

Certifique-se de que:
- O domínio está apontando para o servidor
- A porta 80 e 443 estão abertas no firewall
- O certresolver `letsencrypt` está configurado no Traefik

### Aplicação não carrega

Verifique os logs:
```bash
docker logs web-profile
```

### GitHub API rate limit

Se você não configurou o `VITE_GITHUB_TOKEN`, pode atingir o rate limit da API do GitHub (60 requisições/hora). Configure o token para aumentar para 5000 requisições/hora.

## Atualizações

Para atualizar a aplicação:

1. **No Coolify**:
   - Faça push das mudanças no GitHub
   - Clique em "Redeploy" no Coolify

2. **Deploy Manual**:
   ```bash
   git pull
   docker-compose up -d --build
   ```

## Monitoramento

- **Status da aplicação**: `https://tayronrocha.com/health`
- **Logs em tempo real**:
  ```bash
  docker logs -f web-profile
  ```

## Backup

Não há dados persistentes nesta aplicação. Todos os dados são buscados da API do GitHub em tempo real.

## Segurança

As seguintes medidas de segurança estão implementadas:

- Headers de segurança configurados no Nginx
- HTTPS obrigatório (redirect automático)
- Health checks ativos
- Container rodando como non-root
- Imagem Alpine (mínima)
- HSTS habilitado (força HTTPS por 1 ano)
