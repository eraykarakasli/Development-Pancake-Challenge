import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PalindromeService {
  private apiUrl = 'https://9eybzc5j0k.execute-api.eu-north-1.amazonaws.com/prod'; 

  constructor(private http: HttpClient) {}

  checkPalindromes(strings: string[]): Observable<any[]> {
    return this.http.post<any[]>(this.apiUrl, strings)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError('Something bad happened; please try again later.');
  }
}
