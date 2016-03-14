import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Hero} from '../commons/hero';
import {HeroService} from '../commons/hero.service';

@Component({
    selector: 'hero-detail',
    inputs: ['hero'],
    templateUrl: 'src/app/hero-detail/hero-detail.component.html',
    styleUrls: ['src/app/hero-detail/hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit{
    hero: Hero;

    constructor(private _heroService:HeroService, private _routeParams:RouteParams){
    }

    ngOnInit(){
      var id = parseInt(this._routeParams.get('id'));
      this._heroService.getHero(id)
        .then(hero => this.hero = hero);
    }

    goBack(){
      window.history.back();
    }
}
