import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { NewUserComponent } from './new-user/new-user.component';
import { HomeComponent } from "./home/home.component";
import { UserTypeComponent} from "./user-type/user-type.component";
import { GroupsListComponent} from "./groups-list/groups-list.component";
import { UploadProjectComponent} from "./upload-project/upload-project.component";
import { MyProjectsWarlordComponent} from "./my-projects-warlord/my-projects-warlord.component";
import { EditProjectComponent} from "./edit-project/edit-project.component";
import { SearchProjectComponent} from "./search-project/search-project.component";
import { EditProfileMerceneryComponent } from "./edit-profile-mercenery/edit-profile-mercenery.component";
import { EditSkillsComponent} from "./edit-skills/edit-skills.component";
import { ChatComponent} from "./chat/chat.component";
import { SelectBandComponent} from "./select-band/select-band.component";
import { BandProfileComponent} from "./band-profile/band-profile.component";
import { ProjectManagerComponent} from "./project-manager/project-manager.component";
import { MercNavbarComponent} from "./merc-navbar/merc-navbar.component";
import { MyBandsComponent} from "./my-bands/my-bands.component";

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
    { path: 'select-band', component: SelectBandComponent },
    { path: 'search-project', component: SearchProjectComponent },
    { path: 'edit-skills', component: EditSkillsComponent },
    { path: 'my-projects-warlord', component: MyProjectsWarlordComponent },
    { path: 'my-bands', component: MyBandsComponent },
    { path: 'edit-profile-mercenery', component: EditProfileMerceneryComponent },
    { path: 'edit-project', component: EditProjectComponent },
    { path: 'home', component: HomeComponent },
    { path: 'chat', component: ChatComponent },
    // { path: 'band-profile/:id', component: BandProfileComponent },
    { path: 'band-profile', component: BandProfileComponent },
    { path: 'merc-navbar', component: MercNavbarComponent },
    { path: 'groups-list', component: GroupsListComponent },
    { path: 'project-manager', component: ProjectManagerComponent },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
