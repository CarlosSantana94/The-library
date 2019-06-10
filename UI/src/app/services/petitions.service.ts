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

  getAllBooks(): Observable<any[]> {
    return this.http.get<any[]>(this.path + 'books');
  }

  deleteBookById(id: any): Observable<any[]> {
    return this.http.delete<any[]>(this.path + 'books/' + id);
  }

  changeAvailability(id: any): Observable<any[]> {
    return this.http.get<any[]>(this.path + 'books/available/' + id, this.httpOptions);
  }
}
