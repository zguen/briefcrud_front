import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../models/produit';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CreerProduit } from '../models/creer-produit';

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  
  constructor(private http: HttpClient) {}

  setHeaders() {
    const jwtToken = sessionStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${jwtToken}`,
    });
    return headers;
  }

  getproduits(): Observable<Produit[]> {
    return this.http.get<Produit[]>('http://localhost:3000/api/produits');
  }

  createproduit(produit: CreerProduit): Observable<Produit> {
    const headers = this.setHeaders();
    return this.http.post<Produit>(
      `http://localhost:3000/api/produits`,
      produit,
      { headers }
    );
  }

  getproduitById(produitId: number): Observable<Produit> {
    // const headers = this.setHeaders();
    return this.http.get<Produit>(
      `http://localhost:3000/api/produits/${produitId}`
    );
  }

  updateproduit(
    produitID: number,
    produit: CreerProduit
  ): Observable<Produit> {
    const headers = this.setHeaders();
    return this.http.patch<Produit>(
      `http://localhost:3000/api/produits/${produitID}`,
      produit,
      {
        headers,
      }
    );
  }

  deleteproduit(productId: number): Observable<Produit> {
    // recup le token dans le sessionstorage
    const headers = this.setHeaders();
    return this.http.delete<Produit>(
      `http://localhost:3000/api/produits/${productId}`,
      { headers }
    );
  }
}
