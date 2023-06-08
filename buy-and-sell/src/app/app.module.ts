import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ListingsPageComponent } from './listings-page/listings-page.component';
import { ListingDetailPageComponent } from './listing-detail-page/listing-detail-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { MyListingsPageComponent } from './my-listings-page/my-listings-page.component';
import { NewListingsComponent } from './new-listings/new-listings.component';
import { NewListingPageComponent } from './new-listing-page/new-listing-page.component';
import { EditListingPageComponent } from './edit-listing-page/edit-listing-page.component';
import { ListingDataFormComponent } from './listing-data-form/listing-data-form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';


const routes: Routes = [
  { path: '', redirectTo: '/listings', pathMatch: 'full' },
  { path: 'listings', component: ListingsPageComponent, pathMatch: 'full'},
  { path: 'listings/:id', component: ListingDetailPageComponent },
  { path: 'contact/:id', component: ContactPageComponent },
  { path: 'edit-listing/:id', component: EditListingPageComponent },
  { path: 'my-listings', component: MyListingsPageComponent },
  { path: 'new-listing', component: NewListingPageComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ListingsPageComponent,
    ListingDetailPageComponent,
    ContactPageComponent,
    MyListingsPageComponent,
    NewListingsComponent,
    NewListingPageComponent,
    EditListingPageComponent,
    ListingDataFormComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes),FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
