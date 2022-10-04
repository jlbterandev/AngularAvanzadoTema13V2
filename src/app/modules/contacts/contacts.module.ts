import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsViewComponent } from './contacts-view/contacts-view.component';
import { SContantsService } from './services/scontants.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ContactsViewComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    HttpClientModule
  ],
  providers: [SContantsService]
})
export class ContactsModule { }
