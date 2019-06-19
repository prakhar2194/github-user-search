import { Component, OnInit, Input } from '@angular/core';
import { Users } from 'src/app/models/user.model';
import { GithubUserService } from 'src/app/services/github-user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @Input() data: Array<Users>;
  userList: Array<Users> = [];
  currentSelected: Users = null;
  userRepoList: Array<any> = [];

  constructor(private gitService: GithubUserService) { }

  ngOnInit() {

  }

  ngOnChanges() {
    this.userList = this.data
  }

  onDetailClick(e) {
    if (this.currentSelected == null) {
      this.getUserRepo(e);
    }
    else {
      this.onCollapseClick(this.currentSelected);
      this.getUserRepo(e);
    }
  }

  onCollapseClick(e) {
    e.collapsed = true;
    this.currentSelected = null;
  }

  getUserRepo(e) {
    this.userRepoList = null;
    this.currentSelected = e
    this.gitService.getUserRepos(this.currentSelected.login).subscribe(
      data => {
        if (data && data.length > 0) {
          if (data.length > 10) {
            data.splice(10, data.length);
          }
          this.currentSelected.collapsed = false;
          this.userRepoList = data;
        }
      },
      error => {
        console.log("server error in user repo api");
      }
    );
  }
}
