"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var forms_1 = require("@angular/forms");
require('rxjs/Rx');
var StockManageComponent = (function () {
    function StockManageComponent(router, stockService) {
        this.router = router;
        this.stockService = stockService;
        this.nameFilter = new forms_1.FormControl();
    }
    StockManageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.stocks = this.stockService.getStocks();
        this.nameFilter.valueChanges.debounceTime(500).subscribe(function (value) { return _this.keyWord = value; });
    };
    StockManageComponent.prototype.create = function () {
        this.router.navigateByUrl('/stock/0');
    };
    ;
    StockManageComponent.prototype.updata = function (stock) {
        this.router.navigateByUrl('/stock/' + stock.id);
    };
    ;
    StockManageComponent = __decorate([
        core_1.Component({
            selector: 'app-stock-manage',
            templateUrl: './stock-manage.component.html',
            styleUrls: ['./stock-manage.component.css']
        })
    ], StockManageComponent);
    return StockManageComponent;
}());
exports.StockManageComponent = StockManageComponent;
//# sourceMappingURL=stock-manage.component.js.map