import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { StarModule } from "../shared/components/star/star.module";

import { CourseListComponent } from "./course-list.component";
import { InfoComponent } from "./info/info.component";



@NgModule({
  declarations: [
    CourseListComponent,
    InfoComponent,
  ], imports: [
    StarModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'courses', component: CourseListComponent
      },
      {
        path: 'courses/info/:id', component: InfoComponent
      }
    ])
  ]
})

export class CourseModules{

}