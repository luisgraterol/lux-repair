import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: Object;
  rol: String;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => 
    {
      this.user = profile.user;
      this.rol = profile.user.rol;
      console.log(this.user);
    }, err => {
      console.log('Error while getting the profile: ',err);
      return false;
    });
  }



}
