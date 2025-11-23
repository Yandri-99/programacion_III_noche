import { BasicService } from './basic.service';
export declare class BasicController {
    private readonly basicService;
    constructor(basicService: BasicService);
    myFisrtGet(): object;
    mySecondGet(): object;
    requestWithParameter(myParameter: string): object;
    promedio(nota1: number, nota2: number, nota3: number): object;
    create(bodyData: object): object;
    update(id: string, updateBody: object): object;
    updatePatch(id: string, updateBody: object): object;
    delete(id: string): object;
    licencia(bodyData: Object): object;
    areaTriangulo(bodyData: Object): object;
    calcularMayor(bodyData: Object): object;
    verificarCredito(bodyData: {
        edad: number;
        ingreso: number;
        historialCrediticio: string;
    }): object;
}
