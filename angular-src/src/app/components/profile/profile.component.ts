import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

// HTTP Requests
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: object;
  rol: string;
  sexo: string;
  fechaNacimiento: string;

  constructor(
    private http: Http,
    private router: Router,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {

    let headers = new Headers();

    // Fetches the token of the currently logged in user from localStorage
    headers.append('Authorization', localStorage.getItem('id_token'));
    headers.append('Content-Type', 'application/json');

    this.http.get('http://localhost:3000/users/profile', { headers: headers })
      .map(res => res.json())
      .subscribe(profile => {
        this.user = profile.user;

        // Guarda el rol con la primera letra en Uppercase
        this.rol = profile.user.rol.charAt(0).toUpperCase() + profile.user.rol.slice(1);

        if (this.rol != 'Cliente' && profile.user.sexo != undefined && profile.user.fechaNacimiento != undefined) {

          // Corrige error en el formato de la fecha
          let fecha = profile.user.fechaNacimiento;
          let day = Number(fecha.slice(8, 10)) + 1;
          let dayString = day.toString();

          if (day < 10) {
            dayString = '0' + day;
          }

          // Guarda la fecha formateada
          this.fechaNacimiento = this.datePipe.transform(fecha.slice(0, 8) + dayString + fecha.slice(10));

          this.sexo = profile.user.sexo;
        }

        console.log(this.user);
      }, err => {
        console.log('Error while getting the profile in ProfileComponent: ', err);
        return false;
      });
  }

  completoFormulario() {
    return this.fechaNacimiento && this.sexo;
  }
}
