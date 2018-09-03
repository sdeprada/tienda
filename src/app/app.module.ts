import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage, ProductoPage, PorCategoriasPage, CategoriasPage, CarritoPage, LoginPage, OrdenesPage, OrdenesDetallePage, TabsPage } from '../pages/index.pages';
import { CarritoProvider } from '../providers/carrito/carrito';
import { ProductosProvider } from '../providers/productos/productos';
import { UsuarioProvider } from '../providers/usuario/usuario';

import { HttpClientModule } from '@angular/common/http';
import { ImagenPipe } from '../pipes/imagen/imagen';

@NgModule({
  declarations: [
    MyApp,
    HomePage, 
    ProductoPage, PorCategoriasPage, CategoriasPage, CarritoPage, LoginPage, OrdenesPage, OrdenesDetallePage, TabsPage,
    ImagenPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage, 
    ProductoPage, PorCategoriasPage, CategoriasPage, CarritoPage, LoginPage, OrdenesPage, OrdenesDetallePage, TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    //CarritoProvider,
    ProductosProvider//,
    //UsuarioProvider
  ]
})
export class AppModule {}
