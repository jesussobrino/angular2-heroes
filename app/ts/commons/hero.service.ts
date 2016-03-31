import {Injectable} from 'angular2/core';
import {URLSearchParams, Jsonp, Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx'; // Adding all operators to Observable
import {HEROES} from "./heroes.mock";

@Injectable()
export class HeroService {
    constructor(private jsonp:Jsonp, private http:Http) {
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

        let search:URLSearchParams = new URLSearchParams();
        search.set('action', 'opensearch');
        search.set('search', searchParam);
        search.set('format', 'json');

        return this.jsonp.get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', {search})
            .map((res) => res.json()[1]);
    }

    searchZipCode(searchParam:string) {
        let search:URLSearchParams = new URLSearchParams();

        search.set('postalcode', searchParam);
        search.set('username', 'jesussobrino');
        search.set('maxRows', '10');

        return this.http.get('http://api.geonames.org/postalCodeSearchJSON', {search})
            .map(res => res.json().postalCodes)
            .catch(this.handleError);
    }

    private handleError (error: Response) {
        return Observable.throw(error.json().status.message || 'Server error');
    }
}
