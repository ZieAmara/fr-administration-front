import { Component } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../../services/token-storage.service';

import { User } from '../../interfaces/user';
import { UserRole } from '../../interfaces/user.role';
import { Association } from '../../interfaces/association';
import { ApiHelperService } from '../../services/api-helper.service';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.sass',
})
export class ProfilComponent {

  private readonly api_url : string = environment.api_url;

  dataSource! : any;
  user : User;
  roles : UserRole[];
  associations : Association[];
  roleDiplayedColumns: string[] = ['Role name', 'Association concerned'];
  associationDisplayedColumns: string[] = ['Name', 'Description'];
  userDiplayedColumns: string[] = ['Id', 'Last Name', 'First Name', 'User Name', 'Mail', 'Age'];
  edited : boolean = false;
  
  constructor(
    private http: HttpClient,
    private readonly tokenStorageService: TokenStorageService,
    private readonly api_helper: ApiHelperService,
  ) {
    this.user = {
      id: 0,
      lastName: '',
      firstName: '',
      userName: '',
      mail: '',
      age: 0,
    };
    this.roles = [];
    this.associations = [];
  }


  ngOnInit() {
    this.getUserData();
    this.getAssociationsData();
  }

  ngOnChanges() {
    this.ngOnInit();
  }

  
  getUserData(): void {
    this.api_helper.get({ 
      endpoint: `/user/userName/${this.tokenStorageService.getUsername()}` 
    }).then(async (response) => {
      this.user = await this.userData(response);
      this.roles = await this.rolesData(response.roles);
      console.log(response);
    });
  }
  
  getAssociationsData(): void {
    this.api_helper.get({ 
      endpoint: `/user/${this.tokenStorageService.getUsername()}/associations` 
    }).then((response) => {
      this.associations = response;
      console.log(response);
    });
  }


  editPersonalInformations(): void {
    this.edited = true;

  }
  
  savePersonalInformations(): void {
    this.updatePersonalInformations();
    this.edited = false;
  }

  updatePersonalInformations(): void {
    const { id, ...newData } = this.user;
    this.api_helper.put({ 
      endpoint: `/user/update/${id}`, 
      data: newData
    }).then((response) => {
      console.log(response);
    });
  }

  cancelToPersonalInformations(): void {
    this.edited = false;
  }


  async userData(userDataSource: any): Promise<User> {

    const userTemp: User = {
      id: userDataSource?.id || 0,
      lastName: userDataSource?.lastName || '',
      firstName: userDataSource?.firstName || '',
      userName: userDataSource?.userName || '',
      mail: userDataSource?.mail || '',
      age: userDataSource?.age || 0,
    };
  
    return userTemp;
  }
  
  async rolesData(rolesDto: any): Promise<UserRole[]> {
    const roles: UserRole[] = [];

    for (const roleDto of rolesDto) {
      this.api_helper.get({ 
        endpoint: `/association/${+roleDto?.idAssociation}` 
      }).then((response) => {
        const role : UserRole = {
          id: roleDto?.id,
          name: roleDto?.name,
          association: response?.name,
        };
        roles.push(role);
      });
    }

    return roles;
  }


  async associationsData(rolesDto: any): Promise<Association[]> {
    const associations: Association[] = [];

    for (const roleDto of rolesDto) {
      this.api_helper.get({ 
        endpoint: `/association/${+roleDto?.idAssociation}` 
      }).then((response) => {
        const association : Association = {
          id: response?.id,
          name: response?.name,
          description: response?.description,
        };
        associations.push(association);
      });
    }

    return associations;
  }

}



