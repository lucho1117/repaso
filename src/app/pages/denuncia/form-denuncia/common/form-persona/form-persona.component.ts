import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DenunciaService } from 'src/app/services/denuncia.service';
import { sexoCatalogo, estadoCivilCatalogo } from 'src/app/utils/constantes';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-persona',
  templateUrl: './form-persona.component.html',
  styleUrls: ['./form-persona.component.css']
})
export class FormPersonaComponent implements OnInit {

  @Input() formPersona: FormGroup;
  @Output() infoFormulario = new EventEmitter<any>();

  listPuebloCaralogo: any[] = [];
  listReligionCaralogo: any[] = [];
  listDepartamentoCaralogo: any[] = [];
  listMunicipioCaralogo: any[] = [];
  listIdiomaCaralogo: any[] = [];
  listSexoCatalogo: any[] = sexoCatalogo;
  listEstadoCivilCatalogo: any[] = estadoCivilCatalogo;
 
  
  constructor( private denunciaService: DenunciaService,
              private _formBuilder: FormBuilder ) { 
               

              
                
              }

  ngOnInit(): void {
    this.getListCatalogos();
    this.formPersona = this._formBuilder.group({
      tipo:            [''],
      nacionalidad:    [''],
      cui:             ['', Validators.required],
      pasaporte:       [''],
      pais:            [''],
      fechaNacimiento: ['', Validators.required],
      primerNombre:    ['', Validators.required],
      segundoNombre:   [''],
      otroNombre:      [''],
      primerApellido:  ['', Validators.required],
      segundoApellido: [''],
      casadaApellido:  [''],
      edad:            [0, Validators.required],
      sexo:            ['', Validators.required],
      estadoCivil:     ['', Validators.required],
      direccion:       [''],
      idMunicipio:     [''],
      municipio:       [''],
      idDepartamento:  [''],
      departamento:    [''],
      correo:          [''],
      profesion:       [''],
      colegiado:       [''],
      idioma:          [''],
      religion:        [''],
      pueblo:          [''],
      lgtbq:           [''],
      telefono1:       ['', Validators.required],
      telefono2:       [''],
      telefono3:       [''],
    });
    this.infoFormulario.emit( this.formPersona );
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


  valid() {
   this.infoFormulario.emit( this.formPersona );
  }
}
