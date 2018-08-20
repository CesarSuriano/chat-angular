import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // items: FirebaseListObservable<any>;
  name: any;
  // mensagem: string = '';

  constructor(public angFireAuth: AngularFireAuth) {

    angFireAuth.authState.subscribe(auth => {
      if (auth) {
        this.name = auth.displayName
        console.log(auth.displayName)
      }
    })
  }

  login() {

    var self = this
    this.angFireAuth.auth.signInWithPopup(new auth.FacebookAuthProvider()).then(function (obj) {
      console.log("logou")
    }).catch(function () {
      console.log("Catch")
    })
    console.log(this.angFireAuth)
    // this.angfire.auth.login({
    //   provider: AuthProviders.Facebook,
    //   method: AuthMethods.Popup
    // })
  }

  logout() {
    this.angFireAuth.auth.signOut()
  }

  // chatSend(theirMessage: string) {
  //   this.items.push({ message: theirMessage, name: this.name.facebook.displayName })
  // }
}
