import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


import { NavbarComponent } from './components/main/navbar/navbar.component';
import { JobComponent } from './components/job/job.component';
import { IndexComponent } from './components/main/index/index.component';
import { AppRoutingModule } from './app-routing.module'

import {SearchComponent} from './components/job/search/search.component'


import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { HttpClient } from '@angular/common/http';
import { FooterComponent } from './components/main/footer/footer.component';
import { LoginComponent } from './components/main/login/login.component';
import { RegisterComponent } from './components/main/register/register.component';
import { UserComponent } from './components/user/user.component';
import { ApplingJobsComponent } from './components/user/appling-jobs/appling-jobs.component';
import { EditProfileComponent } from './components/user/edit-profile/edit-profile.component';
import { RecruiterComponent } from './components/recruiter/recruiter.component';
import { JobPostedComponent } from './components/recruiter/job-posted/job-posted.component';
import { AppliedUserComponent } from './components/recruiter/job_posted/applied-user/applied-user.component';
import { StatusComponent } from './components/recruiter/job_posted/applied_user/status/status.component';
import { AdminComponent } from './components/admin/admin.component';
import { AsUserComponent } from './components/main/login/as-user/as-user.component';
import { AsRecruiterComponent } from './components/main/login/as-recruiter/as-recruiter.component';
import{ AsRecruiterRegComponent} from './components/main/register/as-recruiter/as-recruiter-reg.component'
import{AsUserRegComponent} from './components/main/register/as-user/as-user-reg.component'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JobComponent,
    IndexComponent,
    SearchComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    ApplingJobsComponent,
    EditProfileComponent,
    RecruiterComponent,
    JobPostedComponent,
    AppliedUserComponent,
    StatusComponent,
    AdminComponent,
    AsUserComponent,
    AsRecruiterComponent,
    AsRecruiterRegComponent,
    AsUserRegComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
