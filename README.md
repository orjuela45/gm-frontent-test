# Grupo marcos frontend test

Hola, esta es una prueba tecnica para grupo marcos haciendo uso de Angular, espero la prueba cumpla con lo requerido:

## Para tener en cuenta
Para poder usar este proyecto se debe primero ejecutar el proyecto de laravel y tener en cuenta en cuenta cual es el puerto que esta haciendo uso

## Instrucciones

1. Descargar el repositorio con git clone
2. Entrar a la carpeta descargada e instalar los paquetes de node con el comando __npm i__
3. En el archivo \src\app\shared\curso.service.ts en la linea 10, se debe cambiar el puerto 8000 por el que esta haciendo uso laravel.
4. Si se va a hacer uso del proyecto en modo de desarrollo ejecutar el comando __ng serve__ (Recomiendo esta)
5. Si se va a hacer uso del proyecto en modo produccion se debe hacer lo siguiente:
5.1 Instalar el paquete http-server para poder montar un servidor local (recomiendo leer esta pagina para ver como funciona https://www.npmjs.com/package/http-server)
5.2 Ejecutar el comando __ng build__ para construir los archivos
5.3 En la carpeta ./dist generada ejecutar el comando __http-server -o__ 

Con esto ya tendremos el proyecto de frontend ejecutandose y haciendo uso de la api de laravel
