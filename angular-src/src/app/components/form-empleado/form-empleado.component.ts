import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ApiService } from '../../services/api.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-empleado',
  templateUrl: './form-empleado.component.html',
  styleUrls: ['./form-empleado.component.css']
})
export class FormEmpleadoComponent implements OnInit {

  sexo: String;
  fechaNacimiento: String;

  constructor(
    private authService: AuthService,
    private apiService: ApiService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() { }

  agregarDatos() {
    this.apiService.setEmployeeData({ sexo: this.sexo, fechaNacimiento: this.fechaNacimiento }).subscribe(data => {

      console.log('Estado: ', data.success);

      // Esto aun no funciona:
      // if (data.success) {
      //   this.flashMessage.show('Usted fue registrado exitosamente.', { cssClass: 'custom-success', timeout: 3000 });
      //   this.router.navigate(['/profile']);
      // } else {
      //   this.flashMessage.show('Se produjo un error al actualizar sus datos.', { cssClass: 'custom-danger', timeout: 3000 });
      //   this.router.navigate(['/form-empleado']);
      // }
    });
  }
}
