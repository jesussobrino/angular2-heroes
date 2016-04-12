import {Injectable} from 'angular2/core';
import {URLSearchParams, Jsonp, Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx'; // Adding all operators to Observable
import {HEROES} from "./heroes.mock";
import {HttpClient} from "./httpClient";

@Injectable()
export class HeroService {
    constructor(private jsonp:Jsonp, private http:Http, private httpClient:HttpClient) {
    }

    getHeroes() {
        return Promise.resolve(HEROES);
    }

    getHero(id:number) {
        return Promise.resolve(HEROES).then(
            heroes => heroes.filter(hero => hero.id === id)[0]
        )
    }

    wikiSearch(terms:Observable<string>, debounceTime = 350) {
        return terms.debounceTime(debounceTime)
            .distinctUntilChanged()
            .switchMap(termData => this.rawSearch(termData.toString()));
    }

    rawSearch(searchParam:string) {
        console.log('HeroService:wikiSearch ', searchParam);

        let urlSearchParams:URLSearchParams = new URLSearchParams();
        urlSearchParams.set('action', 'opensearch');
        urlSearchParams.set('search', searchParam);
        urlSearchParams.set('format', 'json');

        return this.jsonp.get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', {search: urlSearchParams})
            .map((res) => res.json()[1]);
    }

    searchZipCode(searchParam:string):Observable<any> {
        let urlSearchParams:URLSearchParams = new URLSearchParams();

        urlSearchParams.set('postalcode', searchParam);
        urlSearchParams.set('username', 'jesussobrino');
        urlSearchParams.set('maxRows', '10');

        return this.http.get('http://api.geonames.org/postalCodeSearchJSON', {search: urlSearchParams})
            .map(res => res.json().postalCodes);
    }

    youtubeSearchList(searchParam:string) {
        let urlSearchParams:URLSearchParams = new URLSearchParams();
        urlSearchParams.set('q', searchParam);
        urlSearchParams.set('part', 'id,snippet');

        return this.httpClient.get('https://content.googleapis.com/youtube/v3/search', {search: urlSearchParams})
            .map(res => res.items);
    }
}
