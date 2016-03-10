import {Component} from 'angular2/core';
import {Hero} from './hero';


@Component({
    selector: 'heroes-app',
    template: `
    <h1>{{title}}</h1>
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <div><input [(ngModel)]="hero.name" placeholder="Name 2-way-Data-Binding"></div>
      <div><input value="{{hero.name}}" placeholder="Name 1-way-Data-Binding"></div>
    </div>
    `
})
export class AppComponent {
    public title = 'Tour of Heroes';
    public hero:Hero = {
        id: 1,
        name: 'Windstorm'
    };
}
