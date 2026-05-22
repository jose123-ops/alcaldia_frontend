import { Component } from '@angular/core';
import { ApiService }from '../../services/api';

import {

  ModalController,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonInput,
  IonButton,
  IonButtons,
  IonSelect,
  IonSelectOption,
  IonTextarea

} from '@ionic/angular/standalone';

import { FormsModule }
from '@angular/forms';

@Component({

  selector:'app-modal-activo',

  templateUrl:'./modal-activo.component.html',

  styleUrls:['./modal-activo.component.scss'],

  standalone:true,

  imports:[

    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonInput,
    IonButton,
    IonButtons,
    IonSelect,
    IonSelectOption,
    IonTextarea,
    FormsModule

  ]

})

export class ModalActivoComponent {

  activo:any = {

    anio:'',
    codigo:'',
    codigo_Contable:'',
    color:'',
    comprobante:'',
    descripcion:'',
    estado:'',
    factura:'',
    marca:'',
    modelo:'',
    numero:'',
    observacion:'',
    precio:'',
    serie:'',
    ubicacion:''

  };

  constructor(
    private modalCtrl:ModalController,
     private api:ApiService
  ){}

  cerrar(){

    this.modalCtrl.dismiss();

  }

 guardar(){

  this.api
  .guardarActivo(this.activo)
  .subscribe({

    next:(resp)=>{

      console.log(resp);

      alert(
        'Activo guardado'
      );

      this.modalCtrl.dismiss(
        true
      );

    },

    error:(err)=>{

      console.log(err);

      alert(
        'Error al guardar'
      );

    }

  });

}

}