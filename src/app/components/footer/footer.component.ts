import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer>
      <p>&copy; 2026 Smart Task Manager App. All rights reserved.</p>
    </footer>
  `,
  styles: [`
    footer {
      text-align: center;
      padding: 15px;
      background-color: #333;
      color: white;
      font-size: 0.9rem;
      margin-top: auto;
    }
    p { margin: 0; }
  `]
})
export class FooterComponent {}
