import { Component } from '@angular/core';
import { ApiHelperService } from '../../services/api-helper.service';
import { Association } from '../../interfaces/association';

@Component({
  selector: 'app-associations-sheets',
  templateUrl: './associations-sheets.component.html',
  styleUrl: './associations-sheets.component.sass'
})
export class AssociationsSheetsComponent {

  associations : any;
  associationSelected!: any;
  minutes: any;
  roles: any;
  minuteDisplayedColumns: string[] = ['No', 'Name', 'Object'];
  associationDisplayedColumns: string[] = ['No', 'Name', 'Description'];
  roleDisplayedColumns: string[] = ['Role name', 'Users concerned userName'];
  memberDisplayedColumns: string[] = ['Last Name', 'First Name', 'User Name', 'Mail', 'Age'];

  constructor(
    private readonly api_helper: ApiHelperService
  ) {
    this.associations = [
      {
        id: 0,
        name: '',
        description: '',
      }
    ];
  }


  ngOnInit() {
    this.getAssociationsData();
  }

  getAssociationsData() {
    this.api_helper.get({ 
      endpoint: `/association/all`
    }).then((response) => {
      this.associations = response;
      console.log(response);
    });
  }


  onChangeAssociationSelected() {
    console.log(this.associationSelected);
  }

}
