import { Component, OnInit } from '@angular/core';
import { PanierService } from '../panier.service'; 
import { MatCardModule } from '@angular/material/card'; 
import { MatGridListModule } from '@angular/material/grid-list'; 
import { CommonModule } from '@angular/common'; 
import { MatButtonModule } from '@angular/material/button'; 

@Component({
  selector: 'app-panier',
  standalone: true,
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],  
  imports: [ 
    CommonModule,  
    MatCardModule,  
    MatGridListModule,
    MatButtonModule  
  ]
})
export class PanierComponent implements OnInit {
  panier: any[] = []; 

  constructor(private panierService: PanierService) {}

  ngOnInit(): void {
  
    this.panier = this.panierService.obtenirPanier();
  }
  supprimerDuPanier(product: any): void {
    this.panierService.supprimerProduit(product); 
    this.panier = this.panierService.obtenirPanier(); 
  }
  
}
