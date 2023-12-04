import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mprova',
  templateUrl: './mprova.component.html',
  styleUrls: ['./mprova.component.css']
})
export class MprovaComponent implements OnInit {
  @Input() matche : any;
  rowData:any;
  constructor() { }

  ngOnInit() {
    this.rowData = [ {value:"1"},{value:"2"},{value:"PSG"},{value:"TTT"}];
  }

}
