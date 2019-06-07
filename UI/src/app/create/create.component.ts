import {Component, OnInit} from '@angular/core';
import {PetitionsService} from '../services/petitions.service';
import {Book} from '../Classes/Book';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  name: any;
  author: any;
  category: any;
  publishedDate: any;

  constructor(private petition: PetitionsService) {
  }

  ngOnInit() {
  }

  createBook() {
    this.petition.addBook(this.name, this.author, this.category, this.publishedDate).subscribe(data =>{
      console.log(data);
    });
  }
}
