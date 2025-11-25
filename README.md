# 📅 AgendaPro - Sistema de Gestión de Citas

Sistema web para centros de estética que permite a los clientes agendar citas en línea y al personal gestionar las reservas de forma eficiente.

## 🎯 Descripción

AgendaPro es una aplicación web diseñada específicamente para el centro de estética "Bella Imagen". Resuelve el problema de gestión de citas que antes se manejaba por teléfono y WhatsApp, automatizando todo el proceso.

**Características principales:**
- ✅ Los clientes pueden agendar citas 24/7 sin llamar
- ✅ Visualización de horarios disponibles en tiempo real
- ✅ Recordatorios automáticos de citas
- ✅ Panel de administración para el personal
- ✅ Historial completo de citas y servicios

---

## 👥 Equipo de Desarrollo

| Nombre | Rol | Correo |
|--------|-----|--------|
| Carlos Daniel Atencia García | Desarrollador Full-Stack | catencia@estudiante.ibero.edu.co |

---

## 🚀 Demo y Repositorio

- **Repositorio:** https://github.com/carlosatencia27/agendapro-frontend
- **Estado:** ✅ Aplicación funcional lista para ejecutar localmente

**Usuarios de prueba:**
```
Cliente:
  Email: cliente@ejemplo.com
  Contraseña: cliente123

Administrador:
  Email: admin@bellaimagen.com
  Contraseña: admin123

Profesional:
  Email: ana@bellaimagen.com
  Contraseña: profesional123
```

---

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React 18** - Librería para crear interfaces de usuario
- **React Router 6** - Navegación entre páginas
- **Context API** - Gestión del estado global (autenticación)
- **Axios** - Peticiones HTTP al backend
- **CSS3** - Estilos y diseño responsive

### Pruebas
- **Jest** - Framework de pruebas unitarias
- **React Testing Library** - Pruebas de componentes React
- **Cypress** - Pruebas end-to-end

### Despliegue
- **Netlify** - Plataforma de hosting recomendada
- **GitHub Actions** - CI/CD automatizado

---

## 📦 Instalación Local

### Requisitos Previos

