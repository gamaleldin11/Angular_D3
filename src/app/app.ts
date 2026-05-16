import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { TaskInputComponent } from './components/task-input/task-input.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { Task } from './types';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    CarouselComponent,
    TaskInputComponent,
    TaskListComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Task Manager');

  // THE MASTER STATE
  mainTasksArray: Task[] = [];

  // Holds the task currently being updated
  taskBeingEdited: Task | null = null;

  // Handles adding OR updating from the form
  handleFormSubmit(submittedTask: Task) {
    const existingIndex = this.mainTasksArray.findIndex(t => t.id === submittedTask.id);

    if (existingIndex > -1) {
      // UPDATE: We found the ID in the array, so overwrite it
      this.mainTasksArray[existingIndex] = submittedTask;
      this.taskBeingEdited = null; // Clear the edit state
    } else {
      // ADD: Brand new task
      this.mainTasksArray.unshift(submittedTask); // unshift puts it at the top of the list
    }
  }

  // Handles actions from the Task Cards
  handleCardAction(event: {type: string, payload: string}) {
    const taskId = event.payload;

    if (event.type === 'delete') {
      this.mainTasksArray = this.mainTasksArray.filter(t => t.id !== taskId);
    }
    else if (event.type === 'toggle_status') {
      const task = this.mainTasksArray.find(t => t.id === taskId);
      if (task) {
        task.status = task.status === 'done' ? 'not_done' : 'done';
      }
    }
    else if (event.type === 'update') {
      // Pass the task down to the form
      const task = this.mainTasksArray.find(t => t.id === taskId);
      if (task) {
        this.taskBeingEdited = task;
        // Scroll to top so user sees the form
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }
}
