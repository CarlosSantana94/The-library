import {Component, OnInit, ViewChild} from '@angular/core';
import {Books, PetitionsService} from '../services/petitions.service';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';

declare var $;


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  @ViewChild('dataTable') table;
  dataTable: any;

  allBooks: Books;
  idToChangeStatus: any;
  nameToChangeStatus: any;
  available: any;
  dataSend: any;
  pagination = [];
  currentPage: number;
  keyword = '';
  user: any;
  userRent: any;


  constructor(private petitions: PetitionsService,
              private router: Router) {
  }

  ngOnInit() {
    this.getAllBooks(1);
    this.keyword = '';
  }

  editBook(book: any) {
    this.router.navigate(['edit'], {queryParams: {idb: book}});

  }

  deleteBook(bookId: any, bookName: any) {
    if (confirm('Do you want to delete: ' + bookName + '?')) {
      this.petitions.deleteBookById(bookId).subscribe(data => {
        console.log(data);
        this.ngOnInit();
      });
    }
  }

  changeAvailability(id: any, name: any, available: any, user: any) {
    this.idToChangeStatus = id;
    this.nameToChangeStatus = name;
    this.available = available;
    this.userRent = user;
    this.user = '';

  }

  changeStatus(user: any) {
    if (user !== '') {
      this.petitions.changeAvailability(this.idToChangeStatus, user).subscribe(data => {
        this.ngOnInit();
      });
    }
  }


  nextpage() {
    this.getAllBooks(this.allBooks.current_page + 1);
  }

  prevPage() {
    this.getAllBooks(this.allBooks.current_page - 1);
  }

  goToPage(page: number) {
    this.getAllBooks(page);
  }

  private getAllBooks(pageNum: number) {

    this.petitions.getAllBooks(pageNum).subscribe(response => {

      this.currentPage = pageNum;
      this.allBooks = {} as Books;
      this.allBooks = response;
      this.pagination = [];

      for (let i = 1; i <= this.allBooks.last_page; i++) {
        this.pagination.push(i);
      }
    });
  }

   search(keyword: string) {
    if (keyword === '') {
      this.getAllBooks(1);
    } else {
      this.petitions.searchTerm(keyword).subscribe(data1 => {

        this.currentPage = 1;
        this.allBooks = {} as Books;
        this.allBooks = data1;
        this.pagination = [];

        for (let i = 1; i <= this.allBooks.last_page; i++) {
          this.pagination.push(i);
        }
      });
    }
  }


}


export interface BookData {
  'id': number;
  'name': string;
  'author': string;
  'category': number;
  'published_date': string;
  'user': string;
  'category_name': string;
  'available': number;
  'created_at': string;
  'updated_at': string;
}

export interface Books {
  'current_page': number;
  'data': BookData;
  'from': number;
  'last_page': number;
  'next_page_url': string;
  'path': string;
  'per_page': number;
  'prev_page_url': string;
  'to': string;
  'total': string;

}
