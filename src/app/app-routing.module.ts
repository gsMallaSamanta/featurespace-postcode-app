import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PostcodeContainerComponent } from './containers/postcode-container/postcode-container.component';

const routes: Routes = [
  { path: 'postcode', component: PostcodeContainerComponent },
  { path: 'postcode/:code', component: PostcodeContainerComponent },
  { path: '**', redirectTo: 'postcode' }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
