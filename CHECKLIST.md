# ✅ CHECKLIST EJERCICIO B

Usa este checklist para asegurarte de completar todos los pasos correctamente.

---

## 📝 Parte 1: Preparación Local (COMPLETADO ✅)

- [x] ✅ Aplicación creada con Express + TypeScript
- [x] ✅ 8 endpoints implementados
- [x] ✅ Código compila sin errores
- [x] ✅ Servidor corre localmente en puerto 3000
- [x] ✅ README.md creado
- [x] ✅ .gitignore configurado
- [x] ✅ package.json con scripts correctos

---

## 📦 Parte 2: Repositorio GitHub (POR HACER ⏳)

### Crear repositorio
- [ ] Ir a https://github.com/new
- [ ] Nombre del repositorio: `task-manager-api-cicd` (o similar)
- [ ] Visibilidad: **PÚBLICO** (importante)
- [ ] NO inicializar con README
- [ ] Clic en "Create repository"

### Subir código
Ejecutar en PowerShell:
```powershell
cd "c:\Users\ignac\OneDrive\Escritorio\Ejercicio B"
git init
git add .
git commit -m "Initial commit: Task Manager API"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/NOMBRE-REPO.git
git push -u origin main
```

- [ ] Código subido a GitHub
- [ ] Rama `main` visible en GitHub
- [ ] Todos los archivos presentes

**Puntos: 3/15** ✨

---

## ☁️ Parte 3: Azure App Service (POR HACER ⏳)

### Crear Web App
- [ ] Ir a https://portal.azure.com
- [ ] Buscar "App Services"
- [ ] Clic en "+ Create" → "Web App"

### Configuración básica
- [ ] **Name**: `task-manager-TUAPELLIDO` (único)
- [ ] **Publish**: Code
- [ ] **Runtime**: Node 20 LTS
- [ ] **OS**: Linux
- [ ] **Region**: East US (o cercana)
- [ ] **Pricing**: F1 (Free) o B1 (Basic)

### Configuración de Deployment
- [ ] **GitHub Actions**: Enable
- [ ] **GitHub account**: Autorizada
- [ ] **Repository**: Seleccionado correctamente
- [ ] **Branch**: main

### Crear y esperar
- [ ] Clic en "Review + create"
- [ ] Clic en "Create"
- [ ] Esperar creación (2-5 minutos)

### Variables de entorno
- [ ] Settings → Configuration
- [ ] Agregar: `PORT` = `8080`
- [ ] Agregar: `WEBSITE_NODE_DEFAULT_VERSION` = `~20`
- [ ] Save

### Startup command
- [ ] General settings
- [ ] **Startup Command**: `node dist/index.js`
- [ ] Save

**Puntos: 8/15** ✨

---

## 🚀 Parte 4: Primer Deploy (POR HACER ⏳)

### Verificar GitHub Actions
- [ ] Ir a repositorio en GitHub
- [ ] Pestaña "Actions"
- [ ] Workflow corriendo (círculo amarillo 🟡)
- [ ] Esperar finalización (5-15 minutos)
- [ ] Check verde ✅

### Probar aplicación
- [ ] Copiar URL de Azure (Overview en portal)
- [ ] Abrir: `https://TU-URL.azurewebsites.net/`
- [ ] Ver JSON de bienvenida

### Probar endpoints (ANTES del PR)
- [ ] GET `/` → Información básica
- [ ] GET `/api/health` → Health check
- [ ] GET `/api/tasks` → Lista de tareas (2 tareas de ejemplo)
- [ ] GET `/api/tasks/statistics` → Estadísticas
- [ ] POST `/api/tasks` → Crear nueva tarea (opcional)

**Puntos: 13/15** ✨

---

## 🔄 Parte 5: Pull Request y Nuevo Deploy (POR HACER ⏳)

### Crear nueva rama
```powershell
cd "c:\Users\ignac\OneDrive\Escritorio\Ejercicio B"
git checkout -b feature/new-endpoint
```
- [ ] Rama creada

### Agregar nuevo endpoint

Abrir `src/routes/taskRoutes.ts` y agregar ANTES de `export default router;`:

```typescript
// GET /api/info - Información del sistema
router.get('/api/info', (req: Request, res: Response) => {
  res.json({
    application: 'Task Manager API',
    version: '2.0.0',
    author: 'Tu Nombre',
    features: [
      'Gestión de tareas',
      'Sistema de prioridades',
      'Estadísticas en tiempo real',
      'CI/CD con Azure'
    ],
    deployment: {
      platform: 'Azure App Services',
      cicd: 'GitHub Actions',
      status: 'Producción'
    }
  });
});
```

- [ ] Código agregado
- [ ] Guardado

