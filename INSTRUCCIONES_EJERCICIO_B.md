# Ejercicio B - Guía de Implementación CI/CD

## ✅ Aplicación Creada

Tu API REST de Gestión de Tareas está lista con:
- 8 endpoints funcionales
- CRUD completo
- Sistema de prioridades y estados
- Estadísticas en tiempo real
- Validaciones
- TypeScript + Express

## 📋 Pasos para completar el ejercicio

### 1. Crear repositorio en GitHub (3 puntos)

1. Ve a https://github.com/new
2. Nombre: `task-manager-api-cicd` (o el que prefieras)
3. **Importante**: Marca como **Público**
4. NO inicialices con README (ya tienes uno)
5. Clic en "Create repository"

### 2. Subir código a GitHub

Ejecuta en PowerShell:

```powershell
cd "c:\Users\ignac\OneDrive\Escritorio\Ejercicio B"
git init
git add .
git commit -m "Initial commit: Task Manager API"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/task-manager-api-cicd.git
git push -u origin main
```

### 3. Crear Azure App Service (5 puntos)

#### A. Entrar a Azure Portal
1. Ve a https://portal.azure.com
2. Inicia sesión con tu correo institucional

#### B. Crear Web App
1. Busca "App Services" en el buscador superior
2. Clic en "+ Create" → "Web App"

#### C. Configuración:
- **Subscription**: Tu suscripción (Free Trial o Student)
- **Resource Group**: Crear nuevo → "rg-ejercicio-b"
- **Name**: `task-manager-TUAPELLIDO` (debe ser único)
- **Publish**: Code
- **Runtime stack**: Node 20 LTS
- **Operating System**: Linux
- **Region**: East US (o la más cercana)
- **Pricing Plan**: 
  - Clic en "Change size"
  - Selecciona "Dev/Test"
  - Elige **F1 (Free)** o **B1 (Basic)**
  - Apply

#### D. Deployment (IMPORTANTE):
1. En la pestaña "Deployment"
2. **GitHub Actions settings**: Enable
3. **GitHub account**: Autoriza tu cuenta
4. **Organization**: Tu usuario
5. **Repository**: task-manager-api-cicd
6. **Branch**: main

#### E. Finalizar:
1. Clic en "Review + create"
2. Clic en "Create"
3. **Espera 2-5 minutos** a que se cree

### 4. Configurar variables de entorno

Una vez creada la App:

1. Ve a tu App Service
2. En el menú izquierdo: "Settings" → "Configuration"
3. En "Application settings", agrega:
   - **Name**: `PORT`
   - **Value**: `8080`
   - Clic "OK"
4. Agrega otra:
   - **Name**: `WEBSITE_NODE_DEFAULT_VERSION`
   - **Value**: `~20`
   - Clic "OK"
5. Clic en "Save" arriba
6. Confirma "Continue"

### 5. Configurar el startup command

1. En el mismo "Configuration"
2. Pestaña "General settings"
3. **Startup Command**: `node dist/index.js`
4. Clic "Save"

### 6. Verificar el primer deploy (5 puntos)

#### A. Revisar GitHub Actions
1. Ve a tu repositorio en GitHub
2. Pestaña "Actions"
3. Verás un workflow corriendo (circulo amarillo)
4. **Espera que termine** (5-15 minutos)
5. Debe aparecer un check verde ✅

#### B. Probar la aplicación
1. Ve a Azure Portal → Tu App Service
2. En "Overview", copia la **URL** (algo como: `https://task-manager-TUAPELLIDO.azurewebsites.net`)
3. Abre en el navegador: `https://TU-URL.azurewebsites.net`
4. Deberías ver el JSON de bienvenida

#### C. Probar endpoints
Prueba estos URLs en el navegador:
- `https://TU-URL.azurewebsites.net/api/health`
- `https://TU-URL.azurewebsites.net/api/tasks`
- `https://TU-URL.azurewebsites.net/api/tasks/statistics`

### 7. Crear nueva feature y hacer PR (7 puntos)

#### A. Crear rama nueva
```powershell
cd "c:\Users\ignac\OneDrive\Escritorio\Ejercicio B"
git checkout -b feature/new-endpoint
```

#### B. Agregar nuevo endpoint

Abre `src/routes/taskRoutes.ts` y agrega ANTES de `export default router;`:

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

#### C. Actualizar README
Abre `README.md` y agrega en la sección "Endpoints":

```markdown
### Información del Sistema
- `GET /api/info` - Información detallada del sistema
```

