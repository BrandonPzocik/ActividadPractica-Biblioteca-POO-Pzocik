import { Material } from "../models/Material";
export interface IUsuario {
  id: number;
  nombre: string;
  Prestar(material: Material): void;
}
