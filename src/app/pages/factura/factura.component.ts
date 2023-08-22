import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import swal from'sweetalert2';
@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

  objForm: FormGroup;
  objItemForm: FormGroup;

  constructor() { 
    this.infoForm();
  }

  ngOnInit(): void {
  }

  infoForm(): void {
    this.objForm = new FormGroup ({
      'factura_id': new FormControl({value: 0, disabled: true }, Validators.required),
      'nombre': new FormControl('',  Validators.required),
      'apellido': new FormControl('',  Validators.required),
      'telefono': new FormControl('',  Validators.required),
      'nit': new FormControl('',  [Validators.required, Validators.minLength(3)]),
      'fecha': new FormControl('',  Validators.required),
      'direccion': new FormControl('', Validators.required),
      'codigo': new FormControl(0, Validators.required),
      'empleado': new FormControl('', Validators.required),
      "listItem": new FormArray([]),
    });

    this.objItemForm = new FormGroup ({
      'nombre': new FormControl('', Validators.required),
      'precio': new FormControl(0,  [ Validators.required, Validators.min(3)]),
      'cantidad': new FormControl(0,  [Validators.required, Validators.min(3)]),
    });
    
  }

  addItem() {
    const aux = {
      ...this.objItemForm.value,
      total: this.objItemForm.get('precio').value * this.objItemForm.get('cantidad').value
    }
    this.objForm.get('listItem').value.unshift(aux);
    this.objItemForm.reset();
  }

  deleteItem(i: number) {
    this.objForm.get('listItem').value.splice(i, 1);
  }

  save() {
    swal.fire('Hey user!', 'You are the rockstar!', 'info');
    console.log(this.objForm.value);
  }

}
