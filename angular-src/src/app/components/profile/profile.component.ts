import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

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
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => 
    {
      this.user = profile.user;
      // this.rol = profile.user.rol;
      this.rol = profile.user.rol.charAt(0).toUpperCase() + profile.user.rol.slice(1);
      this.fechaNacimiento = profile.user.fechaNacimiento;
      this.sexo = profile.user.sexo;
      console.log(this.user);
    }, err => {
      console.log('Error while getting the profile in ProfileComponent: ',err);
      return false;
    });
  }

  completoFormulario() {
    return this.fechaNacimiento && this.sexo;
  }

  formatearFecha() {
    let date = new Date(this.fechaNacimiento);
    let day = date.getDay();
    let month = date.getMonth();
    let year = date.getFullYear();
    let strMonth = '';

    switch (month) {
      case 0:
        strMonth = 'enero'
        break;
      case 1:
        strMonth = 'febrero'
        break;
      case 2:
        strMonth = 'marzo'
        break;
      case 3:
        strMonth = 'abril'
        break;
      case 4:
        strMonth = 'mayo'
        break;
      case 5:
        strMonth = 'junio'
        break;
      case 6:
        strMonth = 'julio'
        break;
      case 7:
        strMonth = 'agosto'
        break;
      case 8:
        strMonth = 'septiembre'
        break;
      case 9:
        strMonth = 'octubre'
        break;
      case 10:
        strMonth = 'noviembre'
        break;
      case 11:
        strMonth = 'diciembre'
        break;
    
      default:
        strMonth = month.toString();
        break;
    }

    return `${day} ${strMonth} ${year}`;
  }
}
