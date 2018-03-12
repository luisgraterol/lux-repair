import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ViewChild } from '@angular/core/src/metadata/di';
import { ElementRef } from '@angular/core/src/linker/element_ref';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  nombre: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
    let usuario = JSON.parse(localStorage.getItem('user'));
    if (usuario)
      this.nombre = usuario.nombre;
  }

  onLogoutClick() {
    localStorage.clear();
    this.nombre = undefined;
    this.flashMessage.show('Su sessión ha finalizado.', { cssClass:'custom-success', timeout: 5000 });
    this.router.navigate(['/login']);
    return false;
  }
}
