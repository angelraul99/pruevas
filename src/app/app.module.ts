import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardcomponentComponent } from './cardcomponent/cardcomponent.component';
import { NewsComponent } from './pages/news/news.component';
import { CardRegisterComponent } from './pages/card-register/card-register.component';
import {HttpClientModule} from '@angular/common/http';
import { MarvelComponent } from './pages/marvel/marvel.component';


@NgModule({
  declarations: [
    AppComponent,
    CardcomponentComponent,
    NewsComponent,
    CardRegisterComponent,
    MarvelComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
