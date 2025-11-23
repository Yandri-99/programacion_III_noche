class Libro{
    public titulo: string;
    private autor: string;
    protected cota: string = '122232222'
    constructor(titulo:string, autor:string){
        this.titulo = titulo;
        this.autor = autor;
    }
    getAutor(): string{
        return this.autor;
    }
    setAutor(autor: string): void{
        this.autor = autor;
    }
    getCota(): string{
        return this.cota;
    }
}
const LibroHistoriaQuito = new Libro(
        'Historia de Quito', 'Pedro Perez');
console.log('Titulo', LibroHistoriaQuito.titulo)
console.log('Autor', LibroHistoriaQuito.getAutor());
console.log('Cota', LibroHistoriaQuito.getCota());
LibroHistoriaQuito.setAutor('Yandri');
console.log('Autor', LibroHistoriaQuito.getAutor());
