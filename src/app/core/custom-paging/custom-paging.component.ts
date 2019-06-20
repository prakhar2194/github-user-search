import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

interface iPageClicked {
  action: string;
  pageDisplayed: number;
}

@Component({
  selector: 'app-custom-paging',
  templateUrl: './custom-paging.component.html',
  styleUrls: ['./custom-paging.component.scss']
})

export class CustomPagingComponent implements OnInit {

  pageClicked:iPageClicked;
  currentPage: number = 1;
  lastPage: number;
  FirstPage: number = 1;
  itemDisplayCount: number = 30;
  @Input() totalItems: number;
  @Output() pageinationActionClicked = new EventEmitter<any>();
  //@Output() currentPageEmit = new EventEmitter<number>();
  constructor() { 
    this.pageClicked={
      action:'current',
      pageDisplayed:1
    };
  }

  ngOnInit() {
    this.calLastPage();
  }

  ngOnChanges(){
    this.calLastPage();
  }

  calLastPage(){
    //github doesnot allow to search more than 1000 records.
    if (this.totalItems > 1020) {
      this.lastPage = 34;
    }
    else {
      this.lastPage = Math.ceil(this.totalItems / this.itemDisplayCount);
    }
  }

  onFirstPageClicked() {
    this.setPageClicked('Last', this.FirstPage);
    this.currentPage = this.FirstPage;
    this.pageinationActionClicked.emit(this.pageClicked);
  }

  onPreviousPageClicked() {
    this.pageinationActionClicked.emit('Prev');
  }

  onNextPageClicked() {
    this.pageinationActionClicked.emit('Next');
  }

  onLastPageClicked() {
    this.setPageClicked('Last', this.lastPage);
    this.currentPage = this.lastPage;
    this.pageinationActionClicked.emit(this.pageClicked);
  }

  setPageClicked(action:string, pageNumber:number){
    this.pageClicked.action = action;
    this.pageClicked.pageDisplayed = pageNumber;
  }

}
