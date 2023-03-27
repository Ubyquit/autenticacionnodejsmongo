# Autenticación de usuarios en Node.js y MongoDB

Este es un ejemplo de autenticación de usuarios en Node.js utilizando MongoDB para almacenar los datos de los usuarios y express-session para manejar las sesiones de usuario.

## Requisitos

Para ejecutar este proyecto, necesitará tener instalado lo siguiente:

- Node.js
- MongoDB

## Instalación

1. Clone este repositorio en su computadora:
git clone https://github.com/tu-usuario/autenticacionnodejsmongo.git


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

.
├── models/
│   └── user.js
├── public/
│   ├── css/
│   │   └── main.css
│   └── js/
│       └── main.js
├── routes/
│   ├── auth.js
│   └── index.js
├── views/
│   ├── login.ejs
│   ├── register.ejs
│   └── welcome.ejs
├── .env
├── .gitignore
├── app.js
├── package-lock.json
└── package.json


## Contribuir

Si desea contribuir a este proyecto, ¡será bienvenido! Simplemente realice los cambios y envíe una solicitud de extracción.

## Licencia

Este proyecto está bajo la Licencia MIT.
