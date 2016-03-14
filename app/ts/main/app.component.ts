import {Component} from 'angular2/core';
import {HeroService} from "../commons/hero.service";
import {HeroesComponent} from "../heroes/heroes.component";

@Component({
    selector: 'heroes-app',
    directives: [HeroesComponent],
    providers: [HeroService],
    template: `
      <h1>{{title}}</h1>
      <heroes-list></heroes-list>
  `
})

export class AppComponent {
    private title = 'Tour of Heroes';
  }
