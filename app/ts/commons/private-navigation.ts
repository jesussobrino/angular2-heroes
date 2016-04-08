import {OnInit} from "angular2/core";
import {Router} from "angular2/router";

export class PrivateNavigation implements OnInit {
    isLogged:boolean;

    constructor(protected _router:Router) {
    }

    ngOnInit():any {
        this.isLogged = localStorage.getItem('id_token');

        if (!this.isLogged) {
            this._router.navigate(['Login']);
        }
    }

}
