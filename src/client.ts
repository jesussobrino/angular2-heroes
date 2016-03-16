 import 'angular2-universal-preview/polyfills';
 import {prebootComplete} from 'angular2-universal-preview';

 import {bootstrap} from 'angular2/platform/browser';
 import {ROUTER_PROVIDERS} from 'angular2/router';

 import {AppComponent} from './app/main/app.component';

 bootstrap(AppComponent, [
   ...ROUTER_PROVIDERS
 ])
 .then(prebootComplete);
