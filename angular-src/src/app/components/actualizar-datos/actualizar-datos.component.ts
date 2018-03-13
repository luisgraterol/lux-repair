import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

// Http Requests
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-actualizar-datos',
  templateUrl: './actualizar-datos.component.html',
  styleUrls: ['./actualizar-datos.component.css']
})
export class ActualizarDatosComponent implements OnInit {

  nombre: string;
  seg_nombre: string;
  apellido: string;
  cedula: string;
  username: string;
  email: string;
  password: string;
  rol: string;

  constructor(
    private http: Http,
    private authService: AuthService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { 
    
  }

  ngOnInit() {
  }
  actualizarDatos() {
    let data = {
      id: JSON.parse(localStorage.getItem('user')).id,
      nombre: this.nombre,
      seg_nombre: this.seg_nombre,
      apellido: this.apellido,
      cedula: this.cedula,
      username: this.username,
      email: this.email,
      password: this.password
      
    };

    console.log('Datos: ', data);

    // Settear los encabezados para la petición al API
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    // Hacer la petición, se retorna una promesa
    this.http.post('http://localhost:3000/users/datos-clientes', data, { headers })
      .map(res => res.json())
      .subscribe(response => {
        if (response.success) {
          this.flashMessage.show(response.msg, { cssClass: 'custom-success', timeout: 3000 });
          this.router.navigate(['/profile']);
        } else {
          this.flashMessage.show(response.msg, { cssClass: 'custom-danger', timeout: 3000 });
          this.router.navigate(['/actualizar-datos']);
        }
    });
  }
    
  }



