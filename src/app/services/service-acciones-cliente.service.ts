import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceAccionesClienteService {
  public clienteData:any
  public id:any
  public nom: any
  public cliente:any
  public comentarios:any
  constructor() { }

  public pasarDato(param: any) {
    const formAux = {
      id: param.clI_ID,
      nom: param.clI_NOM,
      cliente: param.clI_COD,
      comentarios: param.comentarios
    }
    this.clienteData = param
    this.id = formAux.id 
    this.nom = formAux.nom
    this.cliente = formAux.cliente
    this.comentarios = formAux.comentarios

    console.log(this.clienteData)
  }

  public devolverDato(){
    return this.clienteData
  }

  
}
