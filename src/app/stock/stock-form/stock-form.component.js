"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var forms_1 = require("@angular/forms");
var StockFormComponent = (function () {
    function StockFormComponent(routeInfo, stockService, router) {
        this.routeInfo = routeInfo;
        this.stockService = stockService;
        this.router = router;
        this.categories = ['IT', '互联网', '科技'];
    }
    StockFormComponent.prototype.ngOnInit = function () {
        var stockId = this.routeInfo.snapshot.params['id'];
        this.stock = this.stockService.getStock(stockId);
        var fb = new forms_1.FormBuilder();
        this.formModel = fb.group({
            name: [this.stock.name, [forms_1.Validators.required, forms_1.Validators.minLength(3)]],
            price: [this.stock.price, forms_1.Validators.required],
            desc: [this.stock.desc],
            categories: fb.array([
                new forms_1.FormControl(this.stock.categories.indexOf(this.categories[0]) != -1),
                new forms_1.FormControl(this.stock.categories.indexOf(this.categories[1]) != -1),
                new forms_1.FormControl(this.stock.categories.indexOf(this.categories[2]) != -1)
            ], this.categoriesSelectValidator)
        });
    };
    StockFormComponent.prototype.cancel = function () {
        this.router.navigateByUrl('/stock');
    };
    StockFormComponent.prototype.categoriesSelectValidator = function (control) {
        var valid = false;
        control.controls.forEach(function (control) {
            if (control.value) {
                valid = true;
            }
        });
        if (valid) {
            return null;
        }
        else {
            return { categoriesLength: true };
        }
    };
    StockFormComponent.prototype.save = function () {
        var chineseCategories = [];
        var index = 0;
        for (var i = 0; i < 3; i++) {
            if (this.formModel.value.categories[i]) {
                chineseCategories[index++] = this.categories[i];
            }
        }
        this.formModel.value.categories = chineseCategories;
        this.formModel.value.rating = this.stock.rating;
        // this.router.navigateByUrl('/stock')
        console.log(this.formModel.value);
    };
    StockFormComponent = __decorate([
        core_1.Component({
            selector: 'app-stock-form',
            templateUrl: './stock-form.component.html',
            styleUrls: ['./stock-form.component.css']
        })
    ], StockFormComponent);
    return StockFormComponent;
}());
exports.StockFormComponent = StockFormComponent;
//# sourceMappingURL=stock-form.component.js.map