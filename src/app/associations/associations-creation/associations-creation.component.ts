import { Component } from '@angular/core';
import { AssociationCreate } from '../../interfaces/association.create';
import { FormBuilder, Validators } from '@angular/forms';
import { ApiHelperService } from '../../services/api-helper.service';

@Component({
  selector: 'app-associations-creation',
  templateUrl: './associations-creation.component.html',
  styleUrl: './associations-creation.component.sass'
})
export class AssociationsCreationComponent {

  associationCreate: AssociationCreate = {
    idUsers: [],
    name: '',
    description: '',
  };

  memberslistIds: string = '';

  infoFormGroup = this._formBuilder.group({
    nameCtrl: [ this.associationCreate.name, Validators.required ],
    descriptionCtrl: [ this.associationCreate.description, Validators.required ],
  });
  usersFormGroup = this._formBuilder.group({
    usersCtrl: [ this.memberslistIds, Validators.required ],
  });

  constructor(
    private _formBuilder: FormBuilder,
    private readonly apiHelperService: ApiHelperService,
  ) {}


  createAssociation() {
    this.updateAssociationToCreate();
    console.log(this.associationCreate);
    if (this.associationCreate.name !== '' && this.associationCreate.description !== '' && this.associationCreate.idUsers.length > 0) {
      this.apiHelperService.post({ 
        endpoint: '/association/create',
        data: this.associationCreate
      }).then(async (response) => {
        console.log(response);
      });
    }
  }


  updateAssociationToCreate() {
    this.associationCreate.name = this.infoFormGroup.value.nameCtrl?.trim() || '';
    this.associationCreate.description = this.infoFormGroup.value.descriptionCtrl?.trim() || '';
    this.associationCreate.idUsers = this.usersFormGroup.value.usersCtrl?.split(',').map(id => +id) || [];
  }

  cleanAssociationCreate() {
    this.associationCreate = {
      idUsers: [],
      name: '',
      description: '',
    }
  }

}
