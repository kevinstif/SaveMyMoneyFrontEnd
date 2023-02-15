import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DistributionListComponent } from './budget/distribution/components/distribution-list/distribution-list.component';
import { DistributionDetailsComponent } from './budget/distribution/components/distribution-details/distribution-details.component';
import { AddDistributionComponent } from './budget/distribution/components/add-distribution/add-distribution.component';

const routes: Routes = [
  {path: '', redirectTo: 'distributions', pathMatch: 'full'},
  {path: 'distributions', component: DistributionListComponent},
  {path: 'distributions/add', component: AddDistributionComponent},
  {path: 'distributions/:id',component: DistributionDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
