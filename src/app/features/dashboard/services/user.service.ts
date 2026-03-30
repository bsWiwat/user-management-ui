import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

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

    return this.http.get<any>(`${environment.apiBaseUrl}/api/user/users`, {
      params: params,
    });
  }

  addUser(payload: any) {
    return this.http.post(`${environment.apiBaseUrl}/api/user/user`, payload);
  }

  updateUser(id: string, payload: any) {
    return this.http.put(
      `${environment.apiBaseUrl}/api/User/user/${id}`,
      payload,
    );
  }

  deleteUser(id: string) {
    return this.http.delete(`${environment.apiBaseUrl}/api/user/user/${id}`);
  }

  getRoles() {
    return this.http.get<any>(`${environment.apiBaseUrl}/api/User/roles`);
  }
}
