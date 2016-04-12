import {Component, AfterViewInit, NgZone, OnInit} from "angular2/core";

declare var gapi:any;

@Component({
    selector: 'login',
    templateUrl: 'app/ts/login/login.component.html'
})

export class LoginComponent implements AfterViewInit, OnInit {
    googleLoginButtonId = 'google-login-button';
    userAuthToken;
    userName;

    constructor(private _ngZone:NgZone) {
    }

    ngOnInit():any {
        let profile = localStorage.getItem('profile') ? JSON.parse(localStorage.getItem('profile')) : null;
        this.userAuthToken = localStorage.getItem('id_token');
        this.userName = profile ? (profile.name ? profile.name : profile.wc) : "";
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
        this.updateUserData(googleUser.getAuthResponse().id_token, JSON.stringify(profile));
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
     * @param profile
     */
    updateUserData(authToken?, profile?) {
        this._ngZone.run(() => {
            let profileParsed = profile ? JSON.parse(profile) : null;
            this.userAuthToken = authToken;
            this.userName = profileParsed ? (profileParsed.name ? profileParsed.name : profileParsed.wc) : "";
            if (authToken) {
                localStorage.setItem('id_token', authToken);
                localStorage.setItem('profile', profile);
            } else {
                localStorage.removeItem('id_token');
                localStorage.removeItem('profile');

            }
        });
    }
}
