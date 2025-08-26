// Crear una clase Usuario que:
// ● Implemente IUsuario.
// ● Tenga una lista privada de materiales prestados.
// ● Permita prestar materiales (solo si están disponibles).
// ● Use un campo ultimaPrestacion! con non-null assertion.
// ● Tenga un método mostrarPrestados() que liste los materiales.
// ● Tenga un método mostrarUltimaPrestacion().

import { Material } from "./Material";
import { IUsuario } from "../interfaces/IUsuario";
export class Usuario implements IUsuario {
  id: number;
  nombre: string;
  private listaPrestamos: Material[] = [];
  private ultimaPrestacion!: Material;

  constructor(id: number, nombre: string) {
    this.id = id;
    this.nombre = nombre;
    this.listaPrestamos = [];
  }

  Prestar(material: Material): void {
    if (material.Disponibilidad) {
      this.listaPrestamos.push(material);
      material.Disponibilidad = false;
      this.ultimaPrestacion = material;
      console.log(`Material ${material.titulo} prestado por ${this.nombre}`);
    } else {
      console.log(
        `Material ${material.titulo} no está disponible para préstamo`
      );
    }
  }

  mostrarPrestados(): Material[] {
    if (this.listaPrestamos.length === 0) {
      console.log(`No hay materiales prestados por ${this.nombre}`);
    }
    return this.listaPrestamos;
  }

  mostrarUltimaPrestacion(): void {
    if (!this.ultimaPrestacion) {
      console.log(`${this.nombre} aún no ha prestado materiales.`);
      return;
    }
    console.log(`Última prestación: ${this.ultimaPrestacion.mostrarInfo()}`);
  }
}
