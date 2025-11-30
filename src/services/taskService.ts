import { Task, CreateTaskDto, UpdateTaskDto } from '../types/task.types';
import { v4 as uuidv4 } from 'uuid';

class TaskService {
  private tasks: Task[] = [];

  constructor() {
    // Datos iniciales de ejemplo
    this.tasks = [
      {
        id: uuidv4(),
        title: 'Implementar API REST',
        description: 'Crear endpoints para gestión de tareas',
        status: 'completed',
        priority: 'high',
        createdAt: new Date('2025-11-20'),
        updatedAt: new Date('2025-11-25')
      },
      {
        id: uuidv4(),
        title: 'Configurar CI/CD',
        description: 'Implementar pipeline en GitHub Actions',
        status: 'in-progress',
        priority: 'high',
        createdAt: new Date('2025-11-26'),
        updatedAt: new Date('2025-11-26')
      }
    ];
  }

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: string): Task | undefined {
    return this.tasks.find(task => task.id === id);
  }

  getTasksByStatus(status: 'pending' | 'in-progress' | 'completed'): Task[] {
    return this.tasks.filter(task => task.status === status);
  }

  createTask(taskData: CreateTaskDto): Task {
    const newTask: Task = {
      id: uuidv4(),
      title: taskData.title,
      description: taskData.description,
      status: 'pending',
      priority: taskData.priority || 'medium',
      createdAt: new Date(),
      updatedAt: new Date()
    };

    this.tasks.push(newTask);
    return newTask;
  }

  updateTask(id: string, taskData: UpdateTaskDto): Task | null {
    const taskIndex = this.tasks.findIndex(task => task.id === id);
    
    if (taskIndex === -1) {
      return null;
    }

    const updatedTask = {
      ...this.tasks[taskIndex],
      ...taskData,
      updatedAt: new Date()
    };

    this.tasks[taskIndex] = updatedTask;
    return updatedTask;
  }

  deleteTask(id: string): boolean {
    const initialLength = this.tasks.length;
    this.tasks = this.tasks.filter(task => task.id !== id);
    return this.tasks.length < initialLength;
  }

  getStatistics() {
    const total = this.tasks.length;
    const byStatus = {
      pending: this.tasks.filter(t => t.status === 'pending').length,
      inProgress: this.tasks.filter(t => t.status === 'in-progress').length,
      completed: this.tasks.filter(t => t.status === 'completed').length
    };
    const byPriority = {
      low: this.tasks.filter(t => t.priority === 'low').length,
      medium: this.tasks.filter(t => t.priority === 'medium').length,
      high: this.tasks.filter(t => t.priority === 'high').length
    };

    return {
      total,
      byStatus,
      byPriority,
      completionRate: total > 0 ? ((byStatus.completed / total) * 100).toFixed(2) + '%' : '0%'
    };
  }
}

export default new TaskService();
