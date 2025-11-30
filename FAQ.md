# ❓ FAQ - Preguntas Frecuentes Ejercicio B

---

## 🎯 Sobre el Ejercicio

### ¿Qué tengo que hacer exactamente?

Crear una aplicación backend, subirla a GitHub y desplegarla en Azure con CI/CD automático mediante GitHub Actions.

### ¿Qué ya está hecho?

✅ **TODO el código** - La aplicación está 100% completa y funcional  
✅ **8 endpoints** - Todos implementados y probados  
✅ **Documentación** - Guías paso a paso  
✅ **Testing** - Interfaz HTML para probar  

**Solo te falta:** Subir a GitHub y configurar Azure

### ¿Cuánto tiempo toma?

- **Trabajo activo:** 30-40 minutos
- **Esperas (deploys):** 20-30 minutos
- **Video:** 10 minutos
- **Total:** 1-2 horas

---

## 📁 Sobre el Código

### ¿Qué hace esta aplicación?

Es una **API REST de gestión de tareas** que permite:
- Crear, leer, actualizar y eliminar tareas
- Filtrar por estado (pending, in-progress, completed)
- Ver estadísticas
- Sistema de prioridades

### ¿Por qué TypeScript?

- ✅ Más profesional que JavaScript simple
- ✅ Detecta errores antes de ejecutar
- ✅ Muestra mejor nivel técnico
- ✅ Es lo que se usa en empresas reales

### ¿Por qué no tiene base de datos?

El ejercicio pide "sin dependencias externas". Una base de datos complicaría el deploy. Usa almacenamiento en memoria (perfecto para este caso).

### ¿Es muy básico un "Hola Mundo"?

Sí. Esta aplicación tiene:
- 8 endpoints (no solo 1)
- CRUD completo
- Validaciones
- Estructura profesional en capas
- Es el nivel esperado para una evaluación universitaria

### ¿Es muy complicado?

No. No tiene:
- ❌ Base de datos externa
- ❌ Autenticación
- ❌ Microservicios
- ❌ Mensajería
Es el punto medio perfecto.

---

## 🐙 Sobre GitHub

### ¿Debo crear un repositorio nuevo?

Sí, uno público específico para este ejercicio.

### ¿Qué nombre le pongo?

Sugerencia: `task-manager-api-cicd` o similar. Debe ser descriptivo.

### ¿Público o privado?

**PÚBLICO** - El ejercicio lo requiere.

### ¿Puedo usar un repositorio existente?

No recomendado. Mejor uno nuevo y limpio.

### ¿Qué archivos debo subir?

TODO excepto:
- ❌ `node_modules/` (está en .gitignore)
- ❌ `.env` si lo creas (está en .gitignore)
- ❌ Archivos de sistema

El resto SÍ:
- ✅ `src/`
- ✅ `dist/` (opcional, se genera en Azure)
- ✅ `package.json`
- ✅ `tsconfig.json`
- ✅ `.gitignore`
- ✅ `README.md`
- ✅ Todos los archivos .md

### ¿Debo borrar los archivos de ayuda?

NO. Puedes dejarlos todos. Muestran profesionalismo y organización.

---

## ☁️ Sobre Azure

### ¿Necesito tarjeta de crédito?

Sí, para crear la cuenta. Pero:
- ✅ Hay tier gratuito (F1)
- ✅ Puedes usar el tier básico (B1) por centavos
- ✅ Si usas B1 por 2 horas: ~$0.02

### ¿Me van a cobrar?

- **F1 (Free):** $0.00
- **B1 (Basic):** Solo por las horas usadas
- **Importante:** Elimina los recursos después

### ¿Qué pasa si no elimino los recursos?

Con F1: Nada, es gratis  
Con B1: Te cobrarán ~$13/mes

**Solución:** Sigue el paso de limpieza en el CHECKLIST

### ¿Puedo usar otro servicio en vez de Azure?

