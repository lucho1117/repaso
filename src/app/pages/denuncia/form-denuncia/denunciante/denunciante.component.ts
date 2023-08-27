import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-denunciante',
  templateUrl: './denunciante.component.html',
  styleUrls: ['./denunciante.component.css']
})
export class DenuncianteComponent implements OnInit {

  @Input() otra: any; 

  formPersona: FormGroup;

  constructor( private formBuilder: FormBuilder ) {
    this.formPersona = this.formBuilder.group({});
   }

  ngOnInit(): void {
    
  }

  save() {
    console.log(this.formPersona.value);
  }
}
