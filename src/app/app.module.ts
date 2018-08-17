import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
export const firebaseConfig = {
  apiKey: 'AIzaSyD-3se_J6DRDPAIMmJr1GbfejO8uhXtMLc',
  authDomain: 'chat-angular-43a1c.firebaseapp.com',
  databaseURL: 'https://chat-angular-43a1c.firebaseio.com',
  storageBucket: 'chat-angular-43a1c.appspot.com',
  messagingSenderId: '984683732337'
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
