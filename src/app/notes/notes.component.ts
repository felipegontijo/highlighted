import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notes: Note[];

  constructor(private noteService: NoteService) { }

  getNotes(): void {
    // returns an Observable<Notes[]> on which we call the subscribe method
    this.noteService.getNotes()
      .subscribe(notes => this.notes = notes);
  }

  deleteNote(id: any): void {
    this.noteService.deleteNote(id)
      .subscribe();
  }

  ngOnInit() {
    this.getNotes();
  }

}
