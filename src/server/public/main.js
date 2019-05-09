(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/address/address.component.css":
/*!***********************************************!*\
  !*** ./src/app/address/address.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZHJlc3MvYWRkcmVzcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/address/address.component.html":
/*!************************************************!*\
  !*** ./src/app/address/address.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n    <div class=\"row col-sm-12 justify-content-center text-center\">\n      <div class=\"col-sm-5\">\n      <form class=\"form-inline p-5\" (ngSubmit)=\"onSearch()\" #heroForm=\"ngForm\" autocomplete=\"off\">\n        \n        <label class=\"sr-only\" for=\"searchtext\">searchtext</label>\n        <div class=\"input-group mb-2 mr-sm-2\">\n          <input type=\"text\" [(ngModel)]=\"text\" name=\"text\" class=\"form-control\" id=\"searchtext\" placeholder=\"Search Text\">\n        </div>\n      \n        <button type=\"submit\" class=\"btn btn-primary mb-2\">Search</button>\n      </form>\n    </div>\n    <div class=\"col-sm-12\">\n      <table class=\"table table-striped\" *ngIf=\"result\">\n          <thead>\n            <tr>\n              <th scope=\"col\">Address</th>\n              <th scope=\"col\">City</th>\n              <th scope=\"col\">State</th>\n              <th scope=\"col\">Rating</th>\n              <th scope=\"col\">Status</th>\n              <th scope=\"col\">Dated On</th>\n            </tr>\n          </thead>\n          <tbody >\n            <tr *ngFor=\"let obj of result\">\n              <th scope=\"row\">{{obj.address}}</th>\n              <td>{{obj.city}}</td>\n              <td>{{obj.state}}</td>\n              <td>{{obj.structure_rating}}</td>\n              <td>{{obj.structure_status}}</td>\n              <td>{{obj.date_opened | date:'short'}}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/address/address.component.ts":
/*!**********************************************!*\
  !*** ./src/app/address/address.component.ts ***!
  \**********************************************/
/*! exports provided: AddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressComponent", function() { return AddressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddressComponent = /** @class */ (function () {
    function AddressComponent(http) {
        this.http = http;
    }
    AddressComponent.prototype.onSearch = function () {
        var _this = this;
        this.by = 'address';
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].originApiUrl + '/search?searchby=' + this.by + '&searchtext=' + this.text;
        this.http.get(this.url)
            .subscribe(function (res) {
            _this.result = res.data;
            console.log(_this.result);
        });
    };
    AddressComponent.prototype.ngOnInit = function () {
    };
    AddressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-address',
            template: __webpack_require__(/*! ./address.component.html */ "./src/app/address/address.component.html"),
            styles: [__webpack_require__(/*! ./address.component.css */ "./src/app/address/address.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AddressComponent);
    return AddressComponent;
}());



/***/ }),

/***/ "./src/app/analytics/analytics.component.css":
/*!***************************************************!*\
  !*** ./src/app/analytics/analytics.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".feather {\r\n  width: 16px;\r\n  height: 16px;\r\n  vertical-align: text-bottom;\r\n}\r\n\r\n/*\r\n * Sidebar\r\n */\r\n\r\n.sidebar {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  z-index: 100; /* Behind the navbar */\r\n  padding: 48px 0 0; /* Height of navbar */\r\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .1);\r\n}\r\n\r\n.sidebar-sticky {\r\n  position: relative;\r\n  top: 0;\r\n  height: calc(100vh - 48px);\r\n  padding-top: .5rem;\r\n  overflow-x: hidden;\r\n  overflow-y: auto; /* Scrollable contents if viewport is shorter than content. */\r\n}\r\n\r\n@supports ((position: -webkit-sticky) or (position: sticky)) {\r\n  .sidebar-sticky {\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n  }\r\n}\r\n\r\n.sidebar .nav-link {\r\n  font-weight: 500;\r\n  color: #333;\r\n}\r\n\r\n.sidebar .nav-link .feather {\r\n  margin-right: 4px;\r\n  color: #999;\r\n}\r\n\r\n.sidebar .nav-link.active {\r\n  color: #007bff;\r\n}\r\n\r\n.sidebar .nav-link:hover .feather,\r\n.sidebar .nav-link.active .feather {\r\n  color: inherit;\r\n}\r\n\r\n.sidebar-heading {\r\n  font-size: .75rem;\r\n  text-transform: uppercase;\r\n}\r\n\r\n/*\r\n * Content\r\n */\r\n\r\n[role=\"main\"] {\r\n  padding-top: 48px; /* Space for fixed navbar */\r\n}\r\n\r\n/*\r\n * Navbar\r\n */\r\n\r\n.navbar-brand {\r\n  padding-top: .75rem;\r\n  padding-bottom: .75rem;\r\n  font-size: 1rem;\r\n  background-color: rgba(0, 0, 0, .25);\r\n  box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);\r\n}\r\n\r\n.navbar .form-control {\r\n  padding: .75rem 1rem;\r\n  border-width: 0;\r\n  border-radius: 0;\r\n}\r\n\r\n.form-control-dark {\r\n  color: #fff;\r\n  background-color: rgba(255, 255, 255, .1);\r\n  border-color: rgba(255, 255, 255, .1);\r\n}\r\n\r\n.form-control-dark:focus {\r\n  border-color: transparent;\r\n  box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW5hbHl0aWNzL2FuYWx5dGljcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWiwyQkFBMkI7QUFDN0I7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsWUFBWSxFQUFFLHNCQUFzQjtFQUNwQyxpQkFBaUIsRUFBRSxxQkFBcUI7RUFDeEMsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTiwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBRSw2REFBNkQ7QUFDakY7O0FBRUE7RUFDRTtJQUNFLHdCQUF3QjtJQUN4QixnQkFBZ0I7RUFDbEI7QUFDRjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7RUFFRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGlCQUFpQixFQUFFLDJCQUEyQjtBQUNoRDs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLG9DQUFvQztFQUNwQyw2Q0FBNkM7QUFDL0M7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCx5Q0FBeUM7RUFDekMscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDhDQUE4QztBQUNoRCIsImZpbGUiOiJzcmMvYXBwL2FuYWx5dGljcy9hbmFseXRpY3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mZWF0aGVyIHtcclxuICB3aWR0aDogMTZweDtcclxuICBoZWlnaHQ6IDE2cHg7XHJcbiAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xyXG59XHJcblxyXG4vKlxyXG4gKiBTaWRlYmFyXHJcbiAqL1xyXG5cclxuLnNpZGViYXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgei1pbmRleDogMTAwOyAvKiBCZWhpbmQgdGhlIG5hdmJhciAqL1xyXG4gIHBhZGRpbmc6IDQ4cHggMCAwOyAvKiBIZWlnaHQgb2YgbmF2YmFyICovXHJcbiAgYm94LXNoYWRvdzogaW5zZXQgLTFweCAwIDAgcmdiYSgwLCAwLCAwLCAuMSk7XHJcbn1cclxuXHJcbi5zaWRlYmFyLXN0aWNreSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMDtcclxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0OHB4KTtcclxuICBwYWRkaW5nLXRvcDogLjVyZW07XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87IC8qIFNjcm9sbGFibGUgY29udGVudHMgaWYgdmlld3BvcnQgaXMgc2hvcnRlciB0aGFuIGNvbnRlbnQuICovXHJcbn1cclxuXHJcbkBzdXBwb3J0cyAoKHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreSkgb3IgKHBvc2l0aW9uOiBzdGlja3kpKSB7XHJcbiAgLnNpZGViYXItc3RpY2t5IHtcclxuICAgIHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgfVxyXG59XHJcblxyXG4uc2lkZWJhciAubmF2LWxpbmsge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICMzMzM7XHJcbn1cclxuXHJcbi5zaWRlYmFyIC5uYXYtbGluayAuZmVhdGhlciB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgY29sb3I6ICM5OTk7XHJcbn1cclxuXHJcbi5zaWRlYmFyIC5uYXYtbGluay5hY3RpdmUge1xyXG4gIGNvbG9yOiAjMDA3YmZmO1xyXG59XHJcblxyXG4uc2lkZWJhciAubmF2LWxpbms6aG92ZXIgLmZlYXRoZXIsXHJcbi5zaWRlYmFyIC5uYXYtbGluay5hY3RpdmUgLmZlYXRoZXIge1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG4uc2lkZWJhci1oZWFkaW5nIHtcclxuICBmb250LXNpemU6IC43NXJlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4vKlxyXG4gKiBDb250ZW50XHJcbiAqL1xyXG5cclxuW3JvbGU9XCJtYWluXCJdIHtcclxuICBwYWRkaW5nLXRvcDogNDhweDsgLyogU3BhY2UgZm9yIGZpeGVkIG5hdmJhciAqL1xyXG59XHJcblxyXG4vKlxyXG4gKiBOYXZiYXJcclxuICovXHJcblxyXG4ubmF2YmFyLWJyYW5kIHtcclxuICBwYWRkaW5nLXRvcDogLjc1cmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAuNzVyZW07XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjI1KTtcclxuICBib3gtc2hhZG93OiBpbnNldCAtMXB4IDAgMCByZ2JhKDAsIDAsIDAsIC4yNSk7XHJcbn1cclxuXHJcbi5uYXZiYXIgLmZvcm0tY29udHJvbCB7XHJcbiAgcGFkZGluZzogLjc1cmVtIDFyZW07XHJcbiAgYm9yZGVyLXdpZHRoOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wtZGFyayB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAuMSk7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIC4xKTtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbC1kYXJrOmZvY3VzIHtcclxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDI1NSwgMjU1LCAyNTUsIC4yNSk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/analytics/analytics.component.html":
/*!****************************************************!*\
  !*** ./src/app/analytics/analytics.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\">    \r\n      <nav class=\"col-md-2 d-none d-md-block bg-light sidebar\" style=\"padding: 5% 2%;\">\r\n          <div class=\"sidebar-sticky\">\r\n            <ul class=\"nav flex-column mb-2\">\r\n              <li class=\"nav-item\">\r\n                <a class=\"nav-link\"  routerLink=\"/analytics/migration\" routerLinkActive=\"active\">\r\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-file-text\"><path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path><polyline points=\"14 2 14 8 20 8\"></polyline><line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"></line><line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"></line><polyline points=\"10 9 9 9 8 9\"></polyline></svg>\r\n                  Migration\r\n                </a>\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"/analytics/rental\" routerLinkActive=\"active\">\r\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-file-text\"><path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path><polyline points=\"14 2 14 8 20 8\"></polyline><line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"></line><line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"></line><polyline points=\"10 9 9 9 8 9\"></polyline></svg>\r\n                  Rental\r\n                </a>\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"/analytics/housing\" routerLinkActive=\"active\">\r\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-file-text\"><path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path><polyline points=\"14 2 14 8 20 8\"></polyline><line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"></line><line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"></line><polyline points=\"10 9 9 9 8 9\"></polyline></svg>\r\n                  Housing\r\n                </a>\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                <a class=\"nav-link\" routerLink=\"/analytics/kansas/one\" routerLinkActive=\"active\">\r\n                  <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"feather feather-file-text\"><path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"></path><polyline points=\"14 2 14 8 20 8\"></polyline><line x1=\"16\" y1=\"13\" x2=\"8\" y2=\"13\"></line><line x1=\"16\" y1=\"17\" x2=\"8\" y2=\"17\"></line><polyline points=\"10 9 9 9 8 9\"></polyline></svg>\r\n                  Kansas City\r\n                </a>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </nav>\r\n  </div>\r\n</div>    \r\n<main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4 \">\r\n  <div class=\"chartjs-size-monitor\" style=\"position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;\">\r\n    <div class=\"chartjs-size-monitor-expand\" style=\"position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;\">\r\n      <div style=\"position:absolute;width:1000000px;height:1000000px;left:0;top:0\"></div>\r\n    </div>\r\n    <div class=\"chartjs-size-monitor-shrink\" style=\"position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;\">\r\n      <div style=\"position:absolute;width:200%;height:200%;left:0; top:0\"></div>\r\n    </div>\r\n  </div>    \r\n    <router-outlet #routerOutlet=\"outlet\"></router-outlet>\r\n</main>    "

/***/ }),

