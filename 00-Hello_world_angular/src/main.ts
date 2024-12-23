import {bootstrapApplication, provideProtractorTestingSupport} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import { provideRouter } from '@angular/router';
import routeConfig from './app/routes';

// To run it --> 1st terminal: ng serve or npm start + 2nd terminal: json-server --watch db.json
bootstrapApplication(AppComponent, {
  providers: [provideProtractorTestingSupport(), provideRouter(routeConfig)]}).catch((err) =>
  console.error(err),
);
