import { Component, Input, Output, EventEmitter } from '@angular/core';
import { TaskCardComponent } from '../task-card/task-card.component';
import { Task } from '../../types';

@Component({
  selector: 'app-task-list',
  imports: [TaskCardComponent],
  template: `
    <div class="task-list-container">
      <h2>Your Tasks</h2>

      <ul class="nav-tabs">
        <li><button [class.active]="activeTab === 'all'" (click)="setTab('all')">All Tasks</button></li>
        <li><button [class.active]="activeTab === 'not_done'" (click)="setTab('not_done')">Not Done</button></li>
        <li><button [class.active]="activeTab === 'done'" (click)="setTab('done')">Done</button></li>
      </ul>

      <div class="task-grid mt-3">
        @for (t of filteredTasks; track t.id) {
          <app-task-card
            [task]="t"
            (action)="forwardAction($event)">
          </app-task-card>
        } @empty {
          <div class="empty-state">
            <p>No tasks found in this category.</p>
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    .task-list-container { margin-top: 30px; }
    h2 { font-size: 1.3rem; color: #333; margin-bottom: 15px; }
    .nav-tabs { display: flex; list-style: none; padding: 0; margin: 0 0 20px 0; border-bottom: 2px solid #ddd; gap: 5px; }
    .nav-tabs button { background: none; border: none; padding: 10px 20px; cursor: pointer; font-size: 1rem; color: #555; font-weight: bold; border-bottom: 3px solid transparent; margin-bottom: -2px; transition: all 0.3s; }
    .nav-tabs button:hover { color: #2196F3; }
    .nav-tabs button.active { color: #2196F3; border-bottom-color: #2196F3; }
    .empty-state { text-align: center; padding: 30px; background: white; border-radius: 8px; color: #777; font-style: italic; }
  `]
})
export class TaskListComponent {
  @Input() taskListArray: Task[] = [];
  @Output() taskAction = new EventEmitter<{type: string, payload: string}>();

  activeTab: 'all' | 'done' | 'not_done' = 'all';

  get filteredTasks(): Task[] {
    if (this.activeTab === 'all') {
      return this.taskListArray;
    }
    return this.taskListArray.filter(task => task.status === this.activeTab);
  }

  setTab(tabName: 'all' | 'done' | 'not_done') {
    this.activeTab = tabName;
  }

  forwardAction(event: {type: string, payload: string}) {
    this.taskAction.emit(event);
  }
}
