import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { AddprofessorComponent } from './addprofessor/addprofessor.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { ApplycourseComponent } from './applycourse/applycourse.component';
import { CheckapplicationsComponent } from './checkapplications/checkapplications.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { ProfessorComponent } from './professor/professor.component';
import { SignupComponent } from './signup/signup.component';
import { StudentComponent } from './student/student.component';
import { ViewapplicationsComponent } from './viewapplications/viewapplications.component';
import { ViewcourseComponent } from './viewcourse/viewcourse.component';

const routes: Routes = [{path:'',component:HomeComponent},
{path:'addp',component:AddprofessorComponent},
{path:'signup',component:SignupComponent},
{path:'login',component:LoginComponent},
{path:'adds',component:AddstudentComponent},
{path:'student',component:StudentComponent},
{path:'professor',component:ProfessorComponent},
{path:'addc',component:AddcourseComponent},
{path:'viewc',component:ViewcourseComponent},
{path:'courseapp',component:ApplycourseComponent},
{path:'view',component:ViewapplicationsComponent},
{path:'check',component:CheckapplicationsComponent},
{path:'noti',component:NotificationsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
