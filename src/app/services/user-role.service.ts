import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { userRole } from '../models/UserRole/userRole';
import { userRoleResponse } from '../models/UserRole/userRoleResponse';
import { userRolesResponse } from '../models/UserRole/userRolesResponse';

@Injectable({
  providedIn: 'root'
})
export class UserRoleService {

  constructor(private httpClient: HttpClient) { }

  getUserRoles = (): Observable<userRolesResponse> => this.httpClient.get<userRolesResponse>("https://localhost:5001/api/UserRoles");

  getUserRole  = (id: number): Observable<userRoleResponse> => this.httpClient.get<userRoleResponse>("https://localhost:5001/api/UsersRoles/" + id);

  createUserRole = (userRoleName: userRole): Observable<userRole> => this.httpClient.post<userRole>("https://localhost:5001/api/UserRoles", userRoleName);

  updateUserRole = (id: number, userRoleName: userRole): Observable<userRole> => this.httpClient.put<userRole>("https://localhost:5001/api/UserRoles/" + id, userRoleName);

  deleteUserRole = (id: number): Observable<userRole> => this.httpClient.delete<userRole>("https://localhost:5001/api/UserRoles/" + id);
}
