import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-hechos',
  templateUrl: './hechos.component.html',
  styleUrls: ['./hechos.component.css']
})
export class HechosComponent implements OnInit {

  @Input() formHechos: FormGroup;
  @Output() infoFormularioHechos = new EventEmitter<any>();
 
  
  constructor( private _formBuilder: FormBuilder ) { 
               
  }

  ngOnInit(): void {
    this.formHechos = this._formBuilder.group({
      idEstado:          [1],
      lugar:             ['', Validators.required],
      fecha:             ['', Validators.required],
      tipoFecha:         ['EXACTA', Validators.required],
      hechos:            ['', Validators.required],
      testigos:          [''],
      otros:             [''],
      mes:               [''],
      anio:              [''],
      numeroExpediente:  [''],
    });
    this.infoFormularioHechos.emit( this.formHechos );
  }

  valid() {
  /*  this.infoFormularioHechos.emit( this.formHechos );
   console.log(this.formHechos.valid); */
   console.log(this.formHechos.get('tipoFecha').value, typeof this.formHechos.get('tipoFecha').value)
  }

  cambioFecha( event: any ) {
    console.log(event);
  }

}
