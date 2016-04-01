System.register(['../clock.ts', "angular2/core", "angular2/platform/worker_app"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var clock_ts_1, core_1, worker_app_1;
    var Madrid;
    return {
        setters:[
            function (clock_ts_1_1) {
                clock_ts_1 = clock_ts_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (worker_app_1_1) {
                worker_app_1 = worker_app_1_1;
            }],
        execute: function() {
            Madrid = (function (_super) {
                __extends(Madrid, _super);
                function Madrid() {
                    _super.call(this, 2);
                    this.city = 'Madrid';
                }
                Madrid = __decorate([
                    core_1.Component({
                        selector: 'madrid',
                        templateUrl: './clock.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], Madrid);
                return Madrid;
            }(clock_ts_1.Clock));
            exports_1("Madrid", Madrid);
            core_1.platform([worker_app_1.WORKER_APP_PLATFORM]).application([worker_app_1.WORKER_APP_APPLICATION]).bootstrap(Madrid);
        }
    }
});
//# sourceMappingURL=madrid.js.map