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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var medicalvisitlist_1 = require("../_models/medicalvisitlist");
var visit_service_1 = require("../_services/visit.service");
var VisitsListCreateComponent = (function () {
    function VisitsListCreateComponent(visitService, router) {
        this.visitService = visitService;
        this.router = router;
        this.visitsList = new medicalvisitlist_1.MedicalVisitList();
        this.login = JSON.parse(localStorage.getItem('currentUser'));
    }
    VisitsListCreateComponent.prototype.addVisitList = function () {
        var _this = this;
        this.visitsList.doctor = this.login.doctor;
        this.visitsList.date = new Date(this.time);
        this.visitsList.date.setHours(this.visitsList.date.getHours() - 1);
        this.visitService
            .addVisitList(this.visitsList)
            .subscribe(function (data) { _this.router.navigate(["/doctorvisits"]); });
    };
    return VisitsListCreateComponent;
}());
VisitsListCreateComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'add-visit',
        templateUrl: 'visits-list-create.component.html',
    }),
    __metadata("design:paramtypes", [visit_service_1.VisitService, router_1.Router])
], VisitsListCreateComponent);
exports.VisitsListCreateComponent = VisitsListCreateComponent;
//# sourceMappingURL=visits-list-create.component.js.map