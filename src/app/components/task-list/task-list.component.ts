import { Component } from '@angular/core';
import { TaskCardComponent } from '../task-card/task-card.component';

@Component({
  selector: 'app-task-list',
  imports: [TaskCardComponent],
  template: `
    <div class="task-list-container">
      <h2>Your Tasks</h2>
      <!-- Dummy Data: Calling the Task Card multiple times -->
      <app-task-card></app-task-card>
      <app-task-card></app-task-card>
      <app-task-card></app-task-card>
    </div>
  `,
  styles: [`
    .task-list-container { margin-top: 30px; }
    h2 { font-size: 1.3rem; color: #333; margin-bottom: 15px; }
  `]
})
export class TaskListComponent {}
