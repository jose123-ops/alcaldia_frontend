import { HttpClient }
from '@angular/common/http';

import { Injectable }
from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  url =
  'http://192.168.2.171:3000/api';

  constructor(
    private http:HttpClient
  ) { }

  login(data:any){

    return this.http.post(

      `${this.url}/auth/login`,
      data

    );

  }

  guardarActivo(data:any){

  return this.http.post(

    `${this.url}/activos`,
    data

  );

}

obtenerActivos(){

  return this.http.get(

    `${this.url}/activos`

  );

}

estadisticas(){

  return this.http.get(

    `${this.url}/activos/estadisticas`

  );

}

}