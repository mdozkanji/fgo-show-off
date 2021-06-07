import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './_shared/header/header.component';
import { IndexComponent } from './_pages/index/index/index.component';
import { ServantsComponent } from './_pages/servants/servants/servants.component';
import { ClassesComponent } from './_pages/servants/classes/classes.component';

const routes = [
  { path: '', component: IndexComponent },
  { path: 'servants', component: ServantsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    ServantsComponent,
    ClassesComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
