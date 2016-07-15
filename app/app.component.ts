import { Component } from '@angular/core';

export class User {
  fullname: string;
  fnumber: string;
  pass: string;
}

@Component({
  selector: 'my-app',
  template: `
    <div class="login-page">
    <div class="form">
      <img src="images/marvel-logo.svg">
      <small><label>Login user: </label> <strong></strong>{{user.fnumber}}</small><hr/>
      <form class="login-form"  (submit)="doLogin($event)">
        <input [(ngModel)]="user.fnumber" placeholder="F-Number">
        <input [(ngModel)]="user.pass" placeholder="Password">
        <button>Login</button>
      </form>
      </div>
    </div>
    `
})

export class AppComponent {
  title = 'Marvel App';

  user: User = {
    fullname: 'Sechaba Mothobi',
    fnumber: 'f4856503',
    pass: 'marvel#8710'
  };

  doLogin(event) {
    alert('log in user F' +  this.user.fnumber + ' password is ' + this.user.pass);
    event.preventDefault();
  }
}