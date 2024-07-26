import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app.routes';
import { AppRoutingRoutingModule } from './app/app-routing/app-routing-routing.module';
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
