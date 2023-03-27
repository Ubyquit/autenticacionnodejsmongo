# Autenticación de usuarios en Node.js y MongoDB

Este es un ejemplo de autenticación de usuarios en Node.js utilizando MongoDB para almacenar los datos de los usuarios y express-session para manejar las sesiones de usuario.

## Requisitos

Para ejecutar este proyecto, necesitará tener instalado lo siguiente:

- Node.js
- MongoDB

## Dependencias

- bcrypt v5.0.1
- body-parser v1.19.1
- connect-mongodb-session v3.1.1
- ejs v3.1.6
- express v4.17.2
- express-session v1.17.2
- mongoose v6.2.0
- passport v0.6.0

npm install bcrypt body-parser connect-mongodb-session ejs express express-session mongoose passport

o

npm install bcrypt@5.0.1 body-parser@1.19.1 connect-mongodb-session@3.1.1 ejs@3.1.6 express@4.17.2 express-session@1.17.2 mongoose@6.2.0 passport@0.6.0



## Instalación

1. Clone este repositorio en su computadora:
https://github.com/Ubyquit/autenticacionnodejsmongo.git

2. Navegue al directorio del proyecto:
cd autenticacionnodejsmongo


3. Instale las dependencias:
npm install


4. Crea un archivo `.env` en el directorio raíz del proyecto y define la variable `SESSION_SECRET` para el secreto de sesión de express-session:

SESSION_SECRET=secreto-de-sesion-aqui


## Uso

1. Inicie el servidor:
npm start


2. Abra su navegador web e ingrese la URL `http://localhost:3000`.

3. Registre un usuario en el formulario de registro.

4. Inicie sesión con las credenciales de usuario registradas.

5. Cierra sesión.

## Estructura del proyecto

- /node_modules: carpeta generada automáticamente por NPM cuando se instalan las dependencias.
- /src: carpeta que contiene todos los archivos fuente del proyecto.
- /src/models: carpeta que contendrá los modelos de la base de datos MongoDB.
- /src/routes: carpeta que contendrá las rutas de Express para el sistema de autenticación y registro de usuarios.
- /src/views: carpeta que contendrá las vistas HTML y CSS para el formulario de registro e inicio de sesión.
- app.js: archivo principal del proyecto que configura Express y establece la conexión a la base de datos MongoDB.
- .gitignore: archivo que especifica los archivos y carpetas que se deben ignorar en el control de versiones con Git.
- package.json: archivo generado automáticamente por NPM que contiene la información del proyecto y las dependencias.


## Contribuir

Si desea contribuir a este proyecto, ¡será bienvenido! Simplemente realice los cambios y envíe una solicitud de extracción.

## Licencia

Este proyecto está bajo la Licencia MIT.
