import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DenunciaService {

  private baseUrl = 'http://localhost:10746';

  constructor( private http: HttpClient) { }

  getListDenuncia( params: any ) {
    return this.http.get<any>( this.baseUrl + '/denuncia/buzon', { params } );
  }

  getListCatalogos( ) {
    return this.http.get<any>( this.baseUrl + '/list/CatalogoGeneral' );
  }

}
