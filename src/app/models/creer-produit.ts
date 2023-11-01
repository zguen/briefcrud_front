import { Categorie } from "./categorie";

export interface CreerProduit {
    id?: number;
    nom: string;
    prix: number;
    quantite: number;
    id_categorie: number;
}
