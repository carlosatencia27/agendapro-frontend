\# 🚀 Guía de Despliegue - AgendaPro



Esta guía te muestra paso a paso cómo publicar AgendaPro en internet para que cualquiera pueda usarlo.



\## Opción 1: Netlify (Recomendada) ⭐



Netlify es gratis y super fácil de usar. Todo se hace automático.



\### Paso 1: Preparar el Proyecto



1\. Asegúrate de que tu código esté en GitHub

2\. Verifica que tengas el archivo `netlify.toml` en la raíz del proyecto

3\. Confirma que el `package.json` tenga el script `"build": "react-scripts build"`



\### Paso 2: Crear Cuenta en Netlify



1\. Ve a https://netlify.com

2\. Click en "Sign up"

3\. Elige "Sign up with GitHub"

4\. Autoriza a Netlify para acceder a tus repos



\### Paso 3: Importar el Proyecto



1\. En el dashboard de Netlify, click en "Add new site"

2\. Selecciona "Import an existing project"

3\. Elige "Deploy with GitHub"

4\. Busca y selecciona tu repositorio `agendapro-frontend`



\### Paso 4: Configurar el Build



Netlify detecta automáticamente que es un proyecto React, pero verifica:



```

Build command: npm run build

Publish directory: build

```



\### Paso 5: Variables de Entorno



1\. Antes de desplegar, ve a "Site settings" → "Environment variables"

2\. Agregar:

&nbsp;  - Key: `REACT\_APP\_API\_URL`

&nbsp;  - Value: `https://api.agendapro.com/v1`



\### Paso 6: Desplegar



1\. Click en "Deploy site"

2\. Espera 2-3 minutos mientras se construye

3\. ¡Listo! Te dará una URL tipo: `https://random-name-123.netlify.app`



\### Paso 7: Personalizar el Dominio (Opcional)



1\. Ve a "Site settings" → "Domain management"

2\. Click en "Change site name"

3\. Escribe: `agendapro-bellaimagen`

4\. Tu sitio quedará en: `https://agendapro-bellaimagen.netlify.app`



\### Actualizaciones Automáticas



Cada vez que hagas un commit a la rama `main`, Netlify desplegará automáticamente los cambios. No tienes que hacer nada más.



---



\## Opción 2: Vercel



Vercel es similar a Netlify, también gratis y automático.



\### Pasos:



1\. Ve a https://vercel.com

2\. Sign up con GitHub

3\. Click "Add New Project"

4\. Importa tu repositorio

5\. Vercel detecta React automático

6\. Agregar variable de entorno: `REACT\_APP\_API\_URL`

7\. Click "Deploy"



---



\## Opción 3: GitHub Pages



GitHub Pages es gratis pero requiere más configuración manual.



\### Paso 1: Instalar gh-pages



```bash

npm install --save-dev gh-pages

```



\### Paso 2: Modificar package.json



Agregar al principio:



```json

{

&nbsp; "homepage": "https://tuusuario.github.io/agendapro-frontend",

&nbsp; ...

}

```



Agregar scripts:



```json

{

&nbsp; "scripts": {

&nbsp;   ...

&nbsp;   "predeploy": "npm run build",

&nbsp;   "deploy": "gh-pages -d build"

&nbsp; }

}

```



\### Paso 3: Desplegar



```bash

npm run deploy

```



Esto creará una rama `gh-pages` con tu build.



\### Paso 4: Configurar GitHub



1\. Ve al repositorio en GitHub

2\. Settings → Pages

3\. En "Source", selecciona la rama `gh-pages`

4\. Click "Save"



Espera unos minutos y tu sitio estará en:

`https://tuusuario.github.io/agendapro-frontend`



\*\*Nota:\*\* GitHub Pages tiene limitaciones con React Router. Necesitas configuración adicional.



---



\## Opción 4: Heroku



Heroku es buena si también quieres desplegar el backend ahí.



\### Paso 1: Crear cuenta



1\. Ve a https://heroku.com

2\. Crea una cuenta gratis



\### Paso 2: Instalar Heroku CLI



