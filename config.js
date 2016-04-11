System.config({
    transpiler: 'typescript',
    typescriptOptions: {
        emitDecoratorMetadata: true
    },
    packages: {
        app: {
            defaultExtension: 'ts'
        },
        'angular2-jwt': {
            defaultExtension: 'ts'
        }
    },
    map: {
        'angular2-jwt': 'node_modules/angular2-jwt/angular2-jwt.js'
    }
});

System.import('app/ts/main')
    .catch(console.error.bind(console));