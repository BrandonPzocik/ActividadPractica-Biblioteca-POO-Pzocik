import { IBibliotecaItem } from "../interfaces/IBibliotecaItem.js";

export abstract class Material implements IBibliotecaItem {
  readonly id: number;
  titulo: string;
  autor: string;

  protected disponible: boolean;
  constructor(id: number, titulo: string, autor: string, disponible: boolean) {
    this.id = id;
    this.titulo = titulo;
    this.autor = autor;
    this.disponible = disponible;
  }

  abstract mostrarInfo(): string;

  get Disponibilidad(): boolean {
    return this.disponible;
  }

  set Disponibilidad(valor: boolean) {
    this.disponible = valor;
  }
}
