import {Injectable} from 'angular2/core';
import {HEROES} from "./heroes.mock";

@Injectable()
export class HeroService {
    getHeroes(){
        return HEROES
    }

}