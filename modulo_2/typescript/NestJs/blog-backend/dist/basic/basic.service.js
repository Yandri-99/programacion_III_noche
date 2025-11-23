"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasicService = void 0;
const common_1 = require("@nestjs/common");
let BasicService = class BasicService {
    myFisrtGet() {
        return {
            service: 'Blog Backend Api',
            version: 'basics get',
            message: 'My new Get',
        };
    }
    mySecondGet() {
        return {
            service: 'Blog Backend Api',
            version: 'basics get',
            message: 'My new Get',
        };
    }
    functionWithParameter(parameter) {
        return {
            service: 'Blog Backend Api',
            version: 'basics get',
            message: 'My new Get',
            parameter: parameter
        };
    }
    functionWithPost(parameter) {
        return {
            service: 'Blog Backend Api',
            version: 'basics get',
            message: 'My new Get',
            bodyData: parameter
        };
    }
    updateWithPut(parameter, Body) {
        return {
            service: 'Blog Backend Api',
            version: 'basics get',
            message: 'My new Get',
            parameter: parameter,
            body: Body
        };
    }
    updateWithPatch(parameter, Body) {
        return {
            service: 'Blog Backend Api',
            version: 'basics get',
            message: 'My new Get',
            parameter: parameter,
            body: Body
        };
    }
    delete(parameter) {
        return {
            service: 'Blog Backend Api',
            version: 'basics get',
            message: 'My new Get',
            parameter: parameter,
        };
    }
    licencia(body) {
        let respuesta;
        if (body.edad > 17 && body.licencia) {
            respuesta = 'Puede Conducir';
        }
        else if (body.edad > 17) {
            respuesta = 'Debe Sacar licencia';
        }
        else {
            respuesta = 'Es menor de edad';
        }
        return {
            service: 'Blog Backend Api',
            version: 'basics get',
            message: 'My new Get',
            parameter: body,
            bodyData: respuesta
        };
    }
    areaTriangulo(parameter) {
        const area = (parameter.base * parameter.altura) / 2;
        return {
            service: 'Blog Backend Api',
            function: 'basics peticion post',
            message: 'funcion con parametro',
            parameter: parameter,
            area: area,
        };
    }
    calcularMayor(parameter) {
        let mayor;
        if (parameter.a > parameter.b) {
            mayor = parameter.a;
        }
        else {
            mayor = parameter.b;
        }
        return {
            service: 'Blog Backend Api',
            function: 'basics peticion post',
            message: 'funcion con parametro',
            parameter: parameter,
            mayor: mayor,
        };
    }
    calcularPromedio(nota1, nota2, nota3) {
        const promedio = (nota1 + nota2 + nota3) / 3;
        return {
            service: 'Blog Backend Api',
            function: 'basics peticion post',
            message: 'Funcion con parametros',
            nota1: nota1,
            nota2: nota2,
            nota3: nota3,
            promedio: promedio,
        };
    }
    verificarCredito(edad, ingreso, historialCrediticio) {
        let aprobarCredito = "No";
        if (edad > 20 && ingreso >= 2000 && historialCrediticio === "bueno") {
            aprobarCredito = "Si";
        }
        return {
            service: "Blog Backend Api",
            function: "verificarCredito",
            message: "Verificación de crédito",
            edad,
            ingreso,
            historialCrediticio,
            aprobado: aprobarCredito
        };
    }
};
exports.BasicService = BasicService;
exports.BasicService = BasicService = __decorate([
    (0, common_1.Injectable)()
], BasicService);
//# sourceMappingURL=basic.service.js.map