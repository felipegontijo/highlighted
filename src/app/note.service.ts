import { Injectable } from '@angular/core';
import { Note } from './note'
import { NOTES } from './mock-notes'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  getNotes(): Observable<Note[]> {
    return of(NOTES);
  }

  constructor() { }
}
