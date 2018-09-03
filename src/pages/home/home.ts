import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProductosProvider } from '../../providers/productos/productos';
import { ProductoPage } from '../producto/producto';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public productosProv: ProductosProvider) {
    console.log('HomePage constructor');
    
  }

  public siguientePag(infiniteScroll:any) {
    this.productosProv.getProductos().then( ( masProductos )=> {
      console.log('Promesa de getProductos: ', masProductos);
      
      if ( masProductos ) {
        //Para indicar al infiniteScroll que el método asíncrono ha acabado
        infiniteScroll.complete();
      } else {
        //para deshabilitarlo
        infiniteScroll.enable(false); 
      }
      
    } );
  }

  public irDetalle( producto:any ) {
    console.log('en IrDetalle', producto);
    this.navCtrl.push(ProductoPage, {
      producto: producto
    })
    
  }

}
