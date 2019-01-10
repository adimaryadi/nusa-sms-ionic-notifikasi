import { Component } from '@angular/core';
import { NavController , LoadingController , AlertController } from 'ionic-angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VerifikasiPage } from '../verifikasi/verifikasi';
import { ModelNotificationProvider } from '../../providers/model-notification/model-notification';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // link api
  // http://api.nusasms.com/api/v3/sendsms/plain?user=adimaryadi_api&password=1adimaryadi1&SMSText=Hello%20NusaSMS!&GSM=6283112726988&output=json

  // paramenter Layanan Module Sms 
  // user adimaryadi
  // password rahasia
  // sms bebas
  // number nomor telepon
  // format json 
   
  constructor(public navCtrl: NavController , private modelnotifikasi: ModelNotificationProvider , private loading: LoadingController , private peringatan: AlertController) {

  }

  data   	= 	 new FormGroup({
  	telepon:     new FormControl('',Validators.required)
  })

  pesan               =    'PT INFIPLUS SOULUTION Nomor Verifikasi Anda 185846';
  encodeUrl           =    encodeURI(this.pesan);

  // konfigurasi sms
  user                =    'adimaryadi_api';
  password            =    '1adimaryadi1';
  format              =    'json';
  // end of file

  paket               =     {};

  data_status:any         =     [];
  kirim() {
  	let telepon       =     this.data.value.telepon;
    let loading       =     this.loading.create({
       content: 'Mengirim Kode Notifikasi'
    })
    loading.present();
    this.modelnotifikasi.ApiSmsService(this.user, this.password, this.encodeUrl, telepon, this.format)
        .subscribe(hasil => {
          loading.dismiss();
          this.data_status       =      hasil;
          let status             =      this.data_status.results[0].status;
          if (status == '-1') {
            let peringatan     =    this.peringatan.create({
              title: 'Pemberitahuan !',
              subTitle: 'Kesalahan dalam memproses permintaan',
              buttons: ['OK']
            })
            peringatan.present();
          } else if (status == '-2') {
            let peringatan     =    this.peringatan.create({
              title: 'Pemberitahuan !',
              subTitle: 'Layanan kredit sudah habis isi ulang sms gateway anda',
              buttons: ['OK']
            })
            peringatan.present();            
          } else if (status == '-3') {
            let peringatan     =    this.peringatan.create({
              title: 'Pemberitahuan !',
              subTitle: 'Jaringan yang ditargetkan tidak tercakup pada akun tertentu',
              buttons: ['OK']
            })
            peringatan.present();             
          } else if (status == '-5') {
            let peringatan     =    this.peringatan.create({
              title: 'Pemberitahuan !',
              subTitle: 'User dan Password salah di api',
              buttons: ['OK']
            })
            peringatan.present();             
          } else if (status == '-6') {
            let peringatan     =    this.peringatan.create({
              title: 'Pemberitahuan !',
              subTitle: 'Alamat tujuan tidak ada dalam permintaan',
              buttons: ['OK']
            })
            peringatan.present();             
          } else if (status == '-7') {
            let peringatan     =    this.peringatan.create({
              title: 'Pemberitahuan !',
              subTitle: 'Saldo telah kedaluwarsa',
              buttons: ['OK']
            })
            peringatan.present();            
          } else if (status == '-11') {
            let peringatan     =    this.peringatan.create({
              title: 'Pemberitahuan !',
              subTitle: 'Nomor tidak dikenali oleh platform NusaSMS',
              buttons: ['OK']
            })
            peringatan.present();             
          } else if (status == '-12') {
            let peringatan     =    this.peringatan.create({
              title: 'Pemberitahuan !',
              subTitle: 'Pesan tidak ada dalam permintaan',
              buttons: ['OK']
            })
            peringatan.present();             
          } else if (status == '-13') {
            let peringatan     =    this.peringatan.create({
              title: 'Pemberitahuan !',
              subTitle: 'Nomor tidak dikenali oleh platform NusaSMS',
              buttons: ['OK']
            })
            peringatan.present();            
          } else if (status == '-22') {
            let peringatan     =    this.peringatan.create({
              title: 'Pemberitahuan !',
              subTitle: 'Format XML salah, disebabkan oleh kesalahan sintaksis',
              buttons: ['OK']
            })
            peringatan.present();             
          } else if (status == '-23') {
            let peringatan     =    this.peringatan.create({
              title: 'Pemberitahuan !',
              subTitle: 'Kesalahan umum, alasan dapat bervariasi',
              buttons: ['OK']
            })
            peringatan.present();            
          } else if (status == '-26') {
            let peringatan     =    this.peringatan.create({
              title: 'Pemberitahuan !',
              subTitle: 'Kesalahan API umum, alasannya mungkin beragam',
              buttons: ['OK']
            })
            peringatan.present();              
          } else if (status == '-27') {
            let peringatan     =    this.peringatan.create({
              title: 'Pemberitahuan !',
              subTitle: 'Parameter penjadwalan tidak valid',
              buttons: ['OK']
            })
            peringatan.present();           
          } else if (status == '-28') {
            let peringatan     =    this.peringatan.create({
              title: 'Pemberitahuan !',
              subTitle: 'PushURL tidak valid dalam permintaan',
              buttons: ['OK']
            })
            peringatan.present();               
          } else if (status == '-30') {
            let peringatan     =    this.peringatan.create({
              title: 'Pemberitahuan !',
              subTitle: 'APPID tidak valid dalam permintaan',
              buttons: ['OK']
            })
            peringatan.present();              
          } else if (status == '-33') {
            let peringatan     =    this.peringatan.create({
              title: 'Pemberitahuan !',
              subTitle: 'MessageID duplikat dalam permintaan',
              buttons: ['OK']
            })
            peringatan.present();             
          } else if (status == '-34') {
            let peringatan     =    this.peringatan.create({
              title: 'Pemberitahuan !',
              subTitle: 'Nama pengirim tidak diperbolehkan',
              buttons: ['OK']
            })
            peringatan.present();            
          } else if (status == '-40') {
            let peringatan     =    this.peringatan.create({
              title: 'Pemberitahuan !',
              subTitle: 'Alamat IP Klien Tidak Dalam Daftar Putih',
              buttons: ['OK']
            })
            peringatan.present();             
          } else if (status == '-99') {
            let peringatan     =    this.peringatan.create({
              title: 'Pemberitahuan !',
              subTitle: 'Kesalahan dalam memproses permintaan, alasannya mungkin beragam',
              buttons: ['OK']
            })
            peringatan.present();             
          } else if (status == '-77') {
            let peringatan     =    this.peringatan.create({
              title: 'Pemberitahuan !',
              subTitle: 'lebih dari 10 pesan yang sama dikirim ke resep yang sama dalam 1 hari',
              buttons: ['OK']
            })
            peringatan.present();             
          } else {
            this.navCtrl.push(VerifikasiPage, {
              telepon: telepon
            });            
          }
        }, pusing => {
          let peringatan     =    this.peringatan.create({
            title: 'Pengiriman Notifikasi Pusing ',
            subTitle: 'pusing apa yang salah ' + pusing,
            buttons: ['OK']
          })
          peringatan.present();
        })
  }

}
