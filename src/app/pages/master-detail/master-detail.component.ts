import { Component, OnInit } from '@angular/core';
import { DetailFactura } from 'src/app/models/detail-factura';
import { Factura } from 'src/app/models/master-detail';

@Component({
  selector: 'app-master-detail',
  templateUrl: './master-detail.component.html',
  styleUrls: ['./master-detail.component.css']
})
export class MasterDetailComponent implements OnInit {
   
  objMaster = new Factura({});
  objItem = new DetailFactura({});


  constructor() { 
    
  }

  ngOnInit(): void {
  }

  addItem() {
    const aux = {
      ...this.objItem,
      total: this.objItem.cantidad * this.objItem.precio
    }
    this.objMaster.listItem.unshift(aux);
    this.objItem = new DetailFactura({});
  }

  deleteItem(i: number) {
    this.objMaster.listItem.splice(i, 1);
  }

  save() {
    console.log(this.objMaster);
  }

}
