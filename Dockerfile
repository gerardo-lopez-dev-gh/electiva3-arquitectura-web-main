# Etapa 1: Construcción
FROM node:20 AS build

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos necesarios
COPY package.json package-lock.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de los archivos
COPY . .

# Construir la aplicación Angular
RUN npm run build

# Etapa 2: Ejecución
FROM nginx:1.25

# Copiar los archivos construidos desde la etapa anterior
COPY --from=build /app/dist/sistema-fidelizacion /usr/share/nginx/html

# Exponer el puerto
EXPOSE 80

# Comando por defecto para iniciar el servidor
CMD ["nginx", "-g", "daemon off;"]
