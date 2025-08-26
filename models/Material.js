"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Material = void 0;
var Material = /** @class */ (function () {
    function Material(id, titulo, autor, disponible) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.disponible = disponible;
    }
    Object.defineProperty(Material.prototype, "Disponibilidad", {
        get: function () {
            return this.disponible;
        },
        set: function (valor) {
            this.disponible = valor;
        },
        enumerable: false,
        configurable: true
    });
    return Material;
}());
exports.Material = Material;
