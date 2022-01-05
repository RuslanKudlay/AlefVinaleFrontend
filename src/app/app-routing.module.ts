import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOrEditProductComponent } from './add-or-edit-product/add-or-edit-product.component';

const routes: Routes = [
{path: '', component: AddOrEditProductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