/***/ "./src/app/analytics/analytics.component.ts":
/*!**************************************************!*\
  !*** ./src/app/analytics/analytics.component.ts ***!
  \**************************************************/
/*! exports provided: AnalyticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsComponent", function() { return AnalyticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnalyticsComponent = /** @class */ (function () {
    function AnalyticsComponent() {
    }
    AnalyticsComponent.prototype.ngOnInit = function () {
    };
    AnalyticsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-analytics',
            template: __webpack_require__(/*! ./analytics.component.html */ "./src/app/analytics/analytics.component.html"),
            styles: [__webpack_require__(/*! ./analytics.component.css */ "./src/app/analytics/analytics.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AnalyticsComponent);
    return AnalyticsComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _analytics_analytics_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./analytics/analytics.component */ "./src/app/analytics/analytics.component.ts");
/* harmony import */ var _housing_housing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./housing/housing.component */ "./src/app/housing/housing.component.ts");
/* harmony import */ var _migration_migration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./migration/migration.component */ "./src/app/migration/migration.component.ts");
/* harmony import */ var _rental_rental_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./rental/rental.component */ "./src/app/rental/rental.component.ts");
/* harmony import */ var _kansas_kansas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./kansas/kansas.component */ "./src/app/kansas/kansas.component.ts");
/* harmony import */ var _one_one_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./one/one.component */ "./src/app/one/one.component.ts");
/* harmony import */ var _two_two_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./two/two.component */ "./src/app/two/two.component.ts");
/* harmony import */ var _three_three_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./three/three.component */ "./src/app/three/three.component.ts");
/* harmony import */ var _buy_buy_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./buy/buy.component */ "./src/app/buy/buy.component.ts");
/* harmony import */ var _sell_sell_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sell/sell.component */ "./src/app/sell/sell.component.ts");
/* harmony import */ var _rent_rent_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./rent/rent.component */ "./src/app/rent/rent.component.ts");
/* harmony import */ var _lead_lead_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lead/lead.component */ "./src/app/lead/lead.component.ts");
/* harmony import */ var _address_address_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./address/address.component */ "./src/app/address/address.component.ts");
/* harmony import */ var _zipcode_zipcode_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./zipcode/zipcode.component */ "./src/app/zipcode/zipcode.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var appRoutes = [
    { path: 'analytics', component: _analytics_analytics_component__WEBPACK_IMPORTED_MODULE_3__["AnalyticsComponent"], children: [
            { path: 'kansas', component: _kansas_kansas_component__WEBPACK_IMPORTED_MODULE_7__["KansasComponent"], children: [
                    { path: 'one', component: _one_one_component__WEBPACK_IMPORTED_MODULE_8__["OneComponent"] },
                    { path: 'two', component: _two_two_component__WEBPACK_IMPORTED_MODULE_9__["TwoComponent"] },
                    { path: 'three', component: _three_three_component__WEBPACK_IMPORTED_MODULE_10__["ThreeComponent"] }
                ] },
            { path: 'migration', component: _migration_migration_component__WEBPACK_IMPORTED_MODULE_5__["MigrationComponent"] },
            { path: 'rental', component: _rental_rental_component__WEBPACK_IMPORTED_MODULE_6__["RentalComponent"] },
            { path: 'housing', component: _housing_housing_component__WEBPACK_IMPORTED_MODULE_4__["HousingComponent"] }
        ] },
    { path: 'buy', component: _buy_buy_component__WEBPACK_IMPORTED_MODULE_11__["BuyComponent"] },
    { path: 'sell', component: _sell_sell_component__WEBPACK_IMPORTED_MODULE_12__["SellComponent"] },
    { path: 'rent', component: _rent_rent_component__WEBPACK_IMPORTED_MODULE_13__["RentComponent"], children: [
            { path: 'address', component: _address_address_component__WEBPACK_IMPORTED_MODULE_15__["AddressComponent"] },
            { path: 'zipcode', component: _zipcode_zipcode_component__WEBPACK_IMPORTED_MODULE_16__["ZipcodeComponent"] },
            { path: 'lead', component: _lead_lead_component__WEBPACK_IMPORTED_MODULE_14__["LeadComponent"] }
        ] },
    { path: '', redirectTo: '/analytics', pathMatch: 'full' },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_17__["PageNotFoundComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                )
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\r\n<div  style=\"margin-top: 5.5%;\">\r\n    <router-outlet #routerOutlet=\"outlet\" ></router-outlet>\r\n</div>\r\n\r\n \r\n<!-- <app-footer></app-footer> -->"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'client';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_google_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-google-charts */ "./node_modules/angular-google-charts/fesm5/angular-google-charts.js");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-highcharts */ "./node_modules/angular-highcharts/angular-highcharts.es5.js");
/* harmony import */ var highcharts_highcharts_more_src__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! highcharts/highcharts-more.src */ "./node_modules/highcharts/highcharts-more.src.js");
/* harmony import */ var highcharts_highcharts_more_src__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(highcharts_highcharts_more_src__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var highcharts_modules_exporting_src__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! highcharts/modules/exporting.src */ "./node_modules/highcharts/modules/exporting.src.js");
/* harmony import */ var highcharts_modules_exporting_src__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting_src__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var highcharts_modules_map_src__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! highcharts/modules/map.src */ "./node_modules/highcharts/modules/map.src.js");
/* harmony import */ var highcharts_modules_map_src__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_map_src__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _common_common_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./common/common.module */ "./src/app/common/common.module.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _analytics_analytics_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./analytics/analytics.component */ "./src/app/analytics/analytics.component.ts");
/* harmony import */ var _buy_buy_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./buy/buy.component */ "./src/app/buy/buy.component.ts");
/* harmony import */ var _sell_sell_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./sell/sell.component */ "./src/app/sell/sell.component.ts");
/* harmony import */ var _rent_rent_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./rent/rent.component */ "./src/app/rent/rent.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _housing_housing_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./housing/housing.component */ "./src/app/housing/housing.component.ts");
/* harmony import */ var _migration_migration_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./migration/migration.component */ "./src/app/migration/migration.component.ts");
/* harmony import */ var _rental_rental_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./rental/rental.component */ "./src/app/rental/rental.component.ts");
/* harmony import */ var _kansas_kansas_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./kansas/kansas.component */ "./src/app/kansas/kansas.component.ts");
/* harmony import */ var _one_one_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./one/one.component */ "./src/app/one/one.component.ts");
/* harmony import */ var _two_two_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./two/two.component */ "./src/app/two/two.component.ts");
/* harmony import */ var _three_three_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./three/three.component */ "./src/app/three/three.component.ts");
/* harmony import */ var _address_address_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./address/address.component */ "./src/app/address/address.component.ts");
/* harmony import */ var _zipcode_zipcode_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./zipcode/zipcode.component */ "./src/app/zipcode/zipcode.component.ts");
/* harmony import */ var _lead_lead_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./lead/lead.component */ "./src/app/lead/lead.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//Google Maps

