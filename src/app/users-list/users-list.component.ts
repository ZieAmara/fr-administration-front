import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.sass'
})
export class UsersListComponent {

  private readonly api_url : string = environment.api_url;

  dataSource = [];
  displayedColumns: any;
  

  constructor(
    private http: HttpClient,
  ) {
    this.displayedColumns = ['id', 'lastName', 'firstName', 'userName', 'age'];
  }


  ngOnInit() {
    const request: Observable<any> = this.http.get<any[]>(`${this.api_url}/user/all`, { observe : 'response' });
    request.subscribe((response) => {
      this.dataSource = response.body;
      console.log(response.body);
    })
  }

}
