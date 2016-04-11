 import 'angular2-universal/polyfills';
 import {prebootComplete} from 'angular2-universal';

 import {bootstrap} from 'angular2/platform/browser';
 import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';
import {enableProdMode} from 'angular2/core';

 import {AppComponent} from './app/main/app.component';

enableProdMode();

bootstrap(AppComponent, [
  ...ROUTER_PROVIDERS,
  ...HTTP_PROVIDERS
 ])
 .then(prebootComplete);
