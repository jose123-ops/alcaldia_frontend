import { Component } from '@angular/core';

import {

  IonApp,
  IonMenu,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonMenuToggle,
  IonRouterOutlet

} from '@ionic/angular/standalone';

import { RouterLink }from '@angular/router';
import { RouterModule }from '@angular/router';

import { Router }
from '@angular/router';

import { addIcons } from 'ionicons';

import {

  homeOutline,
  desktopOutline,
  cubeOutline,
  peopleOutline,
  documentTextOutline,
  logOutOutline,
  personCircleOutline,


} from 'ionicons/icons';

@Component({

  selector:'app-root',

  templateUrl:'app.component.html',

  styleUrls:['app.component.scss'],

  standalone:true,

  imports:[

    IonApp,
    IonMenu,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonList,
    IonItem,
    IonLabel,
    IonIcon,
    IonMenuToggle,
    IonRouterOutlet,
    RouterLink,
    RouterModule

  ]

})

export class AppComponent {

  constructor(
    private router:Router
  ){

    addIcons({

      homeOutline,
      desktopOutline,
      cubeOutline,
      peopleOutline,
      documentTextOutline,
      logOutOutline,
      personCircleOutline

    });

  }

  logout(){

    localStorage.clear();

    this.router.navigateByUrl('/login');

  }

}