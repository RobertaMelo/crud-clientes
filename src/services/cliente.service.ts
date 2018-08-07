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

  save(cliente: ClienteDTO) {
    return this.http.post(
        `${API_CONFIG.baseUrl}/clientes`, 
        cliente,
        { 
            observe: 'response', 
            responseType: 'text'
        }
    ); 
  }

  update(cliente: ClienteDTO, id: number) {
      return this.http.put(
          `${API_CONFIG.baseUrl}/clientes/${id}`, 
          cliente,
          { 
              observe: 'response', 
              responseType: 'text'
          }
      ); 
  }

  delete(id: number) {
      return this.http.delete(
          `${API_CONFIG.baseUrl}/clientes/${id}`, 
          { 
              observe: 'response', 
              responseType: 'text'
          }
      ); 
  }

  findAll(): Observable<any> {
      return this.http.get<any>(`${API_CONFIG.baseUrl}/customers/`);
  }

}

