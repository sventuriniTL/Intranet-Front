import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceAccionesClienteService {
  public clienteData: any
  public id: any
  public nom: any
  public cliente: any
  public comentarios: any
  public clienteDataSubject: any

  constructor() { }

  public pasarDato(param: any) {

    this.clienteData = param
    this.id = this.clienteData.clI_ID
    this.nom = this.clienteData.clI_NOM
    this.cliente = this.clienteData.clI_COD
    this.comentarios = this.clienteData.comentarios

    console.log(this.clienteData)
  }

  handlerData(param: any) {
    this.clienteDataSubject = new BehaviorSubject<string>(param);
    this.clienteDataSubject.next(param => this.clienteData = param)

  }
}
