# Angular2 Heroes (Server-Side Rendering)

## Overview

As you can see this repo is following [The Angular 2 Heroes tutorial][angular2-tutorial] with my ideal folder structure. I don't know if it's the best folder structure, but I like it the most. Specially because I'm using server-side rendering with Angular 2. 
 
This repo is divided in several branches, each branch represent a step of the Angular 2 Heroes tutorial:

- [step0][git-step0] - Angular docs: [Configuration & "Hello World"][angular-step0].
- [step1][git-step1] - Angular docs: [The Hero Editor][angular-step1].
- [step2][git-step2] - Angular docs: [Hero list and details][angular-step2].
- [step3][git-step3] - Angular docs: [Refactoring components][angular-step3].
- [step4][git-step4] - Angular docs: [Services][angular-step4].
- [step5][git-step5] - Angular docs: [Routing][angular-step5].
- [step6][git-step6] - Angular docs: [Server-Side Rendering][angular-step6].

I would recommend:
 
- To Start with step0: `git clone https://github.com/jesussobrino/angular2-heroes.git && cd angular2-heroes && git checkout step0 ` 
- Or to follow step by step the [Angular 2 tutorial][angular2-tutorial].

## Server-Side Rendering

As you can see the [step6 branch][git-step6] is using server-side rendering. Unfortunately I didn't know how to apply server-side rendering with [lite-server][lite-server-issue]. So I decided to change the package dependencies for using webpack, because I think it's easier to understand.

In this example, you can take a look to the "Network tab" in the Chrome Dev Tools, and see how fast is loaded the initial template in comparison with previous steps.
 
For more Sever-Side Rendering information, please take a look to [Angular Universal][angular-step6].

## Prerequisites

### Node.js

- Download and install [Node.js][node-download-url].
- Install the tool dependencies (`npm install`).


### Installing dependencies

The application needs some dependencies, such as Bower, Angular files, etc.  You can install these by running:

```
npm install --global typescript typings webpack nodemon
npm install
```

Or directly:

```
npm start
```

### Running the app

- Run `npm start`
- Navigate your browser to [http://localhost:3000/][localhost-url] to see the app running.


[node-download-url]: https://nodejs.org/en/download/
[localhost-url]: http://localhost:3000/
[lite-server-issue]: https://github.com/johnpapa/lite-server/issues/50
[angular2-tutorial]: https://angular.io/docs/ts/latest/tutorial/
[git-step0]: https://github.com/jesussobrino/angular2-heroes/tree/step0
[git-step1]: https://github.com/jesussobrino/angular2-heroes/tree/step1
[git-step2]: https://github.com/jesussobrino/angular2-heroes/tree/step2
[git-step3]: https://github.com/jesussobrino/angular2-heroes/tree/step3
[git-step4]: https://github.com/jesussobrino/angular2-heroes/tree/step4
[git-step5]: https://github.com/jesussobrino/angular2-heroes/tree/step5
[git-step6]: https://github.com/jesussobrino/angular2-heroes/tree/step6
[angular-step0]: https://angular.io/docs/ts/latest/quickstart.html
[angular-step1]: https://angular.io/docs/ts/latest/tutorial/toh-pt1.html
[angular-step2]: https://angular.io/docs/ts/latest/tutorial/toh-pt2.html
[angular-step3]: https://angular.io/docs/ts/latest/tutorial/toh-pt3.html
[angular-step4]: https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
[angular-step5]: https://angular.io/docs/ts/latest/tutorial/toh-pt5.html
[angular-step6]: https://github.com/angular/universal
