import {Component, OnInit} from '@angular/core';
import {PetitionsService} from '../services/petitions.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  allBooks = [];
  idToChangeStatus: any;
  nameToChangeStatus: any;
  available: any;
  dataSend: any;

  constructor(private petitions: PetitionsService,
              private router: Router) {
  }

  ngOnInit() {
    this.petitions.getAllBooks().subscribe(data => {
      this.allBooks = data;
      console.log(data);
    });
  }

  editBook(book: any) {

  }

  deleteBook(bookId: any, bookName: any) {
    if (confirm('Do you want to delete: ' + bookName + '?')) {
      this.petitions.deleteBookById(bookId).subscribe(data => {
        console.log(data);
        location.reload();
      });
    }
  }

  changeAvailability(id: any, name: any) {
    this.idToChangeStatus = id;
    this.nameToChangeStatus = name;
  }

  changeStatus() {
    this.petitions.changeAvailability(this.idToChangeStatus).subscribe(data => {
      console.log(data);
    });
  }
}
