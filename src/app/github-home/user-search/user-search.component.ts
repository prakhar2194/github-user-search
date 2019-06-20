import { Component, OnInit } from '@angular/core';
import { GithubUserService } from 'src/app/services/github-user.service';
import { Users } from 'src/app/models/user.model';

interface dropDown {
  value: string;
  text: string;
}

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {

  originalGridData: Array<Users> = [];
  gridData: Array<Users> = [];
  resultCount: number;
  searchUser: string;
  sortValue: string;
  private sortList: Array<dropDown>;


  constructor(private gitUserService: GithubUserService) {
    this.sortList = sortListTemplate;
    this.sortValue = this.sortList[0].value;
  }

  ngOnInit() {
  }

  sortChange(e) {
    if (this.originalGridData.length > 0) {
      if (e == 'sortByNameAsc') {
        this.originalGridData.sort((x, y) => {
          if (x.login > y.login) {
            return 1;
          }
          if (x.login < y.login) {
            return -1;
          }
          return 0;
        });
      }
      else if (e == 'sortByNameDesc') {
        this.originalGridData.sort((x, y) => {
          if (x.login > y.login) {
            return -1;
          }
          if (x.login < y.login) {
            return 1;
          }
          return 0;
        });
      }
      else if (e == 'sortByRankAsc') {
        this.originalGridData.sort((x, y) => {
          return x.score - y.score;
        });
      }
      else if (e == 'sortByRankDesc') {
        this.originalGridData.sort((x, y) => {
          return y.score - x.score;
        });
      }
    }
  }

  onSearch(e) {
    if (e != null && e.length >= 3) {
      this.gitUserService.getUsers(e).subscribe(
        data => {
          data.items.forEach(element => {
            element.collapsed = true;
          });
          this.resultCount = data.total_count;
          this.originalGridData = data.items;
          this.sortChange(this.sortValue);
        },
        error => {
          console.log('server error');
        }
      );
    }
    else {
      this.originalGridData = [];
    }
  }

  onPageinationClicked(e:any) {
    this.gitUserService.getUserPageWise(this.searchUser, e.pageDisplayed).subscribe(
      data =>{
        data.items.forEach(element => {
          element.collapsed = true;
        });
        this.resultCount = data.total_count;
        this.originalGridData = data.items;
        this.sortChange(this.sortValue);
      },
      error=>{
        console.log('server error');
      }
    );
  }
}

const sortListTemplate: Array<dropDown> = [
  {
    value: "sortByNameAsc",
    text: "Sort by Name Asc"
  },
  {
    value: "sortByNameDesc",
    text: "Sort by Name Desc"
  },
  {
    value: "sortByRankAsc",
    text: "Sort by Rank Asc"
  },
  {
    value: "sortByRankDesc",
    text: "Sort by Rank Desc"
  }
];