import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {EditComponent} from './edit/edit.component';
import {CreateComponent} from './create/create.component';
import {BooksComponent} from './books/books.component';

const routes: Routes = [
  {path: '', component: BooksComponent},
  {path: 'home', component: BooksComponent},
  {path: 'edit', component: EditComponent},
  {path: 'create', component: CreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
