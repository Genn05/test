import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user = {
    name: 'adem',
    email: 'adem.adem@gmail.com',
    address: '16 Rue italie, tunisie',
    phone: '+2169985435999',
    profilePicture: '',
  };

  getUserInfo() {
    return this.user;
  }
}
