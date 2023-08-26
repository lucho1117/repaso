import { Component, OnInit, Input } from '@angular/core';
import { DenunciaService } from '../../../../services/denuncia.service';
import { sexoCatalogo, estadoCivilCatalogo } from 'src/app/utils/constantes';

@Component({
  selector: 'app-denunciante',
  templateUrl: './denunciante.component.html',
  styleUrls: ['./denunciante.component.css']
})
export class DenuncianteComponent implements OnInit {

  @Input() formPersona:any;

  listPuebloCaralogo: any[] = [];
  listReligionCaralogo: any[] = [];
  listDepartamentoCaralogo: any[] = [];
  listMunicipioCaralogo: any[] = [];
  listIdiomaCaralogo: any[] = [];
  listSexoCatalogo: any[] = sexoCatalogo;
  listEstadoCivilCatalogo: any[] = estadoCivilCatalogo;

  constructor( private denunciaService: DenunciaService) { }

  ngOnInit(): void {
    this.getListCatalogos();
  }

  getListCatalogos() {
    this.denunciaService.getListCatalogos().subscribe( (data: any) => {
      if ( data.valid ) {
        this.listPuebloCaralogo = data.data.pueblo;
        this.listReligionCaralogo =  data.data.religion;
        let prevIdiomas =  data.data.idioma;
        prevIdiomas.unshift({idIdioma: 1, nombre: 'ESPAÑOL'});
        this.listIdiomaCaralogo = prevIdiomas;
        this.getDepartamentos(data.data.region);
      } 
    
    })
  }

  getDepartamentos( regiones: any ) {
    
    let lstRegion = [];
    let lstDepartamentos = [];

    lstRegion = regiones  || [];
    lstRegion.forEach((element) => {
      if (element.departamento) {
          element.departamento.forEach((data) => {
              lstDepartamentos.push(data);
          });
      }
    });
    lstDepartamentos.sort(function (a, b) {
      if (a.nombre > b.nombre)return 1;
      if (a.nombre < b.nombre) return -1;
      // a must be equal to b
      return 0;
    });

    this.listDepartamentoCaralogo = lstDepartamentos;
  }

  handleInputChange( item: any) {
    this.listMunicipioCaralogo = item.municipio;
  }

}
