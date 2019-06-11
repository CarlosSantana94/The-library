import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PetitionsService} from './services/petitions.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HeaderComponent} from './header/header.component';
import {BooksComponent} from './books/books.component';
import {EditComponent} from './edit/edit.component';
import {CreateComponent} from './create/create.component';
import {FormsModule} from '@angular/forms';
import {DataTablesModule} from 'angular-datatables';
import {FlxUiDataTable, FlxUiDatatableModule} from 'flx-ui-datatable';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BooksComponent,
    EditComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule,
    FlxUiDatatableModule
  ],
  providers: [
    PetitionsService,
    FlxUiDataTable
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
