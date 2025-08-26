import { Material } from "./models/Material";
import { Libro } from "./models/Libro";
import { Revista } from "./models/Revista";
import { Usuario } from "./models/Usuario";

const libro1 = new Libro(
  1,
  "Cien Años de Soledad",
  "Gabriel García Márquez",
  true,
  300,
  "Novela"
);
const libro2 = new Libro(
  2,
  "El Principito",
  "Antoine de Saint-Exupéry",
  true,
  150,
  "Infantil"
);
const revista1 = new Revista(5, "National Geographic", "Varios", true, 150);

const usuario1 = new Usuario(1, "María");

usuario1.Prestar(libro1);
usuario1.Prestar(revista1);
usuario1.Prestar(libro2);
usuario1.Prestar(libro1);

usuario1.mostrarPrestados();

usuario1.mostrarUltimaPrestacion();

const materiales: Material[] = [libro1, libro2, revista1];

console.log("\n Demostración de polimorfismo:");
materiales.forEach((m) => {
  console.log(m.mostrarInfo());
});
