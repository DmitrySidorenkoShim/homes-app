import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  template: `
    <div class="counter">
      <p>Counter value: {{ counterValue() }}</p>
      <div class="counter-buttons">
        <button type="button" (click)="increment()">Increment</button>
        <button type="button" (click)="reset()">Reset</button>
        <button type="button" (click)="decrement()">Decrement</button>
      </div>
    </div>
  `,
  styles: [
    `
      .counter {
        margin: 1rem 0;
      }
      .counter-buttons {
        display: flex;
        gap: 0.5rem;
        margin-top: 0.5rem;
      }
      .counter-buttons button {
        padding: 0.25rem 0.75rem;
        cursor: pointer;
      }
    `,
  ],
})
export class CounterComponent {
  counterValue = signal(0);

  increment() {
    this.counterValue.update((val) => val + 1);
  }

  decrement() {
    this.counterValue.update((val) => val - 1);
  }

  reset() {
    this.counterValue.set(0);
  }
}
