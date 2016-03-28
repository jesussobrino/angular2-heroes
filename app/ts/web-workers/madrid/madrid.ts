import {Clock} from '../clock.ts';

import {Component, platform} from "angular2/core";
import {WORKER_APP_PLATFORM, WORKER_APP_APPLICATION} from "angular2/platform/worker_app";

@Component({
    selector: 'madrid',
    templateUrl: './clock.html'
})

export class Madrid extends Clock{
    city = 'Madrid';

    constructor(){
        super(2);
    }
}

platform([WORKER_APP_PLATFORM]).application([WORKER_APP_APPLICATION]).bootstrap(Madrid);
