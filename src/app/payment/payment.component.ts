import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-payment',
  standalone: true,  // Indiquer que c'est un composant standalone
  imports: [FormsModule, MatCardModule, MatFormFieldModule], // Déclarer les imports ici
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  totalAmount: number = 0; // Montant total de la commande
  paymentDetails = {
    cardNumber: '',
    cardHolder: '',
    expirationDate: '',
    cvv: ''
  };

  constructor() {
    // Exemple de calcul du montant total de la commande
    this.totalAmount = 100; // Remplacez cela par la logique de calcul du total
  }

  // Fonction pour traiter le paiement (à intégrer avec une API de paiement)
  processPayment(): void {
    // Implémentation de la logique de traitement du paiement
    if (this.validatePaymentDetails()) {
      alert('Le paiement a été effectué avec succès !');
    } else {
      alert('Les informations de paiement sont incorrectes.');
    }
  }

  // Validation des détails de paiement
  validatePaymentDetails(): boolean {
    // Vous pouvez ajouter des validations réelles ici (par exemple, vérifier la carte de crédit)
    return this.paymentDetails.cardNumber.length === 16;
  }
}