//High charts





























var appRoutes = [
    { path: 'analytics', component: _analytics_analytics_component__WEBPACK_IMPORTED_MODULE_17__["AnalyticsComponent"], children: [
            { path: 'kansas', component: _kansas_kansas_component__WEBPACK_IMPORTED_MODULE_26__["KansasComponent"], children: [
                    { path: 'one', component: _one_one_component__WEBPACK_IMPORTED_MODULE_27__["OneComponent"] },
                    { path: 'two', component: _two_two_component__WEBPACK_IMPORTED_MODULE_28__["TwoComponent"] },
                    { path: 'three', component: _three_three_component__WEBPACK_IMPORTED_MODULE_29__["ThreeComponent"] }
                ] },
            { path: 'migration', component: _migration_migration_component__WEBPACK_IMPORTED_MODULE_24__["MigrationComponent"] },
            { path: 'rental', component: _rental_rental_component__WEBPACK_IMPORTED_MODULE_25__["RentalComponent"] },
            { path: 'housing', component: _housing_housing_component__WEBPACK_IMPORTED_MODULE_23__["HousingComponent"] }
        ]
    },
    { path: 'buy', component: _buy_buy_component__WEBPACK_IMPORTED_MODULE_18__["BuyComponent"] },
    { path: 'sell', component: _sell_sell_component__WEBPACK_IMPORTED_MODULE_19__["SellComponent"] },
    { path: 'rent', component: _rent_rent_component__WEBPACK_IMPORTED_MODULE_20__["RentComponent"], children: [
            { path: 'address', component: _address_address_component__WEBPACK_IMPORTED_MODULE_30__["AddressComponent"] },
            { path: 'zipcode', component: _zipcode_zipcode_component__WEBPACK_IMPORTED_MODULE_31__["ZipcodeComponent"] },
            { path: 'lead', component: _lead_lead_component__WEBPACK_IMPORTED_MODULE_32__["LeadComponent"] }
        ] },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_21__["PageNotFoundComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_13__["NavComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
                _analytics_analytics_component__WEBPACK_IMPORTED_MODULE_17__["AnalyticsComponent"],
                _buy_buy_component__WEBPACK_IMPORTED_MODULE_18__["BuyComponent"],
                _sell_sell_component__WEBPACK_IMPORTED_MODULE_19__["SellComponent"],
                _rent_rent_component__WEBPACK_IMPORTED_MODULE_20__["RentComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_21__["PageNotFoundComponent"],
                _housing_housing_component__WEBPACK_IMPORTED_MODULE_23__["HousingComponent"],
                _migration_migration_component__WEBPACK_IMPORTED_MODULE_24__["MigrationComponent"],
                _rental_rental_component__WEBPACK_IMPORTED_MODULE_25__["RentalComponent"],
                _kansas_kansas_component__WEBPACK_IMPORTED_MODULE_26__["KansasComponent"],
                _one_one_component__WEBPACK_IMPORTED_MODULE_27__["OneComponent"],
                _two_two_component__WEBPACK_IMPORTED_MODULE_28__["TwoComponent"],
                _three_three_component__WEBPACK_IMPORTED_MODULE_29__["ThreeComponent"],
                _address_address_component__WEBPACK_IMPORTED_MODULE_30__["AddressComponent"],
                _zipcode_zipcode_component__WEBPACK_IMPORTED_MODULE_31__["ZipcodeComponent"],
                _lead_lead_component__WEBPACK_IMPORTED_MODULE_32__["LeadComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                angular_highcharts__WEBPACK_IMPORTED_MODULE_4__["ChartModule"],
                angular_google_charts__WEBPACK_IMPORTED_MODULE_3__["GoogleChartsModule"].forRoot(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].googleAPIkey),
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                ),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
                _common_common_module__WEBPACK_IMPORTED_MODULE_12__["CommonModuleBootstrap"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_22__["AppRoutingModule"]
            ],
            providers: [
                { provide: angular_highcharts__WEBPACK_IMPORTED_MODULE_4__["HIGHCHARTS_MODULES"], useFactory: function () { return [highcharts_highcharts_more_src__WEBPACK_IMPORTED_MODULE_5__, highcharts_modules_exporting_src__WEBPACK_IMPORTED_MODULE_6__]; } },
                { provide: angular_highcharts__WEBPACK_IMPORTED_MODULE_4__["HIGHCHARTS_MODULES"], useFactory: function () { return [highcharts_modules_map_src__WEBPACK_IMPORTED_MODULE_7__]; } }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/buy/buy.component.css":
/*!***************************************!*\
  !*** ./src/app/buy/buy.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1eS9idXkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/buy/buy.component.html":
/*!****************************************!*\
  !*** ./src/app/buy/buy.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<form class=\"form-inline p-5\" (ngSubmit)=\"onSearch()\" #heroForm=\"ngForm\" autocomplete=\"off\">\r\n  <label class=\"sr-only\" for=\"searchtext\">Search by</label>\r\n  <div class=\"input-group mb-2 mr-sm-2\">\r\n      <select class=\"form-control\"  id=\"search\"\r\n            required\r\n            [(ngModel)]=\"by\" name=\"by\">\r\n      <option *ngFor=\"let search of searchby\" [value]=\"search\">{{search}}</option>\r\n    </select>\r\n  </div>\r\n  \r\n  <!-- <input type=\"text\" class=\"form-control mb-2 mr-sm-2\" id=\"searchtext\" placeholder=\"Search by\"> -->\r\n\r\n  <label class=\"sr-only\" for=\"searchtext\">searchtext</label>\r\n  <div class=\"input-group mb-2 mr-sm-2\">\r\n    <input type=\"text\" [(ngModel)]=\"text\" name=\"text\" class=\"form-control\" id=\"searchtext\" placeholder=\"Search Text\">\r\n  </div>\r\n \r\n  <button type=\"submit\" class=\"btn btn-primary mb-2\">Search</button>\r\n</form>\r\n<table class=\"table table-striped\" *ngIf=\"result\">\r\n    <thead>\r\n      <tr>\r\n        <th scope=\"col\">Address</th>\r\n        <th scope=\"col\">City</th>\r\n        <th scope=\"col\">State</th>\r\n        <th scope=\"col\">Rating</th>\r\n        <th scope=\"col\">Status</th>\r\n        <th scope=\"col\">Dated On</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody >\r\n      <tr *ngFor=\"let obj of result\">\r\n        <th scope=\"row\">{{obj.address}}</th>\r\n        <td>{{obj.city}}</td>\r\n        <td>{{obj.state}}</td>\r\n        <td>{{obj.structure_rating}}</td>\r\n        <td>{{obj.structure_status}}</td>\r\n        <td>{{obj.date_opened | date:'short'}}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>"

/***/ }),

/***/ "./src/app/buy/buy.component.ts":
/*!**************************************!*\
  !*** ./src/app/buy/buy.component.ts ***!
  \**************************************/
/*! exports provided: BuyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuyComponent", function() { return BuyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BuyComponent = /** @class */ (function () {
    function BuyComponent() {
    }
    BuyComponent.prototype.ngOnInit = function () {
    };
    BuyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-buy',
            template: __webpack_require__(/*! ./buy.component.html */ "./src/app/buy/buy.component.html"),
            styles: [__webpack_require__(/*! ./buy.component.css */ "./src/app/buy/buy.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BuyComponent);
    return BuyComponent;
}());



/***/ }),

/***/ "./src/app/common/common.module.ts":
/*!*****************************************!*\
  !*** ./src/app/common/common.module.ts ***!
  \*****************************************/
/*! exports provided: CommonModuleBootstrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonModuleBootstrap", function() { return CommonModuleBootstrap; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/accordion */ "./node_modules/ngx-bootstrap/accordion/fesm5/ngx-bootstrap-accordion.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/fesm5/ngx-bootstrap-dropdown.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/fesm5/ngx-bootstrap-tabs.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CommonModuleBootstrap = /** @class */ (function () {
    function CommonModuleBootstrap() {
    }
    CommonModuleBootstrap = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionModule"].forRoot(), ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__["BsDropdownModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalModule"].forRoot(), ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__["TabsModule"].forRoot()],
            exports: [ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_1__["AccordionModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__["BsDropdownModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["ModalModule"], ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_4__["TabsModule"]],
            declarations: [],
            providers: []
        })
    ], CommonModuleBootstrap);
    return CommonModuleBootstrap;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-footer {\r\n/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#066dab+82,066dab+82,8abbd7+100 */\r\nbackground: rgb(6,109,171); /* Old browsers */ /* FF3.6-15 */ /* Chrome10-25,Safari5.1-6 */\r\nbackground: linear-gradient(to bottom, rgba(6,109,171,1) 82%,rgba(6,109,171,1) 82%,rgba(138,187,215,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\r\nfilter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#066dab', endColorstr='#8abbd7',GradientType=0 ); /* IE6-9 */}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsMkhBQTJIO0FBQzNILDBCQUEwQixFQUFFLGlCQUFpQixFQUNrRSxhQUFhLEVBQ1osNEJBQTRCO0FBQzVJLDRHQUE0RyxFQUFFLHFEQUFxRDtBQUNuSyxtSEFBbUgsRUFBRSxVQUFVLENBQUMiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmctZm9vdGVyIHtcclxuLyogUGVybWFsaW5rIC0gdXNlIHRvIGVkaXQgYW5kIHNoYXJlIHRoaXMgZ3JhZGllbnQ6IGh0dHA6Ly9jb2xvcnppbGxhLmNvbS9ncmFkaWVudC1lZGl0b3IvIzA2NmRhYis4MiwwNjZkYWIrODIsOGFiYmQ3KzEwMCAqL1xyXG5iYWNrZ3JvdW5kOiByZ2IoNiwxMDksMTcxKTsgLyogT2xkIGJyb3dzZXJzICovXHJcbmJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSg2LDEwOSwxNzEsMSkgODIlLCByZ2JhKDYsMTA5LDE3MSwxKSA4MiUsIHJnYmEoMTM4LDE4NywyMTUsMSkgMTAwJSk7IC8qIEZGMy42LTE1ICovXHJcbmJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgcmdiYSg2LDEwOSwxNzEsMSkgODIlLHJnYmEoNiwxMDksMTcxLDEpIDgyJSxyZ2JhKDEzOCwxODcsMjE1LDEpIDEwMCUpOyAvKiBDaHJvbWUxMC0yNSxTYWZhcmk1LjEtNiAqL1xyXG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDYsMTA5LDE3MSwxKSA4MiUscmdiYSg2LDEwOSwxNzEsMSkgODIlLHJnYmEoMTM4LDE4NywyMTUsMSkgMTAwJSk7IC8qIFczQywgSUUxMCssIEZGMTYrLCBDaHJvbWUyNissIE9wZXJhMTIrLCBTYWZhcmk3KyAqL1xyXG5maWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudCggc3RhcnRDb2xvcnN0cj0nIzA2NmRhYicsIGVuZENvbG9yc3RyPScjOGFiYmQ3JyxHcmFkaWVudFR5cGU9MCApOyAvKiBJRTYtOSAqL30iXX0= */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-bottom navbar-expand navbar-dark bg-footer\">\r\n    <div class=\"navbar-text m-auto\">\r\n      Made by Webcrackers\r\n    </div>\r\n  </nav>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/here.service.ts":
/*!*********************************!*\
  !*** ./src/app/here.service.ts ***!
  \*********************************/
/*! exports provided: HereService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HereService", function() { return HereService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HereService = /** @class */ (function () {
    function HereService() {
        this.platform = new H.service.Platform({
            "app_id": "jJP0jnGz7qamMaWd8WSB",
            "app_code": "KeJCKIYUWzVUNpRASiULhw"
        });
        this.geocoder = this.platform.getGeocodingService();
    }
    HereService.prototype.getAddress = function (query) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.geocoder.geocode({ searchText: query }, function (result) {
                if (result.Response.View.length > 0) {
                    if (result.Response.View[0].Result.length > 0) {
                        resolve(result.Response.View[0].Result);
                    }
                    else {
                        reject({ message: "no results found" });
                    }
                }
                else {
                    reject({ message: "no results found" });
                }
            }, function (error) {
                reject(error);
            });
        });
    };
    HereService.prototype.getAddressFromLatLng = function (query) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.geocoder.reverseGeocode({ prox: query, mode: "retrieveAddress" }, function (result) {
                if (result.Response.View.length > 0) {
                    if (result.Response.View[0].Result.length > 0) {
                        resolve(result.Response.View[0].Result);
                    }
                    else {
                        reject({ message: "no results found" });
                    }
                }
                else {
                    reject({ message: "no results found" });
                }
            }, function (error) {
                reject(error);
            });
        });
    };
    HereService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], HereService);
    return HereService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table{\r\n    color:#ffffff;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGV7XHJcbiAgICBjb2xvcjojZmZmZmZmO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(http) {
        this.http = http;
        this.searchby = ['zip_code', 'neighborhood'];
    }
    HomeComponent.prototype.onSearch = function () {
        var _this = this;
        this.url = 'http://52.15.61.252:80/search?searchby=' + this.by + '&searchtext=' + this.text;
        this.http.get(this.url)
            .subscribe(function (res) {
            _this.result = res.data;
            console.log(_this.result);
        });
    };
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/housing/housing.component.css":
/*!***********************************************!*\
  !*** ./src/app/housing/housing.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvdXNpbmcvaG91c2luZy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/housing/housing.component.html":
/*!************************************************!*\
  !*** ./src/app/housing/housing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-10 text-center\"><div [chart]=\"chart1\"></div></div>\r\n</div>"

/***/ }),

