import { Injectable } from '@angular/core';
import { AnyObject } from 'chart.js/types/basic';

@Injectable({
  providedIn: 'root'
})
export class ServiceAccionesClienteService {
  public clienteData:any[] = []
  public id:any
  public nom: any
  constructor() { }

  public pasarDato(param: any) {
    const formAux = {
      id: param.clI_ID,
      nom: param.clI_NOM,
    }
    this.clienteData = param
    this.id = formAux.id 
    this.nom = formAux.nom
  }
}