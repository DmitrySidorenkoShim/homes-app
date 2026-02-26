import { Component, input } from '@angular/core';

@Component({
  selector: 'app-greeting',
  standalone: true,
  imports: [],
  template: `
    <p class="greeting">
      <strong>Greetings!</strong> {{ message() }}
    </p>
  `,
  styles: [
    `
      .greeting {
        margin: 0 0 1rem 0;
      }
    `,
  ],
})
export class GreetingComponent {
  message = input('Hello hello!');
}
