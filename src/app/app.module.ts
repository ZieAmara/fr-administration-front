import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenHttpInterceptor } from './interceptor/token.interceptor';
import { ProfilComponent } from './users/profile/profil.component';
import { AssociationsListComponent } from './associations/associations-list/associations-list.component';
import { AssociationsSheetsComponent } from './associations/associations-sheets/associations-sheets.component';
import { UsersSheetsComponent } from './users/users-sheets/users-sheets.component';
import { UsersCreationComponent } from './users/users-creation/users-creation.component';
import { AssociationsCreationComponent } from './associations/associations-creation/associations-creation.component';



@NgModule({

  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    UsersListComponent,
    LoginComponent,
    ProfilComponent,
    AssociationsListComponent,
    AssociationsSheetsComponent,
    UsersSheetsComponent,
    UsersCreationComponent,
    AssociationsCreationComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    TextFieldModule,
    MatInputModule,
    MatFormFieldModule,
    MatTabsModule,
    MatIconModule,
    MatDividerModule,
    FormsModule,
    MatMenuModule,
    MatSelectModule,
    MatDialogModule,
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenHttpInterceptor,
      multi: true
    }
  ],

  bootstrap: [AppComponent],
  
})
export class AppModule { }
