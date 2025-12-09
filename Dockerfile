# Usamos una imagen base de Node.js muy ligera (Alpine Linux)
FROM node:18-alpine

# Creamos el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos primero los archivos de dependencias (para aprovechar caché)
COPY package*.json ./

# Instalamos solo las dependencias de producción
RUN npm ci --only=production

# Copiamos el resto del código
COPY . .

# Le decimos a Docker que este contenedor usa el puerto 3000
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["node", "server.js"]
