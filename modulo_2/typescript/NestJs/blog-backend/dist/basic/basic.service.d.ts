export declare class BasicService {
    myFisrtGet(): object;
    mySecondGet(): object;
    functionWithParameter(parameter: string): object;
    functionWithPost(parameter: object): object;
    updateWithPut(parameter: string, Body: object): object;
    updateWithPatch(parameter: string, Body: object): object;
    delete(parameter: string): object;
    licencia(body: any): object;
    areaTriangulo(parameter: any): object;
    calcularMayor(parameter: any): object;
    calcularPromedio(nota1: number, nota2: number, nota3: number): object;
    verificarCredito(edad: number, ingreso: number, historialCrediticio: string): object;
}
