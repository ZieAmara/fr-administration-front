import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { LoginComponent } from './login/login.component';
import { authGuard } from './guards/auth.guard';
import { ProfilComponent } from './users/profile/profil.component';
import { AssociationsListComponent } from './associations/associations-list/associations-list.component';
import { AssociationsSheetsComponent } from './associations/associations-sheets/associations-sheets.component';
import { UsersSheetsComponent } from './users/users-sheets/users-sheets.component';
import { UsersCreationComponent } from './users/users-creation/users-creation.component';
import { AssociationsCreationComponent } from './associations/associations-creation/associations-creation.component';
import { SendMessageComponent } from './messages/send-message/send-message.component';


const routes: Routes = [
  { path: 'messages/send-email', component: SendMessageComponent, canActivate: [authGuard] },
  { path: 'associations/creation', component: AssociationsCreationComponent, canActivate: [authGuard] },
  { path: 'associations/sheets', component: AssociationsSheetsComponent, canActivate: [authGuard] },
  { path: 'associations', component: AssociationsListComponent, canActivate: [authGuard] },
  { path: 'users/creation', component: UsersCreationComponent, canActivate: [authGuard] },
  { path: 'users/sheets', component: UsersSheetsComponent, canActivate: [authGuard] },
  { path: 'user/profil', component: ProfilComponent, canActivate: [authGuard] },
  { path: 'users', component: UsersListComponent, canActivate: [authGuard] },
  { path: 'home', component: HomeComponent, canActivate: [authGuard]  },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: '**', component: LoginComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
