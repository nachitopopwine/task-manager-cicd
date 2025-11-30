import { Router, Request, Response } from 'express';
import taskService from '../services/taskService';
import { CreateTaskDto, UpdateTaskDto } from '../types/task.types';

const router = Router();

// GET / - Ruta inicial
router.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'API de Gestión de Tareas - Sistema CI/CD con Azure App Services',
    version: '1.0.0',
    endpoints: {
      tasks: '/api/tasks',
      statistics: '/api/tasks/statistics',
      health: '/api/health'
    }
  });
});

// GET /api/health - Health check
router.get('/api/health', (req: Request, res: Response) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// GET /api/tasks/statistics - Estadísticas
router.get('/api/tasks/statistics', (req: Request, res: Response) => {
  const stats = taskService.getStatistics();
  res.json(stats);
});

// GET /api/tasks - Obtener todas las tareas
router.get('/api/tasks', (req: Request, res: Response) => {
  const { status } = req.query;
  
  if (status && ['pending', 'in-progress', 'completed'].includes(status as string)) {
    const tasks = taskService.getTasksByStatus(status as any);
    return res.json({
      count: tasks.length,
      tasks
    });
  }

  const tasks = taskService.getAllTasks();
  res.json({
    count: tasks.length,
    tasks
  });
});

// GET /api/tasks/:id - Obtener tarea por ID
router.get('/api/tasks/:id', (req: Request, res: Response) => {
  const task = taskService.getTaskById(req.params.id);
  
  if (!task) {
    return res.status(404).json({ error: 'Tarea no encontrada' });
  }

  res.json(task);
});

// POST /api/tasks - Crear nueva tarea
router.post('/api/tasks', (req: Request, res: Response) => {
  const { title, description, priority }: CreateTaskDto = req.body;

  if (!title || !description) {
    return res.status(400).json({ 
      error: 'Los campos title y description son obligatorios' 
    });
  }

  if (priority && !['low', 'medium', 'high'].includes(priority)) {
    return res.status(400).json({ 
      error: 'La prioridad debe ser: low, medium o high' 
    });
  }

  const newTask = taskService.createTask({ title, description, priority });
  res.status(201).json(newTask);
});

// PUT /api/tasks/:id - Actualizar tarea
router.put('/api/tasks/:id', (req: Request, res: Response) => {
  const { title, description, status, priority }: UpdateTaskDto = req.body;

  if (status && !['pending', 'in-progress', 'completed'].includes(status)) {
    return res.status(400).json({ 
      error: 'El estado debe ser: pending, in-progress o completed' 
    });
  }

  if (priority && !['low', 'medium', 'high'].includes(priority)) {
    return res.status(400).json({ 
      error: 'La prioridad debe ser: low, medium o high' 
    });
  }

  const updatedTask = taskService.updateTask(req.params.id, {
    title,
    description,
    status,
    priority
  });

  if (!updatedTask) {
    return res.status(404).json({ error: 'Tarea no encontrada' });
  }

  res.json(updatedTask);
});

// DELETE /api/tasks/:id - Eliminar tarea
router.delete('/api/tasks/:id', (req: Request, res: Response) => {
  const deleted = taskService.deleteTask(req.params.id);

  if (!deleted) {
    return res.status(404).json({ error: 'Tarea no encontrada' });
  }

  res.json({ message: 'Tarea eliminada correctamente' });
});

export default router;
