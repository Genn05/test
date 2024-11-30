import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'GEN';
  menuItems = [
    { name: 'Profile', path: '/profile' },
    { name: 'Payment', path: '/payment' },
    { name: 'Products', path: '/product' },
    { name: 'Signup', path: '/signup' },
    { name: 'panier', path: '/panier' },
    { name: 'Login', path: '/login' },
  ];

  share() {
    if (navigator.share) {
      navigator
        .share({
          title: 'Check out GEN',
          text: 'Discover this amazing app!',
          url: window.location.href,
        })
        .then(() => console.log('Share successful!'))
        .catch((error) => console.error('Error sharing:', error));
    } else {
      alert('Sharing is not supported in this browser.');
      const url = encodeURIComponent(window.location.href);
      const text = encodeURIComponent('Check out this amazing app!');
      const twitterUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
      window.open(twitterUrl, '_blank');
    }
  }
}
