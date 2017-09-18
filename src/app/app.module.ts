import { BrowserModule }      from '@angular/platform-browser';
import { NgModule }           from '@angular/core';
import { HttpModule }         from '@angular/http';

import { AppComponent }       from './app.component';
import { DocumentDetails }    from './document-details.component';

import { GetDocument }        from './get-document.service';
import { SearchDocService }   from './search-doc.service';
import { SearchDocComponent } from './search-doc/search-doc.component';


@NgModule({
  declarations: [
    AppComponent,
    DocumentDetails,
    SearchDocComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [GetDocument, SearchDocService],
  bootstrap: [AppComponent]
})
export class AppModule { }
