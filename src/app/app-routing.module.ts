import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './home/hero/hero.component';
import { InfoComponent } from './about/info/info.component';
import { ContactComponent } from './contact-us/contact/contact.component';

const routes: Routes = [
  {path:'',component:HeroComponent},
  {path:'about',component:InfoComponent},
  {path:'contact',component:ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
