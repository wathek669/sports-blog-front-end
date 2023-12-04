import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts-examples',
  templateUrl: './charts-examples.component.html',
  styleUrls: ['./charts-examples.component.css']
})
export class ChartsExamplesComponent implements OnInit {
  //data = data;
  constructor() { }
  chart1:any;
  ngOnInit() {

    this.chart1 = {
      data:{
        labels:['V1','V2','V3','V4','V5','V6'],
        datasets : [
          {
            label : 'Serie1',
            data: [50,15,80,11,35,26]
          },
          {
            label : 'Serie2',
            data: [40,31,100,10,30,9]
          },
          {
            label : 'Serie3',
            data: [25,30,14,9,35,28]
          }	
        ]	
      }
    }
    
  }

}
