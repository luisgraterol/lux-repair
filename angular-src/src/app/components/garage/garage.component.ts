import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-garage',
  templateUrl: './garage.component.html',
  styleUrls: ['./garage.component.css']
})
export class GarageComponent implements OnInit {

  constructor (
    private apiService: ApiService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.apiService.getVehicles().subscribe(vehiculos => {
      console.log(vehiculos);
    }, err => {
      console.log('Error al pedir los vehiculos desde GarageComponent: ', err);
      return false;
    });
    
  }

}
