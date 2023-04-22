import { Component, OnInit } from '@angular/core';
import { BookDataService } from '../services/book-data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  trendingTitles:any[] = [];
  unchartedFinds:any[] = [];

  constructor(private bookData: BookDataService) {
    this.trendingTitles = bookData.trendingBooks
    this.unchartedFinds = bookData.todaysUncharted
  }

  ngOnInit(): void {
  }
}
