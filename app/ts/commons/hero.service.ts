import {Injectable} from 'angular2/core';
import {URLSearchParams, Jsonp} from 'angular2/http';
import 'rxjs/add/operator/map';
import {HEROES} from "./heroes.mock";

@Injectable()
export class HeroService {
    constructor(private jsonp:Jsonp) {
    }

    getHeroes() {
        return Promise.resolve(HEROES);
    }

    getHero(id:number) {
        return Promise.resolve(HEROES).then(
            heroes => heroes.filter(hero => hero.id === id)[0]
        )
    }

    wikiSearch(searchParam:string) {
        console.log('HeroService:wikiSearch ');
        
        let search:URLSearchParams = new URLSearchParams();
        search.set('action', 'opensearch');
        search.set('search', searchParam);
        search.set('format', 'json');

        return this.jsonp
            .get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', {search})
            .map((request) => request.json()[1]);
    }
}
