import { Component, OnInit,  } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-denuncia',
  templateUrl: './form-denuncia.component.html',
  styleUrls: ['./form-denuncia.component.css'],

})
export class FormDenunciaComponent implements OnInit {

  formPersona = this._formBuilder.group({
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
  
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
  
  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }

}
