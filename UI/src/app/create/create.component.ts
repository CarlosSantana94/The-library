import {Component, OnInit} from '@angular/core';
import {PetitionsService} from '../services/petitions.service';
import {Book} from '../Classes/Book';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';

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
  myDate: any;

  constructor(private petition: PetitionsService,
              private router: Router) {
  }

  ngOnInit() {
  this.myDate = new Date();
  }

  createBook() {
    const dateSendingToServer = new DatePipe('en-US').transform(this.publishedDate, 'yyyy-MM-dd');
    console.log(dateSendingToServer);

    this.dataSend = {
      'name': this.name,
      'author': this.author,
      'category': this.category,
      'published_date': dateSendingToServer,
      'user': 'N/A',
      'available': true,
    };

    this.petition.addBook(this.dataSend).subscribe(data => {
      this.router.navigate(['/']);
    });
  }
}
