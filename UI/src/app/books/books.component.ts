import {Component, OnInit} from '@angular/core';
import {PetitionsService} from '../services/petitions.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private petitions: PetitionsService) {
  }

  ngOnInit() {
    this.petitions.getAllBooks().subscribe(data => {

      console.log(data);
    });
  }

}
