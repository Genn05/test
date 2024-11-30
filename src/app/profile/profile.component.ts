import { CommonModule } from '@angular/common';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
@Component({
  selector: 'app-profile',
  standalone:true,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  imports:[ MatCardModule,  
    MatGridListModule,CommonModule ]
})
export class ProfileComponent implements OnInit {
  user: any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.user = this.userService.getUserInfo(); 
  }
}
