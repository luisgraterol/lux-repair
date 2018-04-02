// Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { NgQrScannerModule } from 'angular2-qrscanner';
import { ImageUploadModule } from "angular2-image-upload";

// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormEmpleadoComponent } from './components/form-empleado/form-empleado.component';
import { FormVehiculoComponent } from './components/form-vehiculo/form-vehiculo.component';
import { GarageComponent } from './components/garage/garage.component';
import { SolicitarOrdenComponent } from './components/solicitar-orden/solicitar-orden.component';
import { ListaRepuestosComponent } from './components/lista-repuestos/lista-repuestos.component';
import { FormRepuestoComponent } from './components/form-repuesto/form-repuesto.component';
import { ModificarRepuestoComponent } from './components/modificar-repuesto/modificar-repuesto.component';
import { GestionarRolComponent } from './components/gestionar-rol/gestionar-rol.component';
import { ColaEsperaComponent } from './components/cola-espera/cola-espera.component';
import { DetalleVehiculoComponent } from './components/detalle-vehiculo/detalle-vehiculo.component';
import { ListaReparacionComponent } from './components/lista-reparacion/lista-reparacion.component';
import { ActualizarOrdenComponent } from './components/actualizar-orden/actualizar-orden.component';
import { ListaMecanicosComponent } from './components/lista-mecanicos/lista-mecanicos.component';
import { CondicionEntregaComponent } from './components/condicion-entrega/condicion-entrega.component';
import { ActualizarDatosComponent } from './components/actualizar-datos/actualizar-datos.component';
import { LectorQrComponent } from './components/lector-qr/lector-qr.component';
import { GenerarReporteComponent } from './components/generar-reporte/generar-reporte.component';
import { ReporteVehiculoComponent } from './components/reporte-vehiculo/reporte-vehiculo.component';
import { ReporteClienteComponent } from './components/reporte-cliente/reporte-cliente.component';

// Servicios
import { AuthService } from './services/auth.service';

// Guards
import { AuthGuard } from './guards/auth.guard';

// Pipes
import { DatePipe } from '@angular/common';



// Rutas
const appRoutes: Routes = [
  // Generales
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},

  // Cliente
  {path: 'form-vehiculo', component: FormVehiculoComponent, canActivate: [AuthGuard]},
  {path: 'garage', component: GarageComponent, canActivate: [AuthGuard]},
  {path: 'solicitar-orden', component: SolicitarOrdenComponent, canActivate: [AuthGuard]},
  {path:'actualizar-datos',component:ActualizarDatosComponent,canActivate:[AuthGuard]},
  // Empleados
  {path: 'form-empleado', component: FormEmpleadoComponent, canActivate: [AuthGuard]},

  // Administrador
  {path: 'gestionar-rol', component: GestionarRolComponent, canActivate: [AuthGuard]},
  {path: 'lista-repuestos', component: ListaRepuestosComponent, canActivate: [AuthGuard]},
  {path: 'form-repuesto', component: FormRepuestoComponent, canActivate: [AuthGuard]},
  {path: 'modificar-repuesto', component: ModificarRepuestoComponent, canActivate: [AuthGuard]},

  // Mecanico
  { path: 'actualizar-orden', component: ActualizarOrdenComponent, canActivate: [AuthGuard] },
  { path: 'lista-reparacion', component: ListaReparacionComponent, canActivate: [AuthGuard] },

  // Gerente
  {path: 'cola-espera', component: ColaEsperaComponent, canActivate: [AuthGuard]},
  {path: 'detalle-vehiculo', component: DetalleVehiculoComponent, canActivate: [AuthGuard]},
  {path: 'lista-mecanicos', component: ListaMecanicosComponent, canActivate: [AuthGuard]},
  {path: 'condicion-entrega', component: CondicionEntregaComponent, canActivate: [AuthGuard]},
  {path: 'lector-qr', component: LectorQrComponent, canActivate: [AuthGuard]},
  {path: 'generar-reporte', component: GenerarReporteComponent, canActivate: [AuthGuard]},
  {path: 'reporte-vehiculo', component: ReporteVehiculoComponent, canActivate: [AuthGuard]},
  {path: 'reporte-cliente', component: ReporteClienteComponent, canActivate: [AuthGuard]}
];


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    FooterComponent,
    FormEmpleadoComponent,
    FormVehiculoComponent,
    GarageComponent,
    SolicitarOrdenComponent,
    ListaRepuestosComponent,
    FormRepuestoComponent,
    GestionarRolComponent,
    ColaEsperaComponent,
    DetalleVehiculoComponent,
    ModificarRepuestoComponent,
    ListaReparacionComponent,
    ActualizarOrdenComponent,
    ListaMecanicosComponent,
    CondicionEntregaComponent,
    ActualizarDatosComponent,
    LectorQrComponent,
    GenerarReporteComponent,
    ReporteVehiculoComponent,
    ReporteClienteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot(),
    NgQrScannerModule,
    ImageUploadModule.forRoot()
  ],
  providers: [
    AuthService,
    AuthGuard,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
