import {Component, AfterViewInit, NgZone} from "angular2/core";

declare var gapi:any;

@Component({
    selector: 'login',
    templateUrl: 'app/ts/login/login.component.html'
})

export class LoginComponent implements AfterViewInit {
    googleLoginButtonId = 'google-login-button';
    userAuthToken;
    userName;

    constructor(private _ngZone:NgZone) {
    }

    ngAfterViewInit():any {
        gapi.signin2.render(
            this.googleLoginButtonId,
            {
                'onSuccess': this.onSignIn,
                'scope': 'profile'
            }
        );
    }

    onSignIn = (googleUser) => {
        var profile = googleUser.getBasicProfile();
        this.updateUserData(googleUser.getAuthResponse().id_token, profile.getName());
        console.log('onSignIn - ID: ' + profile.getId());
    };

    signOut() {
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(() => {
            this.updateUserData();
            console.log('User signed out.');
        });
    }

    /**
     *
     * @param authToken
     * @param userName
     */
    updateUserData(authToken?, userName?) {
        this._ngZone.run(() => {
            this.userAuthToken = authToken;
            this.userName = userName;
            if (authToken) {
                localStorage.setItem('id_token', authToken);
            } else {
                localStorage.removeItem('id_token');
            }
        });
    }
}
