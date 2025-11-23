import { Injectable } from '@nestjs/common';

@Injectable()
export class BasicService {
    myFisrtGet(): object {
        return {
            service: 'Blog Backend Api',
            version: 'basics get',
            message: 'My new Get',
        };
    }
    mySecondGet(): object {
        return {
            service: 'Blog Backend Api',
            version: 'basics get',
            message: 'My new Get',
        };
    }
    functionWithParameter(parameter: string): object {
        return {
            service: 'Blog Backend Api',
            version: 'basics get',
            message: 'My new Get',
            parameter: parameter
        };
    }
    functionWithPost(parameter: object): object {
        return {
            service: 'Blog Backend Api',
            version: 'basics get',
            message: 'My new Get',
            bodyData: parameter
        };
    }
    updateWithPut(parameter:string,
        Body:object
    ):object{
        return {
            service: 'Blog Backend Api',
            version: 'basics get',
            message: 'My new Get',
            parameter: parameter,
            body: Body
        }
    }
    updateWithPatch(parameter:string,
        Body:object
    ):object{
        return {
            service: 'Blog Backend Api',
            version: 'basics get',
            message: 'My new Get',
            parameter: parameter,
            body: Body
        }
    }
    delete(parameter:string):object{
        return {
            service: 'Blog Backend Api',
            version: 'basics get',
            message: 'My new Get',
            parameter: parameter,
        }
    }
    licencia(body: any): object {
        let respuesta: string;
        if (body.edad > 17 && body.licencia) {
            respuesta = 'Puede Conducir';
        }else if (body.edad > 17){
            respuesta = 'Debe Sacar licencia';
        }else {
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
    areaTriangulo(parameter: any): object {
        const area = (parameter.base * parameter.altura) / 2;
        return {
            service: 'Blog Backend Api',
            function: 'basics peticion post',
            message: 'funcion con parametro',
            parameter: parameter,
            area: area,
        };
    }
    calcularMayor(parameter: any): object {
        let mayor: number;
        if (parameter.a > parameter.b) {
            mayor = parameter.a;
        } else {
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
    calcularPromedio(nota1: number,
        nota2: number, nota3:number): object {
        const promedio=(nota1+nota2+nota3)/3
        return {
            service: 'Blog Backend Api',
            function: 'basics peticion post',
            message: 'Funcion con parametros',
            nota1: nota1,
            nota2: nota2,
            nota3: nota3,
            promedio: promedio,
        }
    }
    verificarCredito(
        edad: number,
        ingreso: number,
        historialCrediticio: string
    ): object {
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
}


