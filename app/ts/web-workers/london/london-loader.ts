importScripts(
    "../../../../node_modules/systemjs/dist/system.js",
    "../../../../node_modules/typescript/lib/typescript.js",
    "../../../../node_modules/zone.js/dist/zone.min.js",
    "../../../../node_modules/zone.js/dist/long-stack-trace-zone.min.js",
    "../../../../node_modules/reflect-metadata/Reflect.js",
    "../../../../bower_components/moment/min/moment.min.js",
    "../config.js"
);


System.import('./london.ts');
