# Usamos Nginx, que es un servidor web muy rápido y ligero
FROM nginx:alpine

# Copiamos todos tus archivos (index.html, carpetas css, js, etc.) 
# a la carpeta donde Nginx sirve el contenido por defecto
COPY . /usr/share/nginx/html

# Nginx corre por defecto en el puerto 80
EXPOSE 80

# El servidor se inicia automáticamente, no necesitas CMD extra
