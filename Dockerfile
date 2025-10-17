# Utiliza NPM
FROM node:lts-alpine as builder

# Directorio de trabajo
WORKDIR /app

# Copiar dependencias a root.
COPY package.json package-lock.json ./

# Instalar dependencias del package.json
RUN npm ci

# Copiar el resto del código de la aplicación
COPY . .

# Corre la aplicacion
RUN npm run build

# Corre nginx.
FROM nginx:alpine

# Copia assets a /app/dist
COPY --from=builder /app/dist /usr/share/nginx/html

# Copia configuracion personalizada (optional)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expone el puerto http
EXPOSE 80

# Corre el web server
CMD ["nginx", "-g", "daemon off;"]

