import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { matches } from 'src/app/data/matchesDataSource';
import { MatchService } from 'src/app/services/match.service';


@Component({
  selector: 'app-display-match',
  templateUrl: './display-match.component.html',
  styleUrls: ['./display-match.component.css']
})
export class DisplayMatchComponent implements OnInit {

  matchId:any;
  findedMatch : any;
  //matches = matches;
   
  constructor(private activedRoute:ActivatedRoute, private matchService:MatchService) { }

  ngOnInit() {
    this.matchId = this.activedRoute.snapshot.paramMap.get('id');
    console.log('Match id : ',this.matchId);

    this.matchService.getMatchById(this.matchId).subscribe( (data) => {this.findedMatch = data});
    /*
    this.findedMatch = this.matches.find( (obj) => {
      return (obj.id==this.matchId)
    });*/

    console.log("Finde : ",this.findedMatch);
  }

}
