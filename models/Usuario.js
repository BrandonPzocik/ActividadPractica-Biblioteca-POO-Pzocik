"use strict";
// Crear una clase Usuario que:
// ● Implemente IUsuario.
// ● Tenga una lista privada de materiales prestados.
// ● Permita prestar materiales (solo si están disponibles).
// ● Use un campo ultimaPrestacion! con non-null assertion.
// ● Tenga un método mostrarPrestados() que liste los materiales.
// ● Tenga un método mostrarUltimaPrestacion().
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
var Usuario = /** @class */ (function () {
    function Usuario(id, nombre) {
        this.listaPrestamos = [];
        this.id = id;
        this.nombre = nombre;
        this.listaPrestamos = [];
    }
    Usuario.prototype.Prestar = function (material) {
        if (material.Disponibilidad) {
            this.listaPrestamos.push(material);
            material.Disponibilidad = false;
            this.ultimaPrestacion = material;
            console.log("Material ".concat(material.titulo, " prestado por ").concat(this.nombre));
        }
        else {
            console.log("Material ".concat(material.titulo, " no est\u00E1 disponible para pr\u00E9stamo"));
        }
    };
    Usuario.prototype.mostrarPrestados = function () {
        if (this.listaPrestamos.length === 0) {
            console.log("No hay materiales prestados por ".concat(this.nombre));
        }
        return this.listaPrestamos;
    };
    Usuario.prototype.mostrarUltimaPrestacion = function () {
        if (!this.ultimaPrestacion) {
            console.log("".concat(this.nombre, " a\u00FAn no ha prestado materiales."));
            return;
        }
        console.log("\u00DAltima prestaci\u00F3n: ".concat(this.ultimaPrestacion.mostrarInfo()));
    };
    return Usuario;
}());
exports.Usuario = Usuario;
