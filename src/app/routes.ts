import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Details page',
  },
  {
    path: 'tutorial',
    loadComponent: () =>
      import('./tutorial/tutorial.component').then((m) => m.TutorialComponent),
    title: 'Tutorial demos',
  },
  {
    path: 'todos',
    loadComponent: () =>
      import('./todos/todos.component').then((m) => m.TodosComponent),
    title: 'Todos',
  },
];

export default routeConfig;
