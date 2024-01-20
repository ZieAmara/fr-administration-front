import { Component } from '@angular/core';
import { ApiHelperService } from '../../services/api-helper.service';
import { Association } from '../../interfaces/association';

@Component({
  selector: 'app-associations-list',
  templateUrl: './associations-list.component.html',
  styleUrl: './associations-list.component.sass'
})
export class AssociationsListComponent {

  associations : Association[];
  associationDisplayedColumns: string[] = ['No', 'Name', 'Description'];

  constructor(
    private readonly api_helper: ApiHelperService,
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

}
