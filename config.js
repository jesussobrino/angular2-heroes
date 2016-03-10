// Configure SystemJS
System.config({
    packages: {
        app: {
            format: 'register',
            defaultExtension: 'js'
        }
    }
});

System.import('app/ts/main')
        .then(null, console.error.bind(console));
