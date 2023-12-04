import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-col',
  templateUrl: './grid-col.component.html',
  styleUrls: ['./grid-col.component.css']
})
export class GridColComponent implements OnInit {
  @Input() colData : any;
  constructor() { }

  ngOnInit() {
  }

}
