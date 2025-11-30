# 📚 ÍNDICE DE RECURSOS - Ejercicio B

---

## 🎯 ¿Por dónde empezar?

### Si quieres empezar YA:
👉 Lee **`CHECKLIST.md`** - Sigue paso a paso

### Si quieres entender todo:
👉 Lee **`INSTRUCCIONES_EJERCICIO_B.md`** - Guía completa y detallada

### Si quieres ver ejemplos:
👉 Abre **`test-api.html`** en tu navegador - Prueba la API visualmente

---

## 📁 Archivos del Proyecto

### 🚀 Código de la Aplicación
```
src/
├── index.ts              → Servidor principal (Express)
├── routes/
│   └── taskRoutes.ts     → Todos los endpoints (8 endpoints)
├── services/
│   └── taskService.ts    → Lógica de negocio (CRUD)
└── types/
    └── task.types.ts     → Tipos TypeScript

dist/                     → Código compilado (JavaScript)
```

### 📝 Configuración
- **`package.json`** - Dependencias y scripts
- **`tsconfig.json`** - Configuración TypeScript
- **`.gitignore`** - Archivos a ignorar en Git
- **`.env.example`** - Ejemplo de variables de entorno

### 📖 Documentación Principal
- **`README.md`** - Documentación técnica de la API
- **`CHECKLIST.md`** ⭐ - Lista paso a paso para completar el ejercicio
- **`INSTRUCCIONES_EJERCICIO_B.md`** ⭐ - Guía completa y detallada
- **`RESUMEN.md`** - Resumen ejecutivo del proyecto

### 🔧 Guías Específicas
- **`AZURE_CONFIGURACION.md`** - Todo sobre Azure App Services
- **`COMANDOS_PRUEBA.md`** - Comandos cURL para probar endpoints
- **`EJEMPLOS_RESPUESTAS.md`** - Respuestas JSON de ejemplo

### 🧪 Testing
- **`test-api.html`** - Interfaz visual para probar endpoints

---

## 🗺️ Flujo de Trabajo Sugerido

### 1️⃣ Familiarización (10 min)
1. Lee **`RESUMEN.md`** para entender el proyecto
2. Abre **`test-api.html`** para probar la API
3. Navega por los endpoints y ve las respuestas

### 2️⃣ Subir a GitHub (10 min)
1. Abre **`CHECKLIST.md`** → Parte 2
2. Crea repositorio en GitHub
3. Sube el código

### 3️⃣ Configurar Azure (20-30 min)
1. Sigue **`CHECKLIST.md`** → Parte 3
2. Consulta **`AZURE_CONFIGURACION.md`** si hay dudas
3. Espera el primer deploy

### 4️⃣ Verificar Primer Deploy (10 min)
1. Sigue **`CHECKLIST.md`** → Parte 4
2. Usa **`COMANDOS_PRUEBA.md`** para probar
3. Compara con **`EJEMPLOS_RESPUESTAS.md`**

### 5️⃣ Pull Request (15 min)
1. Sigue **`CHECKLIST.md`** → Parte 5
2. Agrega el endpoint `/api/info`
3. Espera el segundo deploy

### 6️⃣ Grabar Video (10 min)
1. Sigue **`CHECKLIST.md`** → Parte 6
2. Muestra todo funcionando
3. Sube el video

### 7️⃣ Entregar (5 min)
1. Crea `ENTREGA.txt`
2. Completa todos los campos
3. Entrega en Campus Virtual

### 8️⃣ Limpiar (5 min)
1. Elimina recursos de Azure
2. Mantén el repositorio GitHub

**Total:** ~1.5-2 horas

---

## 🎓 Archivos por Nivel de Urgencia

### 🔴 CRÍTICOS - Lee primero
1. **`CHECKLIST.md`** - Tu mapa de ruta
2. **`INSTRUCCIONES_EJERCICIO_B.md`** - Tu guía completa

### 🟡 IMPORTANTES - Consulta cuando necesites
3. **`AZURE_CONFIGURACION.md`** - Para problemas con Azure
4. **`COMANDOS_PRUEBA.md`** - Para probar endpoints
5. **`EJEMPLOS_RESPUESTAS.md`** - Para verificar respuestas

### 🟢 ÚTILES - Material de apoyo
6. **`RESUMEN.md`** - Overview del proyecto
7. **`README.md`** - Documentación técnica
8. **`test-api.html`** - Para testing visual

---

## 📊 Estructura de Archivos con Propósito

