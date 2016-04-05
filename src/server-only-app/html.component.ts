import {Component, ViewEncapsulation} from 'angular2/core';
import {RouteConfig} from 'angular2/router';

//Server-only apps
import {FooterComponent} from "./footer.component";

//Client apps
import {AppComponent} from "../app/main/app.component";
import {DashboardComponent} from "../app/dashboard/dashboard.component";
import {HeroesComponent} from "../app/heroes/heroes.component";
import {HeroDetailComponent} from "../app/hero-detail/hero-detail.component";


@Component({
    selector: 'html',
    directives: [
        AppComponent,
        FooterComponent
    ],
    providers: [],
    encapsulation: ViewEncapsulation.None,
    template: `
          <head>
            <title>{{ seo.title }}</title>
            <meta charset="UTF-8">
            <meta name="description" content="Angular 2 Heroes tutorial with server-side rendering">
            <meta name="keywords" content="Angular 2,Universal, Heroes">
            <meta name="author" content="Jesus Sobrino">
            <link rel="icon" href="data:;base64,iVBORw0KGgo=">
        
            <base [attr.href]="seo.baseUrl">
          </head>
          <body>
        
            <heroes-app>
              Loading...
            </heroes-app>
        
            <footer-app>
              Loading...
            </footer-app>
        
            <script [attr.src]="seo.src"></script>
          </body>
  `
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
export class HtmlComponent {
    seo = {
        baseUrl: '/',
        src: '/dist/client/bundle.js',
        title: 'Angular 2 Heroes Server-side rendering'
    };

}
