import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ShopComponent } from './shop/shop.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import BookDetailsComponent from './book-details/book-details.component';
import { FormSubmitComponent } from './form-submit/form-submit.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'about-us',component:AboutUsComponent},
  {path:'shop', component:ShopComponent},
  {path:'contact', component:ContactComponent},
  {path:'book/:id', component:BookDetailsComponent},
  {path:'submitted', component:FormSubmitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
