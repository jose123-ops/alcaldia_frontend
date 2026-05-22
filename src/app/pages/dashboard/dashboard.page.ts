import { Component } from '@angular/core';

import {

  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle

} from '@ionic/angular/standalone';

@Component({

  selector:'app-dashboard',

  templateUrl:'dashboard.page.html',

  styleUrls:['dashboard.page.scss'],

  standalone:true,

  imports:[

    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle

  ]

})

export class DashboardPage {

  usuario:any;

  constructor(){

    const user =
    localStorage.getItem('usuario');

    if(user){

      this.usuario =
      JSON.parse(user);

    }

  }

}