/***/ "./src/app/housing/housing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/housing/housing.component.ts ***!
  \**********************************************/
/*! exports provided: HousingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HousingComponent", function() { return HousingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-highcharts */ "./node_modules/angular-highcharts/angular-highcharts.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HousingComponent = /** @class */ (function () {
    function HousingComponent() {
        this.chart1 = new angular_highcharts__WEBPACK_IMPORTED_MODULE_1__["Chart"]({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Housing Units'
            },
            subtitle: {
                text: 'American Community Survey'
            },
            xAxis: {
                categories: [
                    '2010',
                    '2011',
                    '2012',
                    '2013',
                    '2014',
                    '2015',
                    '2016',
                    '2017'
                ],
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Count'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:f}</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                    name: 'Total Housing Units',
                    data: [130038080, 131034946, 131642457, 132057804, 132741033, 133351840, 134054899, 131642457]
                }, {
                    name: 'Occupied',
                    data: [114235996, 114761359, 115226802, 115610216, 116211092, 116926305, 117716237, 118825921]
                }, {
                    name: 'Owner Occupied',
                    data: [76089650, 75896759, 75484661, 75075700, 74787460, 74712091, 74881068, 75833135]
                }, {
                    name: 'Rental Occupied',
                    data: [38146346, 38864600, 39742141, 40534516, 41423632, 42214214, 42835169, 42992786]
                }]
        });
    }
    HousingComponent.prototype.ngOnInit = function () {
    };
    HousingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-housing',
            template: __webpack_require__(/*! ./housing.component.html */ "./src/app/housing/housing.component.html"),
            styles: [__webpack_require__(/*! ./housing.component.css */ "./src/app/housing/housing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HousingComponent);
    return HousingComponent;
}());



/***/ }),

/***/ "./src/app/kansas/kansas.component.css":
/*!*********************************************!*\
  !*** ./src/app/kansas/kansas.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2thbnNhcy9rYW5zYXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/kansas/kansas.component.html":
/*!**********************************************!*\
  !*** ./src/app/kansas/kansas.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"row\">\r\n  <div class=\"col-sm-6\">\r\n      <google-chart [type]=\"'GeoChart'\"  [data]=\"myData\"></google-chart>\r\n  </div>\r\n  <div class=\"col-sm-6\">\r\n      <google-chart [type]=\"'GeoChart'\"  [data]=\"myData\"></google-chart>\r\n  </div>\r\n</div> -->\r\n<div class=\"col-sm-12 justify-content-center text-center\">\r\n  <div class=\"btn-group text-white btn-group-justified\">\r\n    <a  class=\"btn btn-primary\" routerLink=\"/analytics/kansas/one\" routerLinkActive=\"active\">Housing Value</a>\r\n    <a  class=\"btn btn-primary\" routerLink=\"/analytics/kansas/two\" routerLinkActive=\"active\">Housing Units</a>\r\n    <a  class=\"btn btn-primary\" routerLink=\"/analytics/kansas/three\" routerLinkActive=\"active\">Income</a>\r\n  </div>\r\n</div>    \r\n<div class=\"tab-content \" style=\"margin-top: 2.5%;\">\r\n    <router-outlet #routerOutlet=\"outlet\"></router-outlet>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/kansas/kansas.component.ts":
/*!********************************************!*\
  !*** ./src/app/kansas/kansas.component.ts ***!
  \********************************************/
