import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  //matchUrl = "http://localhost:3000/matches";
  matchUrl = "api/matches";
  constructor(private httpClient: HttpClient) { }


  getAllMatches(){
    return this.httpClient.get(this.matchUrl);
  }

  getMatchById(id:number){
    return this.httpClient.get(`${this.matchUrl}/${id}`);
  }

  addMatch(match){
    return this.httpClient.post(this.matchUrl,match);
  }

  updateMatch(match)
  {
    return this.httpClient.put(this.matchUrl,match);
  }

  deleteMatchById(id:number)
  {
    return this.httpClient.delete(`${this.matchUrl}/${id}`);
  }

}
