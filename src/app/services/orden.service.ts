import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Orden } from '../models/orden';


@Injectable({
  providedIn: 'root'
})
export class OrdenService {

  selectedOrden: Orden;
  ordenes: Orden[] = [];
  URL_API = 'http://localhost:3000/api/orden'

  constructor(private http: HttpClient) {
    this.selectedOrden = new Orden();
  }


  postOrdenes(orden: Orden){
    return this.http.post(this.URL_API, orden);
  }

  getOrdenes(){
    return this.http.get<Orden[]>(this.URL_API);
  }

  putOrdenes(orden: Orden){
    return this.http.put(this.URL_API + `/${orden._id}`, orden);
  }

  deleteOrdenes(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }


}
