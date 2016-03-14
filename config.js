// Configure SystemJS
System.config({
    packages: {
        src: {
            app: {
                format: 'register',
                defaultExtension: 'js'
            }
        }
    }
});

System.import('src/app/main')
        .then(null, console.error.bind(console));
