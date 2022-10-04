import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SContantsService } from '../../contacts/services/scontants.service';
import { User } from '../../contacts/user.interface';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.sass'],
  providers: [ SContantsService ]
})
export class ProfileViewComponent implements OnInit {

  parametro: any;
  private url = 'https://reqres.in/api/users/';
  public data: User;

  constructor(private activatedRoute: ActivatedRoute, private contactsService: SContantsService) 
  {
    this.activatedRoute.params.subscribe(data => this.parametro = data['param']);
    console.log(this.parametro);
    this.contactsService.url = this.url;
  }

  ngOnInit(): void 
  {
    this.contactsService.getUsuario(this.parametro)
    .subscribe(response => 
      {
        console.log(response['data']);
        this.data = response['data'];
      });
  }
}
