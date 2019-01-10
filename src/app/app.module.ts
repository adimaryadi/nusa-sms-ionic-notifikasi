import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { VerifikasiPage } from '../pages/verifikasi/verifikasi';
import { ModelNotificationProvider } from '../providers/model-notification/model-notification';
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    VerifikasiPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    VerifikasiPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ModelNotificationProvider
  ]
})
export class AppModule {}
