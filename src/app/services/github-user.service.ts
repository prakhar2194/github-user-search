import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class GithubUserService {

  constructor(private httpClient: HttpClient) { }

  public getUsers(searchText:string):Observable<any>{
    return this.httpClient.get<Users>(`https://api.github.com/search/users?q=`+searchText);
  }

  public getUserRepos(userName:string):Observable<any>{
    return this.httpClient.get<Users>(`https://api.github.com/users/`+userName+'/repos');
  }
}
