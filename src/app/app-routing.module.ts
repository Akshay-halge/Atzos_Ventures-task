import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserdetailslistComponent } from './component/userdetailslist/userdetailslist.component';
import { DialogComponent } from './component/dialog/dialog.component';
import { NromalComponent } from './component/nromal/nromal.component';
import { SortDataComponent } from './component/sort-data/sort-data.component';

const routes: Routes = [
  {
    path:"userdetails",
    component:UserdetailslistComponent
  },
  {
    path:'dialog',
    component:DialogComponent
  },
  {
    path:'normal',
    component:NromalComponent

  },
  {
    path:'sortData',
    component:SortDataComponent

  },
  {
    path:'',
    redirectTo:'userdetails',
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
