import { Component } from '@angular/core';

@Component({
  selector: 'app-task-card',
  template: `
    <div class="card">
      <div class="card-header">
        <h3>Dummy Task Title</h3>
        <span class="badge priority-high">High Priority</span>
      </div>
      <p class="description">empty</p>
      <div class="card-footer">
        <span class="badge category">Work</span>
        <span class="tags">#frontend, #angular</span>
        <span class="date">📅 Due: 2026-05-20</span>
      </div>
    </div>
  `,
  styles: [`
    .card {
      background: white; border-radius: 8px; padding: 15px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 15px; border-left: 5px solid #f44336;
    }
    .card-header { display: flex; justify-content: space-between; align-items: center; }
    h3 { margin: 0; font-size: 1.1rem; }
    .description { color: #555; font-size: 0.95rem; margin: 10px 0; }
    .card-footer { display: flex; gap: 10px; align-items: center; font-size: 0.85rem; color: #777; flex-wrap: wrap; }
    .badge { padding: 4px 8px; border-radius: 12px; font-weight: bold; font-size: 0.75rem; color: white; }
    .priority-high { background-color: #f44336; }
    .category { background-color: #2196F3; }
    .tags { font-style: italic; }
    .date { margin-left: auto; font-weight: bold; }
  `]
})
export class TaskCardComponent {}
