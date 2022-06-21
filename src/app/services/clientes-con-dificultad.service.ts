import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesConDificultadService {
  readonly clientesCDApiUrl = "https://localhost:7290/api";
  constructor(private http: HttpClient) { }

  getClientesCDList(): Observable<any[]> {
    return this.http.get<any>(this.clientesCDApiUrl + '/sp_CLIENTES_CON_DIFICULTADESLoadAllResult');
  }

  addClientesCD(data: any):  Observable<any[]> {
    return this.http.post<any>(this.clientesCDApiUrl + '/sp_CLIENTES_CON_DIFICULTADESLoadAllResult', data);
  }

  deleteClientesCD(data: any) {
    return this.http.delete(this.clientesCDApiUrl + '/sp_CLIENTES_CON_DIFICULTADESLoadAllResult', data);
  }
}
