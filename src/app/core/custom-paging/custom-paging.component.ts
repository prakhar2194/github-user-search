import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-paging',
  templateUrl: './custom-paging.component.html',
  styleUrls: ['./custom-paging.component.scss']
})
export class CustomPagingComponent implements OnInit {

  pageNumber: number = 1;
  constructor() { }

  ngOnInit() {
  }

}