- Node.js 16 o superior ([Descargar aquí](https://nodejs.org/))
- npm (viene con Node.js)
- Git

### Pasos de Instalación

**1. Clonar el repositorio**
```bash
git clone https://github.com/carlosatencia27/agendapro-frontend.git
cd agendapro-frontend
```

**2. Instalar dependencias**
```bash
npm install
```

Esto puede tardar 2-3 minutos. Espera a que termine.

**3. Configurar variables de entorno (opcional)**
```bash
cp .env.example .env
```

Edita el archivo `.env` si necesitas cambiar la URL del backend:
```
REACT_APP_API_URL=https://api.agendapro.com/v1
REACT_APP_ENV=development
```

**4. Ejecutar la aplicación**
```bash
npm start
```

La aplicación se abrirá automáticamente en http://localhost:3000

---

## 📝 Scripts Disponibles
```bash
# Ejecutar en modo desarrollo
npm start

# Ejecutar pruebas unitarias
npm test

# Ejecutar pruebas con cobertura
npm run test:coverage

# Generar build de producción
npm run build

# Ejecutar pruebas E2E con interfaz visual
npm run cypress:open

# Ejecutar pruebas E2E sin interfaz
npm run cypress:run
```

---

## 🧪 Cómo Probar la Aplicación

### 1. Prueba como Cliente

1. Abre http://localhost:3000
2. Haz clic en **"Iniciar sesión"**
3. Usa: `cliente@ejemplo.com` / `cliente123`
4. Verás tu dashboard con tus citas
5. Haz clic en **"Agendar Nueva Cita"** para crear una reserva
6. Navega por **"Mis Citas"** para ver tu historial

### 2. Prueba como Administrador

1. Cierra sesión (botón "Salir")
2. Inicia sesión con: `admin@bellaimagen.com` / `admin123`
3. Verás el panel de administración con estadísticas
4. Podrás ver todas las citas del día
5. Botones para confirmar o cancelar citas

### 3. Prueba como Profesional

1. Cierra sesión
2. Inicia sesión con: `ana@bellaimagen.com` / `profesional123`
3. Verás tu agenda personal del día
4. Lista de clientes que tienes asignados

---

## 📁 Estructura del Proyecto
```
agendapro-frontend/
├── public/                 # Archivos públicos
│   └── index.html         # HTML base
├── src/
│   ├── components/        # Componentes reutilizables
│   │   └── layout/       # Navegación
│   ├── pages/            # Páginas de la aplicación
│   │   ├── client/       # Páginas de clientes
│   │   ├── admin/        # Páginas de administrador
│   │   ├── professional/ # Páginas de profesionales
│   │   ├── LandingPage.js
│   │   ├── LoginPage.js
│   │   └── RegisterPage.js
│   ├── contexts/         # Context API
│   │   └── AuthContext.js # Manejo de autenticación
│   ├── styles/           # Estilos CSS
│   │   └── App.css
│   ├── App.js            # Componente principal
│   ├── Routes.js         # Configuración de rutas
│   └── index.js          # Punto de entrada
├── docs/                 # Documentación
│   └── Actividad4_AgendaPro.docx
├── .env.example          # Ejemplo de variables de entorno
├── .gitignore
├── netlify.toml          # Configuración de Netlify
├── package.json
├── DEPLOYMENT.md         # Guía detallada de despliegue
└── README.md
```

---

## 🚀 Despliegue

### Opción 1: Netlify (Recomendado)

**Paso 1:** Crear cuenta en [Netlify](https://netlify.com) (gratis)

**Paso 2:** Conectar con GitHub
- Click en "New site from Git"
- Seleccionar tu repositorio
- Configurar:
  - **Build command:** `npm run build`
  - **Publish directory:** `build`

**Paso 3:** Agregar variables de entorno (opcional)
- En Site settings → Environment variables
- Agregar: `REACT_APP_API_URL` con el valor de tu backend

**Paso 4:** Deploy
- Click en "Deploy site"
- Esperar 2-3 minutos
- ¡Listo! Tu app estará en línea

### Opción 2: Vercel

Ver instrucciones detalladas en [DEPLOYMENT.md](DEPLOYMENT.md)

### Opción 3: Build Manual
```bash
# Generar archivos de producción
npm run build

# Los archivos quedan en la carpeta build/
# Sube esa carpeta a cualquier hosting estático
```

---

## 🐛 Solución de Problemas Comunes

### ❌ Error: "Module not found"

**Solución:**
```bash
rm -rf node_modules package-lock.json
npm install
```

### ❌ Error: "Port 3000 is already in use"

**Solución en Windows:**
```bash
set PORT=3001 && npm start
```

**Solución en Mac/Linux:**
```bash
PORT=3001 npm start
```

### ❌ La aplicación está en blanco

**Solución:**
1. Abre la consola del navegador (F12)
2. Ve a la pestaña "Console"
3. Copia el error y busca en Google o pide ayuda

### ❌ No se conecta al backend

- Verifica que `.env` tenga la URL correcta
- Revisa que el backend esté funcionando
- Mira la consola del navegador para ver el error exacto

---

## 📚 Documentación Completa

- [Documento APA completo](docs/Actividad4_AgendaPro.docx) - Explicación técnica detallada
- [Guía de despliegue](DEPLOYMENT.md) - Paso a paso para publicar en internet
- Swagger del backend: (URL del backend)/docs

---

## 📞 Contacto

**Desarrollador:** Carlos Daniel Atencia García

- **GitHub:** [@carlosatencia27](https://github.com/carlosatencia27)
- **Correo:** catencia@estudiante.ibero.edu.co

**Universidad:** Corporación Universitaria Iberoamericana  
**Asignatura:** Electiva Disciplinar II  
**Docente:** Joaquín Sánchez  
**Año:** 2025

---

## 📄 Notas del Proyecto

Este proyecto fue desarrollado como parte de la **Actividad 4** de la asignatura. Incluye:

✅ Documento técnico en formato APA 7ª edición  
✅ Código fuente completo y funcional  
✅ Pruebas unitarias y de integración  
✅ Configuración de despliegue  
✅ README con instrucciones claras  

**Estado:** Proyecto completado y listo para entregar ✅
