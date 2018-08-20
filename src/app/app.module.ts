import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ReversePipe } from './reverse.pipe';


export const firebaseConfig = {
  apiKey: 'AIzaSyD-3se_J6DRDPAIMmJr1GbfejO8uhXtMLc',
  authDomain: 'chat-angular-43a1c.firebaseapp.com',
  databaseURL: 'https://chat-angular-43a1c.firebaseio.com',
  storageBucket: 'chat-angular-43a1c.appspot.com',
  messagingSenderId: '984683732337'
}

@NgModule({
  declarations: [
    AppComponent,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
