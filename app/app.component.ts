import { Component } from '@angular/core';

// import User
import { USER } from './user/mock-user';

// Create main App Component
// Start App 
@Component({
  selector: 'my-app',
  templateUrl: './app/login/login.views.html'
})

export class AppComponent {
  // Var logo image Dir
  logoimage = 'images/marvel-logo.svg';

  // Retrieve fake user credentials
  user = USER;

  doLogin(event) {
    alert('log in user (F' +  this.user.fnumber + ') password is (' + this.user.pass + ')');
    event.preventDefault();
  }
}