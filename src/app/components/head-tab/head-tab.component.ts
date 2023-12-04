import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-head-tab',
  templateUrl: './head-tab.component.html',
  styleUrls: ['./head-tab.component.css']
})
export class HeadTabComponent implements OnInit {
  @Input() title : string;
  constructor() { }

  ngOnInit() {
  }

}
