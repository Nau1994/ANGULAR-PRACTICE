import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { AddressComponent } from './address/address.component';
import { CompanyComponent } from './company/company.component';
import { LocationComponent } from './location/location.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { PostsComponent } from './posts/posts.component';
import { LoginComponent } from './auth/login/login.component';
import { postsGuard } from './guards/posts.guard';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"post",component:PostsComponent,canActivate:[postsGuard]},
  {path:"about",component:AboutComponent,children:[
    {path:"location",outlet:"map",component:LocationComponent,pathMatch:'full'},
    {path:"feedback",outlet:"feed",component:FeedbackComponent,pathMatch:'full'},
  ]},
  {path:"users",component:UsersComponent},
  {path:"user/:id",component:UserComponent,
  canActivate:[AuthGuard],
  canActivateChild:[AdminGuard],
  children:[
    // {path:"",redirectTo:"address",pathMatch:'full'},
    {path:"address",component:AddressComponent,pathMatch:'full'},
    {path:"company",component:CompanyComponent,pathMatch:'full'}
  ]},
  {path:"TDF",component:TemplateDrivenFormComponent},
  {path:"ReactForm",component:ReactiveFormComponent},
  {path:"**",redirectTo:'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
