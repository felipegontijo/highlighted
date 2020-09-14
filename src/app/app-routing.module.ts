import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotesComponent } from './notes/notes.component';

const routes: Routes = [
  { path: 'notes', component: NotesComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  // make it available throughout the app
  exports: [RouterModule]
})
export class AppRoutingModule { }
