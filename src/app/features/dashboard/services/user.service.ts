import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ApiResponse } from '../models/ApiResponse';
import { PagedResponse } from '../models/PagedResponse';
import { Role, User } from '../models/User';
import { CreateUserDTO } from '../models/UserDTO';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(
    orderBy: string,
    orderDirection: string,
    pageNumber: number,
    pageSize: number,
    search: string,
  ) {
    let params = new HttpParams()
      .set('orderBy', orderBy)
      .set('orderDirection', orderDirection)
      .set('pageNumber', pageNumber)
      .set('pageSize', pageSize)
      .set('search', search);

    return this.http.get<ApiResponse<PagedResponse<User>>>(
      `${environment.apiBaseUrl}/api/user/users`,
      {
        params: params,
      },
    );
  }

  addUser(payload: CreateUserDTO) {
    return this.http.post(`${environment.apiBaseUrl}/api/user/user`, payload);
  }

  updateUser(id: string, payload: User) {
    return this.http.put(
      `${environment.apiBaseUrl}/api/User/user/${id}`,
      payload,
    );
  }

  deleteUser(id: string) {
    return this.http.delete(`${environment.apiBaseUrl}/api/user/user/${id}`);
  }

  getRoles() {
    return this.http.get<ApiResponse<Role[]>>(
      `${environment.apiBaseUrl}/api/User/roles`,
    );
  }
}
