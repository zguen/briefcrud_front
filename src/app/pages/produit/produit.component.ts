import { Component } from '@angular/core';
import { Produit } from 'src/app/models/produit';
import { Utilisateur } from 'src/app/models/utilisateur';
import { ProduitService } from 'src/app/services/produit.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent {

  produitsAffichage: Produit[] = [];
  connecte: boolean = false 

  constructor(private produitService: ProduitService, private utilisateurService: UtilisateurService) {}

  ngOnInit() {
    this.utilisateurService.getConnected().subscribe((utilisateur: Utilisateur) => {
      // Vérifiez si utilisateur est connecté
      this.connecte = true;
    });

    this.produitService.getproduits().subscribe((produits) => {
      this.produitsAffichage = produits
        console.log(this.produitsAffichage);
    })
  }
}
