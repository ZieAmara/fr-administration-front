import { Component } from '@angular/core';
import { ApiHelperService } from '../../services/api-helper.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.sass'
})
export class UsersListComponent {

  users = [];
  userDisplayedColumns: string[] = ['id', 'lastName', 'firstName', 'age', 'userName', 'mail'];;

  constructor(
    private readonly api_helper: ApiHelperService
  ) { }


  ngOnInit() {
    this.getUsersData();
  }

  getUsersData(): void {
    this.api_helper.get({ 
      endpoint: `/user/all` 
    }).then((response) => {
      this.users = response;
      console.log(response);
    });
  }

}
