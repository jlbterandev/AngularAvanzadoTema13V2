import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SContantsService } from '../services/scontants.service';
import { User } from '../user.interface';

@Component({
  selector: 'app-contacts-view',
  templateUrl: './contacts-view.component.html',
  styleUrls: ['./contacts-view.component.sass'],
  providers: [ SContantsService ]
})
export class ContactsViewComponent implements OnInit {

  private url = 'https://reqres.in/api/users';

  public data: User[];

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private contactsService: SContantsService) {
    this.contactsService.url = this.url;
  }

  ngOnInit(): void 
  {
    this.contactsService.getUsuarios()
    .subscribe(response => 
      {
        console.log(response['data']);
        this.data = response['data'];
      });
  }

  getUser(id: number)
  {
    this.router.navigate(['/profile/' + id.toString()]);
  }
}
