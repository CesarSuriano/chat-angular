import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { auth } from 'firebase';
import 'rxjs';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: Observable<any[]>;
  mensagens: AngularFireList<any>;
  name: any;
  msgVal: string
  // mensagem: string = '';

  constructor(public angFireAuth: AngularFireAuth, public database: AngularFireDatabase) {

    this.items = database.list('/messages', ref => ref.limitToLast(10)).valueChanges()

    this.mensagens = database.list('/messages')

    angFireAuth.authState.subscribe(auth => {
      if (auth) {
        this.name = auth.displayName
        console.log("nome: " + this.name)
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

  chatSend(theirMessage: string) {
    if (theirMessage.trim()) {
      console.log(theirMessage)
      this.mensagens.push({ message: theirMessage, name: this.name });
      this.msgVal = '';
    }

    // console.log(this.items.valueChanges())

  }
}
