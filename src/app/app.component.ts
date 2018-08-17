import { Component } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods,FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: FirebaseListObservable<any>;
  name: any;
  mensagem: string = '';

  constructor(public angfire: AngularFire) {
    this.items = angfire.list('/messages', {
      query: {
        limitToLast: 5
      }
    });

    this.angfire.auth.subscribe(auth => {
      if(auth) {
        this.name = auth;
      }
    })
  }

  login() {
    this.angfire.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup
    })
  }

  chatSend(theirMessage: string) {
    this.items.push({ message: theirMessage, name: this.name.facebook.displayName })
  }
}
