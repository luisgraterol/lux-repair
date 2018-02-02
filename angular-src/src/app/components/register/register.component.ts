import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  nombre: String;
  seg_nombre: String;
  apellido: String;
  cedula: String;
  username: String;
  email: String;
  password: String;
  rol: String;

  constructor(
    private validateService: ValidateService, 
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {}

  onRegisterSubmit() {
    const user = {
      nombre: this.nombre,
      seg_nombre: this.seg_nombre,
      apellido: this.apellido,
      cedula: this.cedula,
      username: this.username,
      email: this.email,
      password: this.password,
      rol: this.rol
    };

    // Require all fields
    if (!this.validateService.validateRegister(user)) {
      this.flashMessage.show('Por favor llene todas las casillas.', { cssClass: 'custom-danger', timeout: 3000 });
      return false;
    }

    // Validate Email
    if (!this.validateService.validateEmail(user.email)) {
      this.flashMessage.show('Por favor ingrese una dirección de correo válida.', { cssClass: 'custom-danger', timeout: 5000 });
      return false;
    }

    // Register User
    this.authService.registerUser(user).subscribe(data => {
      if (data.success) {
        this.flashMessage.show('Usted fue registrado exitosamente.', { cssClass: 'custom-success', timeout: 3000 });
        this.router.navigate(['/login']);
      } else {
        this.flashMessage.show('Se produjo un error en su registro.', { cssClass: 'custom-danger', timeout: 3000 });
        this.router.navigate(['/register']);
      }
    });
  }

}
