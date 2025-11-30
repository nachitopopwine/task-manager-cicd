# Comandos para probar los endpoints

## Reemplaza [TU-URL] con tu URL de Azure
## Ejemplo: https://task-manager-garcia.azurewebsites.net

## 1. Ruta inicial
curl https://[TU-URL].azurewebsites.net/

## 2. Health check
curl https://[TU-URL].azurewebsites.net/api/health

## 3. Ver todas las tareas
curl https://[TU-URL].azurewebsites.net/api/tasks

## 4. Ver estadísticas
curl https://[TU-URL].azurewebsites.net/api/tasks/statistics

## 5. Filtrar tareas por estado
curl https://[TU-URL].azurewebsites.net/api/tasks?status=pending
curl https://[TU-URL].azurewebsites.net/api/tasks?status=in-progress
curl https://[TU-URL].azurewebsites.net/api/tasks?status=completed

## 6. Crear nueva tarea
curl -X POST https://[TU-URL].azurewebsites.net/api/tasks \
  -H "Content-Type: application/json" \
  -d "{\"title\":\"Terminar examen\",\"description\":\"Completar ejercicio B del examen final\",\"priority\":\"high\"}"

## 7. Obtener tarea por ID (reemplaza {id} con un ID real de las tareas)
curl https://[TU-URL].azurewebsites.net/api/tasks/{id}

## 8. Actualizar tarea (reemplaza {id})
curl -X PUT https://[TU-URL].azurewebsites.net/api/tasks/{id} \
  -H "Content-Type: application/json" \
  -d "{\"status\":\"completed\"}"

## 9. Eliminar tarea (reemplaza {id})
curl -X DELETE https://[TU-URL].azurewebsites.net/api/tasks/{id}

## 10. Nuevo endpoint (después del PR)
curl https://[TU-URL].azurewebsites.net/api/info

---

# Para Windows PowerShell (si cURL no funciona):

## Ejemplo GET:
Invoke-WebRequest -Uri "https://[TU-URL].azurewebsites.net/api/tasks" -Method GET

## Ejemplo POST:
$body = @{
    title = "Tarea de prueba"
    description = "Descripción de la tarea"
    priority = "high"
} | ConvertTo-Json

Invoke-WebRequest -Uri "https://[TU-URL].azurewebsites.net/api/tasks" `
  -Method POST `
  -Body $body `
  -ContentType "application/json"
