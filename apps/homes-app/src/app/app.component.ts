import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
    standalone: true,
    selector: 'app-root',
    template: `
    <main class="layout-container">
      <header class="brand-name">
        <a [routerLink]="['/']" class="logo-link">
          <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" />
        </a>
        <nav class="main-nav">
          <a [routerLink]="['/']" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Housing</a>
          <a [routerLink]="['/tutorial']" routerLinkActive="active">Tutorial</a>
          <a [routerLink]="['/todos']" routerLinkActive="active">Todos</a>
        </nav>
      </header>
      <section class="content">
        <router-outlet />
      </section>
    </main>
  `,
    styleUrls: ['./app.component.css'],
    imports: [RouterOutlet, RouterLink, RouterLinkActive]
})
export class AppComponent {}
