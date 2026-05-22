import { Component } from '@angular/core';

import { FormsModule }
from '@angular/forms';

import {

  IonContent,
  IonItem,
  IonInput,
  IonButton,
  IonIcon,
  IonCheckbox

} from '@ionic/angular/standalone';

import { ApiService }
from '../../services/api';

import { Router }
from '@angular/router';

import { addIcons } from 'ionicons';

import {

  person,
  personOutline,
  lockClosedOutline,
  eyeOutline,
  eyeOffOutline

} from 'ionicons/icons';

@Component({

  selector: 'app-login',

  templateUrl: './login.page.html',

  styleUrls: ['./login.page.scss'],

  standalone: true,

  imports: [

    IonContent,
    IonItem,
    IonInput,
    IonButton,
    IonIcon,
    IonCheckbox,
    FormsModule

  ]

})

export class LoginPage {

  usuario = '';
  password = '';

  showPassword = false;

  constructor(

    private api:ApiService,
    private router:Router

  ){

    addIcons({

      person,
      personOutline,
      lockClosedOutline,
      eyeOutline,
      eyeOffOutline

    });

  }

  login(){

    const data = {

      usuario:this.usuario,
      password:this.password

    };

    this.api.login(data)
    .subscribe({

      next:(resp:any)=>{

        console.log(resp);

        localStorage.setItem(
          'token',
          resp.token
        );

        localStorage.setItem(
          'usuario',
          JSON.stringify(resp.usuario)
        );

        this.router.navigateByUrl(
          '/dashboard'
        );

      },

      error:(err)=>{

        console.log(err);

        alert(
          'Credenciales incorrectas'
        );

      }

    });

  }

  togglePassword(){

    this.showPassword =
    !this.showPassword;

  }

}