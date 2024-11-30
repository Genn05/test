// src/app/panier.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PanierService {
  private panier: any[] = [];

  // Ajouter un produit au panier
  ajouterAuPanier(produit: any): void {
    this.panier.push(produit);
  }

  // Obtenir les produits du panier
  obtenirPanier(): any[] {
    return this.panier;
  }

  // Supprimer un produit du panier
  supprimerProduit(produit: any): void {
    const index = this.panier.indexOf(produit);
    if (index > -1) {
      this.panier.splice(index, 1);
    }
  }
}
