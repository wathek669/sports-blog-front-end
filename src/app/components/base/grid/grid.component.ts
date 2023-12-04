import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  @Input() dataSource:any;
  myObjects :any[];
  colNLS:any;
  constructor() { }

  ngOnInit() {
    this.colNLS = this.dataSource.colDef;
    this.myObjects =  this.dataSource.myObjects;  
    console.log('this.myObjects type', typeof(this.myObjects));
    console.log('this.myObjects type', (this.myObjects));
    
  }

  display(obj: any)
  {
    alert(obj.Id );
  }
  delete(obj: any)
  {
    this.myObjects = this.myObjects.filter(function(f) { return f.Id !== obj.Id });
  }

}
