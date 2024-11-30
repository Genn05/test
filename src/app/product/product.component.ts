import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { Router, RouterLink } from '@angular/router';
import { PanierService } from '../panier.service';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ MatCardModule,  
    MatGridListModule,CommonModule ,RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  
  products = [
    {
      name: 'Produit 1',
      category: 'Barca',
      description: '1st kit 2025',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTDHWRlk9MQmbqJjgAV5OfBcJKdr-CEZ2c6xZ318BeLHy-wD9qzMu9AuK2zRU9fgN4iIk&usqp=CAU',
    },
    {
      name: 'Produit 2',
      category: 'Barca',
      description: '2nd kit 2025',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHzq98ELhaDoQJ-rmX8N023o9lbpY_id7bOC6IyHJqwZDvL7xyZL34-rUveQgY5KwXD3E&usqp=CAU',
    },
    {
      name: 'Produit 3',
      category: 'Barca',
      description: '3rd kit 2025',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFZgMI8jMqBNbzGNITG_RbH_uIYiHBlxBnkQ&s',
    },




    {
      name: 'Produit 1',
      category: 'Barca',
      description: '1st kit 2024/2023',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuJQ1LBBXubOXcmFMMwc1J5riqFowh-Eze7PXcG0b8qjWBb-Lfq45qq7oeZo-7ZJAxjWc&usqp=CAU',
    },
    {
      name: 'Produit 2',
      category: 'Barca',
      description: '2nd kit 2024/2023',
      imageUrl: 'https://thefootballheritage.com/wp-content/uploads/2023/10/0df42207.jpg',
    },

    {
      name: 'Produit 3',
      category: 'Barca',
      description: '3rd kit 2024/2023',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFcfWbtFR74Y1Wzjy3mqCGSS8LH1zU6Pes9knZ_9ndoO_YqeAZ08Vqff-hd502Gkg5Nl4&usqp=CAU',
    },




    
    {
      name: 'Produit 1',
      category: 'Barca',
      description: '1st kit 2023/2022',
      imageUrl: 'https://down-co.img.susercontent.com/file/50033dbea9bafc985855d5c013177193',
    },
    {
      name: 'Produit 2',
      category: 'Barca',
      description: '2nd kit 2023/2022',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjxpj4wcEiPIRaNsjaokS1-BJyDLEst8WQo2wCukdtwae14i6LKm8hC4RVxvFJ4rSgsqI&usqp=CAU',
    },
    {
      name: 'Produit 3',
      category: 'Barca',
      description: '3rd kit 2023/2022',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5rmfvSL4eMB71J6nhrbH4cds1-CJX9VzLsmvQY-x9BsTh4PEUtvd5oUqvw2pr2MNPO68&usqp=CAU',
    },




    {
      name: 'Produit 1',
      category: 'Barca',
      description: '1st kit 2022/21',
      imageUrl: 'https://thenewkits.com/wp-content/uploads/2021/06/a243a961.jpg',
    },
    {
      name: 'Produit 2',
      category: 'Barca',
      description: '2nd kit 2022/21',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Hg5HXDvt3m-uTjxIs51Vy1XrrZAs9xNKvnz9RUJM_KCILc7rzbO03X4SL_i27kryViU&usqp=CAU',
    },
    {
      name: 'Produit 3',
      category: 'Barca',
      description: '3rd kit 2022',
      imageUrl: 'https://thenewkits.com/wp-content/uploads/2021/09/5680ab99.jpg.webp',
    },

    
    {
      name: 'Produit 1',
      category: 'Barca',
      description: '1st kit 2024',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTDHWRlk9MQmbqJjgAV5OfBcJKdr-CEZ2c6xZ318BeLHy-wD9qzMu9AuK2zRU9fgN4iIk&usqp=CAU',
    },
    {
      name: 'Produit 2',
      category: 'Barca',
      description: '2nd kit 2024',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHzq98ELhaDoQJ-rmX8N023o9lbpY_id7bOC6IyHJqwZDvL7xyZL34-rUveQgY5KwXD3E&usqp=CAU',
    },
    {
      name: 'Produit 3',
      category: 'Barca',
      description: '3rd kit 2024',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFZgMI8jMqBNbzGNITG_RbH_uIYiHBlxBnkQ&s',
    },
  ];
  constructor(private panierService: PanierService) {}

  // Méthode pour ajouter un produit au panier
  ajouterAuPanier(produit: any): void {
    this.panierService.ajouterAuPanier(produit); // Utilisation du service panier pour ajouter le produit
  }
}
