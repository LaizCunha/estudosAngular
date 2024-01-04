import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Hellocomponent } from './components/hello.component';
import { MenuComponent } from './components/menu.component';
import { Button } from './components/button.component';

@NgModule({
  declarations: [
    AppComponent,
    Hellocomponent,
    MenuComponent,
    Button
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
