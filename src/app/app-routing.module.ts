import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Menu1Component } from './Components/menu1/menu1.component';
import { Menu2Component } from './Components/menu2/menu2.component';
import { PeopleComponent } from './Components/people/people.component';

// hvordan benytter man den her?? er jeg helt skæv..
//path som man giver en value og dernæst giver man den en tilhørende Component
const routes: Routes = [
  {path:'people', component:PeopleComponent},
  {path:'menu1', component:Menu1Component},
  {path:'menu2', component:Menu2Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
