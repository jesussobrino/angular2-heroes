import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {HeroService} from '../commons/hero.service';
import {HeroesComponent} from '../heroes/heroes.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {HeroDetailComponent} from '../hero-detail/hero-detail.component';
import {JSONP_PROVIDERS} from 'angular2/http';



@Component({
    selector: 'heroes-app',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, HeroService, JSONP_PROVIDERS],
    template: `
      <h1>{{title}}</h1>
      <nav>
        <a [routerLink]="['Heroes']">Heroes</a>
        <a [routerLink]="['Dashboard']">Dashboard</a>
        <a href="app/ts/web-workers/web-workers.html" class="link">Web Workers</a>
      </nav>
      <router-outlet></router-outlet>
  `,
    styleUrls: ['app/ts/main/app.component.css']
})

@RouteConfig([
    {
        path: '/heroes',
        name: 'Heroes',
        component: HeroesComponent
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/detail/:id',
        name: 'HeroDetail',
        component: HeroDetailComponent
    }
])

export class AppComponent {
    private title = 'Tour of Heroes';
}
