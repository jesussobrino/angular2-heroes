System.register(['angular2/core', 'angular2/platform/worker_render'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, worker_render_1;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (worker_render_1_1) {
                worker_render_1 = worker_render_1_1;
            }],
        execute: function() {
            core_1.platform([worker_render_1.WORKER_RENDER_PLATFORM]).application([worker_render_1.WORKER_RENDER_APPLICATION, new core_1.Provider(worker_render_1.WORKER_SCRIPT, { useValue: "./new-york/new-york-loader.ts" })]);
        }
    }
});
//# sourceMappingURL=new-york-main.js.map