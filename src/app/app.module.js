"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var app_component_1 = require('./app.component');
var header_component_1 = require('./header/header.component');
var menu_component_1 = require('./menu/menu.component');
var sidebar_component_1 = require('./sidebar/sidebar.component');
var footer_component_1 = require('./footer/footer.component');
var content_component_1 = require('./content/content.component');
var stock_manage_component_1 = require('./stock/stock-manage/stock-manage.component');
var stars_component_1 = require('./stars/stars.component');
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var dashboard_component_1 = require('./dashboard/dashboard.component');
var stock_form_component_1 = require('./stock/stock-form/stock-form.component');
var stock_service_1 = require("./stock/stock.service");
var stock_filter_pipe_1 = require('./stock/stock-filter.pipe');
var routeConfing = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'stock', component: stock_manage_component_1.StockManageComponent },
    { path: 'stock/:id', component: stock_form_component_1.StockFormComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                menu_component_1.MenuComponent,
                sidebar_component_1.SidebarComponent,
                footer_component_1.FooterComponent,
                content_component_1.ContentComponent,
                stock_manage_component_1.StockManageComponent,
                stars_component_1.StarsComponent,
                dashboard_component_1.DashboardComponent,
                stock_form_component_1.StockFormComponent,
                stock_filter_pipe_1.StockFilterPipe
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                forms_1.ReactiveFormsModule,
                router_1.RouterModule.forRoot(routeConfing)
            ],
            providers: [stock_service_1.StockService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map