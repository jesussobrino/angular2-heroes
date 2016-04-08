import {Injectable} from "angular2/core";
import {HttpClient} from "./httpClient";

@Injectable()
export class HttpErrorHandler {
    constructor(httpClient:HttpClient) {
        httpClient.errors$.subscribe(value => {
            console.group("HttpErrorHandler");
            console.log('status code: ', value.status);
            console.dir(value);
            console.groupEnd();

            if (value.status === 401) {
                window.location.reload();
                //TODO Route to login, refresh token, etc
            }
        })
    }
}
