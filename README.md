\# 📅 AgendaPro - Sistema de Gestión de Citas



Sistema web para centros de estética que permite a los clientes agendar citas en línea y al personal gestionar las reservas de forma eficiente.



\## 🎯 Descripción



AgendaPro es una aplicación web diseñada específicamente para el centro de estética "Bella Imagen". Resuelve el problema de gestión de citas que antes se manejaba por teléfono y WhatsApp, automatizando todo el proceso.



\*\*Características principales:\*\*

\- ✅ Los clientes pueden agendar citas 24/7 sin llamar

\- ✅ Visualización de horarios disponibles en tiempo real

\- ✅ Recordatorios automáticos de citas

\- ✅ Panel de administración para el personal

\- ✅ Historial completo de citas y servicios



\## 👥 Equipo de Desarrollo



| Nombre | Rol | GitHub |

|--------|-----|--------|

| Carlos Daniel Atencia García | Desarrollador Full-Stack | \[@carlosatencia27](https://github.com/carlosatencia27) |



\## 🚀 Demo en Vivo



\- \*\*Repositorio:\*\* https://github.com/carlosatencia27/agendapro-frontend



\*\*Usuarios de prueba:\*\*



```

Cliente:

Email: cliente@ejemplo.com

Password: cliente123



Administrador:

Email: admin@bellaimagen.com

Password: admin123



Profesional:

Email: ana@bellaimagen.com

Password: profesional123

```



\## 🛠️ Tecnologías Utilizadas



\### Frontend

\- \*\*React 18\*\* - Librería para crear interfaces

\- \*\*React Router 6\*\* - Navegación entre páginas

\- \*\*Axios\*\* - Peticiones HTTP al servidor

\- \*\*CSS3\*\* - Estilos y diseño responsive



\### Testing

\- \*\*Jest\*\* - Pruebas unitarias

\- \*\*React Testing Library\*\* - Pruebas de componentes

\- \*\*Cypress\*\* - Pruebas end-to-end



\### Despliegue

\- \*\*Netlify\*\* - Hosting y despliegue automático

\- \*\*GitHub Actions\*\* - CI/CD pipeline



\## 📦 Instalación Local



\### Requisitos Previos

\- Node.js 18 o superior

\- npm o yarn

\- Git



\### Pasos de Instalación



1\. \*\*Clonar el repositorio\*\*

```bash

git clone https://github.com/carlosatencia27/agendapro-frontend.git

cd agendapro-frontend

```



2\. \*\*Instalar dependencias\*\*

```bash

npm install

```



3\. \*\*Configurar variables de entorno\*\*

```bash

cp .env.example .env

```



Editar `.env` y agregar:

```

REACT\_APP\_API\_URL=https://api.agendapro.com/v1

```



4\. \*\*Ejecutar en modo desarrollo\*\*

```bash

npm start

```



La aplicación se abrirá en http://localhost:3000



\## 📝 Scripts Disponibles



```bash

\# Ejecutar en modo desarrollo

npm start



\# Ejecutar pruebas unitarias

npm test



\# Ejecutar pruebas con cobertura

npm run test:coverage



\# Generar build de producción

npm run build



\# Ejecutar pruebas E2E (interfaz visual)

npm run cypress:open



\# Ejecutar pruebas E2E (sin interfaz)

npm run cypress:run



\# Ejecutar todas las pruebas

npm run test:all

```



\## 🧪 Ejecutar Pruebas



\### Pruebas Unitarias

```bash

npm test

```



\### Ver Cobertura de Código

```bash

npm run test:coverage

open coverage/lcov-report/index.html

```



\### Pruebas End-to-End

```bash

\# Con interfaz visual

npm run cypress:open



\# Sin interfaz (para CI/CD)

npm run cypress:run

```



\## 📁 Estructura del Proyecto



```

agendapro-frontend/

├── public/                 # Archivos públicos

│   ├── index.html

│   └── favicon.ico

├── src/

│   ├── components/         # Componentes reutilizables

│   │   ├── common/        # Botones, inputs, etc.

│   │   ├── layout/        # Navegación, footer

│   │   ├── appointments/  # Componentes de citas

│   │   └── services/      # Componentes de servicios

│   ├── pages/             # Páginas de la aplicación

│   │   ├── client/        # Páginas de clientes

│   │   ├── admin/         # Páginas de administrador

│   │   └── professional/  # Páginas de profesionales

│   ├── contexts/          # Context API (AuthContext)

│   ├── hooks/             # Hooks personalizados

│   ├── services/          # Servicios para API

│   ├── utils/             # Funciones auxiliares

│   ├── styles/            # Estilos CSS

│   ├── Routes.js          # Configuración de rutas

│   ├── App.js             # Componente principal

│   └── index.js           # Punto de entrada

├── tests/                 # Pruebas

│   ├── components/

│   ├── hooks/

│   ├── integration/

│   └── e2e/

├── .env.example           # Ejemplo de variables

├── netlify.toml           # Configuración de Netlify

├── package.json

└── README.md

```



\## 🚀 Despliegue



\### Desplegar en Netlify (Recomendado)



1\. \*\*Crear cuenta en Netlify\*\*

&nbsp;  - Ir a https://netlify.com

&nbsp;  - Registrarse gratis



2\. \*\*Conectar con GitHub\*\*

&nbsp;  - New site from Git

&nbsp;  - Seleccionar el repositorio

&nbsp;  - Configurar:

&nbsp;    - Build command: `npm run build`

&nbsp;    - Publish directory: `build`

&nbsp;    - Variables de entorno: Agregar `REACT\_APP\_API\_URL`



3\. \*\*Deploy\*\*

&nbsp;  - Click en "Deploy site"

&nbsp;  - Esperar 2-3 minutos



\### Desplegar Manualmente



```bash

\# 1. Generar build

npm run build



\# 2. Los archivos quedan en la carpeta build/

\# 3. Subir esa carpeta a cualquier hosting estático

```



\## 🔧 Configuración Adicional



\### Variables de Entorno



Crear archivo `.env` en la raíz con:



```bash

\# URL del backend

REACT\_APP\_API\_URL=https://api.agendapro.com/v1



\# Ambiente

REACT\_APP\_ENV=production



\# Activar analytics (opcional)

REACT\_APP\_ENABLE\_ANALYTICS=true

```



\### Configuración de Netlify



El archivo `netlify.toml` ya incluye:

\- Redirecciones para React Router

\- Variables de entorno por ambiente

\- Configuración de build



\## 📱 Capturas de Pantalla



\### Página de Inicio

!\[Landing Page](https://via.placeholder.com/800x400?text=Landing+Page)



\### Agendar Cita

!\[Booking Flow](https://via.placeholder.com/800x400?text=Booking+Flow)



\### Panel de Cliente

!\[Dashboard](https://via.placeholder.com/800x400?text=Client+Dashboard)



\### Panel de Administración

!\[Admin Panel](https://via.placeholder.com/800x400?text=Admin+Panel)



\## 🐛 Solución de Problemas



\### Error al instalar dependencias

```bash

\# Limpiar caché

npm cache clean --force

rm -rf node\_modules package-lock.json

npm install

```



\### Error al ejecutar tests

```bash

\# Instalar dependencias de testing

npm install --save-dev @testing-library/react @testing-library/jest-dom

```



\### La app no se conecta al backend

\- Verificar que la URL del backend en `.env` sea correcta

\- Verificar que el backend esté corriendo

\- Revisar la consola del navegador para ver errores



\## 📚 Documentación Adicional



\- \[Documento completo en APA (PDF)](docs/Actividad4\_AgendaPro.pdf)

\- \[Guía de despliegue detallada](DEPLOYMENT.md)

\- \[API del backend](https://api.agendapro.com/docs)



\## 🤝 Contribuir



Las contribuciones son bienvenidas. Para contribuir:



1\. Fork el proyecto

2\. Crear una rama (`git checkout -b feature/nueva-funcionalidad`)

3\. Commit cambios (`git commit -m 'Agregar nueva funcionalidad'`)

4\. Push a la rama (`git push origin feature/nueva-funcionalidad`)

5\. Abrir un Pull Request



\## 📄 Licencia



Este proyecto fue desarrollado como parte de la asignatura "Electiva Disciplinar II" de la Corporación Universitaria Iberoamericana.



\## 📞 Contacto



Carlos Daniel Atencia García

\- GitHub: \[@carlosatencia27](https://github.com/carlosatencia27)

\- Email: catencia@estudiante.ibero.edu.co



---



\*\*Universidad:\*\* Corporación Universitaria Iberoamericana  

\*\*Asignatura:\*\* Electiva Disciplinar II  

\*\*Docente:\*\* Joaquín Sánchez  

\*\*Año:\*\* 2025

