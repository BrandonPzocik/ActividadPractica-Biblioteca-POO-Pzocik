import { Material } from "./Material";
export class Libro extends Material {
  paginas: number;
  genero?: string;

  constructor(
    id: number,
    titulo: string,
    autor: string,
    disponible: boolean,
    paginas: number,
    genero: string
  ) {
    super(id, titulo, autor, disponible);
    this.paginas = paginas;
    this.genero = genero;
  }

  mostrarInfo(): string {
    return `Título: ${this.titulo}, Autor: ${this.autor}, Disponible: ${this.disponible}, Páginas: ${this.paginas}, Género: ${this.genero}`;
  }
}
