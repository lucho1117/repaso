import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-denunciante',
  templateUrl: './denunciante.component.html',
  styleUrls: ['./denunciante.component.css']
})
export class DenuncianteComponent implements OnInit {

  @Input() firstFormGroup:any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.firstFormGroup);
  }

}
