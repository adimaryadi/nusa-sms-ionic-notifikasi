import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';  
import 'rxjs/add/operator/catch';

/*
  Generated class for the ModelNotificationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ModelNotificationProvider {

  Apisms 	 	= 	  'http://api.nusasms.com/api/v3/sendsms/plain?';
  constructor(public http: HttpClient) {
    console.log('module notifikasi');
  }

  ApiSmsService(user , password, sms, nomor, format) {
  	return this.http.get(this.Apisms + 'user=' + user + '&password=' + password + '&SMSText=' + sms + '&GSM=' + nomor + '&output=' + format)
  			   .map(res => res)
  }

}