El ejercicio específicamente pide **Azure App Services** con GitHub Actions.

### ¿F1 o B1?

**F1 (Free):** Suficiente para el ejercicio  
**B1 (Basic):** Si F1 da problemas o no está disponible

### ¿Por qué tarda tanto el deploy?

Es normal:
- Primera vez: 10-20 minutos
- Azure tiene que crear infraestructura
- Instalar dependencias
- Compilar código

### "Application Error" ¿qué hago?

1. Espera 2-3 minutos (puede estar iniciando)
2. Ve a Log stream en Azure
3. Verifica startup command: `node dist/index.js`
4. Verifica variables: PORT = 8080
5. Lee `AZURE_CONFIGURACION.md`

---

## 🔄 Sobre CI/CD

### ¿Qué es CI/CD?

- **CI (Continuous Integration):** Integración continua del código
- **CD (Continuous Deployment):** Despliegue continuo automático

### ¿Cómo funciona aquí?

1. Haces cambio en el código
2. Push a GitHub
3. GitHub Actions se activa automáticamente
4. Compila el código
5. Lo sube a Azure
6. Azure reinicia con la nueva versión

**Todo automático** ✨

### ¿Tengo que configurar GitHub Actions?

NO. Azure lo hace automáticamente al conectar tu repo.

### ¿Dónde veo si funcionó?

GitHub → Tu repositorio → Pestaña "Actions"

Verde ✅ = Funcionó  
Rojo ❌ = Falló (clic para ver logs)

### ¿Qué pasa si falla el deploy?

1. Ve a GitHub Actions
2. Clic en el workflow fallido
3. Lee el error
4. Comunes:
   - `npm install` falló → package.json corrupto
   - `npm run build` falló → error de compilación
   - Deploy falló → problema de Azure

---

## 🎬 Sobre el Video

### ¿Qué debo mostrar?

1. Azure Portal con tu App Service
2. GitHub con el repositorio y Actions
3. Endpoints funcionando ANTES del PR
4. Pull Request merged
5. Endpoint nuevo funcionando DESPUÉS del PR

### ¿Cuánto debe durar?

3-5 minutos. Conciso y directo.

### ¿Dónde lo subo?

YouTube (público o no listado), Google Drive, o Vimeo.

### ¿Qué pasa si el deploy tarda mucho?

Pausa la grabación o corta el video. Puedes editarlo.

### ¿Necesito edición profesional?

No. Una grabación de pantalla simple está bien.

### ¿Qué herramienta uso para grabar?

- Windows: Xbox Game Bar (Win + G)
- OBS Studio (gratis)
- Loom (web)
- ShareX (gratis)

---

## 📝 Sobre la Entrega

### ¿Qué entrego exactamente?

Un archivo .txt con:
- URL del repositorio GitHub
- URL de la aplicación en Azure
- URL del video
- Lista de endpoints

### ¿Dónde lo entrego?

Campus Virtual, según las instrucciones del examen.

### ¿En qué formato?

Archivo de texto plano (.txt)

### ¿Puedo borrar el repo después?

NO. Debe quedar público como evidencia.

### ¿Puedo borrar Azure después?

SÍ. Es más, DEBES borrarlo para no tener cargos.

---

## 🔧 Problemas Comunes

### Error: "Cannot find module 'express'"

**Solución:**
```powershell
npm install
```

### Error: "tsc: command not found"

**Solución:**
```powershell
npm install
```
TypeScript está en devDependencies.

### Error: "Port 3000 already in use"

**Solución:**
```powershell
# Buscar proceso
Get-Process -Name node

# Matar proceso
Stop-Process -Name node -Force

# O cambiar puerto
$env:PORT=3001; npm run dev
```

### No puedo hacer push a GitHub

**Solución:**
```powershell
# Configurar Git
git config --global user.email "tu@email.com"
git config --global user.name "Tu Nombre"

# Autenticar
# GitHub pide token personal ahora, no contraseña
```

