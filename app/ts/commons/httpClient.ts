import {Injectable} from "angular2/core";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";
import {
    Http,
    RequestOptionsArgs,
    RequestMethod,
    Headers,
    RequestOptions,
    Response,
    URLSearchParams
} from "angular2/http";

@Injectable()
export class HttpClient {
    private errorsSubject = new Subject<any>();
    public errors$:Observable<any>;

    constructor(private http:Http) {
        // Create our observables from the subjects
        this.errors$ = this.errorsSubject.asObservable();
    }

    /**
     *
     * @param requestMethod
     * @param url
     * @param body
     * @param options
     * @private
     */
    private request(requestMethod:RequestMethod, url:string, body:string, options:RequestOptionsArgs):Observable<any> {
        let requestOptions = new RequestOptions();
        requestOptions.method = requestMethod;
        requestOptions.url = url;
        requestOptions.headers = this.createHeaders();
        requestOptions.body = JSON.stringify(body);
        requestOptions.search = this.createSearchParams(options);


        let stream = this.http.request(requestOptions.url, requestOptions)
            .map(value => value.json())
            .catch(this.handleError)
            .finally(() => console.log('Final - request stream'));

        return stream;
    }

    /**
     * Generic Headers creator
     * @returns {Headers}
     */
    private createHeaders():Headers {
        let headers:Headers = new Headers();
        let accessToken = this.getToken();
        if (!accessToken) {
            return
        }

        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', accessToken);

        return headers;
    }

    /**
     *
     * @returns {string}
     */
    private getToken():string {
        let accessToken = localStorage.getItem('access_token');
        if (accessToken && accessToken !== 'undefined') {
            return 'Bearer ' + localStorage.getItem('access_token');
        } else {
            return null;
        }
    }

    /**
     * @param params
     * @returns {URLSearchParams}
     */
    private createSearchParams(params:RequestOptionsArgs):URLSearchParams {
        return (params.search as URLSearchParams)
    }

    /**
     *
     * @param error
     * @returns {ErrorObservable}
     */
    private handleError(error:Response):any {
        if (this.errorsSubject)
            this.errorsSubject.next(error);
        return Observable.throw(error.json() || {'code': '666', 'message': 'Request Server Error'});
    }

    /**
     *
     * @param url
     * @param options
     * @returns {any}
     */
    public get(url:string, options?:RequestOptionsArgs) {
        return this.request(RequestMethod.Get, url, null, options);
    }

    /**
     *
     * @param url
     * @param body
     * @param options
     * @returns {any}
     */
    public post(url:string, body:string, options?:RequestOptionsArgs) {
        return this.request(RequestMethod.Post, url, body, options);
    }

    /**
     *
     * @param url
     * @param body
     * @param options
     * @returns {any}
     */
    public put(url:string, body:string, options?:RequestOptionsArgs) {
        return this.request(RequestMethod.Put, url, body, options);
    }

    /**
     *
     * @param url
     * @param options
     * @returns {any}
     */
    public delete(url:string, options?:RequestOptionsArgs) {
        return this.request(RequestMethod.Delete, url, null, options);
    }

}