import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Control} from 'angular2/common';
import {Observable} from 'rxjs/Observable';
import {Hero} from '../commons/hero';
import {HeroService} from '../commons/hero.service';
import {es_ES} from '../../i18n/es-ES'

@Component({
    selector: 'hero-detail',
    inputs: ['hero'],
    templateUrl: 'app/ts/hero-detail/hero-detail.component.html',
    styleUrls: ['app/ts/hero-detail/hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
    hero:Hero;
    esLanguage:any = es_ES;
    nameControl:Control = new Control();
    zipCodeControl:Control = new Control();
    wikiResults:Observable<Array<string>>;
    geoResults:any;

    constructor(private _heroService:HeroService, private _routeParams:RouteParams) {
    }

    ngOnInit() {
        var id = parseInt(this._routeParams.get('id'));
        this._heroService.getHero(id)
            .then(hero => this.hero = hero);
        // .then(() => this.inputControl.updateValue(this.hero.name)); //TODO Review this

        this.wikiResults = this._heroService.wikiSearch(this.nameControl.valueChanges, 300);
        this.zipCodeControl.valueChanges
            .debounceTime(400)
            .distinctUntilChanged()
            .flatMap(search => this._heroService.searchZipCode(search.toString()))
            .subscribe(result => this.geoResults = result);
    }

    goBack() {
        window.history.back();
    }
}
