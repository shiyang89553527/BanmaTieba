import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/config/app.config';
import { AppComponent } from './app/component/app.component';
import "@angular/compiler";

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
