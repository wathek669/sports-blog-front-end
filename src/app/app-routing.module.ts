import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MatchFormComponent } from './components/match-form/match-form.component';
import { NotFountComponent } from './components/not-fount/not-fount.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'admin',component:AdminComponent},
  {path:'match/:id',component:DisplayMatchComponent},
  {path:'addMatch',component:MatchFormComponent},
  {path:'editMatch/:id',component:MatchFormComponent},
  {path:'**',component:NotFountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
