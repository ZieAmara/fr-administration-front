import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.sass'
})
export class UsersListComponent {

  private readonly api_url : string = environment.api_url;

  users = [];
  userDisplayedColumns: string[] = ['id', 'lastName', 'firstName', 'userName', 'age'];;

  constructor(
    private http: HttpClient,
  ) { }


  ngOnInit() {
    const request: Observable<any> = this.http.get<any[]>(`${this.api_url}/user/all`, { observe : 'response' });
    request.subscribe((response) => {
      this.users = response.body;
      console.log(response.body);
    })
  }

}
