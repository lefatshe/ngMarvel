"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var User = (function () {
    function User() {
    }
    return User;
}());
exports.User = User;
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Marvel App';
        this.user = {
            fullname: 'Sechaba Mothobi',
            fnumber: 'f4856503',
            pass: 'marvel#8710'
        };
    }
    AppComponent.prototype.doLogin = function (event) {
        alert('log in user F' + this.user.fnumber + ' password is ' + this.user.pass);
        event.preventDefault();
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <div class=\"login-page\">\n    <div class=\"form\">\n      <img src=\"images/marvel-logo.svg\">\n      <small><label>Login user: </label> <strong></strong>{{user.fnumber}}</small><hr/>\n      <form class=\"login-form\"  (submit)=\"doLogin($event)\">\n        <input [(ngModel)]=\"user.fnumber\" placeholder=\"F-Number\">\n        <input [(ngModel)]=\"user.pass\" placeholder=\"Password\">\n        <button>Login</button>\n      </form>\n      </div>\n    </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map