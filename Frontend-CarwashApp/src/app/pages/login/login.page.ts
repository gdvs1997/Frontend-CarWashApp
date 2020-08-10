import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingController, IonSlides } from '@ionic/angular';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  @ViewChild('slidePrincipal') slides: IonSlides;

  constructor( public loadingController: LoadingController, private router: Router ) { }

  async presentLoading( fLogin: NgForm) {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Por Favor, espere...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
    console.log( fLogin.valid );
    //this.router.navigate(['inicio']);
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

}
