import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { ToastrModule } from 'ngx-toastr';

import { FormsModule } from '@angular/forms';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AddprofessorComponent } from './addprofessor/addprofessor.component';
import { ViewprofessorComponent } from './viewprofessor/viewprofessor.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { StudentComponent } from './student/student.component';
import { ProfessorComponent } from './professor/professor.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { ViewcourseComponent } from './viewcourse/viewcourse.component';
import { ViewapplicationsComponent } from './viewapplications/viewapplications.component';
import { ApplycourseComponent } from './applycourse/applycourse.component';
import { CheckapplicationsComponent } from './checkapplications/checkapplications.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { TokeninterceptorService } from './tokeninterceptor.service';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AddprofessorComponent,
    ViewprofessorComponent,
    AddstudentComponent,
    SignupComponent,
    LoginComponent,
    StudentComponent,
    ProfessorComponent,
    AddcourseComponent,
    ViewcourseComponent,
    ViewapplicationsComponent,
    ApplycourseComponent,
    CheckapplicationsComponent,
    NotificationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthService,AuthGuard,{
    provide:HTTP_INTERCEPTORS,
    useClass:TokeninterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
