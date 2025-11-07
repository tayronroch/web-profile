# Dockerfile para Next.js
FROM node:18-alpine AS base

# Stage 1: Instalar dependências
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Build arguments para variáveis de ambiente
ARG NEXT_PUBLIC_GITHUB_USERNAME
ARG NEXT_PUBLIC_GITHUB_TOKEN
ARG VITE_GITHUB_USERNAME
ARG VITE_GITHUB_TOKEN

# Copiar package files
COPY package*.json ./

# Instalar dependências
RUN npm ci

# Stage 2: Build da aplicação
FROM base AS builder
WORKDIR /app

# Build arguments
ARG NEXT_PUBLIC_GITHUB_USERNAME
ARG NEXT_PUBLIC_GITHUB_TOKEN
ARG VITE_GITHUB_USERNAME
ARG VITE_GITHUB_TOKEN

# Set as environment variables
ENV NEXT_PUBLIC_GITHUB_USERNAME=$NEXT_PUBLIC_GITHUB_USERNAME
ENV NEXT_PUBLIC_GITHUB_TOKEN=$NEXT_PUBLIC_GITHUB_TOKEN
ENV VITE_GITHUB_USERNAME=$VITE_GITHUB_USERNAME
ENV VITE_GITHUB_TOKEN=$VITE_GITHUB_TOKEN

# Copiar dependências
COPY --from=deps /app/node_modules ./node_modules

# Copiar código fonte
COPY . .

# Desabilitar telemetria do Next.js
ENV NEXT_TELEMETRY_DISABLED=1

# Build da aplicação
RUN npm run build

# Stage 3: Production runner
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copiar arquivos públicos
COPY --from=builder /app/public ./public

# Copiar arquivos standalone
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

# Expor porta 8383
EXPOSE 8383

ENV PORT=8383
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
