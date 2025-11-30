# 🔧 Configuración Específica para Azure App Services

## Problemas Comunes y Soluciones

---

## 1. Variables de Entorno CRÍTICAS

### ⚠️ Azure asigna el puerto automáticamente

Azure **NO** usa el puerto 3000. Usa dinámicamente el puerto 8080 o el que asigne.

**Solución:** Tu código ya está preparado:
```typescript
const PORT = process.env.PORT || 3000;
```

### Variables a configurar en Azure

1. Ve a: **App Service → Configuration → Application settings**
2. Agrega:

| Name | Value | Descripción |
|------|-------|-------------|
| `PORT` | `8080` | Puerto que Azure asigna |
| `WEBSITE_NODE_DEFAULT_VERSION` | `~20` | Versión de Node.js |

---

## 2. Startup Command

Azure necesita saber cómo iniciar tu aplicación.

**Configuración:**
1. Ve a: **App Service → Configuration → General settings**
2. En **Startup Command** poner: `node dist/index.js`

**Por qué:**
- `npm start` a veces no funciona bien en Azure
- Ejecutar directamente el archivo compilado es más confiable
- El archivo `dist/index.js` se genera al compilar TypeScript

---

## 3. GitHub Actions Workflow

Azure crea automáticamente un archivo `.github/workflows/main_NOMBRE-APP.yml`

### Este archivo hace:
1. ✅ Checkout del código
2. ✅ Instala Node.js 20
3. ✅ Ejecuta `npm install`
4. ✅ Ejecuta `npm run build`
5. ✅ Sube los archivos a Azure
6. ✅ Reinicia la aplicación

### NO lo modifiques a menos que sea necesario

Si necesitas modificarlo, asegúrate de que incluya:
```yaml
- name: npm install, build
  run: |
    npm install
    npm run build --if-present
```

---

## 4. Archivos que se suben a Azure

Azure sube:
- ✅ `dist/` (código compilado)
- ✅ `node_modules/` (dependencias)
- ✅ `package.json`
- ✅ `package-lock.json`

Azure NO necesita:
- ❌ `src/` (código TypeScript original)
- ❌ `tsconfig.json` (ya compilado)
- ❌ `.env` (usa Application Settings)

---

## 5. Proceso de Compilación

### En tu máquina:
```powershell
npm run build
```
Genera `dist/` con JavaScript compilado

### En Azure (automático):
1. GitHub Actions ejecuta `npm run build`
2. Se genera `dist/`
3. Se sube todo a Azure
4. Azure ejecuta `node dist/index.js`

---

## 6. Tiempo de Deploy

### Primer deploy (con Azure):
- **Esperado:** 10-20 minutos
- **Por qué:** Azure tiene que:
  - Crear el contenedor
  - Instalar Node.js
  - Instalar dependencias
  - Compilar el código
  - Iniciar el servidor

### Deploys siguientes:
- **Esperado:** 5-10 minutos
- **Por qué:** Ya existe la infraestructura

### ⏳ No te desesperes si tarda

---

## 7. Verificar el Deploy

### Estado del deploy:
1. **GitHub Actions:**
   - Pestaña "Actions" en tu repo
   - Debe estar ✅ verde

2. **Azure Portal:**
   - **Deployment Center**
   - Debe mostrar "Success (Active)"

3. **Logs en tiempo real:**
   - **Log stream** en Azure
   - Ver qué está pasando

---

## 8. URLs en Azure

### Tu aplicación tendrá una URL como:
```
https://task-manager-garcia.azurewebsites.net
```

### Componentes:
- `task-manager-garcia` = Nombre de tu App Service
- `.azurewebsites.net` = Dominio de Azure

### ⚠️ No uses http:// - Azure usa HTTPS automáticamente

---

## 9. Solución de Problemas

### "Application Error" al abrir la URL

**Causas posibles:**
1. El startup command está mal
2. Las variables de entorno no están configuradas
3. El código no compiló correctamente
4. Azure aún está iniciando (espera 2-3 minutos)

**Solución:**
```
1. Ve a Log stream en Azure
2. Busca errores en rojo
3. Verifica:
   - Startup command: node dist/index.js
   - PORT: 8080
   - El deploy terminó (GitHub Actions verde)
```

### "502 Bad Gateway"

**Causa:** El servidor no responde

**Solución:**
1. Espera 2-3 minutos
2. Verifica que el proceso esté corriendo en Log stream
3. Reinicia el App Service si es necesario

### "Cannot find module..."

**Causa:** Dependencias no instaladas

