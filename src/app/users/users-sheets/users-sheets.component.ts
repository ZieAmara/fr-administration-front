import { Component } from '@angular/core';
import { User } from '../../interfaces/user';
import { ApiHelperService } from '../../services/api-helper.service';
import { Association } from '../../interfaces/association';
@Component({
  selector: 'app-users-sheets',
  templateUrl: './users-sheets.component.html',
  styleUrl: './users-sheets.component.sass'
})
export class UsersSheetsComponent {

  users: any;
  associations: Association[];
  roles: any;
  userSelected!: any;
  roleDisplayedColumns: string[] = ['Role name', 'Association concerned'];
  associationDisplayedColumns: string[] = ['No', 'Name', 'Description'];


  constructor(
    private readonly api_helper: ApiHelperService
  ) {
    this.users = [
      {
        id: 0,
        lastName: '',
        firstName: '',
        userName: '',
        mail: '',
        age: 0,
      }
    ];
    this.associations = [];
    this.roles = [];
  }


  ngOnInit() {
    this.getUsersData();
  }

  ngOnChange(){
    this.ngOnInit();
  }


  onChangeUserSelected() {
    this.getAssociationsData(this.userSelected.userName);
    this.userSelected.roles.forEach((role: any) => {
      this.getRolesData(role.idAssociation);
    });
  }

  getUsersData() {
    this.api_helper.get({
      endpoint: `/user/all` 
    }).then((response) => {
      this.users = response;
    });
  }

  getAssociationsData(userName: string): void {
    this.api_helper.get({ 
      endpoint: `/user/${userName}/associations` 
    }).then((response) => {
      this.associations = response;
    });
  }

  getRolesData(associationId: number): void {
    const role = this.api_helper.get({ 
      endpoint: `/role/${associationId}`
    });
    this.roles.push(role);
    console.log(role);
  }


}
