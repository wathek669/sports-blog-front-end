import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  @Input() matchInput;
  constructor() { }
  resultT1 : String = '(win)';
  resultT2 : String = '(win)';
  ngOnInit() {
    //this.resultT1 = matchInput.teamOne>matchInput.teamOne?'(win)':('loss');
    if (this.matchInput.scoreOne == this.matchInput.scoreTwo)
    {
      this.resultT1 = '';
      this.resultT2 = '';
    }
    else if (this.matchInput.scoreOne >  this.matchInput.scoreTwo)
      this.resultT2 = '(loss)';
    else
      this.resultT1 = '(loss)';
  }

}
