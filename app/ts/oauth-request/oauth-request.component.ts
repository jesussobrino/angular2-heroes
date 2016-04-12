import {Component, OnInit} from "angular2/core";
import {Control} from "angular2/common";
import {HeroService} from "../commons/hero.service";
import {CanActivate} from "angular2/router";
import {tokenNotExpired} from "angular2-jwt";

@CanActivate(() => tokenNotExpired())

@Component({
    selector: 'oauth-request',
    templateUrl: 'app/ts/oauth-request/oauth-request.component.html'
})
export class OauthRequestComponent implements OnInit {
    youtubeControl:Control = new Control();
    private youtubeResults:any;


    constructor(private _heroService:HeroService) {
    }

    ngOnInit():any {
        this.youtubeControl.valueChanges
            .debounceTime(400)
            .distinctUntilChanged()
            .flatMap(search => this._heroService.youtubeSearchList(search.toString()))
            .subscribe(result => this.youtubeResults = result);
    }


}
