import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AnotherComponent } from './another/another.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'another', component: AnotherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
