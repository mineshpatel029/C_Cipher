import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { CaesarCipherComponent } from './caesar-cipher/caesar-cipher.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'caesar-cipher', component: CaesarCipherComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