### Actualizar README
Agregar en la sección de endpoints:
```markdown
### Información del Sistema
- `GET /api/info` - Información detallada del sistema
```
- [ ] README actualizado

### Commit y push
```powershell
git add .
git commit -m "feat: add /api/info endpoint"
git push origin feature/new-endpoint
```
- [ ] Cambios commiteados
- [ ] Push exitoso

### Pull Request
- [ ] Ir a GitHub
- [ ] Clic en "Compare & pull request"
- [ ] Título: "Agregar endpoint de información del sistema"
- [ ] Descripción detallada
- [ ] Clic "Create pull request"

### Merge
- [ ] Clic "Merge pull request"
- [ ] Clic "Confirm merge"
- [ ] Esperar deploy (5-15 minutos)

### Verificar nuevo endpoint (DESPUÉS del PR)
- [ ] GET `/api/info` → Ver nuevo JSON

**Puntos: 15/15** ✨🎉

---

## 🎥 Parte 6: Video de Demostración (POR HACER ⏳)

### Grabación del video
- [ ] Abrir Azure Portal
- [ ] Mostrar App Service creado
- [ ] Mostrar URL asignada
- [ ] Mostrar tier (F1 o B1)
- [ ] Abrir GitHub
- [ ] Mostrar repositorio
- [ ] Mostrar pestaña Actions (deploys exitosos)
- [ ] Mostrar Pull Request merged

### Demostración de endpoints ANTES del PR
- [ ] GET `/` 
- [ ] GET `/api/health`
- [ ] GET `/api/tasks`
- [ ] GET `/api/tasks/statistics`

### Demostración de endpoints DESPUÉS del PR
- [ ] GET `/api/info` (NUEVO)

### Opcional
- [ ] POST crear una tarea
- [ ] GET ver la tarea creada

### Subir video
- [ ] Subir a YouTube, Drive o Vimeo
- [ ] Copiar enlace

**Duración sugerida:** 3-5 minutos

---

## 📄 Parte 7: Archivo de Entrega (POR HACER ⏳)

Crear archivo `ENTREGA.txt` con:

```text
EJERCICIO B - CI/CD CON AZURE APP SERVICES

Repositorio GitHub:
[URL de tu repositorio]

URL de la aplicación en Azure:
[URL de Azure]

Video demostración:
[URL del video]

Endpoints implementados:
- GET / - Información de la API
- GET /api/health - Health check
- GET /api/tasks - Listar tareas
- GET /api/tasks/statistics - Estadísticas
- GET /api/tasks/:id - Obtener tarea por ID
- POST /api/tasks - Crear tarea
- PUT /api/tasks/:id - Actualizar tarea
- DELETE /api/tasks/:id - Eliminar tarea
- GET /api/info - Información del sistema (agregado en PR)

Nombre: [Tu nombre]
Fecha: 29 de noviembre de 2025
```

- [ ] Archivo creado
- [ ] Todos los campos completados

---

## 🧹 Parte 8: Limpiar Recursos (DESPUÉS DE ENTREGAR)

**IMPORTANTE: Solo después de entregar el ejercicio**

- [ ] Ir a Azure Portal
- [ ] Buscar "Resource groups"
- [ ] Seleccionar "rg-ejercicio-b"
- [ ] Clic "Delete resource group"
- [ ] Escribir nombre del grupo
- [ ] Clic "Delete"
- [ ] Confirmar eliminación

**NO eliminar:**
- [ ] El repositorio de GitHub (debe quedar público)
- [ ] Los archivos de GitHub Actions
- [ ] El video

---

## 📊 Resumen de Puntos

| Tarea | Puntos | Estado |
|-------|--------|--------|
| Repositorio GitHub público | 3 | ⏳ |
| App Service configurado + Primer deploy | 5 | ⏳ |
| Pull Request + Segundo deploy | 7 | ⏳ |
| **TOTAL** | **15** | ⏳ |

---

## 🎯 Estado Actual

✅ **Aplicación lista** - Todo el código está funcionando
⏳ **Pendiente** - Subir a GitHub y desplegar en Azure

---

## 💡 Tips Importantes

1. **No te saltes pasos** - Sigue el checklist en orden
2. **Espera los deploys** - Pueden tomar 5-15 minutos
3. **Verifica antes de grabar** - Asegúrate que todo funcione
4. **Graba todo de una vez** - Será más fácil
5. **Guarda los enlaces** - Los necesitarás para la entrega
6. **Limpia después** - Para no tener cargos

---

## 📞 Si algo falla

1. **Revisa los logs** de GitHub Actions
2. **Chequea el Log Stream** en Azure
3. **Verifica las variables** de entorno
4. **Lee INSTRUCCIONES_EJERCICIO_B.md** para más detalles

---

**Tiempo estimado total:** 1-2 horas (incluyendo esperas)

¡Éxito! 🚀
