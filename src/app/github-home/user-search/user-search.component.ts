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

  gridData: Array<Users> = [];
  resultCount: number;
  searchUser: string;
  sortValue: string;
  private sortList: Array<dropDown>;


  constructor(private gitUserService: GithubUserService) {
    this.sortList = JSON.parse(JSON.stringify(sortListTemplate));
    this.sortValue = this.sortList[0].value;
  }

  ngOnInit() {
  }

  sortChange(e) {
    console.log("prakhar sortt", e);
    if (this.gridData.length > 0) {
      if (e == 'sortByNameAsc') {
        this.gridData.sort((x, y) => {
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
        this.gridData.sort((x, y) => {
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
        this.gridData.sort((x, y) => {
          if (x.login > y.login) {
            return -1;
          }
          if (x.login < y.login) {
            return 1;
          }
          return 0;
        });
      }
      else if (e == 'sortByRankDesc') {
        this.gridData.sort((x, y) => {
          if (x.login > y.login) {
            return -1;
          }
          if (x.login < y.login) {
            return 1;
          }
          return 0;
        });
      }
    }

    console.log("prakhar old", this.gridData);
    //console.log("prakhar old", sortedArray);

  }

  onSearch(e) {
    console.log("prakhar search", e);
    console.log("prakhar search", e.length);
    if (e != null && e.length >= 3) {
      this.gitUserService.getUsers(e).subscribe(
        data => {
          data.items.forEach(element => {
            element.collapsed = true;
          });
          this.resultCount = data.total_count;
          this.gridData = data.items;
          this.sortChange(this.sortValue);
          console.log(data);
        },
        error => {
          console.log('server error');
        }
      );
    }
    else {
      this.gridData = [];
    }
  }

}

const sortListTemplate: Array<dropDown> = [
  {
    value: "sortByNameAsc",
    text: "Sort by Name ^"
  },
  {
    value: "sortByNameDesc",
    text: "Sort by Name v"
  },
  {
    value: "sortByRankAsc",
    text: "Sort by Rank ^"
  },
  {
    value: "sortByRankDesc",
    text: "Sort by Rank v"
  }
]