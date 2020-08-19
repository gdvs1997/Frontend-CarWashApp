import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { environment } from '../../environments/environment';
import { Usuario } from '../models/usuario';

const URL = environment.url;

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token: string = null;

  constructor( private http: HttpClient , private storage: Storage ) { }

  login ( UserName: string, Password: string ) {
    const data = { UserName, Password };

    return new Promise( resolve =>{

      this.http.post(`${ URL }/login/login`, data)
      .subscribe( resp => {
        console.log(resp);

        if( resp['ok'] ){
         // console.log('Credenciales correctas..')
          this.guardarToken( resp['token'] );
          resolve(true);
          
        } else {
          //console.log('Credenciales incorrectas..')
          this.token = null;
          this.storage.clear();
          resolve(false);
        }
      });

    });
  }

  registro ( usuario: Usuario ) {
    return new Promise( resolve => {
      this.http.post(`${ URL }/login/crear`, usuario)
      .subscribe( resp => {
        console.log(resp);

        if( resp['ok'] ){
         // console.log('Credenciales correctas..')
          this.guardarToken( resp['token'] );
          resolve(true);
          
        } else {
          //console.log('Credenciales incorrectas..')
          this.token = null;
          this.storage.clear();
          resolve(false);
        }
      });
    });
  }

  async guardarToken( token: string ){
    this.token = token;
    await this.storage.set('token', token);
  }
}
