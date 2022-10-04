import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { SContantsService } from '../contacts/services/scontants.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ProfileViewComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    HttpClientModule
  ],
  providers: [SContantsService]
})
export class ProfileModule { }
