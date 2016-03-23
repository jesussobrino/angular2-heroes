import {Injectable} from 'angular2/core';
import {HEROES} from "./heroes.mock";

@Injectable()
export class HeroService {
    getHeroes(){
        return Promise.resolve(HEROES);
    }

    getHero(id:number){
      return Promise.resolve(HEROES).then(
        heroes => heroes.filter(hero => hero.id === id)[0]
      )
    }
}