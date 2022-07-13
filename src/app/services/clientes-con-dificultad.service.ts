import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';



@Injectable({
  providedIn: 'root'
})
export class ClientesConDificultadService {
  readonly clientesCDApiUrl = environment.endpoint;

  //readonly clientesCDApiUrl = "https://localhost:7290/api";
  constructor(private http: HttpClient) { }


  getClientesCDList(): Observable<any[]> {
    return this.http.get<any>(this.clientesCDApiUrl + '/sp_CLIENTES_CON_DIFICULTADESLoadAllResult');
  }

  addClientesCD(data: any):  Observable<any[]> {
    return this.http.post<any>(this.clientesCDApiUrl + '/sp_CLIENTES_CON_DIFICULTADESLoadAllResult/Post', data);
  }

  deleteClientesCD(data: any): Observable<any[]> {
    return this.http.put<any>(this.clientesCDApiUrl + '/sp_CLIENTES_CON_DIFICULTADESLoadAllResult/Delete', data);
  }
  editClientesCD(data: any): Observable<any[]> {
    return this.http.patch<any>(this.clientesCDApiUrl + '/sp_CLIENTES_CON_DIFICULTADESLoadAllResult', data);
  }
  buscarClienteCDporID(data:string): Observable<any>{
    let cliente = this.clientesCDApiUrl + "/sp_CLIENTES_CON_DIFICULTADESLoadAllResult/clI_COD?CLI_COD=" + data;
    return this.http.get<any>(cliente);
  }
}
