import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  template: `
    <div class="carousel-container">
      <button class="nav-btn" (click)="prev()">&#10094; Prev</button>

      <div class="image-wrapper">
        <img [src]="images[currentIndex]" alt="Task Manager Highlights" class="carousel-image" />  /*property binding*/
      </div>

      <button class="nav-btn" (click)="next()">Next &#10095;</button>
    </div>

    <div class="indicators">
      @for (img of images; track $index) { /* 2nd line property binding*/
        <span
          class="dot"
          [class.active]="$index === currentIndex"
          (click)="goTo($index)"> </span> /*event binding*/
      }
    </div>
  `,
  styles: [`
    .carousel-container { display: flex; align-items: center; justify-content: center; gap: 20px; margin: 20px 0; }
    .image-wrapper { width: 100%; max-width: 600px; height: 300px; overflow: hidden; border-radius: 12px; box-shadow: 0 4px 10px rgba(0,0,0,0.1); }
    .carousel-image { width: 100%; height: 100%; object-fit: cover; transition: all 0.3s ease-in-out; }
    .nav-btn { background: #4CAF50; color: white; border: none; padding: 10px 15px; border-radius: 8px; cursor: pointer; font-weight: bold; }
    .nav-btn:hover { background: #45a049; }
    .indicators { text-align: center; margin-top: 10px; }
    .dot { display: inline-block; width: 12px; height: 12px; margin: 0 5px; background-color: #bbb; border-radius: 50%; transition: background-color 0.3s ease; cursor: pointer; }
    .active { background-color: #4CAF50; }
  `]
})
export class CarouselComponent {
  images: string[] = [
    'https://picsum.photos/id/1/800/400',
    'https://picsum.photos/id/2/800/400',
    'https://picsum.photos/id/3/800/400',
    'https://picsum.photos/id/4/800/400'
  ];

  currentIndex: number = 0;

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  goTo(index: number) {
    this.currentIndex = index;
  }
}
