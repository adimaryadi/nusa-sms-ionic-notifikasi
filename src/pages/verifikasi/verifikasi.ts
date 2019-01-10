import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , AlertController } from 'ionic-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the VerifikasiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-verifikasi',
  templateUrl: 'verifikasi.html',
})
export class VerifikasiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private pesan: AlertController) {
  }

  ionViewDidLoad() {

  }

  telepon   	 	=  this.navParams.get('telepon');
  one_input     =     '';
  two_input     =     '';
  three_input   =     '';
  four_input    =     '';
  five_input    =     '';
  six_input     =     '';

  validtion_number 	=  new FormGroup({
  	one: 		 	     new FormControl(this.one_input,Validators.required),
  	two: 		 	     new FormControl(this.two_input,Validators.required),
  	three: 	 	 	   new FormControl(this.three_input,Validators.required),
  	four: 			   new FormControl(this.four_input,Validators.required),
  	five: 			   new FormControl(this.five_input,Validators.required),
  	six: 			     new FormControl(this.six_input,Validators.required)
  })

  OneEvent(event:any) {
    if (event.length > 1) {
      let peringatan     =    this.pesan.create({
        title: 'Peringatan !',
        subTitle: 'Kode Input Per Kolom satu',
        buttons: ['dimengerti']
      })
      peringatan.present();
      this.validtion_number.reset();   
    }
  }

  TwoEvent(event:any) {
    if (event.length > 1) {
      let peringatan     =    this.pesan.create({
        title: 'Peringatan !',
        subTitle: 'Kode Input Per Kolom satu',
        buttons: ['dimengerti']
      })
      peringatan.present();
      this.validtion_number.reset();   
    }
  } 

  ThreeEvent(event:any) {
    if (event.length > 1) {
      let peringatan     =    this.pesan.create({
        title: 'Peringatan !',
        subTitle: 'Kode Input Per Kolom satu',
        buttons: ['dimengerti']
      })
      peringatan.present();
      this.validtion_number.reset();   
    }
  } 

  FourEvent(event:any) {
    if (event.length > 1) {
      let peringatan     =    this.pesan.create({
        title: 'Peringatan !',
        subTitle: 'Kode Input Per Kolom satu',
        buttons: ['dimengerti']
      })
      peringatan.present();
      this.validtion_number.reset();   
    }
  }      

  FiveEvent(event:any) {
    if (event.length > 1) {
      let peringatan     =    this.pesan.create({
        title: 'Peringatan !',
        subTitle: 'Kode Input Per Kolom satu',
        buttons: ['dimengerti']
      })
      peringatan.present();
      this.validtion_number.reset();   
    }
  }
   
  SixEvent(event:any) {
    if (event.length > 1) {
      let peringatan     =    this.pesan.create({
        title: 'Peringatan !',
        subTitle: 'Kode Input Per Kolom satu',
        buttons: ['dimengerti']
      })
      peringatan.present();
      this.validtion_number.reset();   
    }
  } 
  Verifikasi() {    
  	  if (!isNaN(this.telepon)) {
          let one           =    this.validtion_number.value.one;
          let two           =    this.validtion_number.value.two;
          let three         =    this.validtion_number.value.three;
          let four          =    this.validtion_number.value.four;
          let five          =    this.validtion_number.value.five;
          let six           =    this.validtion_number.value.six;
          let nomor_verif   =    one + two + three + four + five + six;

          if (nomor_verif == '185846') {
            let pesan      =    this.pesan.create({
              title:    'Verifikasi',
              subTitle: 'Nomor Verifikasi Suksess',
              buttons: ['OK']
            })
            pesan.present();  
          } else {
            let pesan      =    this.pesan.create({
              title:     'Verifikasi !',
              subTitle:  'Nomor Verifikasi Salah',
              buttons: ['Dimengerti']
            })
            pesan.present();
          }
  	  } else {
  	  	let pesan      =    this.pesan.create({
  	  		title: 'Pemberitahuan !',
  	  		subTitle: 'Hanya Bisa Nomor Telepon',
  	  		buttons: ['dimengerti']
  	  	})
  	  	pesan.present();
  	  	this.navCtrl.pop();
  	  }
  }
}
