import { Component, OnInit,  } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
/* import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper'; */

@Component({
  selector: 'app-form-denuncia',
  templateUrl: './form-denuncia.component.html',
  styleUrls: ['./form-denuncia.component.css'],
  /* imports: [
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
  ], */
})
export class FormDenunciaComponent implements OnInit {

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
  }

}
