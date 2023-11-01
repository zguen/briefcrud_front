import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitComponent } from './pages/produit/produit.component';
import { AjoutProduitComponent } from './components/ajout-produit/ajout-produit.component';
import { ModifProduitComponent } from './components/modif-produit/modif-produit.component';
import { ConnexionComponent } from './components/connexion/connexion.component';

const routes: Routes = [
  { path: '', component: ConnexionComponent },
  { path: 'produit', component: ProduitComponent },
  { path: 'produit/ajouter', component: AjoutProduitComponent },
  { path: 'produit/modifier/:id', component: ModifProduitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
