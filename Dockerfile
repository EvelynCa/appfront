# Etapa de construcción
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Etapa de producción
FROM nginx:alpine

# Copia archivos estáticos de React al contenedor de nginx
COPY --from=build /app/build /usr/share/nginx/html

# Elimina la configuración por defecto y copia la nuestra (opcional)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
