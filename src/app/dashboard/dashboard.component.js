"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var forms_1 = require("@angular/forms");
var DashboardComponent = (function () {
    function DashboardComponent() {
        this.fb = new forms_1.FormBuilder();
        this.formModel = this.fb.group({
            nickname: ['', [forms_1.Validators.required, forms_1.Validators.minLength(6)]],
            emails: this.fb.array([
                ['']
            ]),
            passwordInfo: this.fb.group({
                password: [''],
                passwordConfirm: ['']
            }, { validator: this.passwordVaildator })
        });
    }
    DashboardComponent.prototype.xxx = function (param) {
        return null;
    };
    DashboardComponent.prototype.mobileVaildator = function (mobile) {
        var value = (mobile.value || '') + '';
        var myreg = /^1[34578]\d{9}$/;
        var vaild = myreg.test(value);
        return vaild ? null : { mobile: true };
    };
    DashboardComponent.prototype.passwordVaildator = function (info) {
        var passworld = info.get('password');
        var passworldConfirm = info.get('passworldConfirm');
        var vaild = passworld.value === passworldConfirm.value;
        return vaild ? null : { password: true };
    };
    DashboardComponent.prototype.addEmail = function () {
        var nicknameValid = this.formModel.get('nickname').valid;
        var emails = this.formModel.get('emails');
        emails.push(new forms_1.FormControl());
    };
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.css']
        })
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map