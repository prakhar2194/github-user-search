import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { UserSearchComponent } from './github-home/user-search/user-search.component';
import { UserListComponent } from './github-home/user-list/user-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserSearchComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
