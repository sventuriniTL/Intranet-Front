import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceAccionesClienteService {
public clientesArray:any[] = []

  constructor() { }

public pasarDato(param: any){
  this.clientesArray.push(param)
  return this.clientesArray
}

}