/*! exports provided: KansasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KansasComponent", function() { return KansasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var KansasComponent = /** @class */ (function () {
    function KansasComponent() {
        this.myData = [
            ['City', 'Population'],
            ['Rome', 2761477],
            ['Milan', 1324110],
            ['Naples', 959574],
            ['Turin', 907563],
            ['Palermo', 655875],
            ['Genoa', 607906],
            ['Bologna', 380181],
            ['Florence', 371282],
            ['Fiumicino', 67370],
            ['Anzio', 52192],
            ['Ciampino', 38262]
        ];
        this.options = [{
                region: 'IT',
                displayMode: 'markers',
                colorAxis: { colors: ['green', 'blue'] }
            }];
    }
    KansasComponent.prototype.ngOnInit = function () {
    };
    KansasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-kansas',
            template: __webpack_require__(/*! ./kansas.component.html */ "./src/app/kansas/kansas.component.html"),
            styles: [__webpack_require__(/*! ./kansas.component.css */ "./src/app/kansas/kansas.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], KansasComponent);
    return KansasComponent;
}());



/***/ }),

/***/ "./src/app/lead/lead.component.css":
/*!*****************************************!*\
  !*** ./src/app/lead/lead.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xlYWQvbGVhZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/lead/lead.component.html":
/*!******************************************!*\
  !*** ./src/app/lead/lead.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n    <div class=\"row col-sm-12 justify-content-center text-center\">\n      <div class=\"col-sm-5\">\n      <form class=\"form-inline p-5\" (ngSubmit)=\"onSearch()\" #heroForm=\"ngForm\" autocomplete=\"off\">\n        \n        <label class=\"sr-only\" for=\"searchtext\">searchtext</label>\n        <div class=\"input-group mb-2 mr-sm-2\">\n          <input type=\"text\" [(ngModel)]=\"text\" name=\"text\" class=\"form-control\" id=\"searchtext\" placeholder=\"Search Text\">\n        </div>\n      \n        <button type=\"submit\" class=\"btn btn-primary mb-2\">Search</button>\n      </form>\n    </div>\n    <div class=\"row\">\n    <!-- <div class=\"col-sm-6\">\n        <google-chart [type]=\"chartType\" [data]=\"chartData\"></google-chart>\n    </div> -->\n    <div class=\"col-sm-12\">\n      <table class=\"table table-striped\" *ngIf=\"result\">\n          <thead>\n            <tr>\n              <th scope=\"col\">Address</th>\n              <th scope=\"col\">City</th>\n              <th scope=\"col\">State</th>\n            </tr>\n          </thead>\n          <tbody >\n            <tr *ngFor=\"let obj of result\">\n              <td>{{obj.location_1_address}}</td>\n              <td>{{obj.location_1_city}}</td>\n              <td>{{obj.location_1_state}}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/lead/lead.component.ts":
/*!****************************************!*\
  !*** ./src/app/lead/lead.component.ts ***!
  \****************************************/
/*! exports provided: LeadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadComponent", function() { return LeadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LeadComponent = /** @class */ (function () {
    function LeadComponent(http) {
        this.http = http;
    }
    LeadComponent.prototype.onSearch = function () {
        var _this = this;
        this.by = 'location_1_address';
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].originApiUrl + '/lead_safe?searchby=' + this.by + '&searchtext=' + this.text;
        this.http.get(this.url)
            .subscribe(function (res) {
            _this.result = res.data;
            console.log(_this.result);
        });
    };
    LeadComponent.prototype.ngOnInit = function () {
    };
    LeadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lead',
            template: __webpack_require__(/*! ./lead.component.html */ "./src/app/lead/lead.component.html"),
            styles: [__webpack_require__(/*! ./lead.component.css */ "./src/app/lead/lead.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LeadComponent);
    return LeadComponent;
}());



/***/ }),

/***/ "./src/app/migration/migration.component.css":
/*!***************************************************!*\
  !*** ./src/app/migration/migration.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21pZ3JhdGlvbi9taWdyYXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/migration/migration.component.html":
/*!****************************************************!*\
  !*** ./src/app/migration/migration.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-6\"><div [chart]=\"chart2\"></div></div>\r\n  <div class=\"col-sm-6\"><div [chart]=\"chart3\"></div></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/migration/migration.component.ts":
/*!**************************************************!*\
  !*** ./src/app/migration/migration.component.ts ***!
  \**************************************************/
/*! exports provided: MigrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MigrationComponent", function() { return MigrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-highcharts */ "./node_modules/angular-highcharts/angular-highcharts.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MigrationComponent = /** @class */ (function () {
    function MigrationComponent() {
        this.chart2 = new angular_highcharts__WEBPACK_IMPORTED_MODULE_1__["Chart"]({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Migration Flows'
            },
            subtitle: {
                text: 'American Community Survey'
            },
            xAxis: {
                categories: [
                    '2010',
                    '2011',
                    '2012',
                    '2013',
                    '2014',
                    '2015',
                    '2016',
                    '2017'
                ],
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Count'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:f} </b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                    name: 'Northeast',
                    data: [5725386, 5592274, 5532954, 5511594, 5510012, 5476901, 5476082, 5481865]
                }, {
                    name: 'Midwest',
                    data: [8948562, 8785604, 8737581, 8726997, 8749136, 8762879, 8802785, 8749362]
                }, {
                    name: 'South',
                    data: [16380798, 16120853, 15989622, 15986631, 16059843, 16072455, 16083894, 16052392]
                }, {
                    name: 'West',
                    data: [10702120, 10691572, 10773034, 10857879, 10786919, 10581355, 10381759, 10193448]
                }]
        });
        this.chart3 = new angular_highcharts__WEBPACK_IMPORTED_MODULE_1__["Chart"]({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Movers from abroad'
            },
            subtitle: {
                text: 'American Community Survey'
            },
            xAxis: {
                categories: [
                    '2010',
                    '2011',
                    '2012',
                    '2013',
                    '2014',
                    '2015',
                    '2016',
                    '2017'
                ],
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Count'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:f}</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                    name: 'Northeast',
                    data: [352458, 357322, 363457, 362387, 374976, 385152, 394990, 400150]
                }, {
                    name: 'Midwest',
                    data: [272600, 274346, 278094, 279169, 284839, 293729, 300986, 303599]
                }, {
                    name: 'South',
                    data: [686729, 676385, 677578, 678692, 708143, 735978, 766921, 801559]
                }, {
                    name: 'West',
                    data: [531309, 515087, 500299, 494437, 511888, 530350, 549835, 568789]
                }]
        });
    }
    MigrationComponent.prototype.ngOnInit = function () {
    };
    MigrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-migration',
            template: __webpack_require__(/*! ./migration.component.html */ "./src/app/migration/migration.component.html"),
            styles: [__webpack_require__(/*! ./migration.component.css */ "./src/app/migration/migration.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MigrationComponent);
    return MigrationComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-header {\r\n    background: rgb(2,0,36);\r\n    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,53,121,0.6278886554621849) 33%, rgba(0,212,255,1) 100%);\r\n}\r\n.navbar-custom {\r\n    background-color: #0088cc;\r\n    border-color: #0072ab;\r\n    background-image: linear-gradient(to bottom, #00aaff 0%, #0088cc 100%);\r\n    background-repeat: repeat-x;\r\n    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff00aaff', endColorstr='#ff0088cc', GradientType=0);\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG9IQUFvSDtBQUN4SDtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUlyQixzRUFBc0U7SUFDdEUsMkJBQTJCO0lBQzNCLHNIQUFzSDtFQUN4SCIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1oZWFkZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDIsMCwzNik7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMiwwLDM2LDEpIDAlLCByZ2JhKDksNTMsMTIxLDAuNjI3ODg4NjU1NDYyMTg0OSkgMzMlLCByZ2JhKDAsMjEyLDI1NSwxKSAxMDAlKTtcclxufVxyXG4ubmF2YmFyLWN1c3RvbSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA4OGNjO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDA3MmFiO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgMCUsIGxlZnQgMTAwJSwgZnJvbSgjMDBhYWZmKSwgdG8oIzAwODhjYykpO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAjMDBhYWZmLCAwJSwgIzAwODhjYywgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiAtbW96LWxpbmVhci1ncmFkaWVudCh0b3AsICMwMGFhZmYgMCUsICMwMDg4Y2MgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjMDBhYWZmIDAlLCAjMDA4OGNjIDEwMCUpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xyXG4gICAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoc3RhcnRDb2xvcnN0cj0nI2ZmMDBhYWZmJywgZW5kQ29sb3JzdHI9JyNmZjAwODhjYycsIEdyYWRpZW50VHlwZT0wKTtcclxuICB9XHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand navbar-dark navbar-custom fixed-top\" style=\"padding: 1% 2%;\">\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo03\" aria-controls=\"navbarTogglerDemo03\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <a class=\"navbar-brand\" href=\"/analytics/migration\"><span class=\"glyphicon glyphicon-home\"></span>REP Analysis</a>\r\n    \r\n    <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo03\">\r\n      <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\r\n        <li class=\"nav-item active\">\r\n          <a class=\"nav-link\" routerLink=\"/analytics\" routerLinkActive=\"active\">Analytics<span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n        <li class=\"nav-item active\">\r\n          <a class=\"nav-link\" routerLink=\"/rent\" routerLinkActive=\"active\">Find your property<span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n      </ul>\r\n     \r\n    </div>\r\n  </nav>\r\n "

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/one/one.component.css":
/*!***************************************!*\
  !*** ./src/app/one/one.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29uZS9vbmUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/one/one.component.html":
/*!****************************************!*\
  !*** ./src/app/one/one.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div [chart]=\"chart1\"></div>\n"

/***/ }),

