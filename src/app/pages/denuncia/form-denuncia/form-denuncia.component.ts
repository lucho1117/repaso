import { Component, OnInit,  } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-denuncia',
  templateUrl: './form-denuncia.component.html',
  styleUrls: ['./form-denuncia.component.css'],

})
export class FormDenunciaComponent implements OnInit {

  infoDenunciante: any;

  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
  
  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    console.log(this.infoDenunciante)
  }

  save() {
    console.log(this.infoDenunciante)
  }

}
