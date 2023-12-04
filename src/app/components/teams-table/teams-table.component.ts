import { Component, OnInit } from '@angular/core';
import { Team } from '../admin/admin.component';

@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnInit {
  teams :Team[];
  colNLS:any;
  constructor() { }

  ngOnInit() {
    this.colNLS = [{id:"Id",nls:"Id"},{id:"Name",nls:"Name"},{id:"Stadium",nls:"Stadium"},{id:"Owner",nls:"Owner"},{id:"Foundation",nls:"Foundation"}];
    this.teams = [
      { Id:1,Name: "FCB", Stadium: "Camp New", Owner: "Houssem", Foundation: 1899},
      { Id:2,Name: "RMD", Stadium: "Berna", Owner: "Taha", Foundation: 1920},
      { Id:3,Name: "JUV", Stadium: "Allians", Owner: "Saber", Foundation: 1898},
      { Id:4,Name: "OM", Stadium: "Vellodrome", Owner: "Seif", Foundation: 1910}
    ];    
  }

  display(team: Team)
  {
    alert(team.Id + " " +team.Name + "-" + team.Stadium + " " +team.Owner + " " + team.Foundation);
    //Object.entries(team).forEach( ([key, value]) => console.log(key, value));
  }
  delete(team: Team)
  {
    this.teams = this.teams.filter(function(f) { return f.Id !== team.Id });
  }
}
