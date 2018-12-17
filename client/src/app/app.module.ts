import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NewUserComponent } from './new-user/new-user.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent} from "./layout/components/header/header.component";
import { UserTypeComponent } from './user-type/user-type.component';
import { GroupsListComponent } from './groups-list/groups-list.component';
import { UploadProjectComponent } from './upload-project/upload-project.component';
import { ClickColorDirective } from './click-color.directive';
import { SearchProjectComponent } from './search-project/search-project.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { MyProjectsWarlordComponent } from './my-projects-warlord/my-projects-warlord.component';
import { MyProjectsMerceneryComponent } from './my-projects-mercenery/my-projects-mercenery.component';
import { EditProfileMerceneryComponent } from './edit-profile-mercenery/edit-profile-mercenery.component';



// AoT requires an exported function for factories
export const createTranslateLoader = (http: HttpClient) => {
    /* for development
    return new TranslateHttpLoader(
        http,
        '/start-angular/client/master/dist/assets/i18n/',
        '.json'
    ); */
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        NgbDropdownModule.forRoot(),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule
    ],
    declarations: [AppComponent, NewUserComponent, HomeComponent, HeaderComponent, UserTypeComponent, GroupsListComponent, UploadProjectComponent, ClickColorDirective, SearchProjectComponent, EditProjectComponent, MyProjectsWarlordComponent, MyProjectsMerceneryComponent, EditProfileMerceneryComponent],
    providers: [AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule {}
