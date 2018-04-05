webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container-fluid px-0\">\n  <flash-messages></flash-messages>\n  <router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular2_qrscanner__ = __webpack_require__("../../../../angular2-qrscanner/esm5/angular2-qrscanner.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_image_upload__ = __webpack_require__("../../../../angular2-image-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_form_empleado_form_empleado_component__ = __webpack_require__("../../../../../src/app/components/form-empleado/form-empleado.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_form_vehiculo_form_vehiculo_component__ = __webpack_require__("../../../../../src/app/components/form-vehiculo/form-vehiculo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_garage_garage_component__ = __webpack_require__("../../../../../src/app/components/garage/garage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_solicitar_orden_solicitar_orden_component__ = __webpack_require__("../../../../../src/app/components/solicitar-orden/solicitar-orden.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_lista_repuestos_lista_repuestos_component__ = __webpack_require__("../../../../../src/app/components/lista-repuestos/lista-repuestos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_form_repuesto_form_repuesto_component__ = __webpack_require__("../../../../../src/app/components/form-repuesto/form-repuesto.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_modificar_repuesto_modificar_repuesto_component__ = __webpack_require__("../../../../../src/app/components/modificar-repuesto/modificar-repuesto.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_gestionar_rol_gestionar_rol_component__ = __webpack_require__("../../../../../src/app/components/gestionar-rol/gestionar-rol.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_cola_espera_cola_espera_component__ = __webpack_require__("../../../../../src/app/components/cola-espera/cola-espera.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_detalle_vehiculo_detalle_vehiculo_component__ = __webpack_require__("../../../../../src/app/components/detalle-vehiculo/detalle-vehiculo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_lista_reparacion_lista_reparacion_component__ = __webpack_require__("../../../../../src/app/components/lista-reparacion/lista-reparacion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_actualizar_orden_actualizar_orden_component__ = __webpack_require__("../../../../../src/app/components/actualizar-orden/actualizar-orden.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_lista_mecanicos_lista_mecanicos_component__ = __webpack_require__("../../../../../src/app/components/lista-mecanicos/lista-mecanicos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_condicion_entrega_condicion_entrega_component__ = __webpack_require__("../../../../../src/app/components/condicion-entrega/condicion-entrega.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__components_actualizar_datos_actualizar_datos_component__ = __webpack_require__("../../../../../src/app/components/actualizar-datos/actualizar-datos.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__components_lector_qr_lector_qr_component__ = __webpack_require__("../../../../../src/app/components/lector-qr/lector-qr.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__components_generar_reporte_generar_reporte_component__ = __webpack_require__("../../../../../src/app/components/generar-reporte/generar-reporte.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_reporte_vehiculo_reporte_vehiculo_component__ = __webpack_require__("../../../../../src/app/components/reporte-vehiculo/reporte-vehiculo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_reporte_cliente_reporte_cliente_component__ = __webpack_require__("../../../../../src/app/components/reporte-cliente/reporte-cliente.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_reporte_modelo_reporte_modelo_component__ = __webpack_require__("../../../../../src/app/components/reporte-modelo/reporte-modelo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_reporte_mecanico_reporte_mecanico_component__ = __webpack_require__("../../../../../src/app/components/reporte-mecanico/reporte-mecanico.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Modulos








// Componentes





























// Servicios

// Guards

// Pipes

// Rutas
var appRoutes = [
    // Generales
    { path: '', component: __WEBPACK_IMPORTED_MODULE_12__components_home_home_component__["a" /* HomeComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_13__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_38__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_14__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_38__guards_auth_guard__["a" /* AuthGuard */]] },
    // Cliente
    { path: 'form-vehiculo', component: __WEBPACK_IMPORTED_MODULE_17__components_form_vehiculo_form_vehiculo_component__["a" /* FormVehiculoComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_38__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'garage', component: __WEBPACK_IMPORTED_MODULE_18__components_garage_garage_component__["a" /* GarageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_38__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'solicitar-orden', component: __WEBPACK_IMPORTED_MODULE_19__components_solicitar_orden_solicitar_orden_component__["a" /* SolicitarOrdenComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_38__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'actualizar-datos', component: __WEBPACK_IMPORTED_MODULE_30__components_actualizar_datos_actualizar_datos_component__["a" /* ActualizarDatosComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_38__guards_auth_guard__["a" /* AuthGuard */]] },
    // Empleados
    { path: 'form-empleado', component: __WEBPACK_IMPORTED_MODULE_16__components_form_empleado_form_empleado_component__["a" /* FormEmpleadoComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_38__guards_auth_guard__["a" /* AuthGuard */]] },
    // Administrador
    { path: 'gestionar-rol', component: __WEBPACK_IMPORTED_MODULE_23__components_gestionar_rol_gestionar_rol_component__["a" /* GestionarRolComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_38__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'lista-repuestos', component: __WEBPACK_IMPORTED_MODULE_20__components_lista_repuestos_lista_repuestos_component__["a" /* ListaRepuestosComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_38__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'form-repuesto', component: __WEBPACK_IMPORTED_MODULE_21__components_form_repuesto_form_repuesto_component__["a" /* FormRepuestoComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_38__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'modificar-repuesto', component: __WEBPACK_IMPORTED_MODULE_22__components_modificar_repuesto_modificar_repuesto_component__["a" /* ModificarRepuestoComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_38__guards_auth_guard__["a" /* AuthGuard */]] },
    // Mecanico
    { path: 'actualizar-orden', component: __WEBPACK_IMPORTED_MODULE_27__components_actualizar_orden_actualizar_orden_component__["a" /* ActualizarOrdenComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_38__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'lista-reparacion', component: __WEBPACK_IMPORTED_MODULE_26__components_lista_reparacion_lista_reparacion_component__["a" /* ListaReparacionComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_38__guards_auth_guard__["a" /* AuthGuard */]] },
    // Gerente
    { path: 'cola-espera', component: __WEBPACK_IMPORTED_MODULE_24__components_cola_espera_cola_espera_component__["a" /* ColaEsperaComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_38__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'detalle-vehiculo', component: __WEBPACK_IMPORTED_MODULE_25__components_detalle_vehiculo_detalle_vehiculo_component__["a" /* DetalleVehiculoComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_38__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'lista-mecanicos', component: __WEBPACK_IMPORTED_MODULE_28__components_lista_mecanicos_lista_mecanicos_component__["a" /* ListaMecanicosComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_38__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'condicion-entrega', component: __WEBPACK_IMPORTED_MODULE_29__components_condicion_entrega_condicion_entrega_component__["a" /* CondicionEntregaComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_38__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'lector-qr', component: __WEBPACK_IMPORTED_MODULE_31__components_lector_qr_lector_qr_component__["a" /* LectorQrComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_38__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'generar-reporte', component: __WEBPACK_IMPORTED_MODULE_32__components_generar_reporte_generar_reporte_component__["a" /* GenerarReporteComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_38__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'reporte-vehiculo', component: __WEBPACK_IMPORTED_MODULE_33__components_reporte_vehiculo_reporte_vehiculo_component__["a" /* ReporteVehiculoComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_38__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'reporte-cliente', component: __WEBPACK_IMPORTED_MODULE_34__components_reporte_cliente_reporte_cliente_component__["a" /* ReporteClienteComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_38__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'reporte-modelo', component: __WEBPACK_IMPORTED_MODULE_35__components_reporte_modelo_reporte_modelo_component__["a" /* ReporteModeloComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_38__guards_auth_guard__["a" /* AuthGuard */]] },
    { path: 'reporte-mecanico', component: __WEBPACK_IMPORTED_MODULE_36__components_reporte_mecanico_reporte_mecanico_component__["a" /* ReporteMecanicoComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_38__guards_auth_guard__["a" /* AuthGuard */]] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_form_empleado_form_empleado_component__["a" /* FormEmpleadoComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_form_vehiculo_form_vehiculo_component__["a" /* FormVehiculoComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_garage_garage_component__["a" /* GarageComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_solicitar_orden_solicitar_orden_component__["a" /* SolicitarOrdenComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_lista_repuestos_lista_repuestos_component__["a" /* ListaRepuestosComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_form_repuesto_form_repuesto_component__["a" /* FormRepuestoComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_gestionar_rol_gestionar_rol_component__["a" /* GestionarRolComponent */],
                __WEBPACK_IMPORTED_MODULE_24__components_cola_espera_cola_espera_component__["a" /* ColaEsperaComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_detalle_vehiculo_detalle_vehiculo_component__["a" /* DetalleVehiculoComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_modificar_repuesto_modificar_repuesto_component__["a" /* ModificarRepuestoComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_lista_reparacion_lista_reparacion_component__["a" /* ListaReparacionComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_actualizar_orden_actualizar_orden_component__["a" /* ActualizarOrdenComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_lista_mecanicos_lista_mecanicos_component__["a" /* ListaMecanicosComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_condicion_entrega_condicion_entrega_component__["a" /* CondicionEntregaComponent */],
                __WEBPACK_IMPORTED_MODULE_30__components_actualizar_datos_actualizar_datos_component__["a" /* ActualizarDatosComponent */],
                __WEBPACK_IMPORTED_MODULE_31__components_lector_qr_lector_qr_component__["a" /* LectorQrComponent */],
                __WEBPACK_IMPORTED_MODULE_32__components_generar_reporte_generar_reporte_component__["a" /* GenerarReporteComponent */],
                __WEBPACK_IMPORTED_MODULE_33__components_reporte_vehiculo_reporte_vehiculo_component__["a" /* ReporteVehiculoComponent */],
                __WEBPACK_IMPORTED_MODULE_34__components_reporte_cliente_reporte_cliente_component__["a" /* ReporteClienteComponent */],
                __WEBPACK_IMPORTED_MODULE_35__components_reporte_modelo_reporte_modelo_component__["a" /* ReporteModeloComponent */],
                __WEBPACK_IMPORTED_MODULE_36__components_reporte_mecanico_reporte_mecanico_component__["a" /* ReporteMecanicoComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_5_angular2_flash_messages__["FlashMessagesModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6_angular2_qrscanner__["a" /* NgQrScannerModule */],
                __WEBPACK_IMPORTED_MODULE_7_angular2_image_upload__["a" /* ImageUploadModule */].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_37__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_38__guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_39__angular_common__["DatePipe"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/actualizar-datos/actualizar-datos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main {\n    min-height: 42.5rem;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/actualizar-datos/actualizar-datos.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row main\">\n  <div class=\"col-8 col-md-8 col-lg-6 mx-auto my-auto\">\n    <!-- Title -->\n    <h2 class=\"mt-4 pt-5 pb-4\">Actualizar Datos</h2>\n\n    <!-- Form -->\n    <form (submit)=\"actualizarDatos()\" class=\"wrapper\">\n\n      <div class=\"row\">\n        <div class=\"col-12 col-md-6\">\n          <div class=\"form-group\">\n            <label>Nombre\n              <span class=\"required\">*</span>\n            </label>\n            <input type=\"text\" [(ngModel)]=\"nombre\" name=\"nombre\" class=\"form-control\">\n          </div>\n        </div>\n        <div class=\"col-12 col-md-6\">\n          <div class=\"form-group\">\n            <label>Segundo Nombre</label>\n            <input type=\"text\" [(ngModel)]=\"seg_nombre\" name=\"seg_nombre\" class=\"form-control\">\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-12 col-md-6\">\n          <div class=\"form-group\">\n            <label>Apellido <span class=\"required\">*</span></label>\n            <input type=\"text\" [(ngModel)]=\"apellido\" name=\"apellido\" class=\"form-control\">\n          </div>\n        </div>\n        <div class=\"col-12 col-md-6\">\n          <div class=\"form-group\">\n            <label>\n              Cedula\n              <span class=\"required\">*</span>\n            </label>\n            <input type=\"text\" [(ngModel)]=\"cedula\" name=\"cedula\" class=\"form-control\">\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-12 col-md-6\">\n          <div class=\"form-group\">\n            <label>\n              Usuario\n              <span class=\"required\">*</span>\n            </label>\n            <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n          </div>\n        </div>\n        <div class=\"col-12 col-md-6\">\n          <div class=\"form-group\">\n            <label>\n              Correo Electrónico\n              <span class=\"required\">*</span>\n            </label>\n            <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\n          </div>\n        </div>\n      </div>\n\n     \n\n      <!-- Submit Button -->\n      <div class=\"container\">\n        <div class=\"row pt-4\">\n          <div class=\"col\">\n            <div class=\"d-flex justify-content-center\">\n              <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/actualizar-datos/actualizar-datos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActualizarDatosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// Http Requests


var ActualizarDatosComponent = /** @class */ (function () {
    function ActualizarDatosComponent(http, authService, flashMessage, router) {
        this.http = http;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    ActualizarDatosComponent.prototype.ngOnInit = function () {
    };
    ActualizarDatosComponent.prototype.actualizarDatos = function () {
        var _this = this;
        var data = {
            id: JSON.parse(localStorage.getItem('user')).id,
            nombre: this.nombre,
            seg_nombre: this.seg_nombre,
            apellido: this.apellido,
            cedula: this.cedula,
            username: this.username,
            email: this.email,
        };
        console.log('Datos: ', data);
        // Settear los encabezados para la petición al API
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        // Hacer la petición, se retorna una promesa
        this.http.post('users/datos-clientes', data, { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            if (response.success) {
                _this.flashMessage.show(response.msg, { cssClass: 'custom-success', timeout: 3000 });
                _this.router.navigate(['/profile']);
            }
            else {
                _this.flashMessage.show(response.msg, { cssClass: 'custom-danger', timeout: 3000 });
                _this.router.navigate(['/actualizar-datos']);
            }
        });
    };
    ActualizarDatosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-actualizar-datos',
            template: __webpack_require__("../../../../../src/app/components/actualizar-datos/actualizar-datos.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/actualizar-datos/actualizar-datos.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], ActualizarDatosComponent);
    return ActualizarDatosComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/actualizar-orden/actualizar-orden.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main {\n    min-height: 42.5rem;\n}\n\nul {\n    list-style: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/actualizar-orden/actualizar-orden.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row main p-4 p-md-3\">\n  <!-- Form de Actualizacion de reparacion  -->\n  <div class=\"container py-5 mt-3 mb-5\">\n    <h2 class=\"mb-3\">Actualizar Orden</h2>\n\n    <div class=\"row\">\n      <div class=\"col\">\n        <form (submit)=\"agregarRepuesto()\" class=\"d-flex align-items-center\">\n          <div class=\"form-group mr-4\">\n            <label>Fecha de Admisión</label>\n            <select class=\"form-control\" id=\"seleccionado\" [(ngModel)]=\"seleccionado\" name=\"seleccionado\">\n              <option *ngFor=\"let repuesto of repuestos; let i=index\" [ngValue]=\"repuesto\">{{repuesto.Descripcion}}</option>\n            </select>\n          </div>\n          <button class=\"btn btn-secondary mt-3\" type=\"submit\">Agregar</button>\n        </form>\n      </div>\n    </div>\n\n    <div class=\"my-4\">\n      <p>Repuestos Utilizados:</p>\n      <div *ngIf=\"repuestosSeleccionados.length !== 0\">\n        <ul *ngFor=\"let repuesto of repuestosSeleccionados\" class=\"list-group\">\n          <li class=\"list-group-item\">{{repuesto.Descripcion}}</li>\n        </ul>\n      </div>\n      <div *ngIf=\"repuestosSeleccionados.length === 0\">\n        <p class=\"text-muted\">No se han agregado repuestos a esta reparación.</p>\n      </div>\n    </div>\n\n    <form (submit)=\"actualizarOrden()\">\n      <div class=\"form-group\">\n        <label for=\"estado\">Estado de la Reparación</label>\n        <select id=\"estado\" class=\"form-control\" [(ngModel)]=\"estado\" name=\"estado\">\n            <option selected>En Reparacion</option>\n            <option>Reparado</option>\n        </select>\n      </div>\n\n    \n      \n      <div class=\"d-flex justify-content-center\">\n        <button type=\"submit\" class=\"btn btn-primary mt-4\">Actualizar</button>\n      </div>\n\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/actualizar-orden/actualizar-orden.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActualizarOrdenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ActualizarOrdenComponent = /** @class */ (function () {
    function ActualizarOrdenComponent(http, flashMessage, router) {
        this.http = http;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    ActualizarOrdenComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.repuestos = [];
        this.repuestosSeleccionados = [];
        var token = localStorage.getItem('id_token');
        // Settear los encabezados para la petición al API
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]();
        headers.append('Authorization', token);
        headers.append('Content-Type', 'application/json');
        this.http.get('mecanico/repuestos', { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log('Repuestos Totales: ', data.repuestos);
            _this.repuestos = data.repuestos;
        });
        this.http.post('mecanico/repuestos-por-vehiculo', { id: Number(localStorage.getItem('vehiculo-a-actualizar')) }, { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log('Repuestos Previos: ', data.repuestos);
            _this.repuestosSeleccionados = data.repuestos;
        });
    };
    ActualizarOrdenComponent.prototype.actualizarOrden = function () {
        var _this = this;
        var data = {
            estado: this.estado,
            repuestos: this.repuestosSeleccionados,
            vehiculo: Number(localStorage.getItem('vehiculo-a-actualizar'))
        };
        // Validacion
        if (this.estado == undefined || this.repuestosSeleccionados.length == 0)
            return false;
        console.log(data);
        // Settear los encabezados para la petición al API
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        this.http.post('mecanico/actualizar-orden', data, { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            if (response.success) {
                _this.flashMessage.show(response.msg, { cssClass: 'custom-success', timeout: 3000 });
                _this.router.navigate(['/lista-reparacion']);
            }
            else {
                _this.flashMessage.show(response.msg, { cssClass: 'custom-danger', timeout: 3000 });
            }
        });
    };
    ActualizarOrdenComponent.prototype.agregarRepuesto = function (indice) {
        if (this.seleccionado != undefined) {
            this.repuestosSeleccionados.push(this.seleccionado);
        }
    };
    ActualizarOrdenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-actualizar-orden',
            template: __webpack_require__("../../../../../src/app/components/actualizar-orden/actualizar-orden.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/actualizar-orden/actualizar-orden.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ActualizarOrdenComponent);
    return ActualizarOrdenComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/cola-espera/cola-espera.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main {\n  min-height: 42.5rem;\n}\n\ntr:hover {\n  background: #eaf2ff !important;\n}\n\n.editar {\n  border: none;\n  background: transparent;\n  color: var(--dark);\n  opacity: 0;\n}\n\ntr:hover .editar {\n  opacity: 1;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/cola-espera/cola-espera.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col mx-0 mx-sm-4 mx-md-5 mx-lg-5 mx-xl-5 mt-5 mb-4\">\n    <h3>Cola de Espera</h3>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-3 mx-0 mx-sm-4 mx-md-5 mx-lg-5 mx-xl-5 my-4\">\n    <form (submit)=\"asignarFechaAdmision()\" class=\"d-flex align-items-center\">\n      <div class=\"form-group mr-4\">\n        <label>Fecha de Admisión</label>\n        <input type=\"date\" class=\"form-control\" [(ngModel)]=\"fechaAdmision\" name=\"fechaAdmision\">\n      </div>\n      <button class=\"btn btn-primary mt-3\" type=\"submit\">Asignar</button>\n    </form>\n  </div>\n</div>\n<div class=\"row main\">\n  <!-- Table -->\n  <div class=\"container\">\n    <div class=\"table-responsive\">\n      <table class=\"table table-hover bg-light text-dark\">\n        <thead class=\"thead-light\">\n          <tr>\n            <th scope=\"col\"></th>\n            <th scope=\"col\">ID</th>\n            <th scope=\"col\">Vehículo</th>\n            <th scope=\"col\">Placa</th>\n            <th scope=\"col\">Servicio</th>\n            <th scope=\"col\">Estado</th>\n            <th scope=\"col\">Solicitud</th>\n            <th scope=\"col\">Admisión</th>\n            <th scope=\"col\">Acciones</th>\n            <th scope=\"col\"></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let vehiculo of vehiculos; let i=index\">\n            <th scope=\"row\"><input type=\"checkbox\" name=\"checked\" [disabled]=\"vehiculo.Estado !== 'En Espera'\" [(ngModel)]=\"vehiculo.Chequeado\"></th>\n            <th scope=\"row\">{{vehiculo.id}}</th>\n            <td>{{vehiculo.Marca}} {{vehiculo.Modelo}}</td>\n            <td>{{vehiculo.Placa}}</td>\n            <td>\n              <span *ngIf=\"vehiculo.Servicio == undefined\">Sin Servicio</span>\n              <span *ngIf=\"vehiculo.Servicio != undefined\">{{vehiculo.Servicio}}</span>\n            </td>\n            <!-- Estado -->\n            <td>\n              <span *ngIf=\"vehiculo.Estado == undefined\" class=\"badge badge-pill badge-primary\">Sin Cita</span>\n              <span *ngIf=\"vehiculo.Estado == 'En Espera'\" class=\"badge badge-pill badge-warning text-white\">{{vehiculo.Estado}}</span>\n              <span *ngIf=\"vehiculo.Estado == 'Evaluado'\" class=\"badge badge-pill badge-secondary text-white\">{{vehiculo.Estado}}</span>\n              <span *ngIf=\"vehiculo.Estado == 'En Reparacion'\" class=\"badge badge-pill badge-info text-white\">{{vehiculo.Estado}}</span>\n              <span *ngIf=\"vehiculo.Estado == 'Reparado'\" class=\"badge badge-pill badge-success text-white\">{{vehiculo.Estado}}</span>\n              <span *ngIf=\"vehiculo.Estado == 'Listo'\" class=\"badge badge-pill badge-primary text-white\">{{vehiculo.Estado}}</span>\n            </td>\n            <!-- Fecha de Solicitud -->\n            <td>\n              <span *ngIf=\"vehiculo.FechaSolicitud != undefined\">{{vehiculo.FechaSolicitud | date:'d/M/yy'}}</span>\n              <span *ngIf=\"vehiculo.FechaSolicitud == undefined\">Sin Cita</span>\n            </td>\n            <!-- Fecha de Admision -->\n            <td>\n              <span *ngIf=\"vehiculo.FechaAdmision != null && vehiculo.FechaAdmision != undefined\">{{vehiculo.FechaAdmision | date:'d/M/yy'}}</span>\n              <span *ngIf=\"vehiculo.FechaAdmision == undefined || vehiculo.FechaAdmision == null\">No Admitido</span>\n            </td>\n            <!-- Acciones -->\n            <td class=\"d-flex justify-content-center\">\n              <button (click)=\"verDetalle(i)\" class=\"editar\"><i class=\"fas fa-search\"></i></button>\n              <button *ngIf=\"vehiculo.Evaluacion == 'Por Evaluar'\" (click)=\"evaluar(i)\" class=\"editar ml-3\"><i class=\"fas fa-pencil-alt\"></i></button>\n            </td>\n            <td>\n              <button *ngIf=\"vehiculo.Estado == 'Reparado'\" (click)=\"finalizar(i)\" class=\"btn btn-sm btn-outline-dark\">Finalizar</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/cola-espera/cola-espera.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColaEsperaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ColaEsperaComponent = /** @class */ (function () {
    function ColaEsperaComponent(http, flashMessage, router, datePipe) {
        this.http = http;
        this.flashMessage = flashMessage;
        this.router = router;
        this.datePipe = datePipe;
    }
    ColaEsperaComponent.prototype.ngOnInit = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]();
        // Busca el token del usuario que esta ingresado en el sistema actualmente
        var token = localStorage.getItem('id_token');
        // Settear los encabezados para la petición al API
        headers.append('Authorization', token);
        headers.append('Content-Type', 'application/json');
        this.http.get('users/vehiculos-gerente', { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            data.vehiculos.map(function (vehiculo) {
                if (vehiculo.FechaSolicitud) {
                    // Guarda la fecha formateada
                    vehiculo.FechaSolicitud = _this.datePipe.transform(vehiculo.FechaSolicitud);
                }
                if (vehiculo.FechaAdmision) {
                    // Guarda la fecha formateada
                    vehiculo.FechaAdmision = _this.datePipe.transform(vehiculo.FechaAdmision);
                }
                vehiculo.Chequeado = false;
                vehiculo.Habilitado = !!vehiculo.Estado;
            });
            _this.vehiculos = data.vehiculos;
            console.log(_this.vehiculos);
            localStorage.setItem('vehiculos', JSON.stringify(data.vehiculos));
        }, function (err) {
            console.log('Error al pedir los vehiculos desde ColaEsperaComponent: ', err);
            return false;
        });
    };
    ColaEsperaComponent.prototype.verDetalle = function (indice) {
        localStorage.setItem('vehiculo-detalle', indice);
        localStorage.setItem('ultima-pagina', '/cola-espera');
        this.router.navigate(['/detalle-vehiculo']);
    };
    ColaEsperaComponent.prototype.asignarFechaAdmision = function () {
        var _this = this;
        var chequeados = this.vehiculos.filter(function (vehiculo) { return vehiculo.Chequeado; });
        if (chequeados.length === 0) {
            return false;
        }
        else {
            // Guarda la fecha de admision seleccionada
            this.vehiculos
                .filter(function (vehiculo) { return vehiculo.Chequeado; })
                .map(function (vehiculo) {
                // Valida que se haya elegido una fecha
                if (_this.fechaAdmision != undefined && _this.fechaAdmision != '') {
                    var pickedDate = new Date(_this.fechaAdmision);
                    pickedDate.setDate(pickedDate.getDate() + 1);
                    pickedDate.setHours(0, 0, 0, 0);
                    vehiculo.FechaAdmision = pickedDate;
                    if (pickedDate < new Date()) {
                        vehiculo.FechaAdmision = null;
                    }
                    // Impide cambiar la fecha de admision si ya ha sido asignada
                    vehiculo.Chequeado = false;
                }
            });
            // Valida que se haya elegido una fecha
            if (this.fechaAdmision != undefined && this.fechaAdmision != '') {
                var pickedDate = new Date(this.fechaAdmision);
                pickedDate.setDate(pickedDate.getDate() + 1);
                pickedDate.setHours(0, 0, 0, 0);
                var today = new Date();
                if (pickedDate < today) {
                    this.flashMessage.show('La fecha de admisión no puede ser anterior a la fecha de hoy.', { cssClass: 'custom-danger', timeout: 3000 });
                    return false;
                }
                // Le pasa el arreglo al API
                this.guardarFechas(chequeados);
            }
        }
    };
    ColaEsperaComponent.prototype.guardarFechas = function (arreglo) {
        var _this = this;
        var data = {
            gerente: JSON.parse(localStorage.getItem('user')),
            vehiculos: arreglo
        };
        console.log(data);
        // Settear los encabezados para la petición al API
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        // Hacer la petición, se retorna una promesa
        this.http.post('users/fecha-admision', data, { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            if (response.success) {
                _this.flashMessage.show(response.msg, { cssClass: 'custom-success', timeout: 3000 });
            }
            else {
                _this.flashMessage.show(response.msg, { cssClass: 'custom-danger', timeout: 3000 });
            }
        });
    };
    ColaEsperaComponent.prototype.finalizar = function (indice) {
        var _this = this;
        this.vehiculos[indice].Estado = 'Listo';
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        this.http.post('gerente/finalizar', {
            vehiculo: this.vehiculos[indice],
            gerente: JSON.parse(localStorage.getItem('user'))
        }, { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            if (response.success) {
                _this.flashMessage.show(response.msg, { cssClass: 'custom-success', timeout: 3000 });
            }
            else {
                _this.vehiculos[indice].Estado = 'Reparado';
                _this.flashMessage.show(response.msg, { cssClass: 'custom-danger', timeout: 3000 });
            }
        });
        // Elimina el elemento de la interfaz 2 segundos despues
        setTimeout(function () {
            _this.vehiculos.splice(indice, 1);
        }, 1000);
    };
    ColaEsperaComponent.prototype.evaluar = function (indice) {
        var vehiculoAEvaluar = this.vehiculos[indice];
        localStorage.setItem("condicion-entrega", JSON.stringify(vehiculoAEvaluar));
        this.router.navigate(['condicion-entrega']);
    };
    ColaEsperaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cola-espera',
            template: __webpack_require__("../../../../../src/app/components/cola-espera/cola-espera.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/cola-espera/cola-espera.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["DatePipe"]])
    ], ColaEsperaComponent);
    return ColaEsperaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/condicion-entrega/condicion-entrega.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".color {\n    border: 1px solid grey;\n    border-radius: 10px;\n    height: 20px;\n    width: 20px;\n    margin: auto;\n  }\n  \n  .color-amarillo {\n    background: yellow;\n  }\n  \n  .color-arena {\n    background: rgb(170, 170, 67);\n  }\n  \n  .color-azul {\n    background: rgb(0, 119, 255);\n  }\n  \n  .color-blanco {\n    background: white;\n  }\n  \n  .color-gris {\n    background: rgb(107, 107, 107);\n  }\n  \n  .color-negro {\n    background: black;\n  }\n  \n  .color-plata {\n    background: rgb(192, 192, 192);\n  }\n  \n  .color-rojo {\n    background: red;\n  }\n  \n  .color-verde {\n    background: rgb(48, 194, 48);\n  }\n  \n  .main {\n    min-height: 42.5rem;\n  }\n  \n  .font-bigger {\n    font-size: 12pt;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/condicion-entrega/condicion-entrega.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n    <div class=\"row\">\n      <div class=\"col mt-3 ml-3\">\n        <button (click)=\"regresar()\" class=\"btn btn-secondary\"><i class=\"fas fa-angle-left pr-1\"></i>Regresar</button>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-6 col-md-10 col-lg-9 mx-auto mb-5 mt-3 py-5 px-5 bg-white border rounded\">\n          <!-- Nombre del Vehiculo -->\n          <h2 class=\"page-header\">{{vehiculo.Marca}} {{vehiculo.Modelo}}</h2>\n          <h3 *ngIf=\"dueno !== undefined\" class=\"page-header pb-3\">{{dueno.Nombre}} {{dueno.Apellido}}</h3>\n  \n            <!-- Info del Vehiculo -->\n              <div class=\"container\">\n                <div class=\"row\">\n                  <div class=\"col-6\">\n                    <ul class=\"list-group list-group-flush\">\n                      <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n                        <span class=\"lead\">Placa: </span>\n                        <p class=\"lead m-0\">{{vehiculo.Placa}}</p>\n                      </li>\n                      <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n                        <span class=\"lead\">Color: </span>\n                        <div *ngIf=\"vehiculo.Color == 'Amarillo'\" class=\"color color-amarillo mt-1 mr-0\"></div>\n                        <div *ngIf=\"vehiculo.Color == 'Arena'\" class=\"color color-arena mt-1 mr-0\"></div>\n                        <div *ngIf=\"vehiculo.Color == 'Azul'\" class=\"color color-azul mt-1 mr-0\"></div>\n                        <div *ngIf=\"vehiculo.Color == 'Blanco'\" class=\"color color-blanco mt-1 mr-0\"></div>\n                        <div *ngIf=\"vehiculo.Color == 'Gris'\" class=\"color color-gris mt-1 mr-0\"></div>\n                        <div *ngIf=\"vehiculo.Color == 'Negro'\" class=\"color color-negro mt-1 mr-0\"></div>\n                        <div *ngIf=\"vehiculo.Color == 'Plata'\" class=\"color color-plata mt-1 mr-0\"></div>\n                        <div *ngIf=\"vehiculo.Color == 'Rojo'\" class=\"color color-rojo mt-1 mr-0\"></div>\n                        <div *ngIf=\"vehiculo.Color == 'Verde'\" class=\"color color-verde mt-1 mr-0\"></div>\n                      </li>\n                      <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n                        <span class=\"lead\">Año: </span>\n                        <p class=\"lead m-0\">{{vehiculo.Ano}}</p>\n                      </li>\n                      <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n                        <span class=\"lead\">Estado: </span>\n                        <span *ngIf=\"vehiculo.Estado == undefined\" class=\"badge badge-pill badge-primary font-bigger\">Sin Cita</span>\n                        <span *ngIf=\"vehiculo.Estado == 'En Espera'\" class=\"badge badge-pill badge-warning text-white font-bigger\">{{vehiculo.Estado}}</span>\n                        <span *ngIf=\"vehiculo.Estado == 'En Reparacion'\" class=\"badge badge-pill badge-info text-white font-bigger\">{{vehiculo.Estado}}</span>\n                        <span *ngIf=\"vehiculo.Estado == 'Listo'\" class=\"badge badge-pill badge-success text-white font-bigger\">{{vehiculo.Estado}}</span>\n                      </li>\n                      <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n                        <span class=\"lead\">Servicio: </span>\n                        <p *ngIf=\"vehiculo.Servicio != undefined\" class=\"lead m-0\">{{vehiculo.Servicio}}</p>\n                        <p *ngIf=\"vehiculo.Servicio == undefined\" class=\"lead m-0\">No Aplica</p>\n                      </li>\n                      <li class=\"list-group-item\">\n                        <span class=\"lead mb-4\">Detalle: </span>\n                        <p *ngIf=\"vehiculo.DetalleOrden != undefined\" class=\"text-justify mx-0 mt-3\">{{vehiculo.DetalleOrden}}</p>\n                        <p *ngIf=\"vehiculo.DetalleOrden == undefined\" class=\"text-justify mx-0 mt-3\">No Aplica</p>\n                      </li>\n                    </ul>\n                  </div>\n\n                  <div class=\"col-6\">\n                    <h2 class=\"mb-3\">Condicion de Entrega</h2>\n                        <!-- <form (submit)=\"asignarCondicion()\"> -->\n                        <form>\n                            <div class=\"form-row\">\n                                <div class=\"form-group col-md-12\">\n                                    <label for=\"vista\">Vista</label>\n                                    <select id=\"vista\" class=\"form-control\" [(ngModel)]=\"vista\" name=\"vista\">\n                                        <option selected>Delantera</option>\n                                        <option>Lateral Derecha</option>\n                                        <option>Lateral Izquierda</option>\n                                        <option>Trasera</option>\n                                        <option>Superior</option>\n                                        <option>Inferior</option>\n                                    </select>\n                                </div>\n                            </div>\n                            <div class=\"form-row\">\n                            <div class=\"form-group col-md-12\">\n                                <label for=\"detalle\">Detalle</label>\n                                <textarea class=\"form-control\" name=\"detalle\" id=\"detalle\" [(ngModel)]=\"detalle\" rows=\"2\"></textarea>\n                                </div>\n                            </div>\n\n                            <div class=\"d-flex justify-content-center\">\n                                <button (click)=\"agregarACondicion()\" class=\"btn btn-secondary mt-4\">Agregar Detalle</button>\n                            </div>\n\n                            <div class=\"form-row\">\n                                <div class=\"form-group col-md-12\">\n                                    <label for=\"entrega\">Detalles de Entrega</label>\n                                    <textarea disabled class=\"form-control\" name=\"entrega\" id=\"entrega\" [(ngModel)]=\"entrega\" rows=\"4\"></textarea>\n                                </div>\n                            </div>\n\n                            <div class=\"d-flex justify-content-center\">\n                                <button (click)=\"finalizarCondicion()\" class=\"btn btn-primary mt-4\">Finalizar Condicion</button>\n                            </div>\n\n                        </form>\n                  </div>\n\n                </div>\n              </div>\n  \n          </div>\n\n\n          \n      </div>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/components/condicion-entrega/condicion-entrega.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CondicionEntregaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CondicionEntregaComponent = /** @class */ (function () {
    function CondicionEntregaComponent(http, flashMessage, router) {
        this.http = http;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    CondicionEntregaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.entrega = "";
        var vehiculo = JSON.parse(localStorage.getItem("condicion-entrega"));
        this.vehiculo = vehiculo;
        // Toma el ID del dueño del vehiculo
        var id = vehiculo.Cliente;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]();
        // Busca el token del usuario que esta ingresado en el sistema actualmente
        var token = localStorage.getItem('id_token');
        // Settear los encabezados para la petición al API
        headers.append('Authorization', token);
        headers.append('Content-Type', 'application/json');
        this.http.post('users/cliente', { id: id }, { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            if (response.success) {
                _this.dueno = response.cliente;
                console.log(_this.dueno);
            }
            else {
                _this.flashMessage.show(response.msg, { cssClass: 'custom-danger', timeout: 3000 });
            }
        }, function (err) {
            console.log('Error al pedir los datos del dueño desde CondicionEntregaComponent: ', err);
            return false;
        });
    };
    CondicionEntregaComponent.prototype.regresar = function () {
        this.router.navigate(['/cola-espera']);
    };
    CondicionEntregaComponent.prototype.agregarACondicion = function (detalle) {
        this.entrega = this.entrega + " " + this.vista + ": " + this.detalle + "\n";
        this.detalle = "";
        this.vista = "";
    };
    CondicionEntregaComponent.prototype.finalizarCondicion = function () {
        var _this = this;
        var data = {
            id: this.vehiculo.id,
            Estado: "Evaluado",
            Evaluacion: this.entrega
        };
        // Settear los encabezados para la petición al API
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        // Hacer la petición, se retorna una promesa
        this.http.post('users/condicion-entrega', data, { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            if (response.success) {
                _this.flashMessage.show(response.msg, { cssClass: 'custom-success', timeout: 3000 });
                _this.router.navigate(['/cola-espera']);
            }
            else {
                _this.flashMessage.show(response.msg, { cssClass: 'custom-danger', timeout: 3000 });
                _this.router.navigate(['/condicion-entrega']);
            }
        });
    };
    CondicionEntregaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-condicion-entrega',
            template: __webpack_require__("../../../../../src/app/components/condicion-entrega/condicion-entrega.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/condicion-entrega/condicion-entrega.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], CondicionEntregaComponent);
    return CondicionEntregaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main {\n    min-height: 35rem;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col mx-0 mx-sm-4 mx-md-5 mx-lg-5 mx-xl-5 mt-4 mb-2\">\n        <h3>Dashboard</h3>\n    </div>\n</div>\n<div class=\"row mt-5 pb-5 main\">\n    <div class=\"col d-flex justify-content-center\">\n\n        <!-- Card Deck del Cliente -->\n        <div *ngIf=\"this.rol === 'cliente'\" class=\"card-deck\">\n            <div class=\"card text-center\" style=\"max-width: 18rem; max-height: 24rem;\">\n                <img class=\"img-responsive mx-auto mt-4 mb-2\" src=\"assets/dashboard-cliente/vehiculo-agregar.png\" alt=\"Imagen Agregar Vehiculo\" width=\"130\" height=\"140\">\n\n                <div class=\"card-body px-sm-1 px-md-2 px-lg-3 px-xl-3 mt-3\">\n                    <h5 class=\"card-title\">Registro</h5>\n                    <p class=\"card-text\">Registra un nuevo vehiculo para poder solicitar citas.</p>\n                    <a [routerLink]=\"['/form-vehiculo']\" class=\"btn btn-outline-primary mx-0 mx-sm-0 mx-md-0\">Registrar</a>\n                </div>\n            </div>\n            <div class=\"card text-center\" style=\"max-width: 18rem; max-height: 24rem;\">\n                <img class=\"img-responsive mx-auto mt-4 mb-2\" src=\"assets/dashboard-cliente/vehiculo-ver.png\" alt=\"Imagen Ver Vehiculos\" width=\"130\" height=\"140\">\n                <div class=\"card-body px-sm-1 px-md-2 px-lg-3 px-xl-3\">\n                    <h5 class=\"card-title\">Garage</h5>\n                    <p class=\"card-text\">Gestiona todas los vehiculos asociados,solicita citas, edita la informacion o eliminalos</p>\n                    <a [routerLink]=\"['/garage']\" class=\"btn btn-outline-primary\">Ir al Garage</a>\n                </div>\n            </div>\n            <div class=\"card text-center\" style=\"max-width: 18rem; max-height: 24rem;\">\n                <img class=\"img-responsive mx-auto mt-4 mb-2\" src=\"assets/dashboard-cliente/resume.png\" alt=\"Imagen Perfil\" width=\"130\" height=\"140\">\n                <div class=\"card-body px-sm-1 px-md-2 px-lg-3 px-xl-3 mt-3\">\n                    <h5 class=\"card-title\">Mi Perfil</h5>\n                    <p class=\"card-text\">Ve la informacion de tu perfil</p>\n                    <a class=\"btn btn-outline-primary\" [routerLink]=\"['/profile']\">Perfil</a>\n                </div>\n            </div>\n        </div>\n\n        <!-- Card Deck del Empleado -->\n        <div *ngIf=\"this.rol !== 'cliente'\" class=\"card-deck\">\n          \n            <!-- Administrador -->\n            <div *ngIf=\"this.rol === 'administrador'\" class=\"card text-center\" style=\"max-width: 18rem; max-height: 24rem;\">\n                <img class=\"img-responsive mx-auto mt-4 mb-2\" src=\"assets/dashboard-admin/employees.png\" alt=\"Imagen Roles\" width=\"130\" height=\"140\">\n                <div class=\"card-body px-sm-1 px-md-2 px-lg-3 px-xl-3 mt-3\">\n                    <h5 class=\"card-title\">Asignar Roles</h5>\n                    <p class=\"card-text\">Gestiona la asignación de roles de trabajo en el taller.</p>\n                    <a class=\"btn btn-outline-primary\" [routerLink]=\"['/gestionar-rol']\">Gestionar</a>\n                </div>\n            </div>\n\n            <div *ngIf=\"this.rol === 'administrador'\" class=\"card text-center\" style=\"max-width: 18rem; max-height: 24rem;\">\n                <img class=\"img-responsive mx-auto mt-4 mb-2\" src=\"assets/dashboard-admin/repuesto.png\" alt=\"Imagen Repuesto\" width=\"130\" height=\"140\">\n                <div class=\"card-body px-sm-1 px-md-2 px-lg-3 px-xl-3 mt-3\">\n                    <h5 class=\"card-title\">Gestionar Repuestos</h5>\n                    <p class=\"card-text\">Gestiona y modifica los repuestos del taller.</p>\n                    <a class=\"btn btn-outline-primary\" [routerLink]=\"['/lista-repuestos']\">Gestionar</a>\n                </div>\n            </div>\n          \n            <!-- Gerente -->\n            <div *ngIf=\"this.rol === 'gerente'\" class=\"card text-center\" style=\"max-width: 18rem; max-height: 24rem;\">\n                <img class=\"img-responsive mx-auto mt-4 mb-2\" src=\"assets/dashboard-gerente/cola-espera.png\" alt=\"Imagen Cola de Espera\" width=\"130\" height=\"140\">\n                <div class=\"card-body px-sm-1 px-md-2 px-lg-3 px-xl-3 mt-3\">\n                    <h5 class=\"card-title\">Cola de Espera</h5>\n                    <p class=\"card-text\">Gestiona la cola de espera de reparaciones.</p>\n                    <a class=\"btn btn-outline-primary\" [routerLink]=\"['/cola-espera']\">Gestionar</a>\n                </div>\n            </div>\n            <div *ngIf=\"this.rol === 'gerente'\" class=\"card text-center\" style=\"max-width: 18rem; max-height: 24rem;\">\n                <img class=\"img-responsive mx-auto mt-4 mb-2\" src=\"assets/dashboard-gerente/mecanico.png\" alt=\"Imagen Asignar Mecanicos\" width=\"130\"\n                    height=\"140\">\n                <div class=\"card-body px-sm-1 px-md-2 px-lg-3 px-xl-3 mt-3\">\n                    <h5 class=\"card-title\">Mecanicos</h5>\n                    <p class=\"card-text\">Asigna reparaciones a los mecánicos de tu taller.</p>\n                    <a class=\"btn btn-outline-primary\" [routerLink]=\"['/lista-mecanicos']\">Gestionar</a>\n                </div>\n            </div>\n            <div *ngIf=\"this.rol === 'gerente'\" class=\"card text-center\" style=\"max-width: 18rem; max-height: 24rem;\">\n                <img class=\"img-responsive mx-auto mt-5 mb-2\" src=\"assets/dashboard-gerente/qr.png\" alt=\"Imagen Asignar Mecanicos\"\n                    width=\"130\" height=\"120\">\n                <div class=\"card-body px-sm-1 px-md-2 px-lg-3 px-xl-3 mt-3\">\n                    <h5 class=\"card-title\">Lectura de QR</h5>\n                    <p class=\"card-text\">Identifica rápidamente los vehículos que llegan al taller.</p>\n                    <a class=\"btn btn-outline-primary\" [routerLink]=\"['/lector-qr']\">Escanear</a>\n                </div>\n            </div>\n            <div *ngIf=\"this.rol === 'gerente'\" class=\"card text-center\" style=\"max-width: 18rem; max-height: 24rem;\">\n                <img class=\"img-responsive mx-auto mt-4 mb-2\" src=\"assets/dashboard-gerente/reporte.png\" alt=\"Imagen Generar Reporte\" width=\"130\" height=\"140\">\n                <div class=\"card-body px-sm-1 px-md-2 px-lg-3 px-xl-3 mt-3\">\n                    <h5 class=\"card-title\">Generar Reportes</h5>\n                    <p class=\"card-text\">Genera reportes por modelo, mecanico,ect</p>\n                    <a class=\"btn btn-outline-primary\" [routerLink]=\"['/generar-reporte']\">Reportes</a>\n                </div>\n            </div>\n\n\n            <!-- Mecanico -->\n            <div *ngIf=\"this.rol === 'mecanico'\" class=\"card text-center\" style=\"max-width: 18rem; max-height: 24rem;\">\n                <img class=\"img-responsive mx-auto mt-4 mb-2\" src=\"assets/dashboard-mecanico/car-repair.png\" alt=\"Imagen Reparaciones\" width=\"130\" height=\"140\">\n                <div class=\"card-body px-sm-1 px-md-2 px-lg-3 px-xl-3 mt-3\">\n                <h5 class=\"card-title\">Gestionar Reparaciones</h5>\n                <p class=\"card-text\">Gestiona las reparaciones que te han asignado</p>\n                <a class=\"btn btn-outline-primary\" [routerLink]=\"['/lista-reparacion']\">Gestionar</a>\n                </div>\n            </div>\n\n            <!-- Todos los Empleados -->\n            <div class=\"card text-center\" style=\"max-width: 18rem; max-height: 24rem;\">\n                <img class=\"img-responsive mx-auto mt-4 mb-2\" src=\"assets/dashboard-cliente/resume.png\" alt=\"Imagen Perfil\" width=\"130\" height=\"140\">\n                <div class=\"card-body px-sm-1 px-md-2 px-lg-3 px-xl-3 mt-3\">\n                  <h5 class=\"card-title\">Mi Perfil</h5>\n                  <p class=\"card-text\">Edita la informacion correspondiente a tu perfil</p>\n                  <a class=\"btn btn-outline-primary\" [routerLink]=\"['/profile']\">Perfil</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// HTTP Requests


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(http, authService, router) {
        this.http = http;
        this.authService = authService;
        this.router = router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]();
        // Fetches the token of the currently logged in user from localStorage
        headers.append('Authorization', localStorage.getItem('id_token'));
        headers.append('Content-Type', 'application/json');
        this.http.get('users/profile', { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (profile) {
            _this.rol = profile.user.rol;
        }, function (err) {
            console.log('Error while getting the profile: ', err);
            return false;
        });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/detalle-vehiculo/detalle-vehiculo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".color {\n  border: 1px solid grey;\n  border-radius: 10px;\n  height: 20px;\n  width: 20px;\n  margin: auto;\n}\n\n.color-amarillo {\n  background: yellow;\n}\n\n.color-arena {\n  background: rgb(170, 170, 67);\n}\n\n.color-azul {\n  background: rgb(0, 119, 255);\n}\n\n.color-blanco {\n  background: white;\n}\n\n.color-gris {\n  background: rgb(107, 107, 107);\n}\n\n.color-negro {\n  background: black;\n}\n\n.color-plata {\n  background: rgb(192, 192, 192);\n}\n\n.color-rojo {\n  background: red;\n}\n\n.color-verde {\n  background: rgb(48, 194, 48);\n}\n\n.main {\n  min-height: 42.5rem;\n}\n\n.font-bigger {\n  font-size: 12pt;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/detalle-vehiculo/detalle-vehiculo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <div class=\"row\">\n    <div class=\"col mt-3 ml-3\">\n      <button (click)=\"regresar()\" class=\"btn btn-secondary\"><i class=\"fas fa-angle-left pr-1\"></i>Regresar</button>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-11 col-md-10 col-lg-9 mx-auto mb-5 mt-3 py-5 px-5 bg-white border rounded\">\n        <!-- Nombre del Vehiculo -->\n        <h2 class=\"page-header pb-3\">{{vehiculo.Marca}} {{vehiculo.Modelo}}</h2>\n\n        <!-- Tabs -->\n        <ul class=\"nav nav-pills mb-3\" id=\"pills-tab\" role=\"tablist\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link active\" id=\"pills-home-tab\" data-toggle=\"pill\" href=\"#pills-home\" role=\"tab\" aria-controls=\"pills-home\"\n              aria-selected=\"true\"><i class=\"fas fa-car pr-1\"></i> Vehiculo</a>\n          </li>\n          <li class=\"nav-item mx-2\">\n            <a class=\"nav-link\" id=\"pills-profile-tab\" data-toggle=\"pill\" href=\"#pills-profile\" role=\"tab\" aria-controls=\"pills-profile\"\n              aria-selected=\"false\"><i class=\"fas fa-file-alt pr-1\"></i> Orden</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" id=\"pills-contact-tab\" data-toggle=\"pill\" href=\"#pills-contact\" role=\"tab\" aria-controls=\"pills-contact\"\n              aria-selected=\"false\"><i class=\"fas fa-user-circle pr-1\"></i> Dueño</a>\n          </li>\n        </ul>\n\n        <!-- Contenido -->\n        <div class=\"tab-content\" id=\"pills-tabContent\">\n          <!-- Info del Vehiculo -->\n          <div class=\"tab-pane fade show active\" id=\"pills-home\" role=\"tabpanel\" aria-labelledby=\"pills-home-tab\">\n            <div class=\"container\">\n              <div class=\"row\">\n                <div class=\"col-3 d-flex align-items-center\">\n                  <img class=\"img-responsive rounded mx-auto mt-4 mb-2\" src=\"assets/detalle-vehiculo/car.png\" alt=\"Imagen Vehiculo\" width=\"130\" height=\"140\">\n                </div>\n                <div class=\"col-9\">\n                  <ul class=\"list-group list-group-flush\">\n                    <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n                      <span class=\"lead\">Placa: </span>\n                      <p class=\"lead m-0\">{{vehiculo.Placa}}</p>\n                    </li>\n                    <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n                      <span class=\"lead\">Color: </span>\n                      <div *ngIf=\"vehiculo.Color == 'Amarillo'\" class=\"color color-amarillo mt-1 mr-0\"></div>\n                      <div *ngIf=\"vehiculo.Color == 'Arena'\" class=\"color color-arena mt-1 mr-0\"></div>\n                      <div *ngIf=\"vehiculo.Color == 'Azul'\" class=\"color color-azul mt-1 mr-0\"></div>\n                      <div *ngIf=\"vehiculo.Color == 'Blanco'\" class=\"color color-blanco mt-1 mr-0\"></div>\n                      <div *ngIf=\"vehiculo.Color == 'Gris'\" class=\"color color-gris mt-1 mr-0\"></div>\n                      <div *ngIf=\"vehiculo.Color == 'Negro'\" class=\"color color-negro mt-1 mr-0\"></div>\n                      <div *ngIf=\"vehiculo.Color == 'Plata'\" class=\"color color-plata mt-1 mr-0\"></div>\n                      <div *ngIf=\"vehiculo.Color == 'Rojo'\" class=\"color color-rojo mt-1 mr-0\"></div>\n                      <div *ngIf=\"vehiculo.Color == 'Verde'\" class=\"color color-verde mt-1 mr-0\"></div>\n                    </li>\n                    <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n                      <span class=\"lead\">Año: </span>\n                      <p class=\"lead m-0\">{{vehiculo.Ano}}</p>\n                    </li>\n                    <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n                      <span class=\"lead\">Serial: </span>\n                      <p class=\"lead m-0\">{{vehiculo.Serial}}</p>\n                    </li>\n                    <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n                      <span class=\"lead\">Caja: </span>\n                      <p *ngIf=\"vehiculo.EsAutomatico\" class=\"lead m-0\">Automático</p>\n                      <p *ngIf=\"!vehiculo.EsAutomatico\" class=\"lead m-0\">Sincrónico</p>\n                    </li>\n                    <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n                      <span class=\"lead\">Nro. de Puertas: </span>\n                      <p class=\"lead m-0\">{{vehiculo.NroPuertas}}</p>\n                    </li>\n                    <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n                      <span class=\"lead\">¿Es nuevo? </span>\n                      <p *ngIf=\"vehiculo.EsUnicoDueno\" class=\"lead m-0\">Sí</p>\n                      <p *ngIf=\"!vehiculo.EsUnicoDueno\" class=\"lead m-0\">No</p>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <!-- Info de la Orden -->\n          <div class=\"tab-pane fade\" id=\"pills-profile\" role=\"tabpanel\" aria-labelledby=\"pills-profile-tab\">\n            <div class=\"container\">\n              <div class=\"row\">\n                <div class=\"col-3 d-flex align-items-start\">\n                  <img *ngIf=\"this.vehiculo.Imagen == null || this.vehiculo.Imagen == undefined\" class=\"img-responsive rounded mx-auto mt-4 mb-2\" src=\"assets/detalle-vehiculo/orden.png\" alt=\"Imagen Orden\" width=\"130\" height=\"140\">\n                  <img *ngIf=\"this.vehiculo.Imagen != null && this.vehiculo.Imagen != undefined\" class=\"img-fluid rounded mx-auto mt-4 mb-2\"\n                    [src]=\"this.vehiculo.Imagen\" alt=\"Imagen Orden\">\n                </div>\n                <div class=\"col-9\">\n                  <ul class=\"list-group list-group-flush\">\n                    <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n                      <span class=\"lead\">Estado: </span>\n                      <span *ngIf=\"vehiculo.Estado == undefined\" class=\"badge badge-pill badge-primary font-bigger\">Sin Cita</span>\n                      <span *ngIf=\"vehiculo.Estado == 'En Espera'\" class=\"badge badge-pill badge-warning text-white font-bigger\">{{vehiculo.Estado}}</span>\n                      <span *ngIf=\"vehiculo.Estado == 'Evaluado'\" class=\"badge badge-pill badge-secondary text-white\">{{vehiculo.Estado}}</span>\n                      <span *ngIf=\"vehiculo.Estado == 'En Reparacion'\" class=\"badge badge-pill badge-info text-white font-bigger\">{{vehiculo.Estado}}</span>\n                      <span *ngIf=\"vehiculo.Estado == 'Reparado'\" class=\"badge badge-pill badge-success text-white\">{{vehiculo.Estado}}</span>\n                      <span *ngIf=\"vehiculo.Estado == 'Listo'\" class=\"badge badge-pill badge-primary text-white\">{{vehiculo.Estado}}</span>\n                    </li>\n                    <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n                      <span class=\"lead\">Servicio: </span>\n                      <p *ngIf=\"vehiculo.Servicio != undefined\" class=\"lead m-0\">{{vehiculo.Servicio}}</p>\n                      <p *ngIf=\"vehiculo.Servicio == undefined\" class=\"lead m-0\">No Aplica</p>\n                    </li>\n                    <li class=\"list-group-item\">\n                      <span class=\"lead mb-4\">Detalle: </span>\n                      <p *ngIf=\"vehiculo.DetalleOrden != undefined\" class=\"text-justify mx-0 mt-3\">{{vehiculo.DetalleOrden}}</p>\n                      <p *ngIf=\"vehiculo.DetalleOrden == undefined\" class=\"text-justify mx-0 mt-3\">No Aplica</p>\n                    </li>\n                    <li class=\"list-group-item\">\n                      <span class=\"lead mb-4\">Evaluacion: </span>\n                      <p *ngIf=\"vehiculo.Evaluacion != undefined\" class=\"text-justify mx-0 mt-3\">{{vehiculo.Evaluacion}}</p>\n                      <p *ngIf=\"vehiculo.Evaluacion == undefined\" class=\"text-justify mx-0 mt-3\">Por Evaluar</p>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <!-- Info del Dueño -->\n          <div class=\"tab-pane fade\" id=\"pills-contact\" role=\"tabpanel\" aria-labelledby=\"pills-contact-tab\">\n            <div class=\"container\">\n              <div class=\"row\">\n                <div class=\"col-3 d-flex align-items-center\">\n                  <img class=\"img-responsive rounded mx-auto mt-4 mb-2\" src=\"assets/detalle-vehiculo/man.png\" alt=\"Imagen Vehiculo\" width=\"130\"\n                    height=\"140\">\n                </div>\n                <div *ngIf=\"dueno != undefined\" class=\"col-9\">\n                  <ul class=\"list-group list-group-flush\">\n                    <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n                      <span class=\"lead\">Nombre: </span>\n                      <p class=\"lead m-0\">{{dueno.Nombre}} {{dueno.Apellido}}</p>\n                    </li>\n                    <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n                      <span class=\"lead\">Cedula: </span>\n                      <p class=\"lead m-0\">{{dueno.Cedula}}</p>\n                    </li>\n                    <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n                      <span class=\"lead\">Usuario: </span>\n                      <p class=\"lead m-0\">{{dueno.Username}}</p>\n                    </li>\n                    <li class=\"list-group-item d-flex justify-content-between align-items-center\">\n                      <span class=\"lead\">Correo: </span>\n                      <p class=\"lead m-0\">{{dueno.Email}}</p>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n    </div>\n  </div>\n  <div class=\"row mt-2 mb-5\" *ngIf=\"this.tengoQR\">\n    <div class=\"col d-flex justify-content-center\">\n      <a class=\"btn btn-primary\" [href]=\"this.vehiculo.codigoQR\">Imprimir QR</a>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/detalle-vehiculo/detalle-vehiculo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetalleVehiculoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DetalleVehiculoComponent = /** @class */ (function () {
    function DetalleVehiculoComponent(http, flashMessage, router) {
        this.http = http;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    DetalleVehiculoComponent.prototype.ngOnInit = function () {
        var _this = this;
        var idCliente = '';
        if (localStorage.getItem('lleguePorQR') == 'true') {
            this.tengoQR = true;
            this.vehiculo = JSON.parse(localStorage.getItem('vehiculoQR'));
            idCliente = JSON.parse(localStorage.getItem('vehiculoQR')).Cliente;
            localStorage.setItem('vehiculo-detalle', '0');
            localStorage.setItem('ultima-pagina', 'lector-qr');
        }
        else {
            // Toma el indice del carro a mostrar de localStorage
            var indice = Number(localStorage.getItem('vehiculo-detalle'));
            // Toma el arreglo entero de vehiculos de localStorage
            var arreglo = JSON.parse(localStorage.getItem('vehiculos'));
            // Guarda la informacion del vehiculo a mostrar
            this.vehiculo = arreglo[indice];
            if (arreglo[indice].codigoQR) {
                this.tengoQR = true;
            }
            else {
                this.tengoQR = false;
            }
            console.log(this.vehiculo);
            // Toma el ID del dueño del vehiculo
            idCliente = arreglo[indice].Cliente;
            localStorage.setItem('ultima-pagina', 'cola-espera');
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]();
        // Settear los encabezados para la petición al API
        headers.append('Authorization', localStorage.getItem('id_token'));
        headers.append('Content-Type', 'application/json');
        this.http.post('users/cliente', { idCliente: idCliente }, { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            if (response.success) {
                _this.dueno = response.cliente;
                console.log(_this.dueno);
            }
            else {
                _this.flashMessage.show(response.msg, { cssClass: 'custom-danger', timeout: 3000 });
            }
        }, function (err) {
            console.log('Error al pedir los datos del dueño desde DetalleVehiculoComponent: ', err);
            return false;
        });
    };
    DetalleVehiculoComponent.prototype.regresar = function () {
        localStorage.setItem('lleguePorQR', 'false');
        localStorage.setItem('vehiculoQR', null);
        this.router.navigate([localStorage.getItem('ultima-pagina')]);
    };
    DetalleVehiculoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-detalle-vehiculo',
            template: __webpack_require__("../../../../../src/app/components/detalle-vehiculo/detalle-vehiculo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/detalle-vehiculo/detalle-vehiculo.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], DetalleVehiculoComponent);
    return DetalleVehiculoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer {\n    color: #d1d1d1;\n    bottom: 0;\n    width: 100%;\n}\n\n.font-light {\n    color: white !important;\n}\n\n.prefooter {\n    bottom: 0;\n    min-height: 3rem;\n    width: 100% !important;\n}\n\nul li a {\n    color: #d1d1d1;\n}\n\nul li a:hover { \n    text-decoration: none !important;\n    color: #3898ff;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!-- Footer -->\n<div class=\"row footer bg-dark p-5 m-0\">\n  <div class=\"col-12 col-md-3\">\n    <h5>Enlaces</h5>\n    <ul class=\"list-unstyled\">\n      <li>\n        <a [routerLink]=\"['/']\">Home</a>\n      </li>\n      <li>\n        <a [routerLink]=\"['/profile']\">Perfil</a>\n      </li>\n      <li>\n        <a href=\"https://drive.google.com/drive/u/1/folders/1J2_JMFTYORYKA8YprxW4-q5s0ETc4br-\">Documentación</a>\n      </li>\n      <li>\n        <a href=\"https://github.com/luisgraterol/lux-repair\">Repositorio</a>\n      </li>\n    </ul>\n  </div>\n  <div class=\"col-12 col-md-6\">\n    <p class=\"text-center font-weight-light my-4 pb-4\">Desarrollado por Luis Graterol, Santiago Lossada y José Guerrero.</p>\n  </div>\n  <div class=\"col-12 col-md-3 d-flex justify-content-center align-items-start\">\n    <button class=\"btn btn-dark btn-outline-secondary\">Regresar</button>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/form-empleado/form-empleado.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main {\n    min-height: 42.5rem;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/form-empleado/form-empleado.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row main\">\n  <div class=\"col-6 col-lg-4 mx-auto mt-5\">\n    <h3 class=\"pt-5 text-center\">Mis Datos</h3>\n    <form (submit)=\"agregarDatos()\">\n      <div class=\"form-group\">\n        <label for=\"sexo\">Sexo</label>\n        <select class=\"form-control\" [(ngModel)]=\"sexo\" name=\"sexo\" id=\"sexo\">\n          <option>Masculino</option>\n          <option>Femenino</option>\n          <option>Otro</option>\n        </select>\n      </div>\n      <div class=\"form-group\">\n        <label>Fecha de Nacimiento</label>\n        <input type=\"date\" class=\"form-control\" [(ngModel)]=\"fechaNacimiento\" name=\"fechaNacimiento\">\n      </div>\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"d-flex justify-content-center mt-3\">\n              <input type=\"submit\" class=\"btn btn-primary\" value=\"Completar\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/form-empleado/form-empleado.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormEmpleadoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// Http Requests


var FormEmpleadoComponent = /** @class */ (function () {
    function FormEmpleadoComponent(http, authService, flashMessage, router) {
        this.http = http;
        this.authService = authService;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    FormEmpleadoComponent.prototype.ngOnInit = function () { };
    FormEmpleadoComponent.prototype.agregarDatos = function () {
        var _this = this;
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
        var data = {
            id: JSON.parse(localStorage.getItem('user')).id,
            sexo: this.sexo,
            fechaNacimiento: this.fechaNacimiento,
        };
        console.log('Datos: ', data);
        // Settear los encabezados para la petición al API
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        // Hacer la petición, se retorna una promesa
        this.http.post('users/datos-empleado', data, { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            if (response.success) {
                _this.flashMessage.show(response.msg, { cssClass: 'custom-success', timeout: 3000 });
                _this.router.navigate(['/profile']);
            }
            else {
                _this.flashMessage.show(response.msg, { cssClass: 'custom-danger', timeout: 3000 });
                _this.router.navigate(['/form-empleado']);
            }
        });
    };
    FormEmpleadoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-form-empleado',
            template: __webpack_require__("../../../../../src/app/components/form-empleado/form-empleado.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/form-empleado/form-empleado.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], FormEmpleadoComponent);
    return FormEmpleadoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/form-repuesto/form-repuesto.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main {\n    min-height: 42.5rem;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/form-repuesto/form-repuesto.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row main p-4 p-md-3\">\n    <!-- Form de Registro para Repuestos -->          \n    <div class=\"container py-5 mt-3 mb-5\">\n        <h2 class=\"mb-3\">Registro de Repuesto</h2>\n        <form (submit)=\"registrarRepuesto()\">\n            <div class=\"form-row\">\n              <div class=\"form-group col-md-4\">\n                  <label for=\"nombre\">Categoria</label>\n                  <select id=\"nombre\" class=\"form-control\" [(ngModel)]=\"nombre\" name=\"nombre\">\n                      <option selected>Aceite</option>\n                      <option>Caucho</option>\n                      <option>Rin</option>\n                      <option>Electronicos</option>\n                      <option>Carroceria</option>\n                      <option>Otros</option>\n                  </select>\n              </div>\n              <div class=\"form-group col-md-4\">\n                  <label for=\"descripcion\">Descripción</label>\n                  <input type=\"text\" class=\"form-control\" id=\"descripcion\" placeholder=\"Ej: PDVSA Semi-Sintetico 15W40W, Pirelli 14'\" [(ngModel)]=\"descripcion\" name=\"descripcion\">\n              </div>\n              <div class=\"form-group col-md-2\">\n                  <label for=\"cantidad\">Cantidad</label>\n                  <select id=\"cantidad\" class=\"form-control\" placeholder=\"1\" [(ngModel)]=\"cantidad\" name=\"cantidad\">\n                      <option selected>1</option>\n                      <option>2</option>\n                      <option>3</option>\n                      <option>4</option>\n                      <option>5</option>\n                      <option>6</option>\n                      <option>7</option>\n                      <option>8</option>\n                      <option>9</option>\n                      <option>10</option>\n                      <option>11</option>\n                      <option>12</option>\n                      <option>15</option>\n                      <option>20</option>\n                      <option>24</option>\n                  </select>\n                </div>\n              <div class=\"form-group col-md-2\">\n                  <legend class=\"col-form-label\">Tipo</legend>\n                  <div class=\"form-check\">\n                      <input class=\"form-check-input\" type=\"radio\" name=\"tipo\" id=\"tipo1\" value=\"Original\" checked [(ngModel)]=\"tipo\" name=\"tipo\">\n                      <label class=\"form-check-label\" for=\"tipo1\">\n                          Original\n                      </label>\n                  </div>\n                  <div class=\"form-check\">\n                      <input class=\"form-check-input\" type=\"radio\" name=\"tipo\" id=\"tipo2\" value=\"Generico\" [(ngModel)]=\"tipo\" name=\"tipo\">\n                      <label class=\"form-check-label\" for=\"tipo2\">\n                          Generico\n                      </label>\n                  </div>\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-group col-md-12\">\n                  <label for=\"detalle\">Detalle</label>\n                  <textarea class=\"form-control\" name=\"detalle\" id=\"detalle\" [(ngModel)]=\"detalle\" rows=\"3\" placeholder=\"Agregue cualquier información adicional que considere pertinente.\"></textarea>\n                </div>\n            </div>\n  \n            <div class=\"d-flex justify-content-center\">\n                <button type=\"submit\" class=\"btn btn-primary mt-4\">Registrar Repuesto</button>\n            </div>\n            \n            \n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/form-repuesto/form-repuesto.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormRepuestoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FormRepuestoComponent = /** @class */ (function () {
    function FormRepuestoComponent(http, flashMessage, router) {
        this.http = http;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    FormRepuestoComponent.prototype.ngOnInit = function () { };
    FormRepuestoComponent.prototype.registrarRepuesto = function () {
        var _this = this;
        // // Valida que no se haya dejado ninguna casilla vacia
        if (this.faltaAlgunaCasilla()) {
            this.flashMessage.show('Por favor, llene todas las casillas.', { cssClass: 'custom-danger', timeout: 5000 });
            return false;
        }
        // Convertimos el string de la cantidad a un entero
        var cantidad = Number(this.cantidad);
        var data = {
            Nombre: this.nombre,
            Descripcion: this.descripcion,
            Cantidad: cantidad,
            Tipo: this.tipo,
            Detalle: this.detalle,
        };
        console.log(data);
        // Settear los encabezados para la petición al API
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        // Hacer la petición, se retorna una promesa
        this.http.post('users/crear-repuesto', data, { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            if (response.success) {
                _this.flashMessage.show(response.msg, { cssClass: 'custom-success', timeout: 3000 });
                _this.router.navigate(['/lista-repuestos']);
            }
            else {
                _this.flashMessage.show(response.msg, { cssClass: 'custom-danger', timeout: 3000 });
                _this.router.navigate(['/form-repuesto']);
            }
        });
    };
    // Funcion que retorna false si alguna casilla ha dejado de llenarse
    FormRepuestoComponent.prototype.faltaAlgunaCasilla = function () {
        return (this.nombre === undefined ||
            this.nombre === '' ||
            this.descripcion === undefined ||
            this.descripcion === '' ||
            this.cantidad === undefined ||
            this.cantidad === '' ||
            this.tipo === undefined ||
            this.tipo === '' ||
            this.detalle === undefined ||
            this.detalle === '');
    };
    FormRepuestoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-form-repuesto',
            template: __webpack_require__("../../../../../src/app/components/form-repuesto/form-repuesto.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/form-repuesto/form-repuesto.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], FormRepuestoComponent);
    return FormRepuestoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/form-vehiculo/form-vehiculo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main {\n    min-height: 42.5rem;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/form-vehiculo/form-vehiculo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row main p-4 p-md-3\">\n    <!-- Form de Registro para Vehiculos -->          \n    <div class=\"container py-5 mt-3 mb-5\">\n        <h2 class=\"mb-3\">Registro de Vehículo</h2>\n        <form (submit)=\"registrarVehiculo()\">\n            <div class=\"form-row\">\n                <div class=\"form-group col-md-3\">\n                    <label for=\"marcaV\">Marca</label>\n                    <select id=\"marcaV\" class=\"form-control\" [(ngModel)]=\"marca\" name=\"marca\">\n                        <option selected>Alfa Romeo</option>\n                        <option>Aston Martin</option>\n                        <option>Audi</option>\n                        <option>Chery</option>\n                        <option>Chevrolet</option>\n                        <option>Dodge</option>\n                        <option>Ferrari</option>\n                        <option>Ford</option>\n                        <option>Honda</option>\n                        <option>Lamborghini</option>\n                        <option>Lexus</option>\n                        <option>Mazda</option>\n                        <option>Mercedez Benz</option>\n                        <option>Mitsubishi</option>\n                        <option>Nissan</option>\n                        <option>Toyota</option>\n                        <option>Volvo</option>\n                        <option>Otros</option>\n                    </select>\n                </div>\n                <div class=\"form-group col-md-3\">\n                    <label for=\"modeloV\">Modelo</label>\n                    <select id=\"modeloV\" class=\"form-control\" [(ngModel)]=\"modelo\" name=\"modelo\">\n                        <option selected>488</option>\n                        <option>458 Spider</option>\n                        <option>4Runner</option>\n                        <option>Accord</option>\n                        <option>Aventador</option>\n                        <option>Aveo</option>\n                        <option>C-Class</option>\n                        <option>Camaro</option>\n                        <option>Challenger</option>\n                        <option>Charger</option>\n                        <option>Civic</option>\n                        <option>Durango</option>\n                        <option>E-Class</option>\n                        <option>Eclipse Cross</option>\n                        <option>Explorer</option>\n                        <option>F150</option>\n                        <option>FJ Cruiser</option>\n                        <option>Gran Tiger</option>\n                        <option>Giulia</option>\n                        <option>HS</option>\n                        <option>Huracán</option>\n                        <option>IS</option>\n                        <option>J50</option>\n                        <option>LS</option>\n                        <option>Mazda3</option>\n                        <option>Mazda6</option>\n                        <option>Montero</option>\n                        <option>Murano</option>\n                        <option>Mustang</option>\n                        <option>MX-5</option>\n                        <option>Orinoco</option>\n                        <option>Outlander</option>\n                        <option>Pathfinder</option>\n                        <option>R8</option>\n                        <option>Rapide S</option>\n                        <option>Ridgeline</option>\n                        <option>RS 6</option>\n                        <option>S-Class</option>\n                        <option>S90</option>\n                        <option>Sequoia</option>\n                        <option>Silverado</option>\n                        <option>Stelvio Quadrifoglio</option>\n                        <option>Stelvio TI</option>\n                        <option>Tiggo</option>\n                        <option>Titan</option>\n                        <option>TTS</option>\n                        <option>Urus</option>\n                        <option>V40 Cross Country</option>\n                        <option>Vanquish</option>\n                        <option>Vulcan</option>\n                        <option>XC90</option>\n                    </select>\n                </div>\n                <div class=\"form-group col-md-3\">\n                    <label for=\"anoV\">Año</label>\n                    <select id=\"anoV\" class=\"form-control\" placeholder=\"2018\" [(ngModel)]=\"ano\" name=\"ano\">\n                        <option selected>2018</option>\n                        <option>2017</option>\n                        <option>2016</option>\n                        <option>2015</option>\n                        <option>2014</option>\n                        <option>2013</option>\n                        <option>2012</option>\n                        <option>2011</option>\n                        <option>2010</option>\n                        <option>2009</option>\n                        <option>2008</option>\n                        <option>2007</option>\n                        <option>2006</option>\n                        <option>2005</option>\n                        <option>2004</option>\n                        <option>2003</option>\n                        <option>2002</option>\n                        <option>2001</option>\n                        <option>2000</option>\n                        <option>1999</option>\n                        <option>1998</option>\n                        <option>1997</option>\n                        <option>1996</option>\n                        <option>1995</option>\n                        <option>1994</option>\n                        <option>1993</option>\n                        <option>1992</option>\n                        <option>1991</option>\n                        <option>1990</option>\n                        <option>1989</option>\n                        <option>1988</option>\n                        <option>1987</option>\n                        <option>1986</option>\n                        <option>1985</option>\n                        <option>1984</option>\n                        <option>1983</option>\n                        <option>1982</option>\n                        <option>1981</option>\n                        <option>1980</option>\n                        <option>1979</option>\n                        <option>1978</option>\n                        <option>1977</option>\n                        <option>1976</option>\n                        <option>1975</option>\n                        <option>1974</option>\n                        <option>1973</option>\n                        <option>1972</option>\n                        <option>1971</option>\n                        <option>1970</option>\n                    </select>\n                </div>\n                <div class=\"form-group col-md-3\">\n                    <label for=\"placaV\">Placa</label>\n                    <input type=\"text\" class=\"form-control\" id=\"placaV\" placeholder=\"AA000AA\" [(ngModel)]=\"placa\" name=\"placa\">\n                </div>\n            </div>\n            <div class=\"form-row\">\n                <div class=\"form-group col-md-3\">\n                    <label for=\"serialV\">Serial</label>\n                    <input type=\"text\" class=\"form-control\" id=\"serialV\" placeholder=\"123789456987321\" [(ngModel)]=\"serial\" name=\"serial\">\n                </div>\n                <div class=\"form-group col-md-3\">\n                    <label for=\"colorV\">Color</label>\n                    <select id=\"colorV\" class=\"form-control\" [(ngModel)]=\"color\" name=\"color\">\n                        <option selected>Amarillo</option>\n                        <option>Arena</option>\n                        <option>Azul</option>\n                        <option>Blanco</option>\n                        <option>Gris</option>\n                        <option>Negro</option>\n                        <option>Plata</option>\n                        <option>Rojo</option>\n                        <option>Verde</option>\n                    </select>\n                </div>\n                <div class=\"form-group col-md-3\">\n                    <label for=\"puertasV\">Puertas</label>\n                    <select id=\"puertasV\" class=\"form-control\" [(ngModel)]=\"puertas\" name=\"puertas\">\n                        <option selected>3</option>\n                        <option>5</option>\n                    </select>\n                </div>\n            </div>\n            <div class=\"form-row\">\n                <div class=\"form-group col-md-3\">\n                    <legend class=\"col-form-label\">Caja</legend>\n                    <div class=\"form-check\">\n                        <input class=\"form-check-input\" type=\"radio\" name=\"cajaV\" id=\"cajaV1\" value=\"Automático\" checked [(ngModel)]=\"caja\" name=\"caja\">\n                        <label class=\"form-check-label\" for=\"cajaV1\">\n                            Automático\n                        </label>\n                    </div>\n                    <div class=\"form-check\">\n                        <input class=\"form-check-input\" type=\"radio\" name=\"cajaV\" id=\"cajaV2\" value=\"Sincrónico\" [(ngModel)]=\"caja\" name=\"caja\">\n                        <label class=\"form-check-label\" for=\"cajaV2\">\n                            Sincrónico\n                        </label>\n                    </div>\n                </div>\n                <div class=\"form-group col-md-3\">\n                    <legend class=\"col-form-label\">Condición</legend>\n                    <div class=\"form-check\">\n                        <input class=\"form-check-input\" type=\"radio\" name=\"condicionV\" id=\"condicionV1\" value=\"Nuevo\" checked [(ngModel)]=\"condicion\" name=\"condicion\">\n                        <label class=\"form-check-label\" for=\"condicionV1\">\n                            Nuevo\n                        </label>\n                    </div>\n                    <div class=\"form-check\">\n                        <input class=\"form-check-input\" type=\"radio\" name=\"condicionV\" id=\"condicionV2\" value=\"Segunda Mano\" [(ngModel)]=\"condicion\" name=\"condicion\">\n                        <label class=\"form-check-label\" for=\"condicionV2\">\n                            Segunda Mano\n                        </label>\n                    </div>\n                </div>\n            </div>\n            \n            <!-- <br>\n            <hr class=\"style1\">\n            <br>\n\n            <div class=\"form-row\">\n                <div class=\"form-group col-md-3\">\n                    <label for=\"serviciolV\">Servicio a Solicitar</label>\n                    <select id=\"inputState\" class=\"form-control\" [(ngModel)]=\"servicio\" name=\"servicio\">\n                        <option selected>Revisión General</option>\n                        <option>Cambio de Aceite</option>\n                        <option>Carrocería</option>\n                        <option>Alineación</option>\n                        <option>Otro</option>\n                    </select>\n                </div>\n                <div class=\"form-group col-md-9\">\n                    <label for=\"notasV\">Detalle de Situación</label>\n                    <input type=\"text\" class=\"form-control\" id=\"notasV\" placeholder=\"Se presentó falla al arrancar. No prenden las luces delanteras. Etc\" [(ngModel)]=\"detalles\" name=\"detalles\">\n                </div>\n            </div> -->\n            <div class=\"d-flex justify-content-center\">\n                <button type=\"submit\" class=\"btn btn-primary mt-4\">Registrar Vehículo</button>\n            </div>\n            \n            \n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/form-vehiculo/form-vehiculo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormVehiculoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// Http Requests


var FormVehiculoComponent = /** @class */ (function () {
    function FormVehiculoComponent(http, flashMessage, router) {
        this.http = http;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    FormVehiculoComponent.prototype.ngOnInit = function () { };
    FormVehiculoComponent.prototype.registrarVehiculo = function () {
        var _this = this;
        // Valida que no se haya dejado ninguna casilla vacia
        if (this.faltaAlgunaCasilla()) {
            this.flashMessage.show('Por favor, llene todas las casillas.', { cssClass: 'custom-danger', timeout: 5000 });
            return false;
        }
        // Convertimos el string del año a un entero
        var Ano = Number(this.ano);
        // Convertimos el string del nro. de puertas a un entero
        var NroPuertas = Number(this.puertas);
        // Este dato debe guardarse como un booleano
        var EsUnicoDueno = false;
        if (this.condicion === 'Nuevo') {
            EsUnicoDueno = true;
        }
        // Este dato tambien debe guardarse como un booleano
        var EsAutomatico = false;
        if (this.caja === 'Automático') {
            EsAutomatico = true;
        }
        var data = {
            idCliente: JSON.parse(localStorage.getItem('user')).id,
            Marca: this.marca,
            Modelo: this.modelo,
            Ano: Ano,
            Placa: this.placa,
            Serial: this.serial,
            Color: this.color,
            NroPuertas: NroPuertas,
            EsAutomatico: EsAutomatico,
            EsUnicoDueno: EsUnicoDueno,
            Servicio: this.servicio,
            Detalles: this.detalles,
        };
        console.log(data);
        // Settear los encabezados para la petición al API
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        // Hacer la petición, se retorna una promesa
        this.http.post('users/registrar-vehiculo', data, { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            if (response.success) {
                _this.flashMessage.show(response.msg, { cssClass: 'custom-success', timeout: 3000 });
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.flashMessage.show(response.msg, { cssClass: 'custom-danger', timeout: 3000 });
                _this.router.navigate(['/form-vehiculo']);
            }
        });
    };
    // Funcion que retorna false si alguna casilla ha dejado de llenarse
    FormVehiculoComponent.prototype.faltaAlgunaCasilla = function () {
        return (this.marca === undefined ||
            this.marca === '' ||
            this.modelo === undefined ||
            this.modelo === '' ||
            this.placa === undefined ||
            this.placa === '' ||
            this.serial === undefined ||
            this.serial === '' ||
            this.color === undefined ||
            this.color === '' ||
            this.ano === undefined ||
            this.puertas === undefined ||
            this.condicion === undefined ||
            this.caja === undefined);
    };
    FormVehiculoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-form-vehiculo',
            template: __webpack_require__("../../../../../src/app/components/form-vehiculo/form-vehiculo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/form-vehiculo/form-vehiculo.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], FormVehiculoComponent);
    return FormVehiculoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/garage/garage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".color {\n    border: 1px solid grey;\n    border-radius: 10px;\n    height: 20px;\n    width: 20px;\n    margin: auto;\n\n}\n\n.color-amarillo { background: yellow; }\n\n.color-arena { background: rgb(170, 170, 67); }\n\n.color-azul { background: rgb(0, 119, 255); }\n\n.color-blanco { background: white; }\n\n.color-gris { background: rgb(107, 107, 107); }\n\n.color-negro { background: black; }\n\n.color-plata { background: rgb(192, 192, 192); }\n\n.color-rojo { background: red; }\n\n.color-verde { background: rgb(48, 194, 48); }\n\n.main {\n    min-height: 42.5rem;\n}\n\ntr:hover { background: #eaf2ff !important; }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/garage/garage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col mx-0 mx-sm-4 mx-md-5 mx-lg-5 mx-xl-5 mt-5 mb-4\">\n    <h3>Garage</h3>\n  </div>\n</div>\n<div class=\"row main\">\n  <!-- Table -->\n  <div class=\"container\">\n    <div class=\"table-responsive\">\n      <table class=\"table table-hover bg-light text-dark\">\n        <thead class=\"thead-light\">\n          <tr>\n            <th scope=\"col\">ID</th>\n            <th scope=\"col\">Vehículo</th>\n            <th scope=\"col\">Placa</th>\n            <th scope=\"col\">Color</th>\n            <th scope=\"col\">Servicio</th>\n            <th scope=\"col\">Estado</th>\n            <th scope=\"col\">Acciones</th>\n            <th scope=\"col\"></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let vehiculo of vehiculos; let i=index\">\n            <th *ngIf=\"vehiculo.Activo\" scope=\"row\">{{vehiculo.id}}</th>\n            <td *ngIf=\"vehiculo.Activo\">{{vehiculo.Marca}} {{vehiculo.Modelo}}</td>\n            <td *ngIf=\"vehiculo.Activo\">{{vehiculo.Placa}}</td>\n            <td *ngIf=\"vehiculo.Activo\">\n              <div *ngIf=\"vehiculo.Color == 'Amarillo'\" class=\"color color-amarillo mt-1\"></div>\n              <div *ngIf=\"vehiculo.Color == 'Arena'\" class=\"color color-arena mt-1\"></div>\n              <div *ngIf=\"vehiculo.Color == 'Azul'\" class=\"color color-azul mt-1\"></div>\n              <div *ngIf=\"vehiculo.Color == 'Blanco'\" class=\"color color-blanco mt-1\"></div>\n              <div *ngIf=\"vehiculo.Color == 'Gris'\" class=\"color color-gris mt-1\"></div>\n              <div *ngIf=\"vehiculo.Color == 'Negro'\" class=\"color color-negro mt-1\"></div>\n              <div *ngIf=\"vehiculo.Color == 'Plata'\" class=\"color color-plata mt-1\"></div>\n              <div *ngIf=\"vehiculo.Color == 'Rojo'\" class=\"color color-rojo mt-1\"></div>\n              <div *ngIf=\"vehiculo.Color == 'Verde'\" class=\"color color-verde mt-1\"></div>\n\n            </td>\n            <td *ngIf=\"vehiculo.Activo\">\n              <span *ngIf=\"vehiculo.Servicio == undefined\">Sin Servicio</span>\n              <span *ngIf=\"vehiculo.Servicio != undefined\">{{vehiculo.Servicio}}</span>\n            </td>\n            <td *ngIf=\"vehiculo.Activo\">\n              <span *ngIf=\"vehiculo.Estado == undefined\" class=\"badge badge-pill badge-primary\">Sin Cita</span>\n              <span *ngIf=\"vehiculo.Estado == 'En Espera'\" class=\"badge badge-pill badge-warning text-white\">{{vehiculo.Estado}}</span>\n              <span *ngIf=\"vehiculo.Estado == 'Evaluado'\" class=\"badge badge-pill badge-secondary text-white\">{{vehiculo.Estado}}</span>\n              <span *ngIf=\"vehiculo.Estado == 'En Reparacion'\" class=\"badge badge-pill badge-info text-white\">{{vehiculo.Estado}}</span>\n              <span *ngIf=\"vehiculo.Estado == 'Reparado'\" class=\"badge badge-pill badge-success text-white\">{{vehiculo.Estado}}</span>\n              <span *ngIf=\"vehiculo.Estado == 'Listo'\" class=\"badge badge-pill badge-primary text-white\">{{vehiculo.Estado}}</span>\n            </td>\n            <td *ngIf=\"vehiculo.Activo\">\n              <button *ngIf=\"vehiculo.Servicio == undefined\" (click)=\"irAOrden(i)\" class=\"btn btn-sm btn-outline-success\">Solicitar Cita</button>\n              <button *ngIf=\"vehiculo.Servicio != undefined\" (click)=\"cancelarCita(i)\" class=\"btn btn-sm btn-outline-danger\">Cancelar Cita</button>\n            </td>\n            <td *ngIf=\"vehiculo.Activo\">\n              <button *ngIf=\"vehiculo.Servicio == undefined\" (click)=\"eliminarVehiculo(i)\" class=\"btn btn-sm btn-outline-danger\">Eliminar</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/garage/garage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GarageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GarageComponent = /** @class */ (function () {
    function GarageComponent(http, flashMessage, router) {
        this.http = http;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    GarageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]();
        // Busca el token del usuario que esta ingresado en el sistema actualmente
        var token = localStorage.getItem('id_token');
        // Settear los encabezados para la petición al API
        headers.append('Authorization', token);
        headers.append('Content-Type', 'application/json');
        this.http.get('users/vehiculos', { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data.vehiculos);
            _this.vehiculos = data.vehiculos;
            localStorage.setItem('vehiculos', JSON.stringify(data.vehiculos));
        }, function (err) {
            console.log('Error al pedir los vehiculos desde GarageComponent: ', err);
            return false;
        });
    };
    GarageComponent.prototype.irAOrden = function (indice) {
        localStorage.setItem('vehiculo-con-orden', this.vehiculos[indice].id);
        this.router.navigate(['/solicitar-orden']);
    };
    GarageComponent.prototype.eliminarVehiculo = function (indice) {
        var _this = this;
        // Settear los encabezados para la petición al API
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        var id = this.vehiculos[indice].id;
        // Hacer la petición, se retorna una promesa
        this.http.post('users/eliminar-vehiculo', { id: id }, { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            if (response.success) {
                _this.flashMessage.show(response.msg, { cssClass: 'custom-success', timeout: 3000 });
            }
            else {
                _this.flashMessage.show(response.msg, { cssClass: 'custom-danger', timeout: 3000 });
            }
        });
        // Lo elimina de la interfaz sin necesidad de hacer refresh
        this.vehiculos.splice(indice, 1);
    };
    GarageComponent.prototype.cancelarCita = function (indice) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        this.http.post('cliente/cancelar-cita', { id: this.vehiculos[indice].id }, { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            if (response.success) {
                _this.flashMessage.show(response.msg, { cssClass: 'custom-success', timeout: 3000 });
            }
            else {
                _this.flashMessage.show(response.msg, { cssClass: 'custom-danger', timeout: 3000 });
            }
        });
    };
    GarageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-garage',
            template: __webpack_require__("../../../../../src/app/components/garage/garage.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/garage/garage.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], GarageComponent);
    return GarageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/generar-reporte/generar-reporte.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main {\n    min-height: 42.5rem;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/generar-reporte/generar-reporte.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col mx-0 mx-sm-4 mx-md-5 mx-lg-5 mx-xl-5 mt-4 mb-2\">\n      <h3>Reportes</h3>\n  </div>\n</div>\n<div class=\"row mt-5 pb-5 main\">\n  <div class=\"col d-flex justify-content-center\">\n\n      <!-- Card Deck del Empleado -->\n      <div *ngIf=\"this.rol !== 'cliente'\" class=\"card-deck\">\n        \n          <!-- Gerente -->\n          <div *ngIf=\"this.rol === 'gerente'\" class=\"card text-center\" style=\"max-width: 18rem; max-height: 24rem;\">\n              <img class=\"img-responsive mx-auto mt-4 mb-2\" src=\"assets/detalle-vehiculo/car.png\" alt=\"Imagen Reporte Vehiculo\" width=\"130\" height=\"140\">\n              <div class=\"card-body px-sm-1 px-md-2 px-lg-3 px-xl-3 mt-3\">\n                  <h5 class=\"card-title\">Reporte de Vehiculo</h5>\n                  <p class=\"card-text\">Selecciona vehiculo para generar reporte.</p>\n                  <a class=\"btn btn-outline-primary\" [routerLink]=\"['/reporte-vehiculo']\">Lista Vehiculos</a>\n              </div>\n          </div>\n          <div *ngIf=\"this.rol === 'gerente'\" class=\"card text-center\" style=\"max-width: 18rem; max-height: 24rem;\">\n              <img class=\"img-responsive mx-auto mt-4 mb-2\" src=\"assets/detalle-vehiculo/man.png\" alt=\"Imagen Reporte Cliente\" width=\"130\"\n                  height=\"140\">\n              <div class=\"card-body px-sm-1 px-md-2 px-lg-3 px-xl-3 mt-3\">\n                  <h5 class=\"card-title\">Reporte de Cliente</h5>\n                  <p class=\"card-text\">Selecciona cliente para generar reporte.</p>\n                  <a class=\"btn btn-outline-primary\" [routerLink]=\"['/reporte-cliente']\">Lista Clientes</a>\n              </div>\n          </div>\n\n          <div *ngIf=\"this.rol === 'gerente'\" class=\"card text-center\" style=\"max-width: 18rem; max-height: 24rem;\">\n                <img class=\"img-responsive mx-auto mt-4 mb-2\" src=\"assets/detalle-vehiculo/orden.png\" alt=\"Imagen Reporte Modelo\" width=\"130\" height=\"140\">\n                <div class=\"card-body px-sm-1 px-md-2 px-lg-3 px-xl-3 mt-3\">\n                    <h5 class=\"card-title\">Reporte por Modelo</h5>\n                    <p class=\"card-text\">Crear un reporte de un  Modelo especifico </p>\n                    <a class=\"btn btn-outline-primary\" [routerLink]=\"['/reporte-modelo']\">Modelos</a>\n                </div>\n            </div>\n            <div *ngIf=\"this.rol === 'gerente'\" class=\"card text-center\" style=\"max-width: 18rem; max-height: 24rem;\">\n                    <img class=\"img-responsive mx-auto mt-4 mb-2\" src=\"assets/dashboard-gerente/mecanico.png\" alt=\"Imagen Reporte Mecanico\" width=\"130\" height=\"140\">\n                    <div class=\"card-body px-sm-1 px-md-2 px-lg-3 px-xl-3 mt-3\">\n                        <h5 class=\"card-title\">Reporte por Mecanico</h5>\n                        <p class=\"card-text\">Crear un reporte por cada mecanico</p>\n                        <a class=\"btn btn-outline-primary\" [routerLink]=\"['/reporte-mecanico']\">Mecanicos</a>\n                    </div>\n                </div>\n\n\n\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/generar-reporte/generar-reporte.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenerarReporteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// HTTP Requests


var GenerarReporteComponent = /** @class */ (function () {
    function GenerarReporteComponent(http, authService, router) {
        this.http = http;
        this.authService = authService;
        this.router = router;
    }
    GenerarReporteComponent.prototype.ngOnInit = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]();
        // Fetches the token of the currently logged in user from localStorage
        headers.append('Authorization', localStorage.getItem('id_token'));
        headers.append('Content-Type', 'application/json');
        this.http.get('users/profile', { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (profile) {
            _this.rol = profile.user.rol;
        }, function (err) {
            console.log('Error while getting the profile: ', err);
            return false;
        });
    };
    GenerarReporteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-generar-reporte',
            template: __webpack_require__("../../../../../src/app/components/generar-reporte/generar-reporte.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/generar-reporte/generar-reporte.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], GenerarReporteComponent);
    return GenerarReporteComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/gestionar-rol/gestionar-rol.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main {\n    min-height: 42.5rem;\n}\n\ntr:hover {\n  background: #eaf2ff !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/gestionar-rol/gestionar-rol.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col mx-0 mx-sm-4 mx-md-5 mx-lg-5 mx-xl-5 mt-5 mb-4\">\n        <h3>Gestión de Roles</h3>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col mx-5 my-4\">\n        <form>\n            <div class=\"form-group\">\n                <label for=\"rol\">Seleccione el rol que quiere asignar</label>\n                <select class=\"form-control\" id=\"rol\" name=\"rol\" [(ngModel)]=\"rol\">\n                    <option>Administrador</option>\n                    <option>Gerente</option>\n                    <option>Mecánico</option>\n                </select>\n            </div>\n        </form>\n    </div>\n</div>\n<div class=\"row main\">\n    <!-- Table -->\n    <div class=\"container\">\n        <div class=\"table-responsive\">\n            <table class=\"table table-hover bg-light text-dark\">\n                <thead class=\"thead-light\">\n                    <tr>\n                        <th scope=\"col\">ID</th>\n                        <th scope=\"col\">Nombre</th>\n                        <th scope=\"col\">Cedula</th>\n                        <th scope=\"col\">Usuario</th>\n                        <th scope=\"col\">Correo</th>\n                        <th scope=\"col\"></th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let empleado of empleados; let i=index\">\n                        <th scope=\"row\">{{empleado.id}}</th>\n                        <td>{{empleado.Nombre}} {{empleado.Apellido}}</td>\n                        <td>{{empleado.Cedula}}</td>\n                        <td>{{empleado.Username}}</td>\n                        <td>{{empleado.Email}}</td>\n                        <td>\n                            <button (click)=\"asignarRol(i)\" class=\"btn btn-sm btn-outline-primary\">Asignar Rol</button>\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/gestionar-rol/gestionar-rol.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GestionarRolComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GestionarRolComponent = /** @class */ (function () {
    function GestionarRolComponent(http, flashMessage, router) {
        this.http = http;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    GestionarRolComponent.prototype.ngOnInit = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]();
        // Busca el token del usuario que esta ingresado en el sistema actualmente
        var token = localStorage.getItem('id_token');
        // Settear los encabezados para la petición al API
        headers.append('Authorization', token);
        headers.append('Content-Type', 'application/json');
        return this.http.get('users/empleados', { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data.empleados);
            _this.empleados = data.empleados;
            localStorage.setItem('empleadosSinRol', JSON.stringify(data.empleados));
        }, function (err) {
            console.log('Error al pedir los empleados desde GestionarRolComponent: ', err);
            return false;
        });
    };
    GestionarRolComponent.prototype.asignarRol = function (indice) {
        var _this = this;
        // Validacion de que se haya seleccionado el rol a asignar
        if (this.rol == undefined || this.rol == '') {
            this.flashMessage.show('Por favor, seleccione un rol.', { cssClass: 'custom-danger', timeout: 5000 });
            return false;
        }
        var rol = this.rol;
        if (rol === 'Mecánico')
            rol = 'Mecanico'; // Quitamos el tilde en la 'a'
        // Setteamos en minuscula la primera letra
        rol = rol.charAt(0).toLowerCase() + rol.slice(1);
        var data = {
            id: this.empleados[indice].id,
            rol: rol
        };
        console.log(data);
        // Settear los encabezados para la petición al API
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        // Hacer la petición, se retorna una promesa
        return this.http.post('users/asignar-rol', data, { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            if (response.success) {
                _this.flashMessage.show(response.msg, { cssClass: 'custom-success', timeout: 3000 });
            }
            else {
                _this.flashMessage.show(response.msg, { cssClass: 'custom-danger', timeout: 3000 });
            }
        });
    };
    GestionarRolComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-gestionar-rol',
            template: __webpack_require__("../../../../../src/app/components/gestionar-rol/gestionar-rol.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/gestionar-rol/gestionar-rol.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], GestionarRolComponent);
    return GestionarRolComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* .main {\n    min-height: 28rem;\n} */\n\n.wrapper-contact {\n  width: 18rem;\n}\n\n.wrapper-intro {\n  width: 18rem;\n}\n\n.bg-intro {\n  background-image: url(\"/assets/home/home-1.jpg\");\n}\n\n.bg-contactform {\n  background-image: url(\"/assets/home/home-2.jpg\");\n}\n\n.parallax {\n  height: 48rem;\n  width: 100% !important;\n  background-attachment: fixed;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n/* RESPONSIVE BREAKPOINTS */\n\n/* Small devices (landscape phones, 576px and up) */\n\n@media (min-width: 576px) {\n  .wrapper-contact {\n    width: 28rem;\n  }\n  .wrapper-intro {\n    width: 26rem;\n  }\n}\n\n/* Medium devices (tablets, 768px and up) */\n\n@media (min-width: 768px) {\n  .wrapper-contact {\n    width: 38rem;\n  }\n  .wrapper-intro {\n    width: 28rem;\n  }\n}\n\n/* Large devices (desktops, 992px and up) */\n\n@media (min-width: 992px) {\n  .wrapper-contact {\n    width: 38rem;\n  }\n  .wrapper-intro {\n    width: 28rem;\n  }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!-- Main -->\n<!-- Parallax de Intro-->\n<div class=\"parallax mx-0 bg-intro d-flex flex-column justify-content-center\">\n  <p class=\"display-4 text-light text-center mx-4 mb-4 pb-4\">¡Bienvenido a LuxRepair!</p>\n  <div *ngIf=\"!authService.loggedIn()\" class=\"card wrapper-intro text-center text-dark mx-auto p-0\">\n    <div class=\"card-header\">\n      <h4 class=\"pt-2\">Repare su carro con nosotros</h4>\n    </div>\n    <div class=\"card-body d-flex flex-column align-items-center\">\n      <p class=\"lead\">Sin importar cual sea la reparación, estamos listos para brindarle el mejor servicio.</p>\n      <a [routerLink]=\"['/register']\" class=\"btn btn-primary\">Regístrese Ya</a>\n      <a [routerLink]=\"['/login']\" class=\"btn btn-link btn-sm mt-1\">¿Ya posee una cuenta? Ingrese Aquí</a>\n    </div>\n  </div>\n</div>\n\n<!-- Divisor -->\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col h-100 my-5 py-5 p-4 p-lg-5 mx-lg-5\">\n      <p class=\"h3 text-center mx-3\">Su vehículo solo merece el mejor de los cuidados</p>\n      <p class=\"lead text-center mt-3\">\n        Nuestro equipo se especializa en la reparación de vehículos de alta gama y utiliza únicamente repuestos de primera. No deje\n        que una mano inexperta servicie sus automóviles más preciados.\n      </p>\n    </div>\n  </div>\n</div>\n\n<!-- Parallax de Contact Form -->\n<div class=\"parallax bg-contactform d-flex flex-column justify-content-center\">\n  <div class=\"card wrapper-contact text-center text-dark mx-auto p-0\">\n    <div class=\"card-header\">\n      <h4 class=\"pt-2\">Contáctanos</h4>\n    </div>\n    <div class=\"card-body p-4 bg-light\">\n      <p class=\"lead\">¿Tienes alguna pregunta? Nos encantaría escucharla. Escríbenos un mensaje y te responderemos lo antes posible.</p>\n      <form>\n        <div class=\"form-group text-left\">\n          <label for=\"nombre\">Nombre y Apellido</label>\n          <input type=\"email\" class=\"form-control\" id=\"nombre\">\n        </div>\n        <div class=\"form-group text-left\">\n          <label for=\"email\">Correo Electrónico</label>\n          <input type=\"email\" class=\"form-control\" id=\"email\">\n        </div>\n        <div class=\"form-group text-left\">\n          <label for=\"mensaje\">Mensaje</label>\n          <textarea class=\"form-control\" name=\"mensaje\" id=\"mensaje\" rows=\"5\"></textarea>\n        </div>\n        <a href=\"#\" class=\"btn btn-primary text-center\">Enviar</a>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(authService) {
        this.authService = authService;
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/lector-qr/lector-qr.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main {\n    min-height: 42.5rem;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/lector-qr/lector-qr.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row main\">\n  <div class=\"col-12\">\n    <h2 class=\"mt-4 mb-5 ml-5\">Lector de Código QR</h2>\n  </div>\n  <div class=\"col-6 mx-auto\">\n    <qr-scanner class=\"mt-3\"\n      [debug]=\"false\" \n      [canvasWidth]=\"1080\" \n      [canvasHeight]=\"720\" \n      [stopAfterScan]=\"true\" \n      [updateTime]=\"250\">\n    </qr-scanner>\n    <div class=\"d-flex justify-content-center mt-4 mb-5\">\n      <button (click)=\"escanear()\" class=\"btn btn-primary mx-auto\">Escanear</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/lector-qr/lector-qr.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LectorQrComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_qrscanner__ = __webpack_require__("../../../../angular2-qrscanner/esm5/angular2-qrscanner.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// HTTP Requests


var LectorQrComponent = /** @class */ (function () {
    function LectorQrComponent(http, flashMessage, router, datePipe) {
        this.http = http;
        this.flashMessage = flashMessage;
        this.router = router;
        this.datePipe = datePipe;
    }
    LectorQrComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.qrScannerComponent.getMediaDevices().then(function (devices) {
            // Debugger Flag
            // console.log(devices);
            var videoDevices = [];
            for (var _i = 0, devices_1 = devices; _i < devices_1.length; _i++) {
                var device = devices_1[_i];
                if (device.kind.toString() === 'videoinput') {
                    videoDevices.push(device);
                }
            }
            if (videoDevices.length > 0) {
                var choosenDev = void 0;
                for (var _a = 0, videoDevices_1 = videoDevices; _a < videoDevices_1.length; _a++) {
                    var dev = videoDevices_1[_a];
                    if (dev.label.includes('front')) {
                        choosenDev = dev;
                        break;
                    }
                }
                if (choosenDev) {
                    _this.qrScannerComponent.chooseCamera.next(choosenDev);
                }
                else {
                    _this.qrScannerComponent.chooseCamera.next(videoDevices[0]);
                }
            }
        });
        this.qrScannerComponent.capturedQr.subscribe(function (result) {
            console.log(result);
            _this.orden = Number(result);
        });
    };
    LectorQrComponent.prototype.escanear = function () {
        var _this = this;
        console.log('Orden: ', this.orden);
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        this.http.post('gerente/qr', { orden: this.orden }, { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            if (data.success) {
                if (data.vehiculo.FechaSolicitud) {
                    // Guarda la fecha formateada
                    data.vehiculo.FechaSolicitud = _this.datePipe.transform(data.vehiculo.FechaSolicitud);
                }
                if (data.vehiculo.FechaAdmision) {
                    // Guarda la fecha formateada
                    data.vehiculo.FechaAdmision = _this.datePipe.transform(data.vehiculo.FechaAdmision);
                }
                localStorage.setItem('vehiculoQR', JSON.stringify(data.vehiculo));
                localStorage.setItem('lleguePorQR', 'true');
                _this.router.navigate(['/detalle-vehiculo']);
            }
            else {
                _this.flashMessage.show('Se produjo un error al escanear el código.', { cssClass: 'custom-danger', timeout: 3000 });
                _this.router.navigate(['/lector-qr']);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_angular2_qrscanner__["b" /* QrScannerComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_angular2_qrscanner__["b" /* QrScannerComponent */])
    ], LectorQrComponent.prototype, "qrScannerComponent", void 0);
    LectorQrComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-lector-qr',
            template: __webpack_require__("../../../../../src/app/components/lector-qr/lector-qr.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/lector-qr/lector-qr.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["DatePipe"]])
    ], LectorQrComponent);
    return LectorQrComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/lista-mecanicos/lista-mecanicos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main {\n  min-height: 42.5rem;\n}\n\ntr:hover {\n  background: #eaf2ff !important;\n}\n\n.detalle {\n  border: none;\n  background: transparent;\n  color: var(--dark);\n  opacity: 0;\n}\n\ntr:hover .detalle {\n  opacity: 1;\n}\n\n.detalle {\n    cursor: pointer;\n\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/lista-mecanicos/lista-mecanicos.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col mx-0 mx-sm-4 mx-md-5 mx-lg-5 mx-xl-5 mt-5 mb-4\">\n    <h3>Asignación de Mecánicos</h3>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-3 mx-0 mx-sm-4 mx-md-5 mx-lg-5 mx-xl-5 my-4\">\n    <form (submit)=\"asignarMecanico()\" class=\"d-flex align-items-center\">\n      <div class=\"form-group mr-4\">\n        <label for=\"elegido\">Mecánico</label>\n        <select id=\"elegido\" class=\"form-control\" [(ngModel)]=\"elegido\" name=\"elegido\">\n          <option *ngFor=\"let mecanico of mecanicos\" [ngValue]=\"mecanico\">{{mecanico.Nombre}}</option>\n        </select>\n      </div>\n      <button class=\"btn btn-primary mt-3\" type=\"submit\">Asignar</button>\n    </form>\n  </div>\n</div>\n<div class=\"row main\">\n  <!-- Table -->\n  <div class=\"container\">\n    <div class=\"table-responsive\">\n      <table class=\"table table-hover bg-light text-dark\">\n        <thead class=\"thead-light\">\n          <tr>\n            <th scope=\"col\"></th>\n            <th scope=\"col\">ID</th>\n            <th scope=\"col\">Vehículo</th>\n            <th scope=\"col\">Servicio</th>\n            <th scope=\"col\">Estado</th>\n            <th scope=\"col\">Solicitud</th>\n            <th scope=\"col\">Admisión</th>\n            <th scope=\"col\">Mecánico</th>\n            <th scope=\"col\">Acciones</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let vehiculo of vehiculos; let i=index\">\n            <th scope=\"row\">\n              <input type=\"checkbox\" name=\"checked\" [disabled]=\"vehiculo.Estado == 'Reparado' || vehiculo.Estado == 'Listo'\" [(ngModel)]=\"vehiculo.Chequeado\">\n            </th>\n            <th scope=\"row\">{{vehiculo.id}}</th>\n            <td>{{vehiculo.Marca}} {{vehiculo.Modelo}}</td>\n            <td>\n              <span *ngIf=\"vehiculo.Servicio == undefined\">Sin Servicio</span>\n              <span *ngIf=\"vehiculo.Servicio != undefined\">{{vehiculo.Servicio}}</span>\n            </td>\n            <!-- Estado -->\n            <td>\n              <span *ngIf=\"vehiculo.Estado == undefined\" class=\"badge badge-pill badge-primary\">Sin Cita</span>\n              <span *ngIf=\"vehiculo.Estado == 'En Espera'\" class=\"badge badge-pill badge-warning text-white\">{{vehiculo.Estado}}</span>\n              <span *ngIf=\"vehiculo.Estado == 'Evaluado'\" class=\"badge badge-pill badge-secondary text-white\">{{vehiculo.Estado}}</span>\n              <span *ngIf=\"vehiculo.Estado == 'En Reparacion'\" class=\"badge badge-pill badge-info text-white\">{{vehiculo.Estado}}</span>\n              <span *ngIf=\"vehiculo.Estado == 'Reparado'\" class=\"badge badge-pill badge-success text-white\">{{vehiculo.Estado}}</span>\n              <span *ngIf=\"vehiculo.Estado == 'Listo'\" class=\"badge badge-pill badge-primary text-white\">{{vehiculo.Estado}}</span>\n            </td>\n            <!-- Fecha de Solicitud -->\n            <td>\n              <span *ngIf=\"vehiculo.FechaSolicitud != undefined\">{{vehiculo.FechaSolicitud | date:'d/M/yy'}}</span>\n              <span *ngIf=\"vehiculo.FechaSolicitud == undefined\">Sin Cita</span>\n            </td>\n            <!-- Fecha de Admision -->\n            <td>\n              <span *ngIf=\"vehiculo.FechaAdmision != null && vehiculo.FechaAdmision != undefined\">{{vehiculo.FechaAdmision | date:'d/M/yy'}}</span>\n              <span *ngIf=\"vehiculo.FechaAdmision == undefined || vehiculo.FechaAdmision == null\">No Admitido</span>\n            </td>\n            <!-- Mecanico -->\n            <td>\n              <span *ngIf=\"vehiculo.Mecanico != null && vehiculo.Mecanico != undefined\">{{vehiculo.Mecanico}}</span>\n              <span *ngIf=\"vehiculo.Mecanico == null || vehiculo.Mecanico == undefined\">Ninguno</span>\n            </td>\n            <!-- Acciones -->\n            <td class=\"d-flex justify-content-center\">\n              <button (click)=\"verDetalle(i)\" class=\"detalle\">\n                <i class=\"fas fa-search\"></i>\n              </button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/lista-mecanicos/lista-mecanicos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaMecanicosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListaMecanicosComponent = /** @class */ (function () {
    function ListaMecanicosComponent(http, flashMessage, router, datePipe) {
        this.http = http;
        this.flashMessage = flashMessage;
        this.router = router;
        this.datePipe = datePipe;
    }
    ListaMecanicosComponent.prototype.ngOnInit = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]();
        // Busca el token del usuario que esta ingresado en el sistema actualmente
        var token = localStorage.getItem('id_token');
        // Settear los encabezados para la petición al API
        headers.append('Authorization', token);
        headers.append('Content-Type', 'application/json');
        this.http.get('gerente/vehiculos-y-mecanicos', { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            data.vehiculos.map(function (vehiculo) {
                if (vehiculo.FechaSolicitud) {
                    // Guarda la fecha formateada
                    vehiculo.FechaSolicitud = _this.datePipe.transform(vehiculo.FechaSolicitud);
                }
                if (vehiculo.FechaAdmision) {
                    // Guarda la fecha formateada
                    vehiculo.FechaAdmision = _this.datePipe.transform(vehiculo.FechaAdmision);
                }
                data.mecanicos.map(function (mecanico) {
                    if (mecanico.id == vehiculo.Mecanico) {
                        vehiculo.Mecanico = mecanico.Nombre;
                    }
                });
            });
            _this.vehiculos = data.vehiculos;
            console.log('Vehiculos: ', _this.vehiculos);
            _this.mecanicos = data.mecanicos;
            console.log('Mecanicos: ', _this.mecanicos);
            localStorage.setItem('vehiculos', JSON.stringify(data.vehiculos));
        }, function (err) {
            console.log('Error al pedir los vehiculos desde ColaEsperaComponent: ', err);
            return false;
        });
    };
    ListaMecanicosComponent.prototype.asignarMecanico = function () {
        var _this = this;
        // Filtra el arreglo y solo deja los ID de los vehiculos
        var chequeados = this.vehiculos
            .filter(function (vehiculo) { return !!vehiculo.Chequeado; })
            .map(function (vehiculo) {
            vehiculo.Mecanico = _this.elegido.Nombre;
            vehiculo.Chequeado = false;
            return vehiculo.id;
        });
        // Guarda el ID del mecanico a asignar
        var idMecanico = this.elegido.id;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]();
        // Busca el token del usuario que esta ingresado en el sistema actualmente
        var token = localStorage.getItem('id_token');
        // Settear los encabezados para la petición al API
        headers.append('Authorization', token);
        headers.append('Content-Type', 'application/json');
        this.http.post('gerente/asignar-mecanico', { id: idMecanico, vehiculos: chequeados }, { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            if (response.success) {
                _this.flashMessage.show(response.msg, { cssClass: 'custom-success', timeout: 3000 });
            }
            else {
                _this.flashMessage.show(response.msg, { cssClass: 'custom-danger', timeout: 3000 });
            }
        });
    };
    ListaMecanicosComponent.prototype.verDetalle = function (indice) {
        localStorage.setItem('vehiculo-detalle', indice);
        localStorage.setItem('ultima-pagina', '/lista-mecanicos');
        this.router.navigate(['/detalle-vehiculo']);
    };
    ListaMecanicosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-lista-mecanicos',
            template: __webpack_require__("../../../../../src/app/components/lista-mecanicos/lista-mecanicos.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/lista-mecanicos/lista-mecanicos.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["DatePipe"]])
    ], ListaMecanicosComponent);
    return ListaMecanicosComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/lista-reparacion/lista-reparacion.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.color {\n    border: 1px solid grey;\n    border-radius: 10px;\n    height: 20px;\n    width: 20px;\n    margin: auto;\n\n}\n\n.color-amarillo { background: yellow; }\n\n.color-arena { background: rgb(170, 170, 67); }\n\n.color-azul { background: rgb(0, 119, 255); }\n\n.color-blanco { background: white; }\n\n.color-gris { background: rgb(107, 107, 107); }\n\n.color-negro { background: black; }\n\n.color-plata { background: rgb(192, 192, 192); }\n\n.color-rojo { background: red; }\n\n.color-verde { background: rgb(48, 194, 48); }\n\n.main {\n    min-height: 42.5rem;\n}\n\ntr:hover { background: #eaf2ff !important; }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/lista-reparacion/lista-reparacion.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col mx-0 mx-sm-4 mx-md-5 mx-lg-5 mx-xl-5 mt-5 mb-4\">\n    <h3>Lista Reparaciones</h3>\n  </div>\n</div>\n<div class=\"row main\">\n  <!-- Table -->\n  <div class=\"container\">\n    <div class=\"table-responsive\">\n      <table class=\"table table-hover bg-light text-dark\">\n        <thead class=\"thead-light\">\n          <tr>\n            <th scope=\"col\">ID</th>\n            <th scope=\"col\">Vehículo</th>\n            <th scope=\"col\">Placa</th>\n            <th scope=\"col\">Color</th>\n            <th scope=\"col\">Servicio</th>\n            <th scope=\"col\">Estado</th>\n            <th scope=\"col\">Accion</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let vehiculo of vehiculos; let i=index\">\n            <th *ngIf=\"vehiculo.Activo\" scope=\"row\">{{vehiculo.id}}</th>\n            <td *ngIf=\"vehiculo.Activo\">{{vehiculo.Marca}} {{vehiculo.Modelo}}</td>\n            <td *ngIf=\"vehiculo.Activo\">{{vehiculo.Placa}}</td>\n            <td *ngIf=\"vehiculo.Activo\">\n              <div *ngIf=\"vehiculo.Color == 'Amarillo'\" class=\"color color-amarillo mt-1\"></div>\n              <div *ngIf=\"vehiculo.Color == 'Arena'\" class=\"color color-arena mt-1\"></div>\n              <div *ngIf=\"vehiculo.Color == 'Azul'\" class=\"color color-azul mt-1\"></div>\n              <div *ngIf=\"vehiculo.Color == 'Blanco'\" class=\"color color-blanco mt-1\"></div>\n              <div *ngIf=\"vehiculo.Color == 'Gris'\" class=\"color color-gris mt-1\"></div>\n              <div *ngIf=\"vehiculo.Color == 'Negro'\" class=\"color color-negro mt-1\"></div>\n              <div *ngIf=\"vehiculo.Color == 'Plata'\" class=\"color color-plata mt-1\"></div>\n              <div *ngIf=\"vehiculo.Color == 'Rojo'\" class=\"color color-rojo mt-1\"></div>\n              <div *ngIf=\"vehiculo.Color == 'Verde'\" class=\"color color-verde mt-1\"></div>\n\n            </td>\n            <td *ngIf=\"vehiculo.Activo\">\n              <span *ngIf=\"vehiculo.Servicio == undefined\">Sin Servicio</span>\n              <span *ngIf=\"vehiculo.Servicio != undefined\">{{vehiculo.Servicio}}</span>\n            </td>\n            <td *ngIf=\"vehiculo.Activo\">\n              <span *ngIf=\"vehiculo.Estado == undefined\" class=\"badge badge-pill badge-primary\">Sin Cita</span>\n              <span *ngIf=\"vehiculo.Estado == 'En Espera'\" class=\"badge badge-pill badge-warning text-white\">{{vehiculo.Estado}}</span>\n              <span *ngIf=\"vehiculo.Estado == 'Evaluado'\" class=\"badge badge-pill badge-secondary text-white\">{{vehiculo.Estado}}</span>\n              <span *ngIf=\"vehiculo.Estado == 'En Reparacion'\" class=\"badge badge-pill badge-info text-white\">{{vehiculo.Estado}}</span>\n              <span *ngIf=\"vehiculo.Estado == 'Reparado'\" class=\"badge badge-pill badge-success text-white\">{{vehiculo.Estado}}</span>\n              <span *ngIf=\"vehiculo.Estado == 'Listo'\" class=\"badge badge-pill badge-primary text-white\">{{vehiculo.Estado}}</span>\n            </td>\n            <td *ngIf=\"vehiculo.Activo\">\n              <button (click)=\"irAActualizar(i)\" class=\"btn btn-sm btn-outline-primary\">Actualizar Orden</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/lista-reparacion/lista-reparacion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaReparacionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListaReparacionComponent = /** @class */ (function () {
    function ListaReparacionComponent(http, flashMessage, router) {
        this.http = http;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    ListaReparacionComponent.prototype.ngOnInit = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]();
        // Busca el token del usuario que esta ingresado en el sistema actualmente
        var token = localStorage.getItem('id_token');
        // Settear los encabezados para la petición al API
        headers.append('Authorization', token);
        headers.append('Content-Type', 'application/json');
        var id = JSON.parse(localStorage.getItem('user')).id;
        this.http.post('mecanico/vehiculos', { id: id }, { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data.vehiculos);
            _this.vehiculos = data.vehiculos;
            localStorage.setItem('vehiculos-mecanico', JSON.stringify(data.vehiculos));
        }, function (err) {
            console.log('Error al pedir los vehiculos desde ListaReparacionComponent: ', err);
            return false;
        });
    };
    ListaReparacionComponent.prototype.irAActualizar = function (indice) {
        localStorage.setItem('vehiculo-a-actualizar', this.vehiculos[indice].id);
        this.router.navigate(['/actualizar-orden']);
    };
    ListaReparacionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-lista-reparacion',
            template: __webpack_require__("../../../../../src/app/components/lista-reparacion/lista-reparacion.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/lista-reparacion/lista-reparacion.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ListaReparacionComponent);
    return ListaReparacionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/lista-repuestos/lista-repuestos.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main {\n    min-height: 42.5rem;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/lista-repuestos/lista-repuestos.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col mx-0 mx-sm-4 mx-md-5 mx-lg-5 mx-xl-5 mt-5 mb-4\">\n      <h3>Repuestos</h3>\n    </div>\n  </div>\n\n  <div *ngIf=\"rol !== 'cliente'\" class=\"row mb-5\">\n      <div class=\"col-11 col-md-6 col-lg-4 mx-auto my-auto\">\n        <!-- Tarjeta de Registro -->\n        <div class=\"card text-center\">\n          <div class=\"card-header\">\n            <h5 class=\"pt-3\">Agregar un repuesto</h5>\n          </div>\n          <div class=\"card-body\">\n            <p>Para agregar un repuesto que llego al taller complete el formulario aquí.</p>\n            <a class=\"btn btn-primary\" [routerLink]=\"['/form-repuesto']\">Ir al formulario</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  \n  <div class=\"row main\">\n    <!-- Table -->\n    <div class=\"container\">\n      <div class=\"table-responsive\">\n        <table class=\"table table-hover bg-light text-dark\">\n          <thead class=\"thead-light\">\n            <tr>\n              <th scope=\"col\">ID</th>\n              <th scope=\"col\">Categoria</th>\n              <th scope=\"col\">Descripción</th>\n              <th scope=\"col\">Cantidad</th>\n              <th scope=\"col\">Tipo</th>\n              <th scope=\"col\">Detalles</th>\n              <th scope=\"col\">Acciones</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let repuesto of repuestos; let i=index\">\n              <td scope=\"row\">{{repuesto.id}}</td>\n              <td>{{repuesto.Nombre}}</td>\n              <td>{{repuesto.Descripcion}}</td>\n              <td>{{repuesto.Cantidad}}</td>\n              <td>{{repuesto.Tipo}}</td>\n              <td>\n                <!-- <button class=\"btn btn-sm btn-outline-primary\">Ver Detalle</button> -->\n                <a tabindex=\"0\" class=\"btn btn-sm btn-outline-primary\" role=\"button\" data-toggle=\"popover\" data-trigger=\"focus\" title=\"Detalle de Repuesto\" data-content=\"And here's some amazing content. It's very engaging. Right?\">Ver Detalle</a>\n                <!-- <button type=\"button\" class=\"btn btn-sm btn-outline-primary\" data-toggle=\"popover\" title=\"Popover title\" data-content=\"And here's some amazing content. It's very engaging. Right?\">Ver Detalle</button> -->\n              </td>\n              <td>\n                <button (click)=\"irModificarRepuesto(i)\" class=\"btn btn-sm btn-outline-dark\">Modificar</button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n  \n  <script>\n    $(function () {\n    $('[data-toggle=\"popover\"]').popover()\n    })\n\n    $('.popover-dismiss').popover({\n    trigger: 'focus'\n    })\n  </script>"

/***/ }),

/***/ "../../../../../src/app/components/lista-repuestos/lista-repuestos.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaRepuestosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListaRepuestosComponent = /** @class */ (function () {
    function ListaRepuestosComponent(http, flashMessage, router) {
        this.http = http;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    ListaRepuestosComponent.prototype.ngOnInit = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]();
        // Busca el token del usuario que esta ingresado en el sistema actualmente
        var token = localStorage.getItem('id_token');
        // Settear los encabezados para la petición al API
        headers.append('Authorization', token);
        headers.append('Content-Type', 'application/json');
        this.http.get('admin/repuestos', { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data.repuestos);
            _this.repuestos = data.repuestos;
            localStorage.setItem('repuestos', JSON.stringify(data.repuestos));
        }, function (err) {
            console.log('Error al pedir los repuestos desde Lista-RepuestosComponent: ', err);
            return false;
        });
    };
    ListaRepuestosComponent.prototype.irModificarRepuesto = function (indice) {
        var repuestoAModificar = this.repuestos[indice];
        localStorage.setItem("modificar-repuesto", JSON.stringify(repuestoAModificar));
        this.router.navigate(['modificar-repuesto']);
    };
    ListaRepuestosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-lista-repuestos',
            template: __webpack_require__("../../../../../src/app/components/lista-repuestos/lista-repuestos.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/lista-repuestos/lista-repuestos.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ListaRepuestosComponent);
    return ListaRepuestosComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main {\n    min-height: 42.8rem;\n    max-width: 100vw;\n}\n\n.wrapper {\n    width: 18rem;\n}\n\n/* Small devices (landscape phones, 576px and up) */\n\n@media (min-width: 576px) {\n  .wrapper {\n    width: 24rem;\n  }\n}\n\nhr {\n  height: 1px;\n  width: 100%;\n  z-index: 10000;\n  background: -webkit-gradient(linear, left top, right top, from(var(--dark)), color-stop(var(--dark)), color-stop(white), color-stop(var(--dark)), to(var(--dark)));\n  background: linear-gradient(to right, var(--dark), var(--dark), white, var(--dark), var(--dark));\n  border: 0;\n  margin: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main bg-dark py-5 px-3\">\n  <div class=\"card wrapper mx-auto my-5\">\n    <div class=\"card-body bg-light pt-5 pb-5\">\n      <p class=\"lead text-primary text-center px-3\" style=\"font-size: 20pt\">Ingrese a su cuenta</p>\n      <form (submit)=\"onLoginSubmit()\" class=\"px-4\">\n        <div class=\"form-group\">\n          <label>Username</label>\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" name=\"username\">\n        </div>\n        <div class=\"form-group\">\n          <label>Password</label>\n          <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" name=\"password\">\n        </div>\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"d-flex justify-content-center\">\n                <input type=\"submit\" class=\"btn btn-primary btn-block mt-2\" value=\"Login\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n    <div class=\"card-footer d-flex justify-content-center align-items-center\">\n      <h6 class=\"font-weight-light text-secondary m-0\">¿Es nuevo?</h6>\n      <h6 class=\"font-weight-light text-secondary m-0\"><a [routerLink]=\"['/register']\"class=\"btn btn-link\">Regístrese Aquí</a></h6>\n    </div>\n  </div>\n</div>\n<div class=\"d-flex justify-content-center\">\n  <hr>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// HTTP Requests


var LoginComponent = /** @class */ (function () {
    function LoginComponent(http, router, flashMessage) {
        this.http = http;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            username: this.username,
            password: this.password
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        this.http.post('users/authenticate', user, { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            if (data.success) {
                // Store user data
                localStorage.setItem('id_token', data.token);
                localStorage.setItem('user', JSON.stringify(data.user));
                // Flash Message
                _this.flashMessage.show("\u00A1Bienvenido, " + data.user.nombre + "!", { cssClass: 'custom-success', timeout: 6000 });
                _this.router.navigate(['dashboard']);
            }
            else {
                _this.flashMessage.show(data.msg, { cssClass: 'custom-danger', timeout: 3000 });
                _this.router.navigate(['login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/modificar-repuesto/modificar-repuesto.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main {\n    min-height: 42.5rem;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/modificar-repuesto/modificar-repuesto.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row main p-4 p-md-3\">\n    <!-- Form de Modificacion para Repuestos -->          \n    <div class=\"container py-5 mt-3 mb-5\">\n        <h2 class=\"mb-3\">Modificación de Repuesto</h2>\n        <form (submit)=\"modificarRepuesto()\">\n            <div class=\"form-row\">\n                <div class=\"form-group col-md-4\">\n                    <label for=\"nombre\">Categoria</label>\n                    <select id=\"nombre\" class=\"form-control\" [(ngModel)]=\"nombre\" name=\"nombre\">\n                        <option selected>Aceite</option>\n                        <option>Caucho</option>\n                        <option>Rin</option>\n                        <option>Electronicos</option>\n                        <option>Carroceria</option>\n                        <option>Otros</option>\n                    </select>\n                </div>\n                <div class=\"form-group col-md-4\">\n                    <label for=\"descripcion\">Descripción</label>\n                    <input type=\"text\" class=\"form-control\" id=\"descripcion\" placeholder=\"Ej: PDVSA Semi-Sintetico 15W40W, Pirelli 14'\" [(ngModel)]=\"descripcion\" name=\"descripcion\">\n                </div>\n              <div class=\"form-group col-md-2\">\n                  <label for=\"cantidad\">Cantidad</label>\n                  <select id=\"cantidad\" class=\"form-control\" [(ngModel)]=\"cantidad\" name=\"cantidad\">\n                      <option selected>1</option>\n                      <option>2</option>\n                      <option>3</option>\n                      <option>4</option>\n                      <option>5</option>\n                      <option>6</option>\n                      <option>7</option>\n                      <option>8</option>\n                      <option>9</option>\n                      <option>10</option>\n                      <option>11</option>\n                      <option>12</option>\n                      <option>13</option>\n                      <option>14</option>\n                      <option>15</option>\n                      <option>16</option>\n                      <option>17</option>\n                      <option>18</option>\n                      <option>19</option>\n                      <option>20</option>\n                      <option>21</option>\n                      <option>22</option>\n                      <option>23</option>\n                      <option>24</option>\n                      <option>25</option>\n                      <option>26</option>\n                      <option>27</option>\n                      <option>28</option>\n                      <option>29</option>\n                      <option>30</option>\n                  </select>\n                </div>\n              <div class=\"form-group col-md-2\">\n                  <legend class=\"col-form-label\">Tipo</legend>\n                  <div class=\"form-check\">\n                      <input class=\"form-check-input\" type=\"radio\" name=\"tipo\" id=\"tipo1\" value=\"Original\" checked [(ngModel)]=\"tipo\" name=\"tipo\">\n                      <label class=\"form-check-label\" for=\"tipo1\">\n                          Original\n                      </label>\n                  </div>\n                  <div class=\"form-check\">\n                      <input class=\"form-check-input\" type=\"radio\" name=\"tipo\" id=\"tipo2\" value=\"Generico\" [(ngModel)]=\"tipo\" name=\"tipo\">\n                      <label class=\"form-check-label\" for=\"tipo2\">\n                          Generico\n                      </label>\n                  </div>\n              </div>\n            </div>\n            <div class=\"form-row\">\n              <div class=\"form-group col-md-12\">\n                  <label for=\"detalle\">Detalle</label>\n                  <textarea class=\"form-control\" name=\"detalle\" id=\"detalle\" [(ngModel)]=\"detalle\" rows=\"3\"></textarea>\n                </div>\n            </div>\n  \n            <div class=\"d-flex justify-content-center\">\n                <button type=\"submit\" class=\"btn btn-primary mt-4\">Modificar Repuesto</button>\n            </div>\n            \n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/modificar-repuesto/modificar-repuesto.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModificarRepuestoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ModificarRepuestoComponent = /** @class */ (function () {
    function ModificarRepuestoComponent(http, flashMessage, router) {
        this.http = http;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    ModificarRepuestoComponent.prototype.ngOnInit = function () {
        var repuesto = JSON.parse(localStorage.getItem("modificar-repuesto"));
        this.id = repuesto.id;
        this.nombre = repuesto.Nombre;
        this.cantidad = repuesto.Cantidad;
        this.descripcion = repuesto.Descripcion;
        this.detalle = repuesto.Detalle;
        this.tipo = repuesto.Tipo;
    };
    ModificarRepuestoComponent.prototype.modificarRepuesto = function () {
        var _this = this;
        // // Valida que no se haya dejado ninguna casilla vacia
        if (this.faltaAlgunaCasilla()) {
            this.flashMessage.show('Por favor, llene todas las casillas.', { cssClass: 'custom-danger', timeout: 5000 });
            return false;
        }
        // Convertimos el string de la cantidad a un entero
        var cantidad = Number(this.cantidad);
        var data = {
            id: this.id,
            Nombre: this.nombre,
            Descripcion: this.descripcion,
            Cantidad: cantidad,
            Tipo: this.tipo,
            Detalle: this.detalle,
        };
        // Settear los encabezados para la petición al API
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        // Hacer la petición, se retorna una promesa
        this.http.post('users/modificar-repuesto', data, { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (response) {
            if (response.success) {
                _this.flashMessage.show(response.msg, { cssClass: 'custom-success', timeout: 3000 });
                _this.router.navigate(['/lista-repuestos']);
            }
            else {
                _this.flashMessage.show(response.msg, { cssClass: 'custom-danger', timeout: 3000 });
                _this.router.navigate(['/modificar-repuesto']);
            }
        });
    };
    // Funcion que retorna false si alguna casilla ha dejado de llenarse
    ModificarRepuestoComponent.prototype.faltaAlgunaCasilla = function () {
        return (this.nombre === undefined ||
            this.nombre === '' ||
            this.descripcion === undefined ||
            this.descripcion === '' ||
            this.cantidad === undefined ||
            this.cantidad === '' ||
            this.tipo === undefined ||
            this.tipo === '' ||
            this.detalle === undefined ||
            this.detalle === '');
    };
    ModificarRepuestoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-modificar-repuesto',
            template: __webpack_require__("../../../../../src/app/components/modificar-repuesto/modificar-repuesto.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/modificar-repuesto/modificar-repuesto.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], ModificarRepuestoComponent);
    return ModificarRepuestoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".rol {\n    padding-right: .5rem;\n}\n\n.dropdown-item:hover {\n    background: rgb(211, 218, 229) !important;\n    cursor: default;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Navbar -->\n<nav class=\"navbar navbar-expand-lg sticky-top navbar-dark bg-dark\">\n  <a class=\"navbar-brand d-flex align-items-center\" [routerLink]=\"['/']\">\n    <img class=\"mr-2\" src=\"/assets/navbar/favicon.png\" width=\"30\" height=\"30\" alt=\"\">\n    LuxRepair\n  </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\"\n    aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav navbar-left\">\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/']\">Home</a>\n      </li>\n      <li *ngIf=\"authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/dashboard']\">Dashboard</a>\n      </li>\n    </ul>\n\n    <ul class=\"navbar-nav ml-auto\">\n      <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/login']\">Login</a>\n      </li>\n      <li *ngIf=\"!authService.loggedIn()\" class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\n        <a class=\"nav-link\" [routerLink]=\"['/register']\">Register</a>\n      </li>\n      <li *ngIf=\"authService.loggedIn()\" class=\"nav-item my-auto\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact: true}\">\n        <a class=\"nav-link mr-2\" [routerLink]=\"['/profile']\"><i class=\"fas fa-user-circle fa-lg pr-1\"></i> {{nombre}}</a>\n      </li>\n      <li *ngIf=\"authService.loggedIn()\" class=\"btn btn-sm btn-outline-secondary\">\n        <a class=\"nav-link\" (click)=\"onLogoutClick()\" href=\"#\">Logout</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, router, flashMessage) {
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var usuario = JSON.parse(localStorage.getItem('user'));
        if (usuario)
            this.nombre = usuario.nombre;
    };
    NavbarComponent.prototype.onLogoutClick = function () {
        localStorage.clear();
        this.nombre = undefined;
        this.flashMessage.show('Su sessión ha finalizado.', { cssClass: 'custom-success', timeout: 5000 });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main {\n    min-height: 42.5rem;\n}\n\n.circle {\n    border-radius: 50rem;\n}\n\n.bg-profile {\n    background-image: -webkit-gradient(linear, left bottom, left top, from(#243949), to(#517fa4));\n    background-image: linear-gradient(to top, #243949 0%, #517fa4 100%);\n}\n\n.image {\n    -webkit-box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"main\">\n\n  <div class=\"row bg-profile mb-4 pt-5 pb-3\">\n    <div class=\"col d-flex flex-column align-items-center\">\n      <div class=\"bg-light circle p-4 mb-4 image\">\n        <img class=\"img-responsive mx-4 mt-4 mb-2\" src=\"assets/detalle-vehiculo/man.png\" alt=\"Imagen Perfil\" width=\"120\" height=\"130\">\n      </div>\n      <h2 *ngIf=\"user != undefined\" class=\"page-header pb-3 text-white font-weight-light\">{{user.Nombre}} {{user.Snombre}} {{user.Apellido}}</h2>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-11 col-md-8 mx-auto mb-5\">\n      <div *ngIf=\"user\">\n        <ul class=\"list-group\">\n          <li class=\"list-group-item d-flex justify-content-between\">\n            <h5 class=\"pr-3 my-auto\">Usuario:</h5>\n            <p class=\"lead m-0\">{{user.Username}}</p>\n          </li>\n          <li class=\"list-group-item d-flex justify-content-between\">\n            <h5 class=\"pr-3 my-auto\">Correo:</h5>\n            <p class=\"lead m-0\">{{user.Email}}</p>\n          </li>\n          <li class=\"list-group-item d-flex justify-content-between\">\n            <h5 class=\"pr-3 my-auto\">Cedula:</h5>\n            <p class=\"lead m-0\">{{user.Cedula}}</p>\n          </li>\n          <li *ngIf=\"this.rol != 'Cliente'\" class=\"list-group-item d-flex justify-content-between\">\n            <h5 class=\"pr-3 my-auto\">Rol:</h5>\n            <p class=\"lead m-0\">{{rol}}</p>\n          </li>\n          <li *ngIf=\"this.rol != 'Cliente' && this.fechaNacimiento != null\" class=\"list-group-item d-flex justify-content-between\">\n            <h5 class=\"pr-3 my-auto\">Fecha de Nacimiento:</h5>\n            <p class=\"lead m-0\">{{fechaNacimiento}}</p>\n          </li>\n          <li *ngIf=\"this.rol != 'Cliente' && this.sexo != null\" class=\"list-group-item d-flex justify-content-between\">\n            <h5 class=\"pr-3 my-auto\">Sexo:</h5>\n            <p class=\"lead m-0\">{{sexo}}</p>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"rol != 'Cliente'\" class=\"row mb-5\">\n    <div class=\"col-11 col-md-6 col-lg-4 mx-auto my-auto\">\n      <!-- Tarjeta -->\n      <div class=\"card text-center\">\n        <div class=\"card-header\">\n          <h5 *ngIf=\"completoFormulario()\" class=\"pt-3\">Actualiza tus Datos Laborales</h5>\n          <h5 *ngIf=\"!completoFormulario()\" class=\"pt-3\">Complete el formulario</h5>\n        </div>\n        <div class=\"card-body\">\n          <p *ngIf=\"completoFormulario()\">Si quiere hacer alguna modificación a sus datos Laborales puedes hacerlo aquí.</p>\n          <p *ngIf=\"!completoFormulario()\">Nos faltan algunos de sus datos Laborales. Por favor, tómese un momento para llenarlos.</p>\n          <a class=\"btn btn-primary\" [routerLink]=\"['/form-empleado']\">Ir al formulario</a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div  class=\"row mb-5\">\n    <div class=\"col-11 col-md-6 col-lg-4 mx-auto my-auto\">\n      <!-- Tarjeta -->\n      <div class=\"card text-center\">\n        <div class=\"card-header\">\n          <h5  class=\"pt-3\">Actualiza tus Datos Personales</h5>\n        </div>\n        <div class=\"card-body\">\n          <p >Si quiere hacer alguna modificación a sus datos personales puede hacerlo aquí.</p>\n         \n          <a class=\"btn btn-primary\" [routerLink]=\"['/actualizar-datos']\">Ir al formulario</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// HTTP Requests


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(http, router, datePipe) {
        this.http = http;
        this.router = router;
        this.datePipe = datePipe;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]();
        // Fetches the token of the currently logged in user from localStorage
        headers.append('Authorization', localStorage.getItem('id_token'));
        headers.append('Content-Type', 'application/json');
        this.http.get('users/profile', { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (profile) {
            _this.user = profile.user;
            // Guarda el rol con la primera letra en Uppercase
            _this.rol = profile.user.rol.charAt(0).toUpperCase() + profile.user.rol.slice(1);
            if (_this.rol != 'Cliente' && profile.user.sexo != undefined && profile.user.fechaNacimiento != undefined) {
                // Corrige error en el formato de la fecha
                var fecha = profile.user.fechaNacimiento;
                var day = Number(fecha.slice(8, 10)) + 1;
                var dayString = day.toString();
                if (day < 10) {
                    dayString = '0' + day;
                }
                // Guarda la fecha formateada
                _this.fechaNacimiento = _this.datePipe.transform(fecha.slice(0, 8) + dayString + fecha.slice(10));
                _this.sexo = profile.user.sexo;
            }
            console.log(_this.user);
        }, function (err) {
            console.log('Error while getting the profile in ProfileComponent: ', err);
            return false;
        });
    };
    ProfileComponent.prototype.completoFormulario = function () {
        return this.fechaNacimiento && this.sexo;
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["DatePipe"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".wrapper {\n    min-height: 36rem;\n}\n\n/* Breakpoint in the other direction */\n\n/* Small devices (landscape phones, less than 768px) */\n\n@media (max-width: 767.98px) {\n  .wrapper {\n    min-height: 54rem;\n  }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-8 col-md-8 col-lg-6 mx-auto my-auto\">\n    <!-- Title -->\n    <h2 class=\"mt-4 pt-5 pb-4\">Register</h2>\n\n    <!-- Form -->\n    <form (submit)=\"onRegisterSubmit()\" class=\"wrapper\">\n\n      <div class=\"row\">\n        <div class=\"col-12 col-md-6\">\n          <div class=\"form-group\">\n            <label>Nombre\n              <span class=\"required\">*</span>\n            </label>\n            <input type=\"text\" [(ngModel)]=\"nombre\" name=\"nombre\" class=\"form-control\">\n          </div>\n        </div>\n        <div class=\"col-12 col-md-6\">\n          <div class=\"form-group\">\n            <label>Segundo Nombre</label>\n            <input type=\"text\" [(ngModel)]=\"seg_nombre\" name=\"seg_nombre\" class=\"form-control\">\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-12 col-md-6\">\n          <div class=\"form-group\">\n            <label>Apellido <span class=\"required\">*</span></label>\n            <input type=\"text\" [(ngModel)]=\"apellido\" name=\"apellido\" class=\"form-control\">\n          </div>\n        </div>\n        <div class=\"col-12 col-md-6\">\n          <div class=\"form-group\">\n            <label>\n              Cedula\n              <span class=\"required\">*</span>\n            </label>\n            <input type=\"text\" [(ngModel)]=\"cedula\" name=\"cedula\" class=\"form-control\">\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-12 col-md-6\">\n          <div class=\"form-group\">\n            <label>\n              Usuario\n              <span class=\"required\">*</span>\n            </label>\n            <input type=\"text\" [(ngModel)]=\"username\" name=\"username\" class=\"form-control\">\n          </div>\n        </div>\n        <div class=\"col-12 col-md-6\">\n          <div class=\"form-group\">\n            <label>\n              Correo Electrónico\n              <span class=\"required\">*</span>\n            </label>\n            <input type=\"text\" [(ngModel)]=\"email\" name=\"email\" class=\"form-control\">\n          </div>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-12 col-md-6\">\n          <div class=\"form-group\">\n            <label>\n              Clave\n              <span class=\"required\">*</span>\n            </label>\n            <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\n          </div>\n        </div>\n        <div class=\"col-12 col-md-6\">\n          <div class=\"form-group\">\n            <legend class=\"col-form-label\">Elija su rol</legend>\n            <div class=\"form-check form-check-inline\">\n              <input class=\"form-check-input\" type=\"radio\" name=\"rol\" id=\"rol-cliente\" [(ngModel)]=\"rol\" value=\"cliente\" checked>\n              <label class=\"form-check-label pt-1 pl-1\" for=\"rol-cliente\">\n                Cliente\n              </label>\n            </div>\n            <div class=\"form-check form-check-inline\">\n              <input class=\"form-check-input\" type=\"radio\" name=\"rol\" id=\"rol-empleado\" [(ngModel)]=\"rol\" value=\"empleado\">\n              <label class=\"form-check-label pt-1 pl-1\" for=\"rol-empleado\">\n                Empleado\n              </label>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <!-- Submit Button -->\n      <div class=\"container\">\n        <div class=\"row pt-4\">\n          <div class=\"col\">\n            <div class=\"d-flex justify-content-center\">\n              <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// HTTP Requests


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(http, flashMessage, router) {
        this.http = http;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
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
        if (user.nombre == undefined || user.apellido == undefined || user.cedula == undefined || user.email == undefined || user.username == undefined || user.password == undefined) {
            this.flashMessage.show('Por favor llene todas las casillas.', { cssClass: 'custom-danger', timeout: 3000 });
            return false;
        }
        // Validate Email
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regex.test(user.email.toLowerCase())) {
            this.flashMessage.show('Por favor ingrese una dirección de correo válida.', { cssClass: 'custom-danger', timeout: 5000 });
            return false;
        }
        // Register User
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        this.http.post('users/register', user, { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            if (data.success) {
                _this.flashMessage.show('Usted fue registrado exitosamente.', { cssClass: 'custom-success', timeout: 3000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.flashMessage.show('Se produjo un error en su registro.', { cssClass: 'custom-danger', timeout: 3000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/reporte-cliente/reporte-cliente.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main {\n    min-height: 42.5rem;\n  }\n  \n  tr:hover {\n    background: #eaf2ff !important;\n  }\n  \n  .editar {\n    border: none;\n    background: transparent;\n    color: var(--dark);\n    opacity: 0;\n  }\n  \n  tr:hover .editar {\n    opacity: 1;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/reporte-cliente/reporte-cliente.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col mx-0 mx-sm-4 mx-md-5 mx-lg-5 mx-xl-5 mt-5 mb-4\">\n    <h3>Reportes de Clientes</h3>\n  </div>\n</div>\n<div class=\"row main\">\n  <div class=\"col-12 mx-0 mx-sm-4 mx-md-5 mx-lg-5 mx-xl-5 my-4\">\n    <form (submit)=\"reporteCliente()\" class=\"d-flex align-items-center\">\n      <div class=\"col-4 form-group mr-4\">\n        <label for=\"elegido\">Cliente</label>\n        <select id=\"elegido\" class=\"form-control\" [(ngModel)]=\"elegido\" name=\"elegido\">\n          <option *ngFor=\"let cliente of clientes\" [ngValue]=\"cliente\">{{cliente.Nombre}}</option>\n        </select>\n      </div>\n      <button class=\"btn btn-outline-success mt-3\" type=\"submit\">Generar Reporte</button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/reporte-cliente/reporte-cliente.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReporteClienteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReporteClienteComponent = /** @class */ (function () {
    function ReporteClienteComponent(http, flashMessage, router, datePipe) {
        this.http = http;
        this.flashMessage = flashMessage;
        this.router = router;
        this.datePipe = datePipe;
    }
    ReporteClienteComponent.prototype.ngOnInit = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]();
        // Busca el token del usuario que esta ingresado en el sistema actualmente
        var token = localStorage.getItem('id_token');
        // Settear los encabezados para la petición al API
        headers.append('Authorization', token);
        headers.append('Content-Type', 'application/json');
        this.http.get('gerente/vehiculos-y-clientes', { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            data.vehiculos.map(function (vehiculo) {
                if (vehiculo.FechaSolicitud) {
                    // Guarda la fecha formateada
                    vehiculo.FechaSolicitud = _this.datePipe.transform(vehiculo.FechaSolicitud);
                }
                if (vehiculo.FechaAdmision) {
                    // Guarda la fecha formateada
                    vehiculo.FechaAdmision = _this.datePipe.transform(vehiculo.FechaAdmision);
                }
                data.clientes.map(function (cliente) {
                    if (cliente.id == vehiculo.Cliente) {
                        vehiculo.Cliente = cliente.Nombre;
                    }
                });
            });
            _this.vehiculos = data.vehiculos;
            console.log('Vehiculos: ', _this.vehiculos);
            _this.clientes = data.clientes;
            console.log('Clientes: ', _this.clientes);
            localStorage.setItem('vehiculos2', _this.vehiculos);
            localStorage.setItem('vehiculos', JSON.stringify(data.vehiculos));
        }, function (err) {
            console.log('Error al pedir los vehiculos desde ColaEsperaComponent: ', err);
            return false;
        });
    };
    ReporteClienteComponent.prototype.reporteCliente = function () {
        var _this = this;
        // Filtra el arreglo y solo deja los ID de los vehiculos
        var chequeados = this.vehiculos
            .filter(function (vehiculo) { return !!vehiculo.Chequeado; })
            .map(function (vehiculo) {
            vehiculo.Cliente = _this.elegido.Nombre;
            vehiculo.Chequeado = false;
            return vehiculo.id;
        });
        // Guarda el ID del cliente a asignar
        var idCliente = this.elegido.id;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]();
        // Busca el token del usuario que esta ingresado en el sistema actualmente
        var token = localStorage.getItem('id_token');
        // Settear los encabezados para la petición al API
        headers.append('Authorization', token);
        headers.append('Content-Type', 'application/json');
        this.http.post('gerente/reporte-cliente', { id: idCliente }, { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            data.ordenes.map(function (orden) {
            });
            _this.ordenes = data.ordenes;
            console.log('Ordenes: ', _this.ordenes);
            localStorage.setItem('ordenes', JSON.stringify(data.ordenes));
            var rows = [JSON.stringify(data.ordenes).replace('},', '\r' + '\n').replace('},', '\r' + '\n').replace('},', '\r' + '\n').replace('},', '\r' + '\n').replace('},', '\r' + '\n').replace('},', '\r' + '\n').replace('},', '\r' + '\n').replace('},', '\r' + '\n').replace('},', '\r' + '\n').replace('},', '\r' + '\n').replace('},', '\r' + '\n').replace('},', '\r' + '\n').replace('},', '\r' + '\n').replace('},', '\r' + '\n')];
            var csvContent = "data:text/csv;charset=utf-8,";
            rows.forEach(function (rowArray) {
                var row = rowArray;
                csvContent += row;
            });
            var encodedUri = encodeURI(csvContent);
            var link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", "Reporte-Cliente.csv");
            document.body.appendChild(link); // Required for FF
            link.click(); // This will download the data file named "my_data.csv".
        }, function (err) {
            console.log('Error al pedir los vehiculos desde ColaEsperaComponent: ', err);
            return false;
        });
    };
    ReporteClienteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reporte-cliente',
            template: __webpack_require__("../../../../../src/app/components/reporte-cliente/reporte-cliente.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/reporte-cliente/reporte-cliente.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["DatePipe"]])
    ], ReporteClienteComponent);
    return ReporteClienteComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/reporte-mecanico/reporte-mecanico.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main {\n    min-height: 42.5rem;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/reporte-mecanico/reporte-mecanico.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col mx-0 mx-sm-4 mx-md-5 mx-lg-5 mx-xl-5 mt-5 mb-4\">\n    <h3>Reportes de Mecánicos</h3>\n  </div>\n</div>\n<div class=\"row main\">\n  <div class=\"col-12 mx-0 mx-sm-4 mx-md-5 mx-lg-5 mx-xl-5 my-4\">\n    <form (submit)=\"reporteMecanico()\" class=\"d-flex align-items-center\">\n      <div class=\"col-4 form-group mr-4\">\n        <label for=\"elegido\">Mecánico</label>\n        <select id=\"elegido\" class=\"form-control\" [(ngModel)]=\"elegido\" name=\"elegido\">\n          <option *ngFor=\"let mecanico of mecanicos\" [ngValue]=\"mecanico\">{{mecanico.Nombre}}</option>\n        </select>\n      </div>\n      <button class=\"btn btn-primary mt-3\" type=\"submit\">Generar Reporte</button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/reporte-mecanico/reporte-mecanico.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReporteMecanicoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReporteMecanicoComponent = /** @class */ (function () {
    function ReporteMecanicoComponent(http, flashMessage, router, datePipe) {
        this.http = http;
        this.flashMessage = flashMessage;
        this.router = router;
        this.datePipe = datePipe;
    }
    ReporteMecanicoComponent.prototype.ngOnInit = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]();
        // Busca el token del usuario que esta ingresado en el sistema actualmente
        var token = localStorage.getItem('id_token');
        // Settear los encabezados para la petición al API
        headers.append('Authorization', token);
        headers.append('Content-Type', 'application/json');
        this.http.get('gerente/vehiculos-y-mecanicos', { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            data.vehiculos.map(function (vehiculo) {
                if (vehiculo.FechaSolicitud) {
                    // Guarda la fecha formateada
                    vehiculo.FechaSolicitud = _this.datePipe.transform(vehiculo.FechaSolicitud);
                }
                if (vehiculo.FechaAdmision) {
                    // Guarda la fecha formateada
                    vehiculo.FechaAdmision = _this.datePipe.transform(vehiculo.FechaAdmision);
                }
                data.mecanicos.map(function (mecanico) {
                    if (mecanico.id == vehiculo.Mecanico) {
                        vehiculo.Mecanico = mecanico.Nombre;
                    }
                });
            });
            _this.vehiculos = data.vehiculos;
            console.log('Vehiculos: ', _this.vehiculos);
            _this.mecanicos = data.mecanicos;
            console.log('Mecanicos: ', _this.mecanicos);
            localStorage.setItem('vehiculos', JSON.stringify(data.vehiculos));
        }, function (err) {
            console.log('Error al pedir los vehiculos desde ColaEsperaComponent: ', err);
            return false;
        });
    };
    ReporteMecanicoComponent.prototype.reporteMecanico = function () {
        var _this = this;
        // Filtra el arreglo y solo deja los ID de los vehiculos
        var chequeados = this.vehiculos
            .filter(function (vehiculo) { return !!vehiculo.Chequeado; })
            .map(function (vehiculo) {
            vehiculo.Mecanico = _this.elegido.Nombre;
            vehiculo.Chequeado = false;
            return vehiculo.id;
        });
        // Guarda el ID del mecanico a asignar
        var idMecanico = this.elegido.id;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]();
        // Busca el token del usuario que esta ingresado en el sistema actualmente
        var token = localStorage.getItem('id_token');
        // Settear los encabezados para la petición al API
        headers.append('Authorization', token);
        headers.append('Content-Type', 'application/json');
        this.http.post('gerente/reporte-mecanico', { id: idMecanico }, { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            data.ordenes.map(function (orden) {
            });
            _this.ordenes = data.ordenes;
            console.log('Ordenes: ', _this.ordenes);
            localStorage.setItem('ordenes', JSON.stringify(data.ordenes));
            var rows = [JSON.stringify(data.ordenes).replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n")];
            var csvContent = "data:text/csv;charset=utf-8,";
            rows.forEach(function (rowArray) {
                var row = rowArray;
                csvContent += row;
            });
            var encodedUri = encodeURI(csvContent);
            var link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", "Reporte-Mecanico.csv");
            document.body.appendChild(link); // Required for FF
            link.click(); // This will download the data file named "my_data.csv".
        }, function (err) {
            console.log('Error al pedir los vehiculos desde ColaEsperaComponent: ', err);
            return false;
        });
    };
    ReporteMecanicoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reporte-mecanico',
            template: __webpack_require__("../../../../../src/app/components/reporte-mecanico/reporte-mecanico.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/reporte-mecanico/reporte-mecanico.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["DatePipe"]])
    ], ReporteMecanicoComponent);
    return ReporteMecanicoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/reporte-modelo/reporte-modelo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main {\n    min-height: 42.5rem;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/reporte-modelo/reporte-modelo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col mx-0 mx-sm-4 mx-md-5 mx-lg-5 mx-xl-5 mt-5 mb-4\">\n      <h3>Reportes por Modelo</h3>\n    </div>\n</div>\n<div class=\"row main\">\n  <div class=\"col-12 mx-0 mx-sm-4 mx-md-5 mx-lg-5 mx-xl-5 my-4\">\n    <form (submit)=\"reporteModelo()\" class=\"d-flex align-items-center\">\n        <div class=\"col-4 form-group mr-4\">\n                  <label for=\"modeloV\">Modelo</label>\n                  <select id=\"elegido\" class=\"form-control\" [(ngModel)]=\"elegido\" name=\"elegido\">\n                      <option selected>488</option>\n                      <option>458 Spider</option>\n                      <option>4Runner</option>\n                      <option>Accord</option>\n                      <option>Aventador</option>\n                      <option>Aveo</option>\n                      <option>C-Class</option>\n                      <option>Camaro</option>\n                      <option>Challenger</option>\n                      <option>Charger</option>\n                      <option>Civic</option>\n                      <option>Durango</option>\n                      <option>E-Class</option>\n                      <option>Eclipse Cross</option>\n                      <option>Explorer</option>\n                      <option>F150</option>\n                      <option>FJ Cruiser</option>\n                      <option>Gran Tiger</option>\n                      <option>Giulia</option>\n                      <option>HS</option>\n                      <option>Huracán</option>\n                      <option>IS</option>\n                      <option>J50</option>\n                      <option>LS</option>\n                      <option>Mazda3</option>\n                      <option>Mazda6</option>\n                      <option>Montero</option>\n                      <option>Murano</option>\n                      <option>Mustang</option>\n                      <option>MX-5</option>\n                      <option>Orinoco</option>\n                      <option>Outlander</option>\n                      <option>Pathfinder</option>\n                      <option>R8</option>\n                      <option>Rapide S</option>\n                      <option>Ridgeline</option>\n                      <option>RS 6</option>\n                      <option>S-Class</option>\n                      <option>S90</option>\n                      <option>Sequoia</option>\n                      <option>Silverado</option>\n                      <option>Stelvio Quadrifoglio</option>\n                      <option>Stelvio TI</option>\n                      <option>Tiggo</option>\n                      <option>Titan</option>\n                      <option>TTS</option>\n                      <option>Urus</option>\n                      <option>V40 Cross Country</option>\n                      <option>Vanquish</option>\n                      <option>Vulcan</option>\n                      <option>XC90</option>\n                  </select>\n              </div>\n      <button class=\"btn btn-primary mt-3\" type=\"submit\">Generar Reporte</button>\n    </form>\n  </div>\n</div>\n "

/***/ }),

/***/ "../../../../../src/app/components/reporte-modelo/reporte-modelo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReporteModeloComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReporteModeloComponent = /** @class */ (function () {
    function ReporteModeloComponent(http, flashMessage, router, datePipe) {
        this.http = http;
        this.flashMessage = flashMessage;
        this.router = router;
        this.datePipe = datePipe;
    }
    ReporteModeloComponent.prototype.ngOnInit = function () {
    };
    ReporteModeloComponent.prototype.reporteModelo = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]();
        // Busca el token del usuario que esta ingresado en el sistema actualmente
        var token = localStorage.getItem('id_token');
        // Settear los encabezados para la petición al API
        headers.append('Authorization', token);
        headers.append('Content-Type', 'application/json');
        this.http.post('gerente/reporte-modelo', { Modelo: this.elegido }, { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            data.ordenes.map(function (orden) {
            });
            _this.ordenes = data.ordenes;
            console.log('Ordenes: ', _this.ordenes);
            localStorage.setItem('ordenes', JSON.stringify(data.ordenes));
            var rows = [JSON.stringify(data.ordenes).replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n").replace('},', "\r" + "\n")];
            var csvContent = "data:text/csv;charset=utf-8,";
            rows.forEach(function (rowArray) {
                var row = rowArray;
                csvContent += row;
            });
            var encodedUri = encodeURI(csvContent);
            var link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", "Reporte-Modelo-" + _this.elegido + ".csv");
            document.body.appendChild(link); // Required for FF
            link.click(); // This will download the data file named "my_data.csv".
        }, function (err) {
            console.log('Error al pedir los vehiculos desde ReporteModeloComponent: ', err);
            return false;
        });
    };
    ReporteModeloComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reporte-modelo',
            template: __webpack_require__("../../../../../src/app/components/reporte-modelo/reporte-modelo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/reporte-modelo/reporte-modelo.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["DatePipe"]])
    ], ReporteModeloComponent);
    return ReporteModeloComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/reporte-vehiculo/reporte-vehiculo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main {\n    min-height: 42.5rem;\n  }\n  \n  tr:hover {\n    background: #eaf2ff !important;\n  }\n  \n  .editar {\n    border: none;\n    background: transparent;\n    color: var(--dark);\n    opacity: 0;\n  }\n  \n  tr:hover .editar {\n    opacity: 1;\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/reporte-vehiculo/reporte-vehiculo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col mx-0 mx-sm-4 mx-md-5 mx-lg-5 mx-xl-5 mt-5 mb-4\">\n    <h3>Lista de Vehiculos</h3>\n  </div>\n</div>\n<div class=\"row main\">\n  <!-- Table -->\n  <div class=\"container\">\n    <div class=\"table-responsive\">\n      <table class=\"table table-hover bg-light text-dark\">\n        <thead class=\"thead-light\">\n          <tr>\n            <th scope=\"col\">ID</th>\n            <th scope=\"col\">Vehículo</th>\n            <th scope=\"col\">Cliente</th>\n            <th scope=\"col\">Estado</th>\n            <th scope=\"col\">Acciones</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let vehiculo of vehiculos; let i=index\">\n            <th scope=\"row\">{{vehiculo.id}}</th>\n            <td>{{vehiculo.Marca}} {{vehiculo.Modelo}}</td>\n            <td>{{vehiculo.Cliente}}</td>\n            <!-- Estado -->\n            <td>\n              <span *ngIf=\"vehiculo.Estado == undefined\" class=\"badge badge-pill badge-primary\">Sin Cita</span>\n              <span *ngIf=\"vehiculo.Estado == 'En Espera'\" class=\"badge badge-pill badge-warning text-white\">{{vehiculo.Estado}}</span>\n              <span *ngIf=\"vehiculo.Estado == 'Evaluado'\" class=\"badge badge-pill badge-secondary text-white\">{{vehiculo.Estado}}</span>\n              <span *ngIf=\"vehiculo.Estado == 'En Reparacion'\" class=\"badge badge-pill badge-info text-white\">{{vehiculo.Estado}}</span>\n              <span *ngIf=\"vehiculo.Estado == 'Reparado'\" class=\"badge badge-pill badge-success text-white\">{{vehiculo.Estado}}</span>\n              <span *ngIf=\"vehiculo.Estado == 'Listo'\" class=\"badge badge-pill badge-primary text-white\">{{vehiculo.Estado}}</span>\n            </td>\n            <!-- Acciones -->\n            <td>\n              <button (click)=\"generar(i)\" class=\"btn btn-sm btn-outline-success\">Generar Reporte</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n\n "

/***/ }),

/***/ "../../../../../src/app/components/reporte-vehiculo/reporte-vehiculo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReporteVehiculoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReporteVehiculoComponent = /** @class */ (function () {
    function ReporteVehiculoComponent(http, flashMessage, router, datePipe) {
        this.http = http;
        this.flashMessage = flashMessage;
        this.router = router;
        this.datePipe = datePipe;
    }
    ReporteVehiculoComponent.prototype.ngOnInit = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]();
        // Busca el token del usuario que esta ingresado en el sistema actualmente
        var token = localStorage.getItem('id_token');
        // Settear los encabezados para la petición al API
        headers.append('Authorization', token);
        headers.append('Content-Type', 'application/json');
        this.http.get('users/vehiculos-gerente-cliente', { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            data.vehiculos.map(function (vehiculo) { });
            _this.vehiculos = data.vehiculos;
            console.log(_this.vehiculos);
            localStorage.setItem('vehiculos', JSON.stringify(data.vehiculos));
        }, function (err) {
            console.log('Error al pedir los vehiculos desde ReporteVehiculoComponent: ', err);
            return false;
        });
    };
    ReporteVehiculoComponent.prototype.generar = function (indice) {
        var _this = this;
        // Filtra el arreglo y solo deja los ID de los vehiculos
        var chequeados = this.vehiculos
            .filter(function (vehiculo) { return !!vehiculo.Chequeado; })
            .map(function (vehiculo) {
            vehiculo.Chequeado = false;
            return vehiculo.id;
        });
        // Guarda el ID del vehiculo a buscar
        var idVehiculo = indice + 1;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]();
        // Busca el token del usuario que esta ingresado en el sistema actualmente
        var token = localStorage.getItem('id_token');
        // Settear los encabezados para la petición al API
        headers.append('Authorization', token);
        headers.append('Content-Type', 'application/json');
        this.http.post('gerente/reporte-vehiculo', { id: idVehiculo }, { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            data.ordenes.map(function (orden) {
            });
            _this.ordenes = data.ordenes;
            console.log('Ordenes: ', _this.ordenes);
            if (_this.ordenes.length == 0) {
                _this.flashMessage.show('El vehiculo seleccionado no tiene ninguna orden de reparación', { cssClass: 'custom-danger', timeout: 3000 });
                return false;
            }
            localStorage.setItem('ordenes', JSON.stringify(data.ordenes));
            var rows = [JSON.stringify(data.ordenes).replace('},', '\r' + '\n').replace('},', '\r' + '\n').replace('},', '\r' + '\n').replace('},', '\r' + '\n').replace('},', '\r' + '\n').replace('},', '\r' + '\n').replace('},', '\r' + '\n').replace('},', '\r' + '\n').replace('},', '\r' + '\n').replace('},', '\r' + '\n').replace('},', '\r' + '\n').replace('},', '\r' + '\n').replace('},', '\r' + '\n').replace('},', '\r' + '\n').replace('},', '\r' + '\n').replace('},', '\r' + '\n').replace('},', '\r' + '\n').replace('},', '\r' + '\n').replace('},', '\r' + '\n')];
            var csvContent = "data:text/csv;charset=utf-8,";
            rows.forEach(function (rowArray) {
                var row = rowArray;
                csvContent += row;
            });
            var encodedUri = encodeURI(csvContent);
            var link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", "Reporte-Vehiculo.csv");
            document.body.appendChild(link); // Required for FF
            link.click(); // This will download the data file named "my_data.csv".
        }, function (err) {
            console.log('Error al pedir los vehiculos desde ColaEsperaComponent: ', err);
            return false;
        });
    };
    ReporteVehiculoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-reporte-vehiculo',
            template: __webpack_require__("../../../../../src/app/components/reporte-vehiculo/reporte-vehiculo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/reporte-vehiculo/reporte-vehiculo.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["DatePipe"]])
    ], ReporteVehiculoComponent);
    return ReporteVehiculoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/solicitar-orden/solicitar-orden.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main {\n    min-height: 42.5rem;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/solicitar-orden/solicitar-orden.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row main p-4 p-md-3\">\n  <!-- Form de Registro para Vehiculos -->\n  <div class=\"container py-5 mt-3 mb-5\">\n    <h2 class=\"mb-3\">Solicitud de Reparación</h2>\n    <form (submit)=\"solicitarOrden()\">\n      <div class=\"form-group\">\n          <label for=\"servicio\">Servicio a Solicitar</label>\n          <select id=\"servicio\" class=\"form-control\" [(ngModel)]=\"servicio\" name=\"servicio\">\n              <option selected>Revisión General</option>\n              <option>Cambio de Aceite</option>\n              <option>Carrocería</option>\n              <option>Alineación</option>\n              <option>Otro</option>\n          </select>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"detalles\">Detalle de Situación</label>\n        <textarea class=\"form-control\" name=\"detalles\" id=\"detalles\" [(ngModel)]=\"detalles\" rows=\"10\" placeholder=\"Agregue cualquier información adicional que considere pertinente.\"></textarea>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"imagen\">Imagen</label>\n        <!-- <input type=\"file\" class=\"form-control-file\" id=\"imagen\" name=\"imagen\"> -->\n        <image-upload\n           [max]=\"1\" \n           [preview]=\"true\" \n           [extensions]=\"['jpg','png','jpeg']\" \n           [buttonCaption]=\"'Elegir Imagen'\" \n           [dropBoxMessage]=\"'¡Suelte su imagen aquí!'\" \n           [clearButtonCaption]=\"'Eliminar'\" \n           [class]=\"'img-uploader'\"\n           [maxFileSize]=\"1000000\"\n           (uploadFinished)=\"onUploadFinished($event)\"\n        ></image-upload>\n      </div>\n      <div class=\"d-flex justify-content-center\">\n        <button type=\"submit\" class=\"btn btn-primary mt-4\">Solicitar</button>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/solicitar-orden/solicitar-orden.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SolicitarOrdenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SolicitarOrdenComponent = /** @class */ (function () {
    function SolicitarOrdenComponent(http, flashMessage, router) {
        this.http = http;
        this.flashMessage = flashMessage;
        this.router = router;
    }
    SolicitarOrdenComponent.prototype.ngOnInit = function () {
        this.idVehiculo = Number(localStorage.getItem('vehiculo-con-orden'));
    };
    SolicitarOrdenComponent.prototype.solicitarOrden = function () {
        var _this = this;
        // Chequear que todas las casillas esten llenas
        if (this.servicio == undefined || this.servicio == '' || this.detalles == undefined || this.detalles == '') {
            this.flashMessage.show('Por favor, llene todas las casillas.', { cssClass: 'custom-danger', timeout: 5000 });
            return false;
        }
        else {
            var data = {
                idVehiculo: this.idVehiculo,
                Cliente: JSON.parse(localStorage.getItem('user')),
                Servicio: this.servicio,
                Detalles: this.detalles,
                Imagen: this.imagen
            };
            // Settear los encabezados para la petición al API
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["Headers"]();
            headers.append('Content-Type', 'application/json');
            // Hacer la petición
            this.http.post('users/solicitar-orden', data, { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (response) {
                if (response.success) {
                    _this.flashMessage.show(response.msg, { cssClass: 'custom-success', timeout: 3000 });
                    _this.router.navigate(['/garage']);
                }
                else {
                    _this.flashMessage.show(response.msg, { cssClass: 'custom-danger', timeout: 3000 });
                }
            });
        }
    };
    SolicitarOrdenComponent.prototype.onUploadFinished = function (event) {
        console.log('Upload Event: ', event);
        this.imagen = event.src;
    };
    SolicitarOrdenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-solicitar-orden',
            template: __webpack_require__("../../../../../src/app/components/solicitar-orden/solicitar-orden.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/solicitar-orden/solicitar-orden.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], SolicitarOrdenComponent);
    return SolicitarOrdenComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    // Valida el token del usuario
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map