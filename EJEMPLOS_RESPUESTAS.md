# 📸 Ejemplos de Respuestas de la API

## Para incluir en tu video o presentación

---

## 1. GET / (Ruta inicial)

**Request:**
```
GET http://localhost:3000/
```

**Response:** (200 OK)
```json
{
  "message": "API de Gestión de Tareas - Sistema CI/CD con Azure App Services",
  "version": "1.0.0",
  "endpoints": {
    "tasks": "/api/tasks",
    "statistics": "/api/tasks/statistics",
    "health": "/api/health"
  }
}
```

---

## 2. GET /api/health

**Request:**
```
GET http://localhost:3000/api/health
```

**Response:** (200 OK)
```json
{
  "status": "healthy",
  "timestamp": "2025-11-29T22:45:30.123Z",
  "uptime": 145.67
}
```

---

## 3. GET /api/tasks

**Request:**
```
GET http://localhost:3000/api/tasks
```

**Response:** (200 OK)
```json
{
  "count": 2,
  "tasks": [
    {
      "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      "title": "Implementar API REST",
      "description": "Crear endpoints para gestión de tareas",
      "status": "completed",
      "priority": "high",
      "createdAt": "2025-11-20T00:00:00.000Z",
      "updatedAt": "2025-11-25T00:00:00.000Z"
    },
    {
      "id": "b2c3d4e5-f6g7-8901-bcde-f12345678901",
      "title": "Configurar CI/CD",
      "description": "Implementar pipeline en GitHub Actions",
      "status": "in-progress",
      "priority": "high",
      "createdAt": "2025-11-26T00:00:00.000Z",
      "updatedAt": "2025-11-26T00:00:00.000Z"
    }
  ]
}
```

---

## 4. GET /api/tasks/statistics

**Request:**
```
GET http://localhost:3000/api/tasks/statistics
```

**Response:** (200 OK)
```json
{
  "total": 2,
  "byStatus": {
    "pending": 0,
    "inProgress": 1,
    "completed": 1
  },
  "byPriority": {
    "low": 0,
    "medium": 0,
    "high": 2
  },
  "completionRate": "50.00%"
}
```

---

## 5. GET /api/tasks?status=completed

**Request:**
```
GET http://localhost:3000/api/tasks?status=completed
```

**Response:** (200 OK)
```json
{
  "count": 1,
  "tasks": [
    {
      "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      "title": "Implementar API REST",
      "description": "Crear endpoints para gestión de tareas",
      "status": "completed",
      "priority": "high",
      "createdAt": "2025-11-20T00:00:00.000Z",
      "updatedAt": "2025-11-25T00:00:00.000Z"
    }
  ]
}
```

---

## 6. POST /api/tasks (Crear tarea)

**Request:**
```
POST http://localhost:3000/api/tasks
Content-Type: application/json

{
  "title": "Terminar examen",
  "description": "Completar ejercicio B del examen final",
  "priority": "high"
}
```

**Response:** (201 Created)
```json
{
  "id": "c3d4e5f6-g7h8-9012-cdef-g23456789012",
  "title": "Terminar examen",
  "description": "Completar ejercicio B del examen final",
  "status": "pending",
  "priority": "high",
  "createdAt": "2025-11-29T22:50:15.789Z",
  "updatedAt": "2025-11-29T22:50:15.789Z"
}
```

---

## 7. GET /api/tasks/:id (Obtener tarea específica)

**Request:**
```
GET http://localhost:3000/api/tasks/a1b2c3d4-e5f6-7890-abcd-ef1234567890
```

**Response:** (200 OK)
```json
{
  "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "title": "Implementar API REST",
  "description": "Crear endpoints para gestión de tareas",
  "status": "completed",
  "priority": "high",
  "createdAt": "2025-11-20T00:00:00.000Z",
  "updatedAt": "2025-11-25T00:00:00.000Z"
}
```

---

## 8. PUT /api/tasks/:id (Actualizar tarea)

**Request:**
```
PUT http://localhost:3000/api/tasks/b2c3d4e5-f6g7-8901-bcde-f12345678901
Content-Type: application/json

{
  "status": "completed",
  "title": "Configurar CI/CD - TERMINADO"
}
```

**Response:** (200 OK)
```json
{
  "id": "b2c3d4e5-f6g7-8901-bcde-f12345678901",
  "title": "Configurar CI/CD - TERMINADO",
  "description": "Implementar pipeline en GitHub Actions",
  "status": "completed",
  "priority": "high",
  "createdAt": "2025-11-26T00:00:00.000Z",
  "updatedAt": "2025-11-29T22:52:30.456Z"
}
```

---

## 9. DELETE /api/tasks/:id (Eliminar tarea)

**Request:**
```
DELETE http://localhost:3000/api/tasks/c3d4e5f6-g7h8-9012-cdef-g23456789012
```

**Response:** (200 OK)
```json
{
  "message": "Tarea eliminada correctamente"
}
```

---

## 10. GET /api/info (NUEVO - Después del PR)

**Request:**
```
GET http://localhost:3000/api/info
```

**Response:** (200 OK)
```json
{
  "application": "Task Manager API",
  "version": "2.0.0",
  "author": "Tu Nombre",
  "features": [
    "Gestión de tareas",
    "Sistema de prioridades",
    "Estadísticas en tiempo real",
    "CI/CD con Azure"
  ],
  "deployment": {
    "platform": "Azure App Services",
    "cicd": "GitHub Actions",
    "status": "Producción"
  }
}
```

---

## ❌ Ejemplos de Errores

### Error 404 - Tarea no encontrada

**Request:**
```
GET http://localhost:3000/api/tasks/id-inexistente
```

**Response:** (404 Not Found)
```json
{
  "error": "Tarea no encontrada"
}
```

### Error 400 - Datos inválidos

**Request:**
```
POST http://localhost:3000/api/tasks
Content-Type: application/json

{
  "title": "Solo título"
}
```

**Response:** (400 Bad Request)
```json
{
  "error": "Los campos title y description son obligatorios"
}
```

### Error 400 - Prioridad inválida

**Request:**
```
POST http://localhost:3000/api/tasks
Content-Type: application/json

{
  "title": "Tarea",
  "description": "Descripción",
  "priority": "super-urgente"
}
```

**Response:** (400 Bad Request)
```json
{
  "error": "La prioridad debe ser: low, medium o high"
}
```

### Error 404 - Endpoint no encontrado

**Request:**
```
GET http://localhost:3000/api/invalid
```

**Response:** (404 Not Found)
```json
{
  "error": "Endpoint no encontrado",
  "path": "/api/invalid"
}
```

---

## 📊 Estados Posibles

**Task Status:**
- `pending` - Tarea pendiente
- `in-progress` - Tarea en progreso
- `completed` - Tarea completada

**Task Priority:**
- `low` - Prioridad baja
- `medium` - Prioridad media
- `high` - Prioridad alta

---

## 💡 Tips para el Video

1. **Muestra primero los endpoints básicos:**
   - GET /
   - GET /api/health
   - GET /api/tasks

2. **Luego muestra la funcionalidad:**
   - GET /api/tasks/statistics
   - POST crear una tarea
   - GET /api/tasks para ver la nueva tarea
   - PUT actualizar el estado a "completed"

3. **Después del PR:**
   - GET /api/info (el nuevo endpoint)

4. **Opcional - Muestra filtros:**
   - GET /api/tasks?status=completed
   - GET /api/tasks?status=pending

---

**Nota:** Cuando uses Azure, reemplaza `http://localhost:3000` con tu URL de Azure:
`https://task-manager-tuapellido.azurewebsites.net`
