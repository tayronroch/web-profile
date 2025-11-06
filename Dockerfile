# Stage 1: Build
FROM node:18-alpine AS builder

WORKDIR /app

# Build arguments
ARG VITE_GITHUB_USERNAME
ARG VITE_GITHUB_TOKEN

# Set as environment variables for build
ENV VITE_GITHUB_USERNAME=$VITE_GITHUB_USERNAME
ENV VITE_GITHUB_TOKEN=$VITE_GITHUB_TOKEN

# Copiar package files
COPY package*.json ./

# Instalar dependências
RUN npm ci

# Copiar código fonte
COPY . .

# Build da aplicação
RUN npm run build

# Stage 2: Production
FROM nginx:alpine

# Copiar configuração customizada do nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar build da aplicação
COPY --from=builder /app/dist /usr/share/nginx/html

# Expor porta 8383
EXPOSE 8383

CMD ["nginx", "-g", "daemon off;"]
