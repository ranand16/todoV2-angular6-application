import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { SignupComponent } from './signup/signup.component'; 
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  { path: '', component: SignupComponent},
  { path: 'signin', component: SigninComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
