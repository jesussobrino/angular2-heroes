import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Hero} from '../commons/hero';
import {HeroService} from '../commons/hero.service';
import {es_ES} from '../../i18n/es-ES'

@Component({
    selector: 'hero-detail',
    inputs: ['hero'],
    templateUrl: 'app/ts/hero-detail/hero-detail.component.html',
    styleUrls: ['app/ts/hero-detail/hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit{
    hero: Hero;
    esLanguage: any = es_ES;

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