/***/ "./src/app/one/one.component.ts":
/*!**************************************!*\
  !*** ./src/app/one/one.component.ts ***!
  \**************************************/
/*! exports provided: OneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneComponent", function() { return OneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-highcharts */ "./node_modules/angular-highcharts/angular-highcharts.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OneComponent = /** @class */ (function () {
    function OneComponent() {
        this.chart1 = new angular_highcharts__WEBPACK_IMPORTED_MODULE_1__["Chart"]({
            chart: {
                type: 'column'
            },
            title: {
                text: ' Occupied Housing Units without a Mortigage'
            },
            subtitle: {
                text: 'American Community Survey'
            },
            xAxis: {
                categories: [
                    '2010',
                    '2011',
                    '2012',
                    '2013',
                    '2014',
                    '2015',
                    '2016',
                    '2017'
                ],
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Percentage'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:f}</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                    name: 'Less than $50,000',
                    data: [20.40, 21.0, 21.9, 23.1, 23.4, 24.3, 23.9, 23.4]
                }, {
                    name: '$50000 to $99999',
                    data: [28.0, 27.5, 27.6, 27.0, 27.1, 26.8, 26.8, 26.3]
                }, {
                    name: '$100000 to $199999',
                    data: [34.4, 33.7, 31.9, 31.5, 30.6, 30.6, 29.4, 29.8]
                }, {
                    name: '$200000 to $299999',
                    data: [10.4, 10.5, 11.2, 11.6, 11.8, 11.9, 12.8, 11.8]
                }, {
                    name: '$300,000 to $499,999',
                    data: [4.7, 4.7, 4.7, 4.4, 4.7, 4.2, 4.4, 5.6]
                }, {
                    name: '$500,000 or more',
                    data: [2.1, 2.6, 2.6, 2.4, 2.3, 2.2, 2.6, 3]
                }
            ]
        });
    }
    OneComponent.prototype.ngOnInit = function () {
    };
    OneComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-one',
            template: __webpack_require__(/*! ./one.component.html */ "./src/app/one/one.component.html"),
            styles: [__webpack_require__(/*! ./one.component.css */ "./src/app/one/one.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OneComponent);
    return OneComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  page-not-found works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"p-3\" (ngSubmit)=\"onCreate()\" #heroForm=\"ngForm\" autocomplete=\"off\">\r\n    <div class=\"form-group\">\r\n      <label for=\"ID\">Class Identity number</label>\r\n      <input type=\"number\" class=\"form-control\" [(ngModel)]=\"id\" name=\"id\"  placeholder=\"Enter Class ID\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"name\">Student name</label>\r\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"name\" name=\"name\" placeholder=\"Enter Name\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"course\">Course of study</label>\r\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"course\" name=\"course\" placeholder=\"Enter Course\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"major\">Major</label>\r\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"major\" name=\"major\" placeholder=\"Enter Major\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"minor\">Minor</label>\r\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"minor\" name=\"minor\" placeholder=\"Enter Minor\">\r\n    </div>      \r\n    <button type=\"submit\" class=\"btn btn-primary\">Create</button>\r\n  </form>\r\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(http) {
        this.http = http;
    }
    RegisterComponent.prototype.onCreate = function () {
        var _this = this;
        this.url = 'http://127.0.0.1:3000/student/create';
        this.http.post(this.url, {
            class_id: this.id,
            name: this.name,
            course_of_study: this.course,
            major: this.major,
            minor: this.minor,
        })
            .subscribe(function (res) {
            _this.message = res.message;
            alert(_this.message);
            console.log(_this.message);
        });
    };
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/rent/rent.component.css":
/*!*****************************************!*\
  !*** ./src/app/rent/rent.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlbnQvcmVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/rent/rent.component.html":
/*!******************************************!*\
  !*** ./src/app/rent/rent.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-12 justify-content-center text-center\">\r\n  <div class=\"btn-group text-white btn-group-justified\">\r\n    <a  class=\"btn btn-primary\" routerLink=\"/rent/address\" routerLinkActive=\"active\">Find by Address</a>\r\n    <a  class=\"btn btn-primary\" routerLink=\"/rent/zipcode\" routerLinkActive=\"active\">Find by Zip Code</a>\r\n    <!-- <a  class=\"btn btn-primary\" routerLink=\"/rent/lead\" routerLinkActive=\"active\">Lead safe</a> -->\r\n  </div>\r\n</div>    \r\n<div class=\"tab-content \" style=\"margin-top: 2.5%;\">\r\n    <router-outlet #routerOutlet=\"outlet\"></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/rent/rent.component.ts":
/*!****************************************!*\
  !*** ./src/app/rent/rent.component.ts ***!
  \****************************************/
/*! exports provided: RentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RentComponent", function() { return RentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RentComponent = /** @class */ (function () {
    function RentComponent() {
    }
    RentComponent.prototype.ngOnInit = function () {
    };
    RentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rent',
            template: __webpack_require__(/*! ./rent.component.html */ "./src/app/rent/rent.component.html"),
            styles: [__webpack_require__(/*! ./rent.component.css */ "./src/app/rent/rent.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RentComponent);
    return RentComponent;
}());



/***/ }),

/***/ "./src/app/rental/rental.component.css":
/*!*********************************************!*\
  !*** ./src/app/rental/rental.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlbnRhbC9yZW50YWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/rental/rental.component.html":
/*!**********************************************!*\
  !*** ./src/app/rental/rental.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-10\"><div [chart]=\"chart4\"></div></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/rental/rental.component.ts":
/*!********************************************!*\
  !*** ./src/app/rental/rental.component.ts ***!
  \********************************************/
/*! exports provided: RentalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RentalComponent", function() { return RentalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-highcharts */ "./node_modules/angular-highcharts/angular-highcharts.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RentalComponent = /** @class */ (function () {
    function RentalComponent() {
        this.chart4 = new angular_highcharts__WEBPACK_IMPORTED_MODULE_1__["Chart"]({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Rental Housing Units'
            },
            subtitle: {
                text: 'American Community Survey'
            },
            xAxis: {
                categories: [
                    '2010',
                    '2011',
                    '2012',
                    '2013',
                    '2014',
                    '2015',
                    '2016',
                    '2017'
                ],
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Count'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:f}</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                    name: '$800 to $899',
                    data: [3108561, 3194531, 3402473, 3505845, 3552977, 3661493, 3695613, 3736831]
                }, {
                    name: '$900 to $999',
                    data: [2355811, 2487276, 2537503, 2724617, 2690797, 2741829, 2948263, 290450]
                }, {
                    name: '$1,000 to $1,249',
                    data: [3756397, 3941968, 4288557, 4607400, 4840078, 5035724, 5175117, 5514912]
                }, {
                    name: '$1,250 to $1,499',
                    data: [2069572, 2412195, 2681074, 2613415, 2809569, 2921986, 3167536, 3327255]
                }, {
                    name: '$1,500 to $1,999',
                    data: [1898263, 2140908, 2254415, 2501880, 2685608, 2835170, 3120093, 3473884]
                }, {
                    name: '$2,000 or more',
                    data: [1078925, 1248456, 1423577, 1562604, 1737631, 1893258, 2128707, 2432136]
                }]
        });
    }
    RentalComponent.prototype.ngOnInit = function () {
    };
    RentalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rental',
            template: __webpack_require__(/*! ./rental.component.html */ "./src/app/rental/rental.component.html"),
            styles: [__webpack_require__(/*! ./rental.component.css */ "./src/app/rental/rental.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RentalComponent);
    return RentalComponent;
}());



/***/ }),

