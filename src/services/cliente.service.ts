import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClienteDTO } from '../models/cliente.dto';
import { API_CONFIG } from '../config/api.config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  salva(cliente: ClienteDTO) {
    return this.http.post(
        `${API_CONFIG.baseUrl}/customer`, 
        cliente,
        { 
            observe: 'response', 
            responseType: 'text'
        }
    ); 
  }

  altera(cliente: ClienteDTO) {
      return this.http.put(
          `${API_CONFIG.baseUrl}/customer/`, 
          cliente,
          { 
              observe: 'response', 
              responseType: 'text'
          }
      ); 
  }

  exclui(id: number) {
      return this.http.delete(
          `${API_CONFIG.baseUrl}/customer/${id}`, 
          { 
              observe: 'response', 
              responseType: 'text'
          }
      ); 
  }

  buscaTodos(): Observable<any> {
      return this.http.get<any>(`${API_CONFIG.baseUrl}/customers/`);
  }

}

