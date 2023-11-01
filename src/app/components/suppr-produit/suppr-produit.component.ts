import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from 'src/app/models/produit';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-suppr-produit',
  templateUrl: './suppr-produit.component.html',
  styleUrls: ['./suppr-produit.component.css'],
})
export class SupprProduitComponent {
  produit!: Produit

  constructor(
    private produitService: ProduitService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    
   if (!sessionStorage.getItem('token')) {
     this.router.navigate(['/']);
     console.log(sessionStorage);
   }

    const routeParam = this.route.snapshot.paramMap;
    const produitIdFromRoute = Number(routeParam.get('id'));

    this.produitService
      .getproduitById(produitIdFromRoute)
      .subscribe((produit) => {
        // ma requête http pour la récupe de l'ID
        this.produit = produit;
        // initialisation de la propriété de plant comme étant les données qu'on récupère de la BDD.
      });
  }

  deleteproduit(produit: Produit) {
    this.produitService.deleteproduit(produit).subscribe({
      next: (response) => {
        this.router.navigate([`/produit`]);
      },
      error: (error) => {},
    });
  }
}