```
Ejercicio B/
│
├── 📂 src/                           → Código fuente TypeScript
│   ├── index.ts                      → Punto de entrada
│   ├── routes/taskRoutes.ts          → 8 endpoints REST
│   ├── services/taskService.ts       → Lógica CRUD
│   └── types/task.types.ts           → Interfaces TypeScript
│
├── 📂 dist/                          → Código compilado (auto-generado)
│
├── 📋 CHECKLIST.md                   → ⭐ EMPIEZA AQUÍ
├── 📘 INSTRUCCIONES_EJERCICIO_B.md   → ⭐ GUÍA COMPLETA
├── ☁️ AZURE_CONFIGURACION.md         → Ayuda específica Azure
├── 💻 COMANDOS_PRUEBA.md             → Comandos cURL
├── 📸 EJEMPLOS_RESPUESTAS.md         → Respuestas esperadas
├── 📄 RESUMEN.md                     → Overview del proyecto
├── 📖 README.md                      → Documentación técnica
├── 🧪 test-api.html                  → Testing visual
│
├── ⚙️ package.json                   → Dependencias
├── ⚙️ tsconfig.json                  → Config TypeScript
├── 🚫 .gitignore                     → Archivos a ignorar
└── 📝 .env.example                   → Ejemplo variables
```

---

## 🎯 Puntos del Ejercicio

| Actividad | Archivo de Ayuda | Puntos |
|-----------|------------------|--------|
| Subir a GitHub | CHECKLIST.md → Parte 2 | 3 pts |
| Configurar Azure | CHECKLIST.md → Parte 3-4 | 5 pts |
| Pull Request | CHECKLIST.md → Parte 5 | 7 pts |
| **TOTAL** | | **15 pts** |

---

## 🔍 Buscando Información Específica?

### "¿Cómo creo el repositorio en GitHub?"
→ **`CHECKLIST.md`** - Parte 2

### "¿Qué configuración usar en Azure?"
→ **`AZURE_CONFIGURACION.md`** - Configuración Óptima

### "¿Cómo pruebo los endpoints?"
→ **`test-api.html`** o **`COMANDOS_PRUEBA.md`**

### "¿Qué debería responder cada endpoint?"
→ **`EJEMPLOS_RESPUESTAS.md`**

### "Mi deploy falló, ¿qué hago?"
→ **`AZURE_CONFIGURACION.md`** - Solución de Problemas

### "¿Qué poner en el video?"
→ **`CHECKLIST.md`** - Parte 6

### "¿Qué es esta aplicación exactamente?"
→ **`RESUMEN.md`** o **`README.md`**

### "¿Qué nuevo endpoint debo agregar?"
→ **`INSTRUCCIONES_EJERCICIO_B.md`** - Parte 7B

---

## 🚀 Comandos Rápidos

### Iniciar servidor local:
```powershell
cd "c:\Users\ignac\OneDrive\Escritorio\Ejercicio B"
npm run dev
```

### Compilar:
```powershell
npm run build
```

### Probar endpoint:
```powershell
curl http://localhost:3000/api/tasks
```

O abre: http://localhost:3000

---

## ✅ Estado del Proyecto

- ✅ Código completo y funcional
- ✅ 8 endpoints implementados
- ✅ Compila sin errores
- ✅ Corre localmente sin problemas
- ✅ Documentación completa
- ✅ Listo para subir a GitHub
- ⏳ Pendiente: Deploy en Azure

---

## 💡 Tips de Navegación

1. **Usa el buscador de VS Code** (Ctrl+P) para encontrar archivos rápido
2. **Lee el CHECKLIST primero** - Te ahorra tiempo
3. **Consulta AZURE_CONFIGURACION** - Evita problemas comunes
4. **Prueba local antes de deploy** - Usa test-api.html
5. **Compara respuestas** - Usa EJEMPLOS_RESPUESTAS.md

---

## 🎓 Archivos para Diferentes Perfiles

### Si eres metódico:
1. **RESUMEN.md** → Entiende todo
2. **INSTRUCCIONES_EJERCICIO_B.md** → Lee completo
3. **CHECKLIST.md** → Ejecuta

### Si tienes prisa:
1. **CHECKLIST.md** → Solo esto
2. Consulta otros si hay problemas

### Si eres visual:
1. **test-api.html** → Prueba primero
2. **EJEMPLOS_RESPUESTAS.md** → Ve qué esperar
3. **CHECKLIST.md** → Ejecuta

---

## 📞 ¿Dudas?

Revisa en este orden:
1. **CHECKLIST.md** - Tu guía principal
2. **INSTRUCCIONES_EJERCICIO_B.md** - Detalles completos
3. **AZURE_CONFIGURACION.md** - Problemas técnicos

---

## 🎉 Todo Listo

Tienes **TODO** lo necesario para completar el ejercicio con éxito.

**Próximo paso:** Abre **`CHECKLIST.md`** y empieza.

¡Éxito! 🚀

---

**Proyecto:** Task Manager API  
**Tecnologías:** Express, TypeScript, Node.js  
**Deploy:** Azure App Services  
**CI/CD:** GitHub Actions  
**Puntos:** 15/15 posibles  
**Tiempo estimado:** 1.5-2 horas  