/***/ "./src/app/sell/sell.component.css":
/*!*****************************************!*\
  !*** ./src/app/sell/sell.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlbGwvc2VsbC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/sell/sell.component.html":
/*!******************************************!*\
  !*** ./src/app/sell/sell.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <form>\r\n  \r\n  <div class=\"form-group\">\r\n    <div class=\"form-check\">\r\n      <input class=\"form-check-input\" type=\"checkbox\" id=\"gridCheck\">\r\n      <label class=\"form-check-label\" for=\"gridCheck\">\r\n        Check me out\r\n      </label>\r\n    </div>\r\n  </div>\r\n  <fieldset class=\"form-group\">\r\n    <div class=\"row\">\r\n      <legend class=\"col-form-label col-sm-2 pt-0\">Radios</legend>\r\n      <div class=\"col-sm-10\">\r\n        <div class=\"form-check\">\r\n          <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios1\" value=\"option1\" checked>\r\n          <label class=\"form-check-label\" for=\"gridRadios1\">\r\n            First radio\r\n          </label>\r\n        </div>\r\n        <div class=\"form-check\">\r\n          <input class=\"form-check-input\" type=\"radio\" name=\"gridRadios\" id=\"gridRadios2\" value=\"option2\">\r\n          <label class=\"form-check-label\" for=\"gridRadios2\">\r\n            Second radio\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </fieldset>\r\n  <div class=\"form-group row\">\r\n    <div class=\"col-sm-2\">Checkbox</div>\r\n    <div class=\"col-sm-10\">\r\n      <div class=\"form-check\">\r\n        <input class=\"form-check-input\" type=\"checkbox\" id=\"gridCheck1\">\r\n        <label class=\"form-check-label\" for=\"gridCheck1\">\r\n          Example checkbox\r\n        </label>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"exampleFormControlFile1\">Example file input</label>\r\n    <input type=\"file\" class=\"form-control-file\" id=\"exampleFormControlFile1\">\r\n  </div>\r\n  <button type=\"submit\" class=\"btn btn-primary\">Sign in</button>\r\n</form> -->\r\n<div class=\"form-group col-md-8\">\r\n  <label for=\"inputAddress\">Address</label>\r\n  <input type=\"text\" class=\"form-control\" [(ngModel)]='inputAddress' id=\"inputAddress\" placeholder=\"1234 Main St\">\r\n</div>\r\n<div class=\"form-row col-md-8\">\r\n  <div class=\"form-group col-md-6\">\r\n    <label for=\"inputCity\">City</label>\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]='inputCity' id=\"inputCity\">\r\n  </div>\r\n  <div class=\"form-group col-md-4\">\r\n    <label for=\"inputState\">State</label>\r\n      <select class=\"form-control\" [(ngModel)]='inputState' id=\"inputState\" required\r\n            [(ngModel)]=\"selectedState\" name=\"selectedState\">\r\n      <option *ngFor=\"let state of usstates\" [value]=\"state.abbreviation\">{{state.name}}</option>\r\n    </select>\r\n  </div>\r\n  <div class=\"form-group col-md-2\">\r\n    <label for=\"inputZip\">Zip</label>\r\n    <input type=\"text\" class=\"form-control\" [(ngModel)]='inputZip' id=\"inputZip\">\r\n  </div>\r\n</div>\r\n<div>\r\n  <input type=\"text\" [(ngModel)]=\"query\">\r\n  <button type=\"button\" (click)=\"getAddress()\">Search</button>\r\n</div>\r\n<div>\r\n  <input type=\"text\" [(ngModel)]=\"position\">\r\n  <button type=\"button\" (click)=\"getAddressFromLatLng()\">Search</button>\r\n</div>\r\n<hr>\r\n<table style=\"width: 100%\">\r\n  <thead>\r\n      <tr style=\"text-align: left\">\r\n          <th>Label</th>\r\n          <th>Latitude</th>\r\n          <th>Longitude</th>\r\n      </tr>\r\n  </thead>\r\n  <tbody>\r\n      <tr *ngFor=\"let location of locations\">\r\n          <td>{{ location.Location.Address.Label }}</td>\r\n          <td>{{ location.Location.DisplayPosition.Latitude }}</td>\r\n          <td>{{ location.Location.DisplayPosition.Longitude }}</td>\r\n      </tr>\r\n  </tbody>\r\n</table>"

/***/ }),

/***/ "./src/app/sell/sell.component.ts":
/*!****************************************!*\
  !*** ./src/app/sell/sell.component.ts ***!
  \****************************************/
/*! exports provided: SellComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellComponent", function() { return SellComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _here_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../here.service */ "./src/app/here.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SellComponent = /** @class */ (function () {
    function SellComponent(here) {
        this.here = here;
        this.usstates = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].us_states;
        this.query = "5425 Harrison St, Kansas city, MO 64110";
        this.position = "39.02808,-94.57458";
    }
    SellComponent.prototype.ngOnInit = function () {
    };
    SellComponent.prototype.getAddress = function () {
        var _this = this;
        this.query = this.inputAddress + ' ' + this.inputCity + ' ' + this.inputState + ' ' + this.inputZip;
        console.log(this.query);
        if (this.query != "") {
            this.here.getAddress(this.query).then(function (result) {
                _this.locations = result;
            }, function (error) {
                console.error(error);
            });
        }
    };
    SellComponent.prototype.getAddressFromLatLng = function () {
        var _this = this;
        if (this.position != "") {
            this.here.getAddressFromLatLng(this.position).then(function (result) {
                _this.locations = result;
            }, function (error) {
                console.error(error);
            });
        }
    };
    SellComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sell',
            template: __webpack_require__(/*! ./sell.component.html */ "./src/app/sell/sell.component.html"),
            styles: [__webpack_require__(/*! ./sell.component.css */ "./src/app/sell/sell.component.css")]
        }),
        __metadata("design:paramtypes", [_here_service__WEBPACK_IMPORTED_MODULE_2__["HereService"]])
    ], SellComponent);
    return SellComponent;
}());



/***/ }),

/***/ "./src/app/three/three.component.css":
/*!*******************************************!*\
  !*** ./src/app/three/three.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RocmVlL3RocmVlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/three/three.component.html":
/*!********************************************!*\
  !*** ./src/app/three/three.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div [chart]=\"chart3\"></div>\n"

/***/ }),

/***/ "./src/app/three/three.component.ts":
/*!******************************************!*\
  !*** ./src/app/three/three.component.ts ***!
  \******************************************/
/*! exports provided: ThreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThreeComponent", function() { return ThreeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-highcharts */ "./node_modules/angular-highcharts/angular-highcharts.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ThreeComponent = /** @class */ (function () {
    function ThreeComponent() {
        this.chart3 = new angular_highcharts__WEBPACK_IMPORTED_MODULE_1__["Chart"]({
            chart: {
                type: 'column'
            },
            title: {
                text: 'Occupied Household Income'
            },
            subtitle: {
                text: 'American Community Survey'
            },
            xAxis: {
                categories: [
                    '2010',
                    '2011',
                    '2012',
                    '2013',
                    '2014',
                    '2015',
                    '2016',
                    '2017'
                ],
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Percentage'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:f}</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                    name: 'Less than $5000',
                    data: [4.6, 4.8, 4.7, 4.9, 5.0, 4.7, 4.5, 4.2]
                }, {
                    name: '$5000 to $9999',
                    data: [5.6, 5.3, 5.4, 5.2, 5.0, 4.9, 4.6, 4.1]
                }, {
                    name: '$10000 to $14999',
                    data: [6.3, 6.1, 5.9, 6.0, 6.0, 6.1, 5.9, 5.6]
                },
                {
                    name: '$14999 to $19999',
                    data: [5.6, 5.5, 5.8, 5.8, 6.0, 5.9, 6.0, 5.6]
                }, {
                    name: '$20000 to $24999',
                    data: [6.3, 5.8, 5.7, 5.8, 5.8, 6.0, 5.7, 5.6]
                },
                {
                    name: '$25000 to $34999',
                    data: [12.5, 12.5, 12.1, 11.9, 11.2, 11.1, 10.9, 10.6]
                }, {
                    name: '$35000 to $49999',
                    data: [14.9, 14.6, 14.7, 14.4, 14.6, 14.4, 14.2, 14.1]
                }, {
                    name: '$50000 to $74999',
                    data: [17.7, 17.7, 17.6, 17.6, 17.4, 17.7, 18.3, 18.4]
                }, {
                    name: '$75000 to $99999',
                    data: [10.6, 10.8, 10.6, 11.2, 11.2, 11.1, 11.5, 11.7]
                },
                {
                    name: '$100000 to $149999',
                    data: [10.6, 10.9, 11.1, 10.8, 10.9, 10.9, 11.1, 11.8]
                },
                {
                    name: '$150000 or more ',
                    data: [5.3, 6.1, 6.4, 6.5, 6.8, 7.1, 7.4, 8.2]
                },
            ]
        });
    }
    ThreeComponent.prototype.ngOnInit = function () {
    };
    ThreeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-three',
            template: __webpack_require__(/*! ./three.component.html */ "./src/app/three/three.component.html"),
            styles: [__webpack_require__(/*! ./three.component.css */ "./src/app/three/three.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ThreeComponent);
    return ThreeComponent;
}());



/***/ }),

/***/ "./src/app/two/two.component.css":
/*!***************************************!*\
  !*** ./src/app/two/two.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3R3by90d28uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/two/two.component.html":
/*!****************************************!*\
  !*** ./src/app/two/two.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div [chart]=\"chart2\"></div>\n"

/***/ }),

/***/ "./src/app/two/two.component.ts":
/*!**************************************!*\
  !*** ./src/app/two/two.component.ts ***!
  \**************************************/
/*! exports provided: TwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwoComponent", function() { return TwoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-highcharts */ "./node_modules/angular-highcharts/angular-highcharts.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TwoComponent = /** @class */ (function () {
    function TwoComponent() {
        this.chart2 = new angular_highcharts__WEBPACK_IMPORTED_MODULE_1__["Chart"]({
            chart: {
                type: 'column'
            },
            title: {
                text: ' Housing Units'
            },
            subtitle: {
                text: 'American Community Survey'
            },
            xAxis: {
                categories: [
                    '2010',
                    '2011',
                    '2012',
                    '2013',
                    '2014',
                    '2015',
                    '2016',
                    '2017'
                ],
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Count'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:f}</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                    name: 'Total housing units',
                    data: [224317, 224622, 224765, 225145, 225464, 227002, 227768, 229508]
                }, {
                    name: 'Occupied housing units',
                    data: [192695, 192271, 192048, 192648, 192799, 195033, 196416, 198935]
                }, {
                    name: 'Owner-occupied',
                    data: [112208, 110230, 109139, 108507, 106906, 106130, 105565, 107352]
                }, {
                    name: 'Renter-occupied',
                    data: [80487, 82041, 82909, 84141, 85893, 88903, 90851, 91583]
                }
            ]
        });
    }
    TwoComponent.prototype.ngOnInit = function () {
    };
    TwoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-two',
            template: __webpack_require__(/*! ./two.component.html */ "./src/app/two/two.component.html"),
            styles: [__webpack_require__(/*! ./two.component.css */ "./src/app/two/two.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TwoComponent);
    return TwoComponent;
}());



