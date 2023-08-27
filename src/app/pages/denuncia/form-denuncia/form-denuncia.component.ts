import { Component, OnInit,  } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-denuncia',
  templateUrl: './form-denuncia.component.html',
  styleUrls: ['./form-denuncia.component.css'],

})
export class FormDenunciaComponent implements OnInit {

  formPersona: FormGroup;

  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
  
  constructor(private _formBuilder: FormBuilder) {
    this.formPersona = this._formBuilder.group({});
  }

  ngOnInit(): void {
   
  }

  save() {
    console.log(this.formPersona.value)
  }

}
