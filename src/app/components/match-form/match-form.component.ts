import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { matches } from 'src/app/data/matchesDataSource';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-match-form',
  templateUrl: './match-form.component.html',
  styleUrls: ['./match-form.component.css']
})
export class MatchFormComponent implements OnInit {

  matches=matches;
  match:any={};
  matchId : any;
  title:String = "Add match";
  
  
  constructor(private activatedRouter : ActivatedRoute,private matchService:MatchService ,private router:Router) { }

  ngOnInit() {
    this.matchId = this.activatedRouter.snapshot.paramMap.get('id');
    if (this.matchId){
      this.matchService.getMatchById(this.matchId).subscribe( (data) => { this.match = data; });
      /*
      this.match = matches.find(  (obj) => {return obj.id == this.matchId})
      this.title = `Edit Match ${this.matchId}`  ;
      */
    }
  }


  addOrEditMatch()
  {
    if (this.matchId){
      this.matchService.updateMatch(this.match).subscribe( (data) => { console.log('Here match : ',data); },
      (err) => { console.log('add match error : ',err); } );

    }else
    {
      this.matchService.addMatch(this.match).subscribe( (data) => { console.log('Here match : ',data); },
      (err) => { console.log('add match error : ',err); } );

    }

    this.router.navigate(["admin"]);
        
  }

}
