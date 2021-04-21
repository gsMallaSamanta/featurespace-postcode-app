# PostcodeApp

## What I have done
 - I have implemented the application with `latest version of Angular`.
 - I have used `NGRX` for state management. I have used old version of it.
 - I have created a `Single Page Application` using angular routing.
 - I have used `Angular-Material`.
 - I have added unit tests just for one sample validation. 
 - I have implemented the error handling.

## With a little more time
 - I would have done 100% coverage of unit tests.
 - I couldn't get time to work on the UX, it could have been much better.
 - I could have added spinner.
 - Validation of postcode.
 - I could have displayed the neaest postcode in a grid.

## Initial Setup
 - Run `npm install` for adding the node module into the project.
 - Run `npm install @ngrx/store --save` for adding the ngrx store related dependancies into the project.
 - Run `npm install @ngrx/effects --save` for adding ngrx effects related dependancies into the project.
 - Run `npm install @angular/forms --save` incase missing.
 - If there are still errors related to npm, Run `npm install` again. In certain circumstances npm does perform an "auto prune". So, this step will ensures all expected dependencies are present.

## Development server
 - Run `ng serve` for a dev server. The launch the application using `http://localhost:4200/`.
 - Incase 4200 is in use, run `ng serve --port=<another port>`. Then launch the application using `http://localhost:<another port>`

## Running unit tests
Run `ng test` to execute the unit tests.