#### D. Commit y push
```powershell
git add .
git commit -m "feat: add /api/info endpoint"
git push origin feature/new-endpoint
```

#### E. Crear Pull Request
1. Ve a tu repositorio en GitHub
2. Verás un banner amarillo "Compare & pull request"
3. Clic en ese botón
4. **Título**: "Agregar endpoint de información del sistema"
5. **Descripción**: 
   ```
   ## Cambios
   - Nuevo endpoint GET /api/info
   - Documentación actualizada en README
   
   ## Pruebas
   - Endpoint retorna información del sistema
   - Incluye versión, características y estado de deployment
   ```
6. Clic "Create pull request"

#### F. Hacer Merge
1. Espera unos segundos
2. Clic en "Merge pull request"
3. Clic en "Confirm merge"
4. **Espera el nuevo deploy** (5-15 minutos)

#### G. Verificar nuevo endpoint
Una vez termine el deploy:
- Ve a: `https://TU-URL.azurewebsites.net/api/info`
- Deberías ver el nuevo JSON con la información

### 8. Grabación del video

#### Elementos a mostrar:
1. **Azure Portal**:
   - Mostrar tu App Service creado
   - Mostrar la URL asignada
   - Mostrar el tier (F1 o B1)

2. **GitHub**:
   - Mostrar el repositorio
   - Mostrar la pestaña Actions con los deploys exitosos
   - Mostrar el Pull Request cerrado

3. **Navegador - Endpoints ANTES del PR**:
   - `GET /` → Información básica
   - `GET /api/health` → Health check
   - `GET /api/tasks` → Lista de tareas
   - `GET /api/tasks/statistics` → Estadísticas

4. **Navegador - Endpoints DESPUÉS del PR**:
   - `GET /api/info` → **Nuevo endpoint**

5. **Opcional - Probar POST** (con Postman o cURL):
   ```bash
   curl -X POST https://TU-URL.azurewebsites.net/api/tasks \
     -H "Content-Type: application/json" \
     -d "{\"title\":\"Prueba desde video\",\"description\":\"Endpoint funcionando\",\"priority\":\"high\"}"
   ```

#### Herramientas para grabar:
- OBS Studio (gratis)
- Xbox Game Bar (Windows 10/11: Win + G)
- Loom (web)

#### Duración sugerida: 3-5 minutos

### 9. Crear archivo de entrega

Crea un archivo `ENTREGA.txt` con:

```text
EJERCICIO B - CI/CD CON AZURE APP SERVICES

Repositorio GitHub:
https://github.com/TU-USUARIO/task-manager-api-cicd

URL de la aplicación en Azure:
https://task-manager-TUAPELLIDO.azurewebsites.net

Video demostración:
[URL de YouTube, Drive o Vimeo]

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

### 10. Limpiar recursos de Azure (IMPORTANTE)

**Después de grabar y entregar:**

1. Ve a Azure Portal
2. Busca "Resource groups"
3. Selecciona "rg-ejercicio-b"
4. Clic en "Delete resource group"
5. Escribe el nombre del grupo
6. Clic "Delete"

Esto evitará cargos no deseados.

## 🎯 Puntos evaluados

- ✅ [3 puntos] Repositorio público en GitHub
- ✅ [5 puntos] App Service configurado correctamente
- ✅ [7 puntos] Pull Request y deploy automático funcionando

## 💡 Tips

- Si el deploy falla, revisa los logs en GitHub Actions
- La primera compilación puede tardar más
- Azure asigna un puerto automático (8080), asegúrate de usar `process.env.PORT`
- No elimines los archivos `.github/workflows/` que Azure crea

## ❓ Troubleshooting

**Error: "Application Error"**
- Verifica que el startup command sea correcto
- Revisa que PORT esté configurado
- Chequea los logs en Azure: App Service → "Logs" → "Log stream"

**Deploy no se activa**
- Verifica que GitHub Actions esté habilitado
- Revisa la pestaña Actions en GitHub
- Puede tomar 1-2 minutos en detectar el push

**Endpoint 404**
- Asegúrate de que el código esté compilado (dist/)
- Verifica que el deploy haya terminado exitosamente
- Espera 2-3 minutos después del deploy para que Azure actualice

## 📧 Contacto

Si tienes problemas, revisa:
1. Logs de GitHub Actions
2. Log Stream en Azure
3. Application Insights en Azure (si está habilitado)

¡Éxito con tu ejercicio! 🚀
