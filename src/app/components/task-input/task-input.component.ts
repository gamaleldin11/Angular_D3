import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


interface Task {
  title: string;
  description: string;
  priority: string;
  category: string;
  dueDate: string;
  tags: string;
}

@Component({
  selector: 'app-task-input',
  imports: [FormsModule],
  template: `
    <div class="task-input-card">
      <h2>Add New Task</h2>

      <form (submit)="onAddTask($event)"> /*event binding*/
        <div class="form-group">
          <label>Task Title</label>
          <input type="text" name="title" [(ngModel)]="newTask.title" placeholder="Enter task title..." required />
        </div>

        <div class="form-group">
          <label>Description</label>
          <textarea name="description" [(ngModel)]="newTask.description" placeholder="Enter task description..."></textarea>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>Priority</label>
            <select name="priority" [(ngModel)]="newTask.priority">
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          <div class="form-group">
            <label>Category</label>
            <select name="category" [(ngModel)]="newTask.category">
              <option value="Work">Work</option>
              <option value="Personal">Personal</option>
              <option value="Study">Study</option>
            </select>
          </div>

          <div class="form-group">
            <label>Due Date</label>
            <input type="date" name="dueDate" [(ngModel)]="newTask.dueDate" />
          </div>
        </div>

        <div class="form-group">
          <label>Tags (Comma separated)</label>
          <input type="text" name="tags" [(ngModel)]="newTask.tags" placeholder="e.g., frontend, urgent" />
        </div>

        <button type="submit" class="btn-submit">Add Task</button>
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
    .btn-submit { background: #4CAF50; color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer; font-size: 1rem; width: 100%; }
    .btn-submit:hover { background: #45a049; }
  `]
})
export class TaskInputComponent {
  newTask: Task = this.getEmptyTask();
  tasksArray: Task[] = [];
  onAddTask(event: Event) {
    event.preventDefault();

    if (!this.newTask.title) {
      alert("Please enter a task title!");
      return;
    }


    this.tasksArray.push({ ...this.newTask });

    console.log("--- New Task Added ---");
    console.log("Just Added:", this.newTask);
    console.log("All Tasks Array:", this.tasksArray);

    this.newTask = this.getEmptyTask();
  }

  private getEmptyTask(): Task {
    return {
      title: '',
      description: '',
      priority: 'Low',
      category: 'Work',
      dueDate: '',
      tags: ''
    };
  }
}
