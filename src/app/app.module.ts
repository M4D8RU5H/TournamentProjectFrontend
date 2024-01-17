import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AccordionModule } from 'ngx-bootstrap/accordion'

//angular material
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox'
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {PortalModule} from '@angular/cdk/portal';
import { MatNativeDateModule } from '@angular/material/core';

import { NgxMatDatetimePickerModule, NgxMatTimepickerModule, NgxNativeDateModule } from '@angular-material-components/datetime-picker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TournamentGetAllComponent } from './components/tournament/tournament-get-all/tournament-get-all.component';
import { TournamentGetSingleComponent } from './components/tournament/tournament-get-single/tournament-get-single.component';
import { TournamentUpdateComponent } from './components/tournament/tournament-update/tournament-update.component';
import { TournamentDeleteComponent } from './components/tournament/tournament-delete/tournament-delete.component';
import { TournamentCreateComponent } from './components/tournament/tournament-create/tournament-create.component';
import { TournamentHomeComponent } from './components/tournament/tournament-home/tournament-home.component';
import { RouterLink } from '@angular/router';
import { UserCreateComponent } from './components/user/user-create/user-create.component';
import { UserDeleteComponent } from './components/user/user-delete/user-delete.component';
import { UserGetAllComponent } from './components/user/user-get-all/user-get-all.component';
import { UserGetSingleComponent } from './components/user/user-get-single/user-get-single.component';
import { UserHomeComponent } from './components/user/user-home/user-home.component';
import { UserUpdateComponent } from './components/user/user-update/user-update.component';
import { MainPageComponent } from './components/main-page/main-page/main-page.component';
//team
import { TeamGetAllComponent } from './components/team/team-get-all/team-get-all.component';
import { TeamGetSingleComponent } from './components/team/team-get-single/team-get-single.component';
import { TeamUpdateComponent } from './components/team/team-update/team-update.component';
import { TeamDeleteComponent } from './components/team/team-delete/team-delete.component';
import { TeamCreateComponent } from './components/team/team-create/team-create.component';
import { TeamHomeComponent } from './components/team/team-home/team-home.component';
import { MatchCreateComponent } from './components/match/match-create/match-create.component';
import { MatchUpdateComponent } from './components/match/match-update/match-update.component';
import { MatchDeleteComponent } from './components/match/match-delete/match-delete.component';
import { MatchGetAllComponent } from './components/match/match-get-all/match-get-all.component';
import { MatchGetSingleComponent } from './components/match/match-get-single/match-get-single.component';
import { MatchHomeComponent } from './components/match/match-home/match-home.component';
import { MessageCreateComponent } from './components/message/message-create/message-create.component';
import { MessageGetSingleComponent } from './components/message/message-get-single/message-get-single.component';
import { MessageGetAllComponent } from './components/message/message-get-all/message-get-all.component';
import { MessageGetAllReceivedComponent } from './components/message/message-get-all-received/message-get-all-received.component';
import { PostCreateComponent } from './components/post/post-create/post-create.component';
import { PostDeleteComponent } from './components/post/post-delete/post-delete.component';
import { PostUpdateComponent } from './components/post/post-update/post-update.component';
import { PostGetAllComponent } from './components/post/post-get-all/post-get-all.component';
import { PostGetSingleComponent } from './components/post/post-get-single/post-get-single.component';
import { UserRoleUpdateComponent } from './components/user-role/user-role-update/user-role-update.component';
import { UserRoleGetAllComponent } from './components/user-role/user-role-get-all/user-role-get-all.component';
import { UserRoleCreateComponent } from './components/user-role/user-role-create/user-role-create.component';
import { UserRoleDeleteComponent } from './components/user-role/user-role-delete/user-role-delete.component';
import { ReportCreateComponent } from './components/report/report-create/report-create.component';
import { ReportDeleteComponent } from './components/report/report-delete/report-delete.component';
import { ReportGetAllComponent } from './components/report/report-get-all/report-get-all.component';
import { ReportGetSingleComponent } from './components/report/report-get-single/report-get-single.component';
import { CommentCreateComponent } from './components/comment/comment-create/comment-create.component';
import { CommentDeleteComponent } from './components/comment/comment-delete/comment-delete.component';
import { CommentGetAllComponent } from './components/comment/comment-get-all/comment-get-all.component';
import { CommentUpdateComponent } from './components/comment/comment-update/comment-update.component';
import { MessageHomeComponent } from './components/message/message-home/message-home.component';
import { UserLoginComponent } from './components/user/user-login/user-login.component';
import { SettingsHomeComponent } from './components/settings/settings-home/settings-home.component';

