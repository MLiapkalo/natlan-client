import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import HttpInterceptors from '../app/interceptors';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { PayloadFormComponent } from './components/payload-form/payload-form.component';
import { LoadingSpinnerComponent } from './components/loading-spinner.component';
import {
  NaturalLanguageService,
  defineNatLanImplementation,
} from './services/natural-language';
import appRoutes from './app.routes';
import { HomeViewComponent } from './components/home-view/home-view.component';
import { State, StoreService, getInitialState } from './services/store';

@NgModule({
  declarations: [
    AppComponent,
    PayloadFormComponent,
    LoadingSpinnerComponent,
    HomeViewComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ClarityModule,
  ],
  providers: [
    ...HttpInterceptors,
    {
      provide: StoreService,
      useValue: new StoreService<State>(getInitialState()),
    },
    {
      provide: NaturalLanguageService,
      useClass: defineNatLanImplementation(),
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
