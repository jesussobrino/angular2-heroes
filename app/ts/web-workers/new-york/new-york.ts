import{Clock} from '../clock.ts';

import {Component, platform} from "angular2/core";
import {WORKER_APP_PLATFORM, WORKER_APP_APPLICATION} from "angular2/platform/worker_app";

@Component({
    selector: 'new-york',
    templateUrl: './clock.html'
})

export class NewYork extends Clock{
    city = 'New York';

    constructor(){
        super(-5);
    }
}

platform([WORKER_APP_PLATFORM]).application([WORKER_APP_APPLICATION]).bootstrap(NewYork);

