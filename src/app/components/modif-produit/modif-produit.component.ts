import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/models/categorie';
import { Produit } from 'src/app/models/produit';
import { CategorieService } from 'src/app/services/categorie.service';
import { ProduitService } from 'src/app/services/produit.service';

@Component({
  selector: 'app-modif-produit',
  templateUrl: './modif-produit.component.html',
  styleUrls: ['./modif-produit.component.css'],
})
export class ModifProduitComponent {
  categorie!: Categorie[];
  produit: Produit = {
    nom: '',
    id_categorie: 0,
    category: {
      id: 0,
      nom: '',
    },
    prix: 0,
    quantite: 0,
  };

  modifForm!: FormGroup;

  constructor(
    private categorieService: CategorieService,
    private produitService: ProduitService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.modifForm = this.formBuilder.group({
     nom: [this.produit.nom, Validators.required],
      id_categorie: [this.produit.id_categorie, Validators.required],
      prix: [
        this.produit.prix,
        [Validators.required],
      ],
      quantite: [
        this.produit.quantite,
        [Validators.required],
      ],
    });
  }

  ngOnInit() {
    if (!sessionStorage.getItem('token')) {
      this.router.navigate(['/']);
      console.log(sessionStorage)
    }

    const produitIdFromRoute = Number(this.route.snapshot.paramMap.get('id'));

    this.categorieService.getCategories().subscribe((categorie) => {
      this.categorie = categorie;
    });

    this.produitService
      .getproduitById(produitIdFromRoute)
      .subscribe((produit) => {
        this.produit = produit;
        // console.log(this.produit);
        this.modifForm.patchValue({
          produit_name: this.produit.nom,
          category_id: this.produit.id_categorie,
          prix: this.produit.prix,
          quantite: this.produit.quantite,
        });
      });
  }

  submit() {
    console.log(this.modifForm.value);

    if (this.modifForm.valid) {
      this.modifForm.value.prix = this.modifForm.value.prix.toString();
      this.produitService
        .updateproduit(this.produit.id!, this.modifForm.value)
        .subscribe({
          next: (response) => {
            this.router.navigate(['home']);
          },
          error: (error) => {
            console.log(error);
          },
        });
    }
  }
}
