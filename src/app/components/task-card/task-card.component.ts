import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../types';

@Component({
  selector: 'app-task-card',
  template: `
    <div class="card" [class.done-card]="task.status === 'done'">
      <div class="card-header">
        <h3 [class.strike]="task.status === 'done'">{{ task.title }}</h3>
        <span class="badge" [class]="'priority-' + task.priority.toLowerCase()">{{ task.priority }} Priority</span>
      </div>
      <p class="description">{{ task.description || 'No description provided.' }}</p>
      <div class="card-footer">
        <span class="badge category">{{ task.category }}</span>
        <span class="tags">{{ task.tags }}</span>
        <span class="date">📅 Due: {{ task.dueDate || 'N/A' }}</span>
      </div>

      <div class="actions">
        <button class="btn btn-status" (click)="emitAction('toggle_status')">
          {{ task.status === 'done' ? 'Mark as Not Done' : 'Mark as Done' }}
        </button>
        <button class="btn btn-edit" (click)="emitAction('update')">Update</button>
        <button class="btn btn-delete" (click)="emitAction('delete')">Delete</button>
      </div>
    </div>
  `,
  styles: [`
    .card { background: white; border-radius: 8px; padding: 15px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); margin-bottom: 15px; border-left: 5px solid #2196F3; transition: all 0.3s; }
    .done-card { border-left-color: #4CAF50; opacity: 0.8; }
    .card-header { display: flex; justify-content: space-between; align-items: center; }
    h3 { margin: 0; font-size: 1.1rem; }
    .strike { text-decoration: line-through; color: #777; }
    .description { color: #555; font-size: 0.95rem; margin: 10px 0; }
    .card-footer { display: flex; gap: 10px; align-items: center; font-size: 0.85rem; color: #777; flex-wrap: wrap; margin-bottom: 15px; }
    .badge { padding: 4px 8px; border-radius: 12px; font-weight: bold; font-size: 0.75rem; color: white; }
    .priority-high { background-color: #f44336; }
    .priority-medium { background-color: #FF9800; }
    .priority-low { background-color: #4CAF50; }
    .category { background-color: #2196F3; }
    .tags { font-style: italic; }
    .date { margin-left: auto; font-weight: bold; }
    .actions { display: flex; gap: 10px; border-top: 1px solid #eee; padding-top: 10px; }
    .btn { padding: 6px 12px; border: none; border-radius: 4px; cursor: pointer; font-size: 0.8rem; font-weight: bold; color: white; transition: opacity 0.2s;}
    .btn:hover { opacity: 0.8; }
    .btn-status { background-color: #4CAF50; flex-grow: 1; }
    .btn-edit { background-color: #FF9800; }
    .btn-delete { background-color: #f44336; }
  `]
})
export class TaskCardComponent {
  @Input() task!: Task;
  @Output() action = new EventEmitter<{type: string, payload: string}>();

  emitAction(type: string) {
    this.action.emit({ type, payload: this.task.id });
  }
}
