import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Book} from '../Classes/Book';
import {log} from 'util';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetitionsService {

  path = 'http://127.0.0.1:8000/api/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  constructor(private http: HttpClient) {
  }

  addBook(data: any): Observable<any[]> {
    // @ts-ignore
    return this.http.post<any[]>(this.path + 'books', data, this.httpOptions);
  }

  getAllBooks(pageNumber: number): Observable<Books> {
    return this.http.get<Books>(this.path + 'books?page=' + pageNumber);
  }

  deleteBookById(id: any): Observable<any[]> {
    return this.http.delete<any[]>(this.path + 'books/' + id);
  }

  changeAvailability(id: any, user: any): Observable<any[]> {

    return this.http.get<any[]>(this.path + 'books/available/' + id + '/' + user, this.httpOptions);
  }

  searchTerm(keyword: any): Observable<Books> {
    return this.http.get<Books>(this.path + 'books/search/' + keyword, this.httpOptions);
  }

  getBookById(id: number): Observable<BookData> {
    return this.http.get<BookData>(this.path + 'books/' + id, this.httpOptions);
  }

  editBookById(id: any, dataEdit: BookData): Observable<BookData> {
    return this.http.put<BookData>(this.path + 'books/' + id, dataEdit, this.httpOptions);
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

export interface Books {
  'current_page': number;
  'data': BookData[];
  'from': number;
  'last_page': number;
  'next_page_url': string;
  'path': string;
  'per_page': number;
  'prev_page_url': string;
  'to': string;
  'total': string;

}

