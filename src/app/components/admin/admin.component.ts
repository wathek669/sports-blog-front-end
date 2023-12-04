import { Component, OnInit } from '@angular/core';
export interface Team {
  Id:number;
  Name: string;
  Stadium: string;
  Owner: String;
  Foundation: number;
} 

export interface Player {
  Id:number;
  Name: string;
  Position: string;
  Age: number;
  Number: number;
} 

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  actualDate : Date;

    constructor() { }

  ngOnInit() {
    this.actualDate = new Date();

  }

}
