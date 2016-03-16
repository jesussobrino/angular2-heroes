import {Component, OnInit} from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {Hero} from '../commons/hero';
import {HeroService} from '../commons/hero.service';

@Component({
    selector: 'hero-detail',
    inputs: ['hero'],
    template: `
        <div *ngIf="hero">
          <h2>{{hero.name}} details!</h2>
          <div><label>id: </label>{{hero.id}}</div>
          <div>
            <label>name: </label>
            <input [(ngModel)]="hero.name" placeholder="name"/>
          </div>
          <button (click)="goBack()">Go Back</button>
        </div>
    `,
    styles: [`
        label {
          display: inline-block;
          width: 3em;
          margin: .5em 0;
          color: #607D8B;
          font-weight: bold;
        }
        input {
          height: 2em;
          font-size: 1em;
          padding-left: .4em;
        }
        button {
          margin-top: 20px;
          font-family: Arial;
          background-color: #eee;
          border: none;
          padding: 5px 10px;
          border-radius: 4px;
          cursor: pointer; cursor: hand;
        }
        button:hover {
          background-color: #cfd8dc;
        }
        button:disabled {
          background-color: #eee;
          color: #ccc;
          cursor: auto;
        }
    `]
})

export class HeroDetailComponent implements OnInit {
    hero:Hero;

    constructor(private _heroService:HeroService, private _routeParams:RouteParams) {
    }

    ngOnInit() {
        var id = parseInt(this._routeParams.get('id'));
        this._heroService.getHero(id)
            .then(hero => this.hero = hero);
    }

    goBack() {
        window.history.back();
    }
}