### Azure no detecta mi repositorio

**Solución:**
1. Deployment Center en Azure
2. Disconnect si ya hay uno
3. Reconectar con GitHub
4. Autorizar aplicación
5. Seleccionar repo correcto

### El endpoint /api/info no existe

Aún no lo has creado. Es parte del ejercicio (paso del PR).

---

## 🎓 Dudas Académicas

### ¿Esto vale para todos los puntos?

Vale 15 puntos del Ejercicio B.

### ¿Qué pasa si no funciona?

Sigue el CHECKLIST paso a paso. Consulta AZURE_CONFIGURACION.md para problemas.

### ¿Puedo pedir ayuda?

Sí, pero intenta resolver primero con la documentación incluida.

### ¿Es grupal o individual?

Individual (revisa tu instrucciones del examen).

### ¿Cuándo es la entrega?

Revisa tu Campus Virtual / instrucciones del examen.

---

## 💡 Consejos

### Mejor práctica para el ejercicio:

1. **Lee primero, ejecuta después**
2. **Sigue el CHECKLIST en orden**
3. **No te saltes pasos**
4. **Prueba local antes de subir**
5. **Verifica cada paso antes del siguiente**
6. **Graba el video al final, cuando todo funcione**
7. **Elimina recursos de Azure después de entregar**

### Si te trabas:

1. **Respira** - Es normal
2. **Lee el error completo**
3. **Busca en este FAQ**
4. **Consulta AZURE_CONFIGURACION.md**
5. **Revisa logs en GitHub Actions o Azure**
6. **Google el error específico**

### Para ganar tiempo:

- ✅ Usa F1 (Free) en Azure si está disponible
- ✅ Mientras esperas un deploy, prepara el siguiente paso
- ✅ Prueba local ANTES de hacer push
- ✅ Lee toda la guía antes de empezar

---

## 📊 Checklist de Verificación Rápida

Antes de entregar, verifica:

- [ ] ✅ Repositorio público en GitHub
- [ ] ✅ Código subido completo
- [ ] ✅ App Service creado en Azure
- [ ] ✅ GitHub Actions con check verde
- [ ] ✅ URL de Azure funcionando
- [ ] ✅ Todos los endpoints responden
- [ ] ✅ Pull Request merged
- [ ] ✅ Endpoint /api/info funciona
- [ ] ✅ Video grabado y subido
- [ ] ✅ ENTREGA.txt creado
- [ ] ✅ Todo entregado en Campus Virtual

---

## 🆘 ¿Aún tienes dudas?

### Revisa en este orden:

1. **Este FAQ** (estás aquí)
2. **CHECKLIST.md** - Pasos específicos
3. **INSTRUCCIONES_EJERCICIO_B.md** - Guía detallada
4. **AZURE_CONFIGURACION.md** - Problemas técnicos
5. **EJEMPLOS_RESPUESTAS.md** - Cómo deben verse las respuestas

### Si el problema persiste:

- Lee los **logs** (GitHub Actions o Azure Log Stream)
- **Google** el error específico
- Revisa la **configuración** paso a paso

---

## ✅ Resumen Ultra Rápido

1. **Código**: Ya está listo ✅
2. **GitHub**: Crea repo público, sube código
3. **Azure**: Crea App Service, conecta GitHub
4. **Espera**: Deploy automático (10-20 min)
5. **Prueba**: Verifica endpoints
6. **PR**: Crea rama, agrega /api/info, merge
7. **Espera**: Segundo deploy (5-10 min)
8. **Graba**: Video mostrando todo
9. **Entrega**: ENTREGA.txt con URLs
10. **Limpia**: Elimina recursos Azure

**Total: 15 puntos** 🎉

---

¿Listo? Abre **`CHECKLIST.md`** y empieza. ¡Éxito! 🚀
