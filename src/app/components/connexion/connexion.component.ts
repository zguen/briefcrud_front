import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUtilisateur } from 'src/app/models/login-utilisateur';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css'],
})
export class ConnexionComponent {
  utilisateur: LoginUtilisateur = {
    email: '',
    mot_de_passe: '',
  };

  isFormValidate = false;
  connexionKO = false;

  constructor(
    private utilisateurService: UtilisateurService,
    private router: Router
  ) {}

  connecter(connexionForm: NgForm) {
    this.isFormValidate = true;

    if (connexionForm.valid) {
      this.utilisateurService.connexionUtilisateur(this.utilisateur).subscribe({
        next: (response) => {
          sessionStorage.setItem('token', response.accessToken);
          this.router.navigate(['/produit']);
        },
        error: (error) => {
          this.connexionKO = true;
        },
      });
    }
  }
}
