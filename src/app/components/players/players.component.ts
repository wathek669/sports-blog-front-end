import { Component, OnInit } from '@angular/core';
import { Player } from '../admin/admin.component';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players :Player[];// Di tipo Player[] non ha funzionato
  colNLS:any;
  dataSource:any;
  constructor() { }

  ngOnInit() {
    this.colNLS = [{id:"Id",nls:"Id"},{id:"Name",nls:"Name"},{id:"Position",nls:"Stadium"},{id:"Age",nls:"Number"}];
    this.players = [
      { Id:1,Name: "Ronaldo", Position: "ATK", Age: 25, Number: 1899},
      { Id:2,Name: "Messi", Position: "MID",    Age: 21, Number: 1920},
      { Id:3,Name: "Saber", Position: "GK", Age: 17, Number: 1898},
    ];
    this.dataSource={colDef:this.colNLS,myObjects:this.players};    
  }

  //Questo non ha funzionato a usato quella del gridComponent
  display(obj: any)
  {
    alert(obj.Id + " " + obj.Name);
  }

}
