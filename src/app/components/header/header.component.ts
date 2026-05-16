import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header class="app-header">
      <h1>Task Manager</h1>
      <nav>
        <span>Home</span> | <span>Tasks</span> | <span>Settings</span>
      </nav>
    </header>
  `,
  styles: [`
    .app-header {
      background-color: #4CAF50;
      color: white;
      padding: 15px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    h1 { margin: 0; font-size: 1.5rem; }
    nav span { cursor: pointer; padding: 0 10px; font-weight: 500; }
    nav span:hover { text-decoration: underline; }
  `]
})
export class HeaderComponent {}
