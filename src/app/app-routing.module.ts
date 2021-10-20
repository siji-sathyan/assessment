import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { OpenComponent } from './open/open.component';

const routes: Routes = [
  {path:"",component:OpenComponent},
  {path:"open",component:OpenComponent},
  {path:"content",component:ContentComponent}
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
