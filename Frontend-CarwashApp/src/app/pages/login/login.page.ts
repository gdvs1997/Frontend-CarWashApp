import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController, IonSlides, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';

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

  constructor( public loadingController: LoadingController, private navCtrl: NavController, private usuarioService: UsuarioService ) { }

  async login( fLogin: NgForm ) {

    if( fLogin.invalid ) { return; }

    await this.spinnerLoading();

    //console.log( fLogin.valid );
    //console.log( this.loginUser );
    const valido = await this.usuarioService.login( this.loginUser.UserName, this.loginUser.Password );
    //this.router.navigate(['inicio']);

    if( valido ) {
      //navegar al inicio
      this.navCtrl.navigateRoot( '/home/tabs/tab1', { animated: true } );
      console.log('entro');
    } else {
      //mostrar alerta de usuario y contrase;a no correctos
      console.log('no entro');
    }
  }

  async registro( fRegistro: NgForm ) {
    console.log( fRegistro.value );
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

  async spinnerLoading(){
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Por Favor, espere...',
      duration: 500
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    //console.log('Loading dismissed!');
  }

}
