import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Http} from 'angular2/http';
import {HeroService} from '../commons/hero.service';
import {HeroesComponent} from '../heroes/heroes.component';
import {DashboardComponent} from '../dashboard/dashboard.component';
import {HeroDetailComponent} from '../hero-detail/hero-detail.component';


//TODO Restore templateUrl & styleUrls as soon as this issue is released: https://github.com/angular/universal/issues/294
@Component({
    selector: 'heroes-app',
    directives: [...ROUTER_DIRECTIVES],
    providers: [HeroService],
    template: `
      <h1>{{title}} {{description}}</h1>
      <nav>
        <a [routerLink]="['Heroes']">Heroes</a>
        <a [routerLink]="['Dashboard']">Dashboard</a>
      </nav>
      <main>
        <router-outlet></router-outlet>
      </main>
  `,
    styles: [`
        h1 {
          font-size: 1.2em;
          color: #999;
          margin-bottom: 0;
        }
        h2 {
          font-size: 2em;
          margin-top: 0;
          padding-top: 0;
        }
        nav a {
          padding: 5px 10px;
          text-decoration: none;
          margin-top: 10px;
          display: inline-block;
          background-color: #eee;
          border-radius: 4px;
        }
        nav a:visited, a:link {
          color: #607D8B;
        }
        nav a:hover {
          color: #039be5;
          background-color: #CFD8DC;
        }
        nav a.router-link-active {
          color: #039be5;
        }
    `]
})

@RouteConfig([
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/heroes',
        name: 'Heroes',
        component: HeroesComponent
    },
    {
        path: '/detail/:id',
        name: 'HeroDetail',
        component: HeroDetailComponent
    },
    {
        path: '/**',
        redirectTo: ['Dashboard']
    }
])

export class AppComponent implements OnInit {
    private title;
    private description;

    constructor(private _http:Http) {
    }

    ngOnInit() {
        // we need to use full urls for the server to work
        this._http.get('http://localhost:3000/data.json')
            .subscribe(res => {
                this.title = res.json().title;
                this.description = res.json().description;
            });
    }
}
