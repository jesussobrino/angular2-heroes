import {Component, AfterViewInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Hero} from '../commons/hero';
import {HeroService} from '../commons/hero.service';
import {PrivateNavigation} from "../commons/private-navigation";

@Component(
    {
        selector: 'dashboard',
        templateUrl: 'app/ts/dashboard/dashboard.component.html',
        styleUrls: ['app/ts/dashboard/dashboard.component.css']
    }
)

export class DashboardComponent extends PrivateNavigation implements AfterViewInit {
    heroes:Hero[];

    constructor(protected _router:Router, private _heroService:HeroService) {
        super(_router);
    }

    ngAfterViewInit() {
        this._heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1, 5));
    }

    heroDetail(hero) {
        let link = ['HeroDetail', {id: hero.id}];
        this._router.navigate(link);
    }
}
