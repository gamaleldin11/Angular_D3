import { Component } from '@angular/core';

@Component({
  selector: 'app-task-input',
  template: `
    <div class="task-input-card">
      <h2>Add New Task</h2>
      <form>
        <div class="form-group">
          <label>Task Title</label>
          <input type="text" placeholder="Enter task title..." />
        </div>

        <div class="form-group">
          <label>Description</label>
          <textarea placeholder="Enter task description..."></textarea>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label>Priority</label>
            <select>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </select>
          </div>

          <div class="form-group">
            <label>Category</label>
            <select>
              <option>Work</option>
              <option>Personal</option>
              <option>Study</option>
            </select>
          </div>

          <div class="form-group">
            <label>Due Date</label>
            <input type="date" />
          </div>
        </div>

        <div class="form-group">
          <label>Tags (Comma separated)</label>
          <input type="text" placeholder="e.g., frontend, urgent" />
        </div>

        <button type="button" class="btn-submit">Add Task</button>
      </form>
    </div>
  `,
  styles: [`
    .task-input-card {
      background: white; padding: 20px; border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1); margin-bottom: 20px;
    }
    h2 { margin-top: 0; font-size: 1.2rem; border-bottom: 1px solid #eee; padding-bottom: 10px; }
    .form-group { margin-bottom: 15px; display: flex; flex-direction: column; width: 100%; }
    .form-row { display: flex; gap: 15px; }
    label { font-size: 0.9rem; font-weight: bold; margin-bottom: 5px; }
    input, textarea, select {
      padding: 10px; border: 1px solid #ccc; border-radius: 4px; font-family: inherit;
    }
    textarea { resize: vertical; min-height: 80px; }
    .btn-submit {
      background: #4CAF50; color: white; border: none; padding: 10px 20px;
      border-radius: 4px; cursor: pointer; font-size: 1rem; width: 100%;
    }
    .btn-submit:hover { background: #45a049; }
  `]
})
export class TaskInputComponent {}
