import  {Module} from '@nestjs/common';
import  {MongooseModule} from '@nestjs/mongoose';
import {CursosService} from './curso.service';
import {CursosController} from './curso.controller';
import {Curso,CursoSchema} from './schemas/curso.schema';
import {Contenido, ContenidoSchema} from './schemas/contenido.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            {name: Curso.name, schema: CursoSchema},
            {name: Contenido.name, schema: ContenidoSchema}
        ]),
    ],
    controllers: [CursosController],
    providers: [CursosService],
})
export class CursosModule {}