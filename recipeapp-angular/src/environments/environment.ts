// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  baseUrl: "http://localhost:8080/recipe-web/api",
  firebase: {
    apiKey: "AIzaSyC5NRwRZ6akpc9GqvDCbExk-qFVUSutGkw",
    authDomain: "prenototani.firebaseapp.com",
    databaseURL: "https://prenototani.firebaseio.com",
    projectId: "prenototani",
    storageBucket: "prenototani.appspot.com",
    messagingSenderId: "762613872785"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
