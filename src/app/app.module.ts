import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { SalesModule } from './sales/sales.module';
import { SharedModule } from './shared/shared.module';

import localHN from '@angular/common/locales/es-HN';
import localFR from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localHN);
registerLocaleData(localFR);

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        SharedModule,
        SalesModule
    ],
    providers: [
        { provide: LOCALE_ID, useValue: 'es-HN' }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
