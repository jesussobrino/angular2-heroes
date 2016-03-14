import {Component} from 'angular2/core';
import {HeroService} from '../commons/hero.service';
import {HeroesComponent} from '../heroes/heroes.component';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';

@Component({
    selector: 'heroes-app',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, HeroService],
    template: `
      <h1>{{title}}</h1>
      <a [routerLink]="['Heroes']">Heroes</a>
      <router-outlet></router-outlet>
  `
})

@RouteConfig([
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  }
])

export class AppComponent {
    private title = 'Tour of Heroes';
  }
