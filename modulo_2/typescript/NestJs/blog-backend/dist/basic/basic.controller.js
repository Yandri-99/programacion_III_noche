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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicController = void 0;
const common_1 = require("@nestjs/common");
const basic_service_1 = require("./basic.service");
let BasicController = class BasicController {
    basicService;
    constructor(basicService) {
        this.basicService = basicService;
    }
    myFisrtGet() {
        return this.basicService.myFisrtGet();
    }
    mySecondGet() {
        return this.basicService.mySecondGet();
    }
    requestWithParameter(myParameter) {
        return this.basicService
            .functionWithParameter(myParameter);
    }
    promedio(nota1, nota2, nota3) {
        return this.basicService
            .calcularPromedio(nota1, nota2, nota3);
    }
    create(bodyData) {
        return this.basicService
            .functionWithPost(bodyData);
    }
    update(id, updateBody) {
        return this.basicService
            .updateWithPut(id, updateBody);
    }
    updatePatch(id, updateBody) {
        return this.basicService
            .updateWithPatch(id, updateBody);
    }
    delete(id) {
        return this.basicService
            .delete(id);
    }
    licencia(bodyData) {
        return this.basicService
            .licencia(bodyData);
    }
    areaTriangulo(bodyData) {
        return this.basicService
            .areaTriangulo(bodyData);
    }
    calcularMayor(bodyData) {
        return this.basicService
            .calcularMayor(bodyData);
    }
    verificarCredito(bodyData) {
        const { edad, ingreso, historialCrediticio } = bodyData;
        return this.basicService.verificarCredito(edad, ingreso, historialCrediticio);
    }
};
exports.BasicController = BasicController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], BasicController.prototype, "myFisrtGet", null);
__decorate([
    (0, common_1.Get)('my-second-get'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Object)
], BasicController.prototype, "mySecondGet", null);
__decorate([
    (0, common_1.Get)('myParameter'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], BasicController.prototype, "requestWithParameter", null);
__decorate([
    (0, common_1.Get)('calcular-promedio/:nota1/:nota2/:nota3'),
    __param(0, (0, common_1.Param)('nota1')),
    __param(1, (0, common_1.Param)('nota2')),
    __param(2, (0, common_1.Param)('nota3')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number]),
    __metadata("design:returntype", void 0)
], BasicController.prototype, "promedio", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BasicController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], BasicController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], BasicController.prototype, "updatePatch", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BasicController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)('licencia-conducir'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BasicController.prototype, "licencia", null);
__decorate([
    (0, common_1.Post)('area-triangulo'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BasicController.prototype, "areaTriangulo", null);
__decorate([
    (0, common_1.Post)('calcular-mayor'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BasicController.prototype, "calcularMayor", null);
__decorate([
    (0, common_1.Post)('verificar-credito'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BasicController.prototype, "verificarCredito", null);
exports.BasicController = BasicController = __decorate([
    (0, common_1.Controller)('basics'),
    __metadata("design:paramtypes", [basic_service_1.BasicService])
], BasicController);
//# sourceMappingURL=basic.controller.js.map