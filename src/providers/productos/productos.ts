import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_REST } from '../config/config';
import 'rxjs/add/operator/map';

/*
  Generated class for the ProductosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductosProvider {

  pagina:number = 0;
  productos:any[] = [];

  constructor(public http: HttpClient) {
    console.log('Hello ProductosProvider Provider');
    this.getProductos();
  }

  getProductos() {
    //lo meto todo en una promesa porque el infiniteScroll necesita que el método al que llama sea asíncrono
    return new Promise( (resolve, reject ) => {
      let url: string = URL_REST + '/productos/obtenerproductospag/' + this.pagina; 

    this.http.get( url ).subscribe( (data)=> {
      console.log('DATA: ', data);
      if ( data['error'] ) {
        console.error('ERROR al llamar al servicio rest', url);
        reject();
        
      } else {
        if ( (<any[]>data['lineas']).length == 0 ) {
          console.log('Ya no hay más productos');
          resolve(false);
        } else {
          //usamos el operador spread que lo que hace es desesctructurar el array en los elementos del mismo separados por comas
          this.productos.push( ...data['lineas'] )
          this.pagina++;
          console.log(`Consultada nueva página: ${this.pagina}, y cargado en productos: ${this.productos.length}`);
          resolve(true);
        }
      }
         
    });
    });
    
    
  }


}
