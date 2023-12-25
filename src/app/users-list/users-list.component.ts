import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable, lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.sass'
})
export class UsersListComponent {
  dataSource = [];
  displayedColumns: any;

  constructor(
    private http: HttpClient,
  ) {
    this.displayedColumns = ['id', 'lastname', 'firstname', 'age'];
  }


  ngOnInit() {
    const request: Observable<any> = this.http.get('http://localhost:3000/users', { observe : 'response' });
    request.subscribe((response) => {
      this.dataSource = response.body;
      console.log(response.body);
    })
  }

}
