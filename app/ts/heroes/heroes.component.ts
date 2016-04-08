import {Component, AfterViewInit} from "angular2/core";
import {Router} from "angular2/router";
import {Hero} from "../commons/hero";
import {HeroService} from "../commons/hero.service";
import {HeroDetailComponent} from "../hero-detail/hero-detail.component";
import {PrivateNavigation} from "../commons/private-navigation";

@Component({
    selector: 'heroes-list',
    directives: [HeroDetailComponent],
    templateUrl: 'app/ts/heroes/heroes.component.html',
    styleUrls: ['app/ts/heroes/heroes.component.css']
})

export class HeroesComponent extends PrivateNavigation implements AfterViewInit {
    private heroes:Hero[];
    private selectedHero:Hero;

    constructor(private _heroService:HeroService, private _route:Router) {
        super(_route);
    }

    ngAfterViewInit():any {
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
