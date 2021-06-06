import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './_shared/header/header.component';
import { IndexComponent } from './_pages/index/index/index.component';

const routes = [{ path: '', component: IndexComponent }];

@NgModule({
  declarations: [AppComponent, HeaderComponent, IndexComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
