import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  T: any = [];
  constructor() { }

  ngOnInit() {
    this.T = [
      { img: "assets/images/img_1.jpg", title: 'Romolu to stay at Real NadridAAA?', name: 'Mellissa Allison', date: 'May 19, 2020 . Sports' },
      { img: 'assets/images/img_1.jpg', title: 'Romolu to stay at Real Nadrid?', name: 'Mellissa Allison', date: 'May 19, 2020 . Sports' },
      { img: 'assets/images/img_1.jpg', title: 'Romolu to stay at Real Nadrid?', name: 'Mellissa Allison', date: 'May 19, 2020 . Sports' }];
  }

}
