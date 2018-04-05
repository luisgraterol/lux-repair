import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

// HTTP Requests
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  rol: any;

  constructor(
    private http: Http,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {

    let headers = new Headers();

    // Fetches the token of the currently logged in user from localStorage
    headers.append('Authorization', localStorage.getItem('id_token'));
    headers.append('Content-Type', 'application/json');

    this.http.get('http://localhost:3000/users/profile', { headers })
      .map(res => res.json())
      .subscribe(profile => {
        this.rol = profile.user.rol;
      }, err => {
        console.log('Error while getting the profile: ', err);
        return false;
      });
  }
}
