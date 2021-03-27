import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import {HomeComponent} from './home/home.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { RegistrationComponent } from './registration/registration.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'articles-list', component: ArticlesListComponent},
  { path: 'registration', component: RegistrationComponent},
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent },
  
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
