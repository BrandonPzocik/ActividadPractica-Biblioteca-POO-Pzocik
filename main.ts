import { Material } from "./models/Material";
import { Libro } from "./models/Libro";
import { Revista } from "./models/Revista";
import { Usuario } from "./models/Usuario";
import { IUsuario } from "./interfaces/IUsuario";
import { IBibliotecaItem } from "./interfaces/IBibliotecaItem";

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

// 4️⃣ Prestar materiales
usuario1.Prestar(libro1); // ✅ préstamo exitoso
usuario1.Prestar(revista1); // ✅ préstamo exitoso
usuario1.Prestar(libro2); // ✅ préstamo exitoso
usuario1.Prestar(libro1); // ❌ ya no está disponible

// 5️⃣ Mostrar materiales prestados
usuario1.mostrarPrestados();

// 6️⃣ Mostrar última prestación
usuario1.mostrarUltimaPrestacion();

// 7️⃣ Demostrar polimorfismo
const materiales: Material[] = [libro1, libro2, revista1];

console.log("\n📌 Demostración de polimorfismo:");
materiales.forEach((m) => {
  console.log(m.mostrarInfo());
});