**Solución:**
1. Verifica que `package.json` esté en el repo
2. Chequea los logs de GitHub Actions
3. Verifica que `npm install` se ejecutó correctamente

### Deploy no se activa

**Causa:** GitHub Actions no configurado

**Solución:**
1. Ve a Deployment Center en Azure
2. Verifica que esté conectado a GitHub
3. Si no, reconecta el repositorio

---

## 10. Configuración Óptima

### Pricing Tier recomendado:

**Para el ejercicio:**
- ✅ **F1 (Free)** - Gratis, suficiente para pruebas
  - 1 GB RAM
  - 60 minutos CPU/día
  - 1 GB almacenamiento

**Si F1 da problemas:**
- ✅ **B1 (Basic)** - ~$13/mes (prorrateado por horas)
  - 1.75 GB RAM
  - Sin límite CPU
  - 10 GB almacenamiento

**⚠️ Recuerda eliminar después para no tener cargos**

---

## 11. Performance

### Primera solicitud puede ser lenta

Azure "hiberna" la aplicación si no recibe tráfico.

**Primera carga:** 10-20 segundos
**Siguientes cargas:** 1-2 segundos

**Esto es normal en Free tier**

---

## 12. CORS (si usas desde otro dominio)

Ya está configurado en el código:
```typescript
app.use(cors());
```

Permite solicitudes desde cualquier origen.

---

## 13. HTTPS Automático

Azure proporciona:
- ✅ Certificado SSL gratis
- ✅ HTTPS automático
- ✅ Redirección HTTP → HTTPS

No necesitas configurar nada.

---

## 14. Logs y Monitoreo

### Para ver logs:
1. **Log stream** - Logs en tiempo real
2. **Diagnose and solve problems** - Diagnósticos
3. **Metrics** - CPU, memoria, requests

### Para debugging:
```typescript
console.log('Mensaje de debug');
```
Aparecerá en Log stream

---

## 15. Comandos Útiles en Azure Portal

### Reiniciar aplicación:
- Clic en "Restart" en Overview

### Ver estado:
- Overview → Status: Running ✅

### Ver URL:
- Overview → URL (clic para abrir)

### Ver último deploy:
- Deployment Center → Logs

---

## 16. Archivos GitHub Actions

### Archivo creado automáticamente:
```
.github/workflows/main_task-manager-TUNOMBRE.yml
```

### NO lo borres del repositorio

Es necesario para:
- ✅ CI/CD automático
- ✅ Deploys automáticos
- ✅ Evaluación del ejercicio

---

## 17. Testing Before Deploy

### Antes de hacer push:

```powershell
# 1. Compilar
npm run build

# 2. Probar versión compilada
node dist/index.js

# 3. Verificar en navegador
# http://localhost:3000

# 4. Si funciona localmente, funcionará en Azure
```

---

## 18. Después del Ejercicio

### Para eliminar TODO:

1. **Eliminar Resource Group** (recomendado):
   - Va a Resource Groups
   - Selecciona tu grupo
   - Delete resource group
   - Esto elimina TODO: App Service, planes, etc.

2. **Mantener el repositorio GitHub**:
   - No lo borres
   - Debe quedar público
   - Es parte de la evaluación

---

## 19. Costos

### Free Tier (F1):
- ✅ $0.00/mes
- ⚠️ Limitaciones: 60 min CPU/día, hiberna sin tráfico

### Basic Tier (B1):
- 💰 ~$13/mes
- ⏰ Prorrateado por hora
- 💡 Si usas 2 horas: ~$0.02

### Para el ejercicio:
- ⏰ Duración total: 1-2 horas
- 💰 Costo si usas B1: $0.02-0.04
- ✅ **Elimina recursos después**

---

## 20. Checklist Final Azure

Antes de grabar el video, verifica:

- [ ] ✅ App Service creado
- [ ] ✅ Deploy exitoso (GitHub Actions verde)
- [ ] ✅ URL funcionando
- [ ] ✅ Variables de entorno configuradas
- [ ] ✅ Startup command configurado
- [ ] ✅ Todos los endpoints responden
- [ ] ✅ Log stream sin errores

---

## 📞 Recursos Útiles

- **Azure Portal:** https://portal.azure.com
- **Azure Status:** https://status.azure.com
- **GitHub Actions Docs:** https://docs.github.com/actions
- **Node.js en Azure:** https://docs.microsoft.com/azure/app-service/quickstart-nodejs

---

¡Con esta configuración tu aplicación funcionará perfectamente en Azure! 🚀
