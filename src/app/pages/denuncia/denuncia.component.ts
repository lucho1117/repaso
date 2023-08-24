import { Component, OnInit } from '@angular/core';
import { DenunciaService } from 'src/app/services/denuncia.service';

@Component({
  selector: 'app-denuncia',
  templateUrl: './denuncia.component.html',
  styleUrls: ['./denuncia.component.css'],
})
export class DenunciaComponent implements OnInit {

  listDenuncias: any;
  displayedColumns: string[] = ['idDenuncia', 'correlativo', 'fecha', 'estado'];
  aux: any = {
    text: '', 
    page: 1,
    limit: 5,
    estado: '',
    nip: ''
  }

  constructor( private denunciaService: DenunciaService) { }

  ngOnInit(): void {
    this.getListDenuncia( this.aux );
  }

  getListDenuncia( params: any ): void {

    this.denunciaService.getListDenuncia(params).subscribe( (data: any) => {
      if ( data.valid ) {
        this.listDenuncias = data.data;
      }
    });
    
  }

  handlePageEvent(event: any): void {
    const aux = {
      ...this.aux, 
      page: event.pageIndex + 1,
      limit: event.pageSize,
    }
    this.getListDenuncia( aux );
  }
}


