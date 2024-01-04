import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AboutCompanyComponent } from './about-company/about-company.component';

const routes: Routes = [
  {
  path:'',
  component:HomeComponent
  },
  {
    path:'user/:id',
    component:UserComponent
  },
  {
    path:'about/:id',
    component:AboutComponent,
    children:[{
      path:'me',
      component:AboutMeComponent,
    },{
      path:'company',
      component:AboutCompanyComponent,
    }]
  },
  {
    path:'**',
    component:NotFoundComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
