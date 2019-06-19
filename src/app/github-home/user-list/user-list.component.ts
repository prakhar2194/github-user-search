import { Component, OnInit, Input } from '@angular/core';
import { Users } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @Input() data: Array<Users>;
  userList: Array<Users> = [];
  ifCollapsed:boolean=true;
  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(){
    this.userList = this.data
    console.log("ngOnChanges", this.data);
  }

  onDetailClick(e){
    console.log("prakhar", e);
    e.collapsed = !e.collapsed;
  }
  
  onCollapseClick(e){
    console.log("prakhar c", e);
    e.collapsed = !e.collapsed;
  }

}
