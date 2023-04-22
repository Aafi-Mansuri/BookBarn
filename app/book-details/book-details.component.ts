import { Component, OnInit } from '@angular/core';
import { BookDataService } from '../services/book-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})

export default class BookDetailsComponent implements OnInit{

  books_summary:any[] = []
  books_details:any[] = []
  book_id:any = 0
  b1:any;
  b2:any;
  constructor(private bookData: BookDataService, private route: ActivatedRoute) {
    this.route.paramMap.subscribe(val => {
      this.book_id = val.get('id')
    })
    this.books_summary = bookData.bookSummaryData;
    this.books_details = bookData.bookDetailsData;
    this.b1 = this.books_summary.find(book => book.id == this.book_id);
    this.b2 = this.books_details.find(book => book.id == this.book_id);


  }
  ngOnInit(): void {
    console.log("Book Id:",this.book_id)
    console.log(this.b1);
    console.log(this.b2);

    
  }
  
}
