import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

// Http Requests
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-form-empleado',
  templateUrl: './form-empleado.component.html',
  styleUrls: ['./form-empleado.component.css']
})
export class FormEmpleadoComponent implements OnInit {

  sexo: string;
  fechaNacimiento: string;
  nombre: string;
  seg_nombre: string;
  apellido: string;
  cedula: string;
  username: string;
  email: string;
  password: string;

  constructor(
    private http: Http,
    private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() { }

  agregarDatos() {

    // Validacion de las Casillas
    if (this.sexo == undefined || this.fechaNacimiento == undefined) {
      this.flashMessage.show('Por favor llene todas las casillas.', { cssClass: 'custom-danger', timeout: 5000 });
      return false;
    }

    // Validar de la Fecha de Nacimiento
    if (new Date(this.fechaNacimiento) > new Date()) {
      this.flashMessage.show('La fecha ingresada es invalida.', { cssClass: 'custom-danger', timeout: 5000 });
      return false;
    }

    let data = {
      id: JSON.parse(localStorage.getItem('user')).id,
      sexo: this.sexo,
      fechaNacimiento: this.fechaNacimiento,

    };

    console.log('Datos: ', data);

    // Settear los encabezados para la petición al API
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    // Hacer la petición, se retorna una promesa
    this.http.post('http://localhost:3000/users/datos-empleado', data, { headers })
      .map(res => res.json())
      .subscribe(response => {
        if (response.success) {
          this.flashMessage.show(response.msg, { cssClass: 'custom-success', timeout: 3000 });
          this.router.navigate(['/profile']);
        } else {
          this.flashMessage.show(response.msg, { cssClass: 'custom-danger', timeout: 3000 });
          this.router.navigate(['/form-empleado']);
        }
    });
  }
}
