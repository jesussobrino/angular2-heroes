import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Hero} from '../commons/hero';
import {HeroService} from "../commons/hero.service";
import {HeroDetailComponent} from '../hero-detail/hero-detail.component'

@Component({
    selector: 'heroes-list',
    directives: [HeroDetailComponent],
    templateUrl: 'src/app/heroes/heroes.component.html',
    styleUrls: ['src/app/heroes/heroes.component.css']
})

export class HeroesComponent implements OnInit {
    private title = 'Tour of Heroes';
    private heroes:Hero[];
    private selectedHero:Hero;

    constructor(private _heroService:HeroService, private _route:Router) {
    }

    ngOnInit():any {
        this.getHeroes();
    }

    getHeroes() {
        this._heroService.getHeroes()
          .then(heroes => this.heroes = heroes);
    }

    heroDetail(hero){
      this._route.navigate(['HeroDetail', {id: hero.id}])
    }

    onSelect(hero:Hero) {
        this.selectedHero = hero;
    }
}
