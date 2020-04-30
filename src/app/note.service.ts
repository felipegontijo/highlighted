import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Note } from './note';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private notesUrl = 'http://localhost:3000/api/notes';

  constructor(private http: HttpClient) { }

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.notesUrl)
      .pipe(
        catchError(this.handleError<Note[]>('getNotes', []))
      )
  }

  deleteNote(id: any): Observable<{}> {
    const deleteUrl = `${this.notesUrl}/${id}`;
    return this.http.delete(deleteUrl).pipe(
      catchError(this.handleError('deleteNote'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * From angular docs.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

