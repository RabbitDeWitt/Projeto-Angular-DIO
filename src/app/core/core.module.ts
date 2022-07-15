import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NotFoundComponent } from "./components/404/404.component";

import { NavbarComponent } from "./components/navbar/navbar.component";

@NgModule({
  declarations: [
    NavbarComponent,
  ], exports: [
    NavbarComponent
  ], imports: [
    RouterModule
  ]
})

export class CoreModule{}