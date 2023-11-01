import { Component, Input } from '@angular/core';
import { Produit } from 'src/app/models/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
})
export class ListeComponent {
  @Input() produits!: Produit[];
  @Input() connecte!: boolean;
  @Input() produit!: Produit;

  constructor (private produitService: ProduitService) {}

  onSubmit() {
    this.produitService
      .deleteproduit(this.produit.id!)
      .subscribe((response) => {
        console.log(response);
        location.reload();
      });
  }
}
