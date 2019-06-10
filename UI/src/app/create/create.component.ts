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
  dataSend: any;

  constructor(private petition: PetitionsService) {
  }

  ngOnInit() {
  }

  createBook() {
    this.dataSend = {
      'name': this.name,
      'author': this.author,
      'category_id': this.category,
      'published_date': this.publishedDate,
      'user': '-',
      'available': true,

    };
    alert(this.dataSend)
    this.petition.addBook(this.dataSend).subscribe(data => {
      console.log(data);
    });
  }
}
