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
  idCategory: any;
  nameCategory: any;
  descriptionCategory: any;
  allCategories: Category;
  dataCategory: Category;
  nameCategoryModal: any;
  categorySearch: any;
  dateSendingToServer: any;


  constructor(private petition: PetitionsService,
              private router: Router) {
  }

  ngOnInit() {
    this.myDate = new Date();
    this.allCategories = {} as Category;
    this.dataCategory = {} as Category;
    this.nameCategory = '';
    this.idCategory = 0;
    this.author = '';
    this.publishedDate = '';
    this.nameCategoryModal = '';
    this.categorySearch = '';

    this.petition.getAllCategories().subscribe(data => {
      this.allCategories = data;
    });
  }

  createBook() {
    this.dateSendingToServer = new DatePipe('en-US').transform(this.publishedDate, 'yyyy-MM-dd');
    console.log(this.dateSendingToServer);

    this.dataSend = {
      'name': this.name,
      'author': this.author,
      'category': this.idCategory,
      'published_date': this.dateSendingToServer,
      'user': '-',
      'available': true,
    };

    console.log(this.dataSend);
    if (this.name !== '' && this.author !== '' && this.idCategory !== 0 && this.dateSendingToServer !== '') {
      this.petition.addBook(this.dataSend).subscribe(data => {
        this.router.navigate(['/']);
      });
    } else {
      alert('Please fill al the fields and select category');
    }

  }

  addCategoryModal() {
    this.nameCategory = '';
  }

  addCategory() {
    this.dataCategory = {} as Category;
    this.dataCategory.name = this.nameCategoryModal;
    this.dataCategory.description = this.descriptionCategory;
    this.dataCategory.books_ids = '|';

    this.petition.addCategory(this.dataCategory).subscribe(data => {
      console.log(data);
      this.allCategories = {} as Category;
      this.petition.getAllCategories().subscribe(data2 => {
        this.allCategories = data2;
      });
    });

  }

  selectCategoryName(nameCategory: string, idCategory: string) {
    this.nameCategory = nameCategory;
    this.idCategory = idCategory;
  }
}

export interface Category {
  'id': number;
  'name': string;
  'description': string;
  'books_ids': string;
  'created_at': string;
  'updated_at': string;
}
