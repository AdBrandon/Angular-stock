"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var StarsComponent = (function () {
    function StarsComponent() {
        this.ratingChange = new core_1.EventEmitter();
        this.readonly = true;
    }
    StarsComponent.prototype.ngOnInit = function () {
    };
    StarsComponent.prototype.ngOnChanges = function (changes) {
        this.stars = [];
        for (var i = 1; i <= 5; i++) {
            this.stars.push(i > this.rating);
        }
    };
    StarsComponent.prototype.clickStar = function (index) {
        if (!this.readonly) {
            this.rating = index + 1;
            this.ratingChange.emit(this.rating);
        }
    };
    __decorate([
        core_1.Input()
    ], StarsComponent.prototype, "rating");
    __decorate([
        core_1.Output()
    ], StarsComponent.prototype, "ratingChange");
    __decorate([
        core_1.Input()
    ], StarsComponent.prototype, "readonly");
    StarsComponent = __decorate([
        core_1.Component({
            selector: 'app-stars',
            templateUrl: './stars.component.html',
            styleUrls: ['./stars.component.css']
        })
    ], StarsComponent);
    return StarsComponent;
}());
exports.StarsComponent = StarsComponent;
//# sourceMappingURL=stars.component.js.map