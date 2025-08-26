import { Material } from "./Material";
export class Revista extends Material {
  edicion: number;

  constructor(
    id: number,
    autor: string,
    titulo: string,
    disponible: boolean,
    edicion: number
  ) {
    super(id, autor, titulo, disponible);
    this.edicion = edicion;
  }

  mostrarInfo(): string {
    return `Título: ${this.titulo}, Autor: ${this.autor}, Disponible: ${this.disponible}, Edición: ${this.edicion}`;
  }
}
