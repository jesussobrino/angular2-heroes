import {DynamicComponentLoader, Component, ElementRef, OnInit, Injectable} from "angular2/core";

@Component({
    selector: 'child-component',
    template: `
        <div>
            <h2 [textContent]="'Hello my Property bound: '+title"></h2>
            <h2>Hello my Interpolated: {{title}}</h2>
        </div>
    `
})
class ChildComponent {
    private title = AppComponent.childTitle;
}

@Component({
    selector: 'heroes-app',
    template: `
                <h1>Hello my Interpolated: {{appTitle.title}}!</h1>
                <h1 [textContent]="'Hello my Property bound: '+appTitle.title+'!'"></h1>
                <div #child></div>
                <h1>End of parent: {{appTitle.endTitle}}</h1>
             `,
})

export class AppComponent implements OnInit {
    private appTitle:AppTitle = new AppTitle('Angular 2 app', 'Bye Bye!');

    constructor(private _dynamicComponentLoader:DynamicComponentLoader, private _elementRef:ElementRef) {
        //dynamicComponentLoader.loadIntoLocation(ChildComponent, elementRef, 'child');
    }

    ngOnInit():any {
        this._dynamicComponentLoader.loadIntoLocation(ChildComponent, this._elementRef, 'child');
    }

    public static get childTitle():string {
        let appComponent:AppComponent = new AppComponent(null, null);
        return appComponent.appTitle.title;
    }
}

export class AppTitle{
    private _title;
    private _endTitle;

    constructor(title, endTitle) {
        this._title = title;
        this._endTitle = endTitle;
    }

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
    }

    get endTitle() {
        return this._endTitle;
    }

    set endTitle(value) {
        this._endTitle = value;
    }
}
