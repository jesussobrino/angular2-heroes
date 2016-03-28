System.config({
    transpiler: 'typescript',
    typescriptOptions: {
        emitDecoratorMetadata: true
    },
    packages: {
        app: {
            defaultExtension: 'ts'
        }
    }
});

System.import('app/ts/main')
    .catch(console.error.bind(console));