import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PetitionsService} from '../services/petitions.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  dataGet: BookData;

  idBook: any;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private petition: PetitionsService) {
  }

  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.dataGet = {} as BookData;
        this.idBook = params.idb;
        console.log(this.idBook);
        this.petition.getBookById(this.idBook).subscribe(data => {
          console.log(data);
          this.dataGet = data;
        });

      });
  }

  editBook() {
    this.petition.editBookById(this.idBook, this.dataGet).subscribe(data => {
      console.log(data);
      this.router.navigate(['/']);
    });

  }
}

export interface BookData {
  'id': number;
  'name': string;
  'author': string;
  'category': number;
  'published_date': string;
  'user': string;
  'available': number;
  'created_at': string;
  'updated_at': string;
}