/***/ }),

/***/ "./src/app/zipcode/zipcode.component.css":
/*!***********************************************!*\
  !*** ./src/app/zipcode/zipcode.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ppcGNvZGUvemlwY29kZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/zipcode/zipcode.component.html":
/*!************************************************!*\
  !*** ./src/app/zipcode/zipcode.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div class=\"row col-sm-12 justify-content-center text-center\">\n    <div class=\"col-sm-5\">\n    <form class=\"form-inline p-5\" (ngSubmit)=\"onSearch()\" #heroForm=\"ngForm\" autocomplete=\"off\">\n      \n      <label class=\"sr-only\" for=\"searchtext\">searchtext</label>\n      <div class=\"input-group mb-2 mr-sm-2\">\n        <input type=\"text\" [(ngModel)]=\"text\" name=\"text\" class=\"form-control\" id=\"searchtext\" placeholder=\"Search Text\">\n      </div>\n    \n      <button type=\"submit\" class=\"btn btn-primary mb-2\">Search</button>\n    </form>\n  </div>\n  <div class=\"row\">\n  <!-- <div class=\"col-sm-6\">\n      <google-chart [type]=\"chartType\" [data]=\"chartData\"></google-chart>\n  </div> -->\n  <div class=\"col-sm-12\">\n    <table class=\"table table-striped\" *ngIf=\"result\">\n        <thead>\n          <tr>\n            <th scope=\"col\">Address</th>\n            <th scope=\"col\">City</th>\n            <th scope=\"col\">State</th>\n            <th scope=\"col\">Rating</th>\n            <th scope=\"col\">Status</th>\n            <th scope=\"col\">Dated On</th>\n          </tr>\n        </thead>\n        <tbody >\n          <tr *ngFor=\"let obj of result\">\n            <th scope=\"row\">{{obj.address}}</th>\n            <td>{{obj.city}}</td>\n            <td>{{obj.state}}</td>\n            <td>{{obj.structure_rating}}</td>\n            <td>{{obj.structure_status}}</td>\n            <td>{{obj.date_opened | date:'short'}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/zipcode/zipcode.component.ts":
/*!**********************************************!*\
  !*** ./src/app/zipcode/zipcode.component.ts ***!
  \**********************************************/
/*! exports provided: ZipcodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZipcodeComponent", function() { return ZipcodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ZipcodeComponent = /** @class */ (function () {
    function ZipcodeComponent(http) {
        this.http = http;
        this.chartType = 'geochart';
        this.chartData = [['Lat', 'Long', 'Name'],
            [37.4232, -122.0853, 'Work'],
            [37.4289, -122.1697, 'University'],
            [37.6153, -122.3900, 'Airport'],
            [37.4422, -122.1731, 'Shopping']];
    }
    ZipcodeComponent.prototype.onSearch = function () {
        var _this = this;
        this.by = 'zip_code';
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].originApiUrl + '/search?searchby=' + this.by + '&searchtext=' + this.text;
        this.http.get(this.url)
            .subscribe(function (res) {
            _this.result = res.data;
            console.log(_this.result);
        });
    };
    ZipcodeComponent.prototype.ngOnInit = function () {
    };
    ZipcodeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-zipcode',
            template: __webpack_require__(/*! ./zipcode.component.html */ "./src/app/zipcode/zipcode.component.html"),
            styles: [__webpack_require__(/*! ./zipcode.component.css */ "./src/app/zipcode/zipcode.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ZipcodeComponent);
    return ZipcodeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    googleAPIkey: 'AIzaSyA-KVaZb4AY8piVKrSyIJTmZcHIQHMEWNI',
    originApiUrl: 'ec2-3-16-154-50.us-east-2.compute.amazonaws.com',
    thirdPartyUrl1: "",
    thirdPartyUrl2: "",
    us_states: [
        {
            "name": "Alabama",
            "abbreviation": "AL"
        },
        {
            "name": "Alaska",
            "abbreviation": "AK"
        },
        {
            "name": "American Samoa",
            "abbreviation": "AS"
        },
        {
            "name": "Arizona",
            "abbreviation": "AZ"
        },
        {
            "name": "Arkansas",
            "abbreviation": "AR"
        },
        {
            "name": "California",
            "abbreviation": "CA"
        },
        {
            "name": "Colorado",
            "abbreviation": "CO"
        },
        {
            "name": "Connecticut",
            "abbreviation": "CT"
        },
        {
            "name": "Delaware",
            "abbreviation": "DE"
        },
        {
            "name": "District Of Columbia",
            "abbreviation": "DC"
        },
        {
            "name": "Federated States Of Micronesia",
            "abbreviation": "FM"
        },
        {
            "name": "Florida",
            "abbreviation": "FL"
        },
        {
            "name": "Georgia",
            "abbreviation": "GA"
        },
        {
            "name": "Guam",
            "abbreviation": "GU"
        },
        {
            "name": "Hawaii",
            "abbreviation": "HI"
        },
        {
            "name": "Idaho",
            "abbreviation": "ID"
        },
        {
            "name": "Illinois",
            "abbreviation": "IL"
        },
        {
            "name": "Indiana",
            "abbreviation": "IN"
        },
        {
            "name": "Iowa",
            "abbreviation": "IA"
        },
        {
            "name": "Kansas",
            "abbreviation": "KS"
        },
        {
            "name": "Kentucky",
            "abbreviation": "KY"
        },
        {
            "name": "Louisiana",
            "abbreviation": "LA"
        },
        {
            "name": "Maine",
            "abbreviation": "ME"
        },
        {
            "name": "Marshall Islands",
            "abbreviation": "MH"
        },
        {
            "name": "Maryland",
            "abbreviation": "MD"
        },
        {
            "name": "Massachusetts",
            "abbreviation": "MA"
        },
        {
            "name": "Michigan",
            "abbreviation": "MI"
        },
        {
            "name": "Minnesota",
            "abbreviation": "MN"
        },
        {
            "name": "Mississippi",
            "abbreviation": "MS"
        },
        {
            "name": "Missouri",
            "abbreviation": "MO"
        },
        {
            "name": "Montana",
            "abbreviation": "MT"
        },
        {
            "name": "Nebraska",
            "abbreviation": "NE"
        },
        {
            "name": "Nevada",
            "abbreviation": "NV"
        },
        {
            "name": "New Hampshire",
            "abbreviation": "NH"
        },
        {
            "name": "New Jersey",
            "abbreviation": "NJ"
        },
        {
            "name": "New Mexico",
            "abbreviation": "NM"
        },
        {
            "name": "New York",
            "abbreviation": "NY"
        },
        {
            "name": "North Carolina",
            "abbreviation": "NC"
        },
        {
            "name": "North Dakota",
            "abbreviation": "ND"
        },
        {
            "name": "Northern Mariana Islands",
            "abbreviation": "MP"
        },
        {
            "name": "Ohio",
            "abbreviation": "OH"
        },
        {
            "name": "Oklahoma",
            "abbreviation": "OK"
        },
        {
            "name": "Oregon",
            "abbreviation": "OR"
        },
        {
            "name": "Palau",
            "abbreviation": "PW"
        },
        {
            "name": "Pennsylvania",
            "abbreviation": "PA"
        },
        {
            "name": "Puerto Rico",
            "abbreviation": "PR"
        },
        {
            "name": "Rhode Island",
            "abbreviation": "RI"
        },
        {
            "name": "South Carolina",
            "abbreviation": "SC"
        },
        {
            "name": "South Dakota",
            "abbreviation": "SD"
        },
        {
            "name": "Tennessee",
            "abbreviation": "TN"
        },
        {
            "name": "Texas",
            "abbreviation": "TX"
        },
        {
            "name": "Utah",
            "abbreviation": "UT"
        },
        {
            "name": "Vermont",
            "abbreviation": "VT"
        },
        {
            "name": "Virgin Islands",
            "abbreviation": "VI"
        },
        {
            "name": "Virginia",
            "abbreviation": "VA"
        },
        {
            "name": "Washington",
            "abbreviation": "WA"
        },
        {
            "name": "West Virginia",
            "abbreviation": "WV"
        },
        {
            "name": "Wisconsin",
            "abbreviation": "WI"
        },
        {
            "name": "Wyoming",
            "abbreviation": "WY"
        }
    ]
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Sireesha Keesara\Documents\GitHub\CS5525_Cloud_Computing_Proj_KCHomes\src\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map