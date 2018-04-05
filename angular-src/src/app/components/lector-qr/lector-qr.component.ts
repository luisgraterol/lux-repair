import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { QrScannerComponent } from 'angular2-qrscanner';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

// HTTP Requests
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-lector-qr',
  templateUrl: './lector-qr.component.html',
  styleUrls: ['./lector-qr.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LectorQrComponent implements OnInit {

  orden: number;
  @ViewChild(QrScannerComponent) qrScannerComponent: QrScannerComponent;

  constructor(
    private http: Http,
    private flashMessage: FlashMessagesService,
    private router: Router,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    this.qrScannerComponent.getMediaDevices().then(devices => {

      // Debugger Flag
      // console.log(devices);

      const videoDevices: MediaDeviceInfo[] = [];
      for (const device of devices) {
        if (device.kind.toString() === 'videoinput') {
          videoDevices.push(device);
        }
      }
      if (videoDevices.length > 0) {
        let choosenDev;
        for (const dev of videoDevices) {
          if (dev.label.includes('front')) {
            choosenDev = dev;
            break;
          }
        }
        if (choosenDev) {
          this.qrScannerComponent.chooseCamera.next(choosenDev);
        } else {
          this.qrScannerComponent.chooseCamera.next(videoDevices[0]);
        }
      }
    });

    this.qrScannerComponent.capturedQr.subscribe(result => {
      console.log(result);
      this.orden = Number(result);
    });
  }

  escanear() {
    console.log('Orden: ', this.orden);

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.post('gerente/qr', {orden: this.orden}, { headers: headers })
      .map(res => res.json())
      .subscribe(data => {
        if (data.success) {

          if (data.vehiculo.FechaSolicitud) {
            // Guarda la fecha formateada
            data.vehiculo.FechaSolicitud = this.datePipe.transform(data.vehiculo.FechaSolicitud);
          }

          if (data.vehiculo.FechaAdmision) {
            // Guarda la fecha formateada
            data.vehiculo.FechaAdmision = this.datePipe.transform(data.vehiculo.FechaAdmision);
          }

          localStorage.setItem('vehiculoQR', JSON.stringify(data.vehiculo));
          localStorage.setItem('lleguePorQR', 'true');
          this.router.navigate(['/detalle-vehiculo']);
        } else {
          this.flashMessage.show('Se produjo un error al escanear el código.', { cssClass: 'custom-danger', timeout: 3000 });
          this.router.navigate(['/lector-qr']);
        }
      });
  }

}
