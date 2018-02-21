// Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FlashMessagesModule } from 'angular2-flash-messages';

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

// Servicios
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { ApiService } from './services/api.service';

// Guards
import { AuthGuard } from './guards/auth.guard';

// Pipes
import { DatePipe } from '@angular/common';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'form-empleado', component: FormEmpleadoComponent, canActivate: [AuthGuard]},
  {path: 'form-vehiculo', component: FormVehiculoComponent, canActivate: [AuthGuard]},
  {path: 'garage', component: GarageComponent, canActivate: [AuthGuard]},
  {path: 'solicitar-orden', component: SolicitarOrdenComponent, canActivate: [AuthGuard]}
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
    SolicitarOrdenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot()
  ],
  providers: [
    ValidateService,
    AuthService,
    AuthGuard,
    ApiService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
