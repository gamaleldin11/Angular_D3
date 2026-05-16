import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../types';

// Helper to generate a random ID
function generateId() {
  return Math.random().toString(36).substring(2, 9);
}

@Component({
  selector: 'app-task-input',
  imports: [FormsModule],
  template: `
    <div class="task-input-card">
      <h2>{{ isEditing ? 'Update Task' : 'Add New Task' }}</h2>

      <form (submit)="onSubmit($event)">
        <div class="form-group">
          <label>Task Title</label>
          <input type="text" name="title" [(ngModel)]="activeTask.title" placeholder="Enter task title..." required />
        </div>

        <div class="form-group">
          <label>Description</label>
          <textarea name="description" [(ngModel)]="activeTask.description" placeholder="Enter task description..."></textarea>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>Priority</label>
            <select name="priority" [(ngModel)]="activeTask.priority">
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          <div class="form-group">
            <label>Category</label>
            <select name="category" [(ngModel)]="activeTask.category">
              <option value="Work">Work</option>
              <option value="Personal">Personal</option>
              <option value="Study">Study</option>
            </select>
          </div>

          <div class="form-group">
            <label>Due Date</label>
            <input type="date" name="dueDate" [(ngModel)]="activeTask.dueDate" />
          </div>
        </div>

        <div class="form-group">
          <label>Tags (Comma separated)</label>
          <input type="text" name="tags" [(ngModel)]="activeTask.tags" placeholder="e.g., frontend, urgent" />
        </div>

        <button type="submit" class="btn-submit" [class.btn-update]="isEditing">
          {{ isEditing ? 'Save Changes' : 'Add Task' }}
        </button>
      </form>
    </div>
  `,
  styles: [`
    .task-input-card { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); margin-bottom: 20px; }
    h2 { margin-top: 0; font-size: 1.2rem; border-bottom: 1px solid #eee; padding-bottom: 10px; }
    .form-group { margin-bottom: 15px; display: flex; flex-direction: column; width: 100%; }
    .form-row { display: flex; gap: 15px; }
    label { font-size: 0.9rem; font-weight: bold; margin-bottom: 5px; }
    input, textarea, select { padding: 10px; border: 1px solid #ccc; border-radius: 4px; font-family: inherit; }
    textarea { resize: vertical; min-height: 80px; }
    .btn-submit { background: #4CAF50; color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer; font-size: 1rem; width: 100%; transition: background 0.3s; }
    .btn-submit:hover { background: #45a049; }
    .btn-update { background: #2196F3; }
    .btn-update:hover { background: #1976D2; }
  `]
})
export class TaskInputComponent implements OnChanges {
  @Input() taskToEdit: Task | null = null;
  @Output() sendTaskToParent = new EventEmitter<Task>();

  activeTask: Task = this.getEmptyTask();
  isEditing = false;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['taskToEdit'] && changes['taskToEdit'].currentValue) {
      this.activeTask = { ...changes['taskToEdit'].currentValue };
      this.isEditing = true;
    }
  }

  onSubmit(event: Event) {
    event.preventDefault();

    if (!this.activeTask.title) {
      alert("Please enter a task title!");
      return;
    }

    if (!this.isEditing) {
      this.activeTask.id = generateId();
    }

    this.sendTaskToParent.emit({ ...this.activeTask });

    this.activeTask = this.getEmptyTask();
    this.isEditing = false;
  }

  private getEmptyTask(): Task {
    return { id: '', title: '', description: '', priority: 'Low', category: 'Work', dueDate: '', tags: '', status: 'not_done' };
  }
}