import { NgxMatMomentModule } from '@angular-material-components/moment-adapter';
import { UserLoginSwitchComponent } from './components/user/user-login-switch/user-login-switch.component';
import { TournamentGetSingleMatchHistoryComponent } from './components/tournament/tournament-get-single/tournament-get-single-match-history/tournament-get-single-match-history.component';
import { TournamentGetSingleTeamsComponent } from './components/tournament/tournament-get-single/tournament-get-single-teams/tournament-get-single-teams.component';

@NgModule({
  declarations: [
    AppComponent,
    TournamentGetAllComponent,
    TournamentGetSingleComponent,
    TournamentUpdateComponent,
    TournamentDeleteComponent,
    TournamentCreateComponent,
    TournamentHomeComponent,
    UserCreateComponent,
    UserDeleteComponent,
    UserGetAllComponent,
    UserGetSingleComponent,
    UserHomeComponent,
    UserUpdateComponent,
    MainPageComponent,
    MatchCreateComponent,
    MatchUpdateComponent,
    MatchDeleteComponent,
    MatchGetAllComponent,
    MatchGetSingleComponent,
    MatchHomeComponent,
    MessageCreateComponent,
    MessageGetSingleComponent,
    MessageGetAllComponent,
    MessageGetAllReceivedComponent,
    PostCreateComponent,
    PostDeleteComponent,
    PostUpdateComponent,
    PostGetAllComponent,
    PostGetSingleComponent,
    UserRoleUpdateComponent,
    UserRoleGetAllComponent,
    UserRoleCreateComponent,
    UserRoleDeleteComponent,
    ReportCreateComponent,
    ReportDeleteComponent,
    ReportGetAllComponent,
    ReportGetSingleComponent,
    CommentCreateComponent,
    CommentDeleteComponent,
    CommentGetAllComponent,
    CommentUpdateComponent,
    //team
    TeamHomeComponent,
    TeamGetAllComponent,
    TeamGetSingleComponent,
    TeamUpdateComponent,
    TeamDeleteComponent,
    TeamCreateComponent,
    TournamentHomeComponent,
    MessageHomeComponent,
    UserLoginComponent,
    SettingsHomeComponent,
    UserLoginSwitchComponent,
    TournamentGetSingleMatchHistoryComponent,
    TournamentGetSingleTeamsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterLink,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    CommonModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgbModule,
    [
      BrowserModule,
      BrowserAnimationsModule,
      MatCheckboxModule,
      MatCheckboxModule,
      MatButtonModule,
      MatInputModule,
      MatAutocompleteModule,
      MatDatepickerModule,
      MatFormFieldModule,
      MatRadioModule,
      MatSelectModule,
      MatSliderModule,
      MatSlideToggleModule,
      MatMenuModule,
      MatSidenavModule,
      MatToolbarModule,
      MatListModule,
      MatGridListModule,
      MatCardModule,
      MatStepperModule,
      MatTabsModule,
      MatExpansionModule,
      MatButtonToggleModule,
      MatChipsModule,
      MatIconModule,
      MatProgressSpinnerModule,
      MatProgressBarModule,
      MatDialogModule,
      MatTooltipModule,
      MatSnackBarModule,
      MatTableModule,
      MatSortModule,
      MatPaginatorModule,
      MatCheckboxModule,
      PortalModule,
      NgxMatDatetimePickerModule,
      NgxMatTimepickerModule,
      NgxNativeDateModule,
      MatNativeDateModule,
      NgxMatMomentModule
  ],
  AccordionModule.forRoot()
  ],
  exports: [
    [
      BrowserModule,
      BrowserAnimationsModule,
      MatCheckboxModule,
      MatCheckboxModule,
      MatButtonModule,
      MatInputModule,
      MatAutocompleteModule,
      MatDatepickerModule,
      MatFormFieldModule,
      MatRadioModule,
      MatSelectModule,
      MatSliderModule,
      MatSlideToggleModule,
      MatMenuModule,
      MatSidenavModule,
      MatToolbarModule,
      MatListModule,
      MatGridListModule,
      MatCardModule,
      MatStepperModule,
      MatTabsModule,
      MatExpansionModule,
      MatButtonToggleModule,
      MatChipsModule,
      MatIconModule,
      MatProgressSpinnerModule,
      MatProgressBarModule,
      MatDialogModule,
      MatTooltipModule,
      MatSnackBarModule,
      MatTableModule,
      MatSortModule,
      MatPaginatorModule,
      MatCheckboxModule,
      PortalModule,
      NgxMatMomentModule
  ],
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
