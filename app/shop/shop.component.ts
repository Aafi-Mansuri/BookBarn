import { Component } from '@angular/core';
import { BookDataService } from '../services/book-data.service';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  books_summary:any[] = [];
  genres:string[] = [];
  selGenre1:string = '';
  selGenre2:string = '';
  sortedBooks:any[] = [];
  constructor(private bookData: BookDataService) {
    this.books_summary = bookData.bookSummaryData;
    this.genres = bookData.genres;
    this.sortedBooks = this.books_summary
  }


  search(){
    if(this.selGenre1 == 'any' && this.selGenre2 == 'any')
      this.sortedBooks = this.books_summary;
    
    else
      this.sortedBooks = this.books_summary.filter(book => book.category.includes(this.selGenre1) || book.category.includes(this.selGenre2));
  }
  ngOnInit(): void {  
}
}
