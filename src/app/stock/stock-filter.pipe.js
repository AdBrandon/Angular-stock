"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var StockFilterPipe = (function () {
    function StockFilterPipe() {
    }
    StockFilterPipe.prototype.transform = function (list, field, keyword) {
        if (!field || !keyword)
            return list;
        return list.filter(function (item) {
            var itemFieldValue = item[field].toLowerCase();
            return itemFieldValue.indexOf(keyword) >= 0;
        });
    };
    StockFilterPipe = __decorate([
        core_1.Pipe({
            name: 'stockFilter'
        })
    ], StockFilterPipe);
    return StockFilterPipe;
}());
exports.StockFilterPipe = StockFilterPipe;
//# sourceMappingURL=stock-filter.pipe.js.map