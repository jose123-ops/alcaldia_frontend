import { Component, Input } from '@angular/core';

import {

  IonToolbar,
  IonTitle,
  IonButtons,
  IonMenuButton,
  IonHeader

} from '@ionic/angular/standalone';

@Component({

  selector:'app-header',

  templateUrl:'./header.component.html',

  standalone:true,

  imports:[

    IonToolbar,
    IonTitle,
    IonButtons,
    IonMenuButton,
    IonHeader

  ]

})

export class HeaderComponent {

  @Input()
  titulo = '';

}