import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  articles: any = [];
  constructor() { }

  ngOnInit() {
    this.articles = [
      { img: "assets/images/img_1.jpg", title: 'Romolu to stay at Real NadridAAA?', description: 'Mellissa Allison', date: 'May 19, 2020 . Sports' },
      { img: 'assets/images/img_1.jpg', title: 'Romolu to stay at Real Nadrid?', description: 'Mellissa Allison', date: 'May 19, 2020 . Sports' },
      { img: 'assets/images/img_1.jpg', title: 'Romolu to stay at Real Nadrid?', description: 'Mellissa Allison', date: 'May 19, 2020 . Sports' },
      { img: 'assets/images/img_1.jpg', title: 'Romolu to stay at Real Nadrid?', description: 'Mellissa Allison', date: 'May 19, 2020 . Sports' },
      { img: 'asset/s/images/img_1.jpg', title: 'Romolu to stay at Real Nadrid?', description: 'Mellissa Allison', date: 'May 19, 2020 . Sports' }];
  }
  

}
