import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { UiServiceService } from '../../services/ui-service.service';
import { Usuario } from '../../models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  @ViewChild('slidePrincipal') slides: IonSlides;

  loginUser = {
    UserName: 'admin',
    Password: 'Admin.2020'
  };

  registerUser: Usuario = {}

  constructor( private navCtrl: NavController, private usuarioService: UsuarioService,
               private uiService: UiServiceService) { }

  async login( fLogin: NgForm ) {

    if( fLogin.invalid ) { return; }

    await this.uiService.spinnerLoading();

    //console.log( fLogin.valid );
    //console.log( this.loginUser );
    const valido = await this.usuarioService.login( this.loginUser.UserName, this.loginUser.Password );
    //this.router.navigate(['inicio']);

    if( valido ) {
      //navegar al inicio
      this.navCtrl.navigateRoot( '/home/tabs/tab1', { animated: true } );
      //console.log('entro');
    } else {
      //mostrar alerta de usuario y contrase;a no correctos
      //console.log('no entro');
      this.uiService.alertaInformativa('Usuario y contraseña no son correctos.')
    }
  }

  async registro( fRegistro: NgForm ) {

    if ( fRegistro.invalid ) { return; }
    //console.log( fRegistro.value );
    const valido = await this.usuarioService.registro( this.registerUser );

    if( valido ) {
      //navegar al inicio
      this.navCtrl.navigateRoot( '/home/tabs/tab1', { animated: true } );
      //console.log('entro');
    } else {
      //mostrar alerta de usuario y contrase;a no correctos
      //console.log('no entro');
      this.uiService.alertaInformativa('Usuario y contraseña no son correctos.')
    }
  }

  ionViewDidEnter() {
    this.slides.lockSwipes( true );
  }

  ngOnInit() {
  }

  mostrarRegisto() {
    this.slides.lockSwipes( false );
    this.slides.slideTo(1);
    this.slides.lockSwipes( true );
  }

  mostrarLogin() {
    this.slides.lockSwipes( false );
    this.slides.slideTo(0);
    this.slides.lockSwipes( true );
  }

}
