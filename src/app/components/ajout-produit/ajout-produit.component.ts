import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/models/categorie';
import { Produit } from 'src/app/models/produit';
import { CategorieService } from 'src/app/services/categorie.service';
import { ProduitService } from 'src/app/services/produit.service';
import { Modal } from 'bootstrap';

@Component({
  selector: 'app-ajout-produit',
  templateUrl: './ajout-produit.component.html',
  styleUrls: ['./ajout-produit.component.css'],
})
export class AjoutProduitComponent {
  categorie: Categorie[] = [];
  createProduit!: FormGroup;

  constructor(
    private categorieService: CategorieService,
    private produitService: ProduitService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.createProduit = this.formBuilder.group({
      nom: ['', Validators.required],
      id_categorie: ['', Validators.required],
      prix: ['', [Validators.required]],
      quantite: ['', [Validators.required]],
    });
  }

  redirectToProduct() {
    this.router.navigate(['/admin']); // Assurez-vous que la route est correcte.
  }

  ngOnInit(): void {
    if (!sessionStorage.getItem('token')) {
      this.router.navigate(['/']);
      console.log(sessionStorage);
    }
    this.categorieService.getCategories().subscribe((categories) => {
      this.categorie = categories;
    });
  }

  submit() {
    // Envoi du formulaire de création
    const nouveauProduit: Produit = this.createProduit.value; // On récupère les données du formulaire
    nouveauProduit.id_categorie = Number(nouveauProduit.id_categorie); // On convertit l'id de la catégorie en nombre
    console.log(nouveauProduit);

    this.produitService.createproduit(nouveauProduit).subscribe(() => {
      console.log('mise à jour effectuée');
      this.createProduit.reset(); // Reset le formulaire si nécessaire

      // Fermer la modale manuellement
      const createModalElement = document.getElementById('createModal') as HTMLElement;
      const createModal = new Modal(createModalElement);
      createModal.hide(); // Utilisez hide() pour fermer la modale
    });
  }    
  
  }
