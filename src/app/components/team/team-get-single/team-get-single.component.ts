import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, startWith, switchMap } from 'rxjs/operators';

import { teamGet, teamResponse } from 'src/app/models/Team/teamResponse';
import { userDictionary } from 'src/app/models/User/user';
import { TeamService } from 'src/app/services/team.service';
import { UserService } from 'src/app/services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-team-get-single',
  templateUrl: './team-get-single.component.html',
  styleUrls: ['./team-get-single.component.css']
})
export class TeamGetSingleComponent implements OnInit {
  team?: teamGet;

  id: number = 0;

  operation: number = 0;

  newTeamMember: number = 0;
  selectedUserId: number | undefined;

  users: userDictionary[] = [];
  filteredUsers: Observable<userDictionary[]> | undefined;
  searchControl = new FormControl();
  constructor(private teamService: TeamService, private userService : UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id  = Number(this.route.snapshot.paramMap.get('id'));

    this.getSingleTeam(); 

    this.getUsersDictionary();
  }

  getUsersDictionary() {
    this.userService.getUsersDictionary().subscribe(data => {
      this.users = data.users || [];
      this.filteredUsers = this.searchControl.valueChanges
        .pipe(
          startWith(''),
          map(value => typeof value === 'string' ? value : value.name),
          map(name => name ? this._filter(name) : this.users.slice())
        );
    });
  }

  displayFn(user: userDictionary): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): userDictionary[] {
    const filterValue = name.toLowerCase();
    return this.users.filter(user => user.name.toLowerCase().indexOf(filterValue) === 0);
  }

  selectOperation(number: number)
  {
    this.operation = number;
  }

  onSelectUser(user: userDictionary): void {
    this.newTeamMember = user.id;
  }

  getSingleTeam()
  {
    this.teamService.getTeam(this.id).subscribe(team => {this.team = team.team});
  }

  display : boolean = false;

  displayPopup() : void{
    this.display = !this.display;
  }

  deleteTeam(teamId: number) : void
  {
    this.teamService.deleteTeam(teamId).subscribe(tournamnet => {
      this.router.navigate(['/team-home']);
    });
  }

  addTeamMember()
  {
    if(this.team)
    {
      if(this.team?.teamMembers.length <= 5)
      {
        this.teamService.addTeamMember({teamId: this.team.id, userId: this.newTeamMember}).subscribe(teamMember => {
          this.getSingleTeam(); 
        });
      }
    }
  }

  deleteTeamMember(currentTeamId : number, teamMemberId : number)
  {
    this.teamService.deleteTeamMember({teamId: currentTeamId, userId: teamMemberId}).subscribe(teamMember => {
      this.getSingleTeam(); 
    });

  }
}
