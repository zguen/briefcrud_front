import { Categorie } from './categorie';

export interface Produit {
  id?: number;
  nom: string;
  prix: number;
  quantite: number;
  id_categorie: number;
  category: Categorie;
}
