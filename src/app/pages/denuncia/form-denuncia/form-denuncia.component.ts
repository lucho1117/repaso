import { Component, OnInit,  } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-denuncia',
  templateUrl: './form-denuncia.component.html',
  styleUrls: ['./form-denuncia.component.css'],

})
export class FormDenunciaComponent implements OnInit {

  formPersona: FormGroup;
  formHechos: FormGroup;

  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = true;
  
  constructor(private _formBuilder: FormBuilder) {
    this.formPersona = this._formBuilder.group({});
    this.formHechos = this._formBuilder.group({});
  }

  ngOnInit(): void {
   
  }

  save() {
    console.log(this.formPersona.value);
    console.log(this.formPersona.valid);
    console.log(this.formHechos.value);
    console.log(this.formHechos.valid);
  }

}
