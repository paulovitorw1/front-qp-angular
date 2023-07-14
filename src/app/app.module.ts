import { DEFAULT_CURRENCY_CODE, LOCALE_ID, VERSION, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(ptBr);

import { AppRoutingModule } from './app-routing.module';

import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { ToastModule } from 'primeng/toast';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { ListSeatComponent } from './Views/list-seat/list-seat.component';
import { HomeComponent } from './Views/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ListSeatComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    AutoCompleteModule,
    CalendarModule,
    ToastModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
