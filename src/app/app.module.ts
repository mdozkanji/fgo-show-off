import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './_shared/header/header.component';
import { IndexComponent } from './_pages/index/index/index.component';
import { ServantsComponent } from './_pages/servants/servants/servants.component';
import { ClassesComponent } from './_pages/servants/classes/classes.component';
import { ServantCardComponent } from './_pages/servants/servant-card/servant-card.component';
import { RegisterComponent } from './_pages/register/register.component';
import { LoginComponent } from './_pages/login/login.component';
import { FooterComponent } from './_shared/footer/footer.component';

const routes = [
  { path: '', component: IndexComponent },
  { path: 'servants', component: ServantsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    ServantsComponent,
    ClassesComponent,
    ServantCardComponent,
    RegisterComponent,
    LoginComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
