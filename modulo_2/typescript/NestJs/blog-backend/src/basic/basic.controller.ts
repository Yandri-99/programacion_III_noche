import { Controller, Get, Post, Body, Put, Patch, Delete, Param, Query } from '@nestjs/common';
import { BasicService} from './basic.service';
@Controller('basics')
export class BasicController {
    constructor(
        private readonly basicService: BasicService) {}
    @Get()
    myFisrtGet(): object {
      return this.basicService.myFisrtGet();
    }
    @Get('my-second-get')
    mySecondGet(): object {
        return this.basicService.mySecondGet();
    }
    @Get('myParameter')
    requestWithParameter(myParameter: string): object {
        return this.basicService
        .functionWithParameter(myParameter);
    }
    @Get('calcular-promedio/:nota1/:nota2/:nota3')
    promedio(
        @Param('nota1') nota1: number,
        @Param('nota2') nota2: number,
        @Param('nota3') nota3: number,
    ){
        return this.basicService
        .calcularPromedio(nota1, nota2, nota3);
    }
    @Post()
    create(@Body() bodyData: object) {
        return this.basicService
            .functionWithPost(bodyData);
    }
    @Put(':id')
    update(
       @Param('id') id: string,
       @Body() updateBody: object) {
       return this.basicService
          .updateWithPut(id,updateBody);
    }
    @Patch(':id')
    updatePatch(
       @Param('id') id: string,
       @Body() updateBody: object) {
       return this.basicService
          .updateWithPatch(id,updateBody);
    }
    @Delete(':id')
    delete(
       @Param('id') id: string) {
       return this.basicService
          .delete(id);
    }
    @Post('licencia-conducir')
    licencia(@Body() bodyData: Object) {
        return this.basicService
            .licencia(bodyData);
    }
    @Post('area-triangulo')
    areaTriangulo(@Body() bodyData: Object) {
        return this.basicService
            .areaTriangulo(bodyData);
    }
    @Post('calcular-mayor')
    calcularMayor(@Body() bodyData: Object) {
        return this.basicService
            .calcularMayor(bodyData);
    }  
    @Post('verificar-credito')
    verificarCredito(@Body() bodyData: { edad: number, ingreso: number, historialCrediticio: string }) {
        const { edad, ingreso, historialCrediticio } = bodyData;
        return this.basicService.verificarCredito(edad, ingreso, historialCrediticio);
    }
}











