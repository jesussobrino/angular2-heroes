import {Clock} from '../clock.ts';

import {Component, platform} from 'angular2/core';
import {WORKER_APP_PLATFORM, WORKER_APP_APPLICATION} from "angular2/platform/worker_app";


@Component({
    selector: 'london',
    templateUrl: './clock.html'

})

export class London extends Clock{
    city = 'London';

    constructor(){
        super(0);
    }
}

platform([WORKER_APP_PLATFORM]).application([WORKER_APP_APPLICATION]).bootstrap(London);
