import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Book} from '../Classes/Book';
import {log} from 'util';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetitionsService {

  path = 'http://localhost:8080/library/API/public/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  constructor(private http: HttpClient) {
  }

  addBook(name: string, author: string, category: string, publish_date: string): Observable<any> {
    const book = new Book(name, author, category, publish_date);
    console.log(book);
    // @ts-ignore
    return this.http.post<any>(this.path + 'add', book, this.httpOptions);
  }
}
