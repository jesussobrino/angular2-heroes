System.register(['angular2/core', 'angular2/http', 'rxjs/Observable', 'rxjs/Rx', "./heroes.mock"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Observable_1, heroes_mock_1;
    var HeroService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (heroes_mock_1_1) {
                heroes_mock_1 = heroes_mock_1_1;
            }],
        execute: function() {
            HeroService = (function () {
                function HeroService(jsonp, http) {
                    this.jsonp = jsonp;
                    this.http = http;
                }
                HeroService.prototype.getHeroes = function () {
                    return Promise.resolve(heroes_mock_1.HEROES);
                };
                HeroService.prototype.getHero = function (id) {
                    return Promise.resolve(heroes_mock_1.HEROES).then(function (heroes) { return heroes.filter(function (hero) { return hero.id === id; })[0]; });
                };
                HeroService.prototype.wikiSearch = function (terms, debounceTime) {
                    var _this = this;
                    if (debounceTime === void 0) { debounceTime = 350; }
                    return terms.debounceTime(debounceTime)
                        .distinctUntilChanged()
                        .switchMap(function (termData) { return _this.rawSearch(termData.toString()); });
                };
                HeroService.prototype.rawSearch = function (searchParam) {
                    console.log('HeroService:wikiSearch ', searchParam);
                    var search = new http_1.URLSearchParams();
                    search.set('action', 'opensearch');
                    search.set('search', searchParam);
                    search.set('format', 'json');
                    return this.jsonp.get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', { search: search })
                        .map(function (res) { return res.json()[1]; });
                };
                HeroService.prototype.searchZipCode = function (searchParam) {
                    var search = new http_1.URLSearchParams();
                    search.set('postalcode', searchParam);
                    search.set('username', 'jesussobrino');
                    search.set('maxRows', '10');
                    return this.http.get('http://api.geonames.org/postalCodeSearchJSON', { search: search })
                        .map(function (res) { return res.json().postalCodes; })
                        .catch(this.handleError);
                };
                HeroService.prototype.handleError = function (error) {
                    return Observable_1.Observable.throw(error.json().status.message || 'Server error');
                };
                HeroService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Jsonp, http_1.Http])
                ], HeroService);
                return HeroService;
            }());
            exports_1("HeroService", HeroService);
        }
    }
});
//# sourceMappingURL=hero.service.js.map