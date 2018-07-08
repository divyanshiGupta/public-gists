import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'https://api.github.com';

@Injectable({
  providedIn: 'root'
})
export class UserGistsService {

  constructor(private http: HttpClient) { }

  getUserGists(userName: string) {
    return this.http.get(BASE_URL + '/users/' + userName + '/gists');
    // return this.http.get(BASE_URL + '/gists/public');
  }
}
