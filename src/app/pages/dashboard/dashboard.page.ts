import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { HeaderComponent }from '../../components/header/header.component';

import { IonContent, IonHeader, IonToolbar, IonTitle, IonIcon, IonButtons, IonMenuButton } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';

import {

  desktopOutline,
  cubeOutline,
  peopleOutline,
  alertCircleOutline

} from 'ionicons/icons';
import { ApiService } from 'src/app/services/api';

@Component({

  selector:'app-dashboard',

  templateUrl:'./dashboard.page.html',

  styleUrls:['./dashboard.page.scss'],

  standalone:true,

  imports: [
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonIcon,
    IonButtons,
    IonMenuButton,
    HeaderComponent
]

})

export class DashboardPage implements OnInit{

  usuario:any;
  estadisticas:any = {};

  constructor(
    private api:ApiService
  ){

    addIcons({

      desktopOutline,
      cubeOutline,
      peopleOutline,
      alertCircleOutline

    });

    const user =
    localStorage.getItem('usuario');

    if(user){

      this.usuario =
      JSON.parse(user);

    }

  }
  ngOnInit(): void {
      this.graficoBarras();
    
  this.cargarEstadisticas();



  this.graficoPastel();
    throw new Error('Method not implemented.');
  }

  graficoBarras(){

  new Chart('barChart', {

    type:'bar',

    data:{

      labels:[
        'Informática',
        'Finanzas',
        'RH',
        'Catastro'
      ],

      datasets:[{

        label:'Activos',

        data:[50,30,20,15]

      }]

    }

  });

}

graficoPastel(){

  new Chart('pieChart', {

    type:'pie',

    data:{

      labels:[
        'Buenos',
        'Dañados',
        'Mantenimiento'
      ],

      datasets:[{

        data:[80,10,10]

      }]

    }

  });

}

cargarEstadisticas(){

  this.api
  .estadisticas()
  .subscribe({

    next:(resp:any)=>{

      console.log(resp);

      this.estadisticas = resp;

      this.graficoEstados(
        resp.porEstado
      );

      this.graficoAnios(
        resp.porAnio
      );

    },

    error:(err: any)=>{

      console.log(err);

    }

  });

}

graficoEstados(data:any[]){

  new Chart('pieChart', {

    type:'pie',

    data:{

      labels:
      data.map(x=>x.estado),

      datasets:[{

        data:
        data.map(x=>x.total)

      }]

    }

  });

}

graficoAnios(data:any[]){

  new Chart('barChart', {

    type:'bar',

    data:{

      labels:
      data.map(x=>x.anio),

      datasets:[{

        label:'Activos',

        data:
        data.map(x=>x.total)

      }]

    }

  });

}


}