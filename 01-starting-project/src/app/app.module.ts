import { NgModule } from "@angular/core";
import { NgFor, NgIf } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { SharedModule } from "./shared/shared.module";
import { TasksModule } from "./tasks/tasks.module";

@NgModule({
  declarations: [AppComponent, HeaderComponent, UserComponent], // for non-standalone components
  bootstrap: [AppComponent],
  imports: [BrowserModule, NgFor, NgIf, SharedModule, TasksModule] // for standalone components
})
export class AppModule {}
