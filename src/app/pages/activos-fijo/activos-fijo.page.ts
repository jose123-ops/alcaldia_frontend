import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonInput, IonButtons, IonItem, IonButton, IonSelect, IonSelectOption, ModalController, IonIcon } from '@ionic/angular/standalone';
import { ModalActivoComponent }from '../../components/modal-activo/modal-activo.component';
import { ApiService } from 'src/app/services/api';
import { HeaderComponent }from '../../components/header/header.component';
@Component({
  selector: 'app-activos-fijo',
  templateUrl: './activos-fijo.page.html',
  styleUrls: ['./activos-fijo.page.scss'],
  standalone: true,
  imports: [IonIcon,    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonItem,
    IonInput,
    IonSelect,
    IonSelectOption,
    CommonModule,
    HeaderComponent,
   ]
})
export class ActivosFijoPage implements OnInit {

  activos:any[] = []; 

  constructor(
     private modalCtrl:ModalController,
      private api:ApiService
  ) { }

  ngOnInit() {
      this.cargarActivos();
  }

  async nuevoActivo(){

  const modal =
  await this.modalCtrl.create({

    component:
    ModalActivoComponent

  });

  await modal.present();

  const { data } =
  await modal.onDidDismiss();

  if(data){

    console.log(data);

  }

}

cargarActivos(){

  this.api
  .obtenerActivos()
  .subscribe({

    next:(resp:any)=>{

      console.log(resp);

      this.activos = resp;

    },

    error:(err)=>{

      console.log(err);

    }

  });

}

}
