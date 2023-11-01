import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ProduitComponent } from './pages/produit/produit.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { ListeComponent } from './components/liste/liste.component';
import { AjoutProduitComponent } from './components/ajout-produit/ajout-produit.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { ModifProduitComponent } from './components/modif-produit/modif-produit.component';
import { SupprProduitComponent } from './components/suppr-produit/suppr-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ProduitComponent,
    NavbarComponent,
    ConnexionComponent,
    ListeComponent,
    AjoutProduitComponent,
    ModifProduitComponent,
    SupprProduitComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgSelectModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
