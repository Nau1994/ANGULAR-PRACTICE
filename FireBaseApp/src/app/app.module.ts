import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { CompanyComponent } from './company/company.component';
import { AddressComponent } from './address/address.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LocationComponent } from './location/location.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AuthInterceptorService } from './interceptors/auth-interceptor.service';
import { LoginComponent } from './auth/login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TokenInterceptorService } from './interceptors/auth/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    UsersComponent,
    UserComponent,
    CompanyComponent,
    AddressComponent,
    FeedbackComponent,
    LocationComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    PostComponent,
    PostsComponent,
    LoadingSpinnerComponent,
    LoginComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS ,useClass:AuthInterceptorService,multi:true},
    {provide:HTTP_INTERCEPTORS ,useClass:TokenInterceptorService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
