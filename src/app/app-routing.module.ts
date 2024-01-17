import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CommentCreateComponent } from './components/comment/comment-create/comment-create.component';
import { CommentDeleteComponent } from './components/comment/comment-delete/comment-delete.component';
import { CommentGetAllComponent } from './components/comment/comment-get-all/comment-get-all.component';
import { CommentUpdateComponent } from './components/comment/comment-update/comment-update.component';
import { MatchCreateComponent } from './components/match/match-create/match-create.component';
import { MatchDeleteComponent } from './components/match/match-delete/match-delete.component';
import { MatchGetAllComponent } from './components/match/match-get-all/match-get-all.component';
import { MatchGetSingleComponent } from './components/match/match-get-single/match-get-single.component';
import { MatchHomeComponent } from './components/match/match-home/match-home.component';
import { MatchUpdateComponent } from './components/match/match-update/match-update.component';
import { MessageCreateComponent } from './components/message/message-create/message-create.component';
import { MessageGetAllComponent } from './components/message/message-get-all/message-get-all.component';
import { MessageGetAllReceivedComponent } from './components/message/message-get-all-received/message-get-all-received.component';
import { MessageGetSingleComponent } from './components/message/message-get-single/message-get-single.component';
import { PostCreateComponent } from './components/post/post-create/post-create.component';
import { PostDeleteComponent } from './components/post/post-delete/post-delete.component';
import { PostGetAllComponent } from './components/post/post-get-all/post-get-all.component';
import { PostGetSingleComponent } from './components/post/post-get-single/post-get-single.component';
import { PostUpdateComponent } from './components/post/post-update/post-update.component';
import { ReportCreateComponent } from './components/report/report-create/report-create.component';
import { ReportDeleteComponent } from './components/report/report-delete/report-delete.component';
import { ReportGetAllComponent } from './components/report/report-get-all/report-get-all.component';
import { ReportGetSingleComponent } from './components/report/report-get-single/report-get-single.component';
import { TournamentCreateComponent } from './components/tournament/tournament-create/tournament-create.component';
import { TournamentDeleteComponent } from './components/tournament/tournament-delete/tournament-delete.component';
import { TournamentGetAllComponent } from './components/tournament/tournament-get-all/tournament-get-all.component';
import { TournamentGetSingleComponent } from './components/tournament/tournament-get-single/tournament-get-single.component';
import { TournamentHomeComponent } from './components/tournament/tournament-home/tournament-home.component';
import { TournamentUpdateComponent } from './components/tournament/tournament-update/tournament-update.component';
import { UserRoleCreateComponent } from './components/user-role/user-role-create/user-role-create.component';
import { UserRoleDeleteComponent } from './components/user-role/user-role-delete/user-role-delete.component';
import { UserRoleGetAllComponent } from './components/user-role/user-role-get-all/user-role-get-all.component';
import { UserRoleUpdateComponent } from './components/user-role/user-role-update/user-role-update.component';
//user
import { UserCreateComponent } from './components/user/user-create/user-create.component';
import { UserDeleteComponent } from './components/user/user-delete/user-delete.component';
import { UserGetAllComponent } from './components/user/user-get-all/user-get-all.component';
import { UserGetSingleComponent } from './components/user/user-get-single/user-get-single.component';
import { UserHomeComponent } from './components/user/user-home/user-home.component';
import { UserUpdateComponent } from './components/user/user-update/user-update.component';
//team
import { TeamCreateComponent } from './components/team/team-create/team-create.component';
import { TeamDeleteComponent } from './components/team/team-delete/team-delete.component';
import { TeamGetAllComponent } from './components/team/team-get-all/team-get-all.component';
import { TeamGetSingleComponent } from './components/team/team-get-single/team-get-single.component';
import { TeamHomeComponent } from './components/team/team-home/team-home.component';
import { TeamUpdateComponent } from './components/team/team-update/team-update.component';
import { MessageHomeComponent } from './components/message/message-home/message-home.component';
import { UserLoginComponent } from './components/user/user-login/user-login.component';
import { SettingsHomeComponent } from './components/settings/settings-home/settings-home.component';

const routes: Routes = [
  //tournament
  { path: 'tournament-home', component: TournamentHomeComponent },
  { path: 'tournament-get-all', component: TournamentGetAllComponent },
  {
    path: 'tournament-get-single/:id',
    component: TournamentGetSingleComponent,
  },
  { path: 'tournament-create', component: TournamentCreateComponent },
  { path: 'tournament-delete', component: TournamentDeleteComponent },
  { path: 'tournament-update', component: TournamentUpdateComponent },

  //user
  { path: 'user-home', component: UserHomeComponent },
  { path: 'user-get-all', component: UserGetAllComponent },
  { path: 'user-get-single/:id', component: UserGetSingleComponent },
  { path: 'user-create', component: UserCreateComponent },
  { path: 'user-delete', component: UserDeleteComponent },
  { path: 'user-update', component: UserUpdateComponent },
  { path: 'user-login', component: UserLoginComponent },

  //match
  { path: 'match-home', component: MatchHomeComponent },
  { path: 'match-get-all', component: MatchGetAllComponent },
  { path: 'match-get-single', component: MatchGetSingleComponent },
  { path: 'match-update', component: MatchUpdateComponent },
  { path: 'match-delete', component: MatchDeleteComponent },
  { path: 'match-create', component: MatchCreateComponent },

  //message
  { path: 'message-home', component: MessageHomeComponent },
  { path: 'message-create', component: MessageCreateComponent },
  { path: 'message-get-all', component: MessageGetAllComponent },
  { path: 'message-get-all-received', component: MessageGetAllReceivedComponent },
  { path: 'message-get-single', component: MessageGetSingleComponent },

  //post
  { path: 'post-create', component: PostCreateComponent },
  { path: 'post-delete', component: PostDeleteComponent },
  { path: 'post-get-all', component: PostGetAllComponent },
  { path: 'post-get-single', component: PostGetSingleComponent },
  { path: 'post-update', component: PostUpdateComponent },

  //report
  { path: 'report-create', component: ReportCreateComponent },
  { path: 'report-get-all', component: ReportGetAllComponent },
  { path: 'report-get-single', component: ReportGetSingleComponent },
  { path: 'report-get-delete', component: ReportDeleteComponent },

  //user-role
  { path: 'user-role-create', component: UserRoleCreateComponent },
  { path: 'user-role-delete', component: UserRoleDeleteComponent },
  { path: 'user-role-get-all', component: UserRoleGetAllComponent },
  { path: 'user-role-update', component: UserRoleUpdateComponent },

  //comment
  { path: 'comment-create', component: CommentCreateComponent },
  { path: 'comment-delete', component: CommentDeleteComponent },
  { path: 'comment-get-all', component: CommentGetAllComponent },
  { path: 'comment-update', component: CommentUpdateComponent },

  //team
  { path: 'team-home', component: TeamHomeComponent },
  { path: 'team-get-all', component: TeamGetAllComponent },
  { path: 'team-get-single/:id', component: TeamGetSingleComponent },
  { path: 'team-create', component: TeamCreateComponent },
  { path: 'team-delete', component: TeamDeleteComponent },
  { path: 'team-update', component: TeamUpdateComponent },

  //settings
  { path: 'settings-home', component: SettingsHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
