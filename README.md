# API de Gestión de Tareas

API REST para gestión de tareas construida con Express y TypeScript.

## Características

- ✅ CRUD completo de tareas
- ✅ Filtrado por estado
- ✅ Sistema de prioridades
- ✅ Estadísticas en tiempo real
- ✅ Health check endpoint
- ✅ Sin dependencias externas (base de datos en memoria)

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

## Producción

```bash
npm run build
npm start
```

## Endpoints

### Ruta inicial
- `GET /` - Información de la API

### Health Check
- `GET /api/health` - Estado del servidor

### Tareas
- `GET /api/tasks` - Listar todas las tareas
- `GET /api/tasks?status=pending` - Filtrar por estado
- `GET /api/tasks/:id` - Obtener tarea por ID
- `POST /api/tasks` - Crear nueva tarea
- `PUT /api/tasks/:id` - Actualizar tarea
- `DELETE /api/tasks/:id` - Eliminar tarea

### Estadísticas
- `GET /api/tasks/statistics` - Estadísticas generales

## Ejemplos de uso

### Crear tarea
```bash
curl -X POST http://localhost:3000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Nueva tarea",
    "description": "Descripción de la tarea",
    "priority": "high"
  }'
```

### Actualizar tarea
```bash
curl -X PUT http://localhost:3000/api/tasks/{id} \
  -H "Content-Type: application/json" \
  -d '{
    "status": "completed"
  }'
```

## Estructura del Proyecto

```
src/
├── index.ts           # Punto de entrada
├── routes/            # Definición de rutas
├── services/          # Lógica de negocio
└── types/             # Tipos de TypeScript
```

## Variables de Entorno

- `PORT` - Puerto del servidor (default: 3000)

## Licencia

ISC
