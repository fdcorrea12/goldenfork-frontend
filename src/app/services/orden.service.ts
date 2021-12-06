import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Orden } from '../models/orden';

import { environment } from "src/environments/environment"

const URL_API = environment.backend;

@Injectable({
  providedIn: 'root'
})
export class OrdenService {

  selectedOrden: Orden;
  ordenes: Orden[] = [];

  constructor(private http: HttpClient) {
    this.selectedOrden = new Orden();
  }


  postOrdenes(orden: Orden){
    return this.http.post(URL_API, orden);
  }

  getOrdenes(){
    return this.http.get<Orden[]>(URL_API);
  }

  putOrdenes(orden: Orden){
    return this.http.put(URL_API + `/${orden._id}`, orden);
  }

  deleteOrdenes(_id: string){
    return this.http.delete(URL_API + `/${_id}`);
  }


}
