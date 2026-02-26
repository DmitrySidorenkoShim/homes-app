import { Component } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';
import { CounterComponent } from '../components/counter/counter.component';

@Component({
  selector: 'app-tutorial',
  standalone: true,
  imports: [GreetingComponent, CounterComponent],
  template: `
    <section class="tutorial">
      <h2>Tutorial Demos</h2>
      <p>From the <a href="https://github.com/AhsanAyaz/angular-in-90ish" target="_blank" rel="noopener">Angular in 90-ish minutes</a> tutorial.</p>
      <app-greeting message="Welcome to the demo!" />
      <app-counter />
    </section>
  `,
  styles: [
    `
      .tutorial {
        padding: 1rem 0;
      }
      .tutorial h2 {
        margin-top: 0;
      }
    `,
  ],
})
export class TutorialComponent {}
