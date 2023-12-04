import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root'
})
export class DataService implements InMemoryDbService{
  
 
  constructor() { }

  createDb(){

    let   matches = [
      { id:1,scoreOne: 1, scoreTwo: 2, teamOne: "FCB", teamTwo: "RMD"},
      { id:2,scoreOne: 1, scoreTwo: 1, teamOne: "JUV", teamTwo: "INT"},
      { id:3,scoreOne: 3, scoreTwo: 2, teamOne: "CIT", teamTwo: "LIV"},
      { id:4,scoreOne: 1, scoreTwo: 0, teamOne: "SEV", teamTwo: "ATM"},
      { id:5,scoreOne: 2, scoreTwo: 2, teamOne: "PSG", teamTwo: "OM"}
    ];    

    let   players = [
      { id:1,scoreOne: 1, scoreTwo: 2, teamOne: "FCB", teamTwo: "RMD"},
      { id:2,scoreOne: 1, scoreTwo: 1, teamOne: "JUV", teamTwo: "INT"},
      { id:3,scoreOne: 3, scoreTwo: 2, teamOne: "CIT", teamTwo: "LIV"},
      { id:4,scoreOne: 1, scoreTwo: 0, teamOne: "SEV", teamTwo: "ATM"},
      { id:5,scoreOne: 2, scoreTwo: 2, teamOne: "PSG", teamTwo: "OM"}
    ];    


    return {matches,players};
 
   }
}
