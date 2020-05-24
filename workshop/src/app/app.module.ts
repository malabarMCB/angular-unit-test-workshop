import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SutComponent } from './components/sut/sut.component';
import {HttpClientModule} from '@angular/common/http';
import {Service} from './services/service';

@NgModule({
  declarations: [
    AppComponent,
    SutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
