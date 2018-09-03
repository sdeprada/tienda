import { Pipe, PipeTransform } from '@angular/core';
import { URL_IMG } from '../../providers/config/config';

/**
 * Generated class for the ImagenPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'imagen',
})
export class ImagenPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(codigo: string) {
    let url = `${URL_IMG}${codigo}.jpg`;
    //console.log('URL Imagen: ', url);
    
    return url;
  }
}
