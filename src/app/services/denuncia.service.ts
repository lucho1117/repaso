import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DenunciaService {

  private url = 'http://localhost:10746/denuncia/buzon';

  constructor( private http: HttpClient) { }

  getListDenuncia( params: any ) {
    return this.http.get( this.url, { params } );
  }
}
