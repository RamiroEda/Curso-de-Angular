import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';

import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
import { CapitalizarPipe } from './pipes/capitalizar.pipe';
import { DomSeguroPipe } from './pipes/dom-seguro.pipe';
import { ContrasenaPipe } from './pipes/contrasena.pipe';

registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    CapitalizarPipe,
    DomSeguroPipe,
    ContrasenaPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es_MX'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