```bash

\# En Mac

brew tap heroku/brew \&\& brew install heroku



\# En Windows

\# Descargar de https://devcenter.heroku.com/articles/heroku-cli

```



\### Paso 3: Login



```bash

heroku login

```



\### Paso 4: Crear la app



```bash

heroku create agendapro-frontend

```



\### Paso 5: Configurar buildpack



```bash

heroku buildpacks:set https://github.com/mars/create-react-app-buildpack.git

```



\### Paso 6: Variables de entorno



```bash

heroku config:set REACT\_APP\_API\_URL=https://api.agendapro.com/v1

```



\### Paso 7: Desplegar



```bash

git push heroku main

```



Tu app estará en: `https://agendapro-frontend.herokuapp.com`



---



\## Verificar que Todo Funciona



Después de desplegar, verifica:



1\. ✅ La página carga sin errores

2\. ✅ Puedes navegar entre páginas

3\. ✅ El login funciona

4\. ✅ Las peticiones al backend funcionan

5\. ✅ Los estilos se ven correctos



\### Si algo falla:



1\. Revisa los logs:

&nbsp;  - \*\*Netlify:\*\* Site settings → Build \& deploy → Deploy log

&nbsp;  - \*\*Vercel:\*\* Deployment → View Function Logs

&nbsp;  - \*\*Heroku:\*\* `heroku logs --tail`



2\. Verifica las variables de entorno



3\. Asegúrate que el backend esté corriendo



---



\## Despliegue con CI/CD (GitHub Actions)



Para despliegues automáticos con pruebas, el proyecto ya incluye `.github/workflows/deploy.yml`.



\### Qué hace este workflow:



1\. Se ejecuta cada vez que haces push a `main`

2\. Corre las pruebas

3\. Si pasan, genera el build

4\. Despliega automáticamente a Netlify



\### Configuración necesaria:



1\. Ve a tu repositorio en GitHub

2\. Settings → Secrets and variables → Actions

3\. Agregar secrets:

&nbsp;  - `NETLIFY\_AUTH\_TOKEN`: Token de Netlify

&nbsp;  - `NETLIFY\_SITE\_ID`: ID de tu sitio

&nbsp;  - `API\_URL`: URL del backend



Para obtener el token de Netlify:

1\. Netlify → User settings → Applications

2\. New access token

3\. Copiar el token



Para obtener el Site ID:

1\. Site settings → General → Site information

2\. Copiar el "Site ID"



---



\## Rollback (Volver a Versión Anterior)



Si algo salió mal después de desplegar:



\### En Netlify:

1\. Deploys → Ver todos los despliegues

2\. Encontrar la versión anterior que funcionaba

3\. Click en "Publish deploy"



\### En Vercel:

1\. Deployments → Seleccionar el anterior

2\. Click en los 3 puntos → "Promote to Production"



\### En Heroku:

```bash

heroku rollback

```



---



\## Monitoreo Post-Despliegue



\### Netlify Analytics (Gratis)

\- Site settings → Analytics

\- Te muestra: visitas, páginas más vistas, errores



\### Google Analytics (Gratis)

1\. Crear cuenta en https://analytics.google.com

2\. Obtener tracking ID

3\. Agregarlo a tu proyecto:



```javascript

// src/index.js

import ReactGA from 'react-ga4';



ReactGA.initialize('TU-TRACKING-ID');

```



---



\## Checklist Final



Antes de considerar el despliegue completo:



\- \[ ] La app funciona en producción

\- \[ ] Todas las rutas funcionan correctamente

\- \[ ] El login y logout funcionan

\- \[ ] Se pueden agendar citas

\- \[ ] Las pruebas pasan en CI/CD

\- \[ ] Los estilos se ven bien en móvil

\- \[ ] Las variables de entorno están configuradas

\- \[ ] El dominio personalizado está configurado (opcional)

\- \[ ] SSL/HTTPS está activo

\- \[ ] Tienes backups del código



---



\## Contacto y Soporte



Si tienes problemas con el despliegue:



1\. Revisa la documentación oficial de la plataforma

2\. Chequea los logs para ver errores específicos

3\. Contacta a: carlos.atencia@ibero.edu.co

