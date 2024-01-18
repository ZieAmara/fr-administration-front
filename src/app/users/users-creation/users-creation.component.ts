import { Component, Inject } from '@angular/core';
import { UserCreate } from '../../interfaces/user.create';
import { ApiHelperService } from '../../services/api-helper.service';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-users-creation',
  templateUrl: './users-creation.component.html',
  styleUrl: './users-creation.component.sass'
})
export class UsersCreationComponent {

  userCreate : UserCreate;
  userName : string = '';

  constructor(
    private readonly apiHelperService: ApiHelperService,
    private readonly router: Router,
    public dialog: MatDialog,
  ) {
    this.userCreate = {
      lastName: '',
      firstName: '',
      age: 0,
      userName: '',
      mail: '',
      userPassword: '',
    };
  }


  ngOnInit() {}


  createUser(): void {
    this.updateUserForUserCreation();
    if (this.userCreate) {
      this.userName = this.userCreate.userName;
      this.apiHelperService.post({ 
        endpoint: '/user/create',
        data: this.userCreate
      }).then(async (response) => {
        console.log(response);
      });
    }
    this.openDialog(this.userName);
    this.cleanUserCreateData();
  }

  private updateUserForUserCreation(): void {
    const userTemp: UserCreate = {
      lastName: this.userCreate.lastName || '',
      firstName: this.userCreate.firstName || '',
      age: this.userCreate.age || 0,
      userName: this.userCreate.userName || '',
      mail: this.userCreate.mail || '',
      userPassword: this.userCreate.userPassword || '',
    };
    this.userCreate = userTemp;
  }

  private cleanUserCreateData(): void {
    this.userCreate = {
      lastName: '',
      firstName: '',
      age: 0,
      userName: '',
      mail: '',
      userPassword: '',
    };
  }

  openDialog(userName: string = '') {
    console.log('userName before check:', userName);
    if (userName !== undefined) {
      this.dialog.open(MyDialogContent, {
        data: {
          value: userName,
        },
      });
    } else {
      console.error('userName is undefined.');
    }
  }

}

@Component({
  selector: 'app-users-creation',
  templateUrl: './dialog-content.component.html',
  styleUrl: './users-creation.component.sass'
})
export class MyDialogContent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

}
