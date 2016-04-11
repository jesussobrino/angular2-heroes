import {Component} from "angular2/core";
import {tokenNotExpired} from 'angular2-jwt';

declare var Auth0Lock;

@Component({
    selector: 'login-auth0',
    templateUrl: 'app/ts/login/login-auth0.component.html'
})

export class LoginAuth0Component {
    lock = new Auth0Lock('OIuqJ5DLDe0QQ6f4gXTqoXmUucTEfeHR', 'jesussobrino.eu.auth0.com');

    constructor() {
    }

    login() {
        this.lock.show((err:string, profile:string, id_token:string) => {
            if (err) {
                throw new Error(err);
            }

            localStorage.setItem('profile', JSON.stringify(profile));
            localStorage.setItem('id_token', id_token);

        });
    }

    logout() {
        localStorage.removeItem('profile');
        localStorage.removeItem('id_token');
    }

    loggedIn (){
        return tokenNotExpired();
    }
}