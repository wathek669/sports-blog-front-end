import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';
export interface Match {
  id:number;
  scoreOne: number;
  scoreTwo: number;
  teamOne: String;
  teamTwo: string;
}   
@Component({
  selector: 'app-matches-tab',
  templateUrl: './matches-tab.component.html',
  styleUrls: ['./matches-tab.component.css']
})
export class MatchesTabComponent implements OnInit {
  matches :any = [];
  colNLS:any;
  

  constructor( private router:Router, private matchService:MatchService) { }

  ngOnInit() {
    this.colNLS = ["Id","Score one","Score two","Team one","Team two"];

    /*this.matchService.getAllMatches().subscribe(
      (data)=> {
        this.matches = data;
      }
    );*/
    this.getMatches();
  }

  goToDisplayMatch(x)
  {
    this.router.navigate([`match/${x}`]);
  }

  goToEditMatch(x)
  {
    this.router.navigate([`editMatch/${x}`]);
  }

  delete(match: Match)
  {
    //alert("delete match id : " + match.id);
    //this.matches = this.matches.filter(function(f) { return f.id !== match.id });
    this.matchService.deleteMatchById(match.id).subscribe( (data) => {console.log("Here delete data ",data);
    this.getMatches();
    })
  }

  getMatches()
  {
    this.matchService.getAllMatches().subscribe(
      (data)=> {
        this.matches = data;
      }
    );

  }

  goToAddMatch(){
    this.router.navigate([`addMatch`]);
  }

}
