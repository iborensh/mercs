import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { NewUserComponent } from './new-user/new-user.component';
import { HomeComponent } from "./home/home.component";
import { UserTypeComponent} from "./user-type/user-type.component";
import { GroupsListComponent} from "./groups-list/groups-list.component";
import { UploadProjectComponent} from "./upload-project/upload-project.component";

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'home/:id', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: 'signup', loadChildren: './signup/signup.module#SignupModule' },
    { path: 'error', loadChildren: './server-error/server-error.module#ServerErrorModule' },
    { path: 'access-denied', loadChildren: './access-denied/access-denied.module#AccessDeniedModule' },
    { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    { path: 'newUser', component: NewUserComponent },
    { path: 'user-type', component: UserTypeComponent },
    { path: 'upload-project', component: UploadProjectComponent },
    { path: 'home', component: HomeComponent },
    { path: 'groups-list', component: GroupsListComponent },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
