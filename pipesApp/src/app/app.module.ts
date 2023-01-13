import { VentasModule } from './ventas/ventas.module';
import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';

//cambiar el local de la app
import localEs from '@angular/common/locales/es-EA';
import localFr from '@angular/common/locales/fr';

import { registerLocaleData } from '@angular/common';

registerLocaleData(localEs);
registerLocaleData(localFr);






@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PrimeNgModule,
    SharedModule,
    AppRouterModule,
    VentasModule,
    BrowserAnimationsModule

  ],
  providers: [{provide: LOCALE_ID, useValue: 'es-EA'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
