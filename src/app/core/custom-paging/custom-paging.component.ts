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

  pageClicked: iPageClicked;
  currentPage: number = 1;
  lastPage: number;
  FirstPage: number = 1;
  itemDisplayCount: number = 30;
  @Input() totalItems: number;
  @Output() pageinationActionClicked = new EventEmitter<any>();

  constructor() {
    this.pageClicked = {
      action: 'current',
      pageDisplayed: 1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
    };
  }

  ngOnInit() {
    this.calLastPage();
  }

  ngOnChanges() {
    this.calLastPage();
  }

  calLastPage() {
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
    if (!(this.currentPage - 1 < this.FirstPage)) {
      this.currentPage = this.currentPage - 1;
      this.setPageClicked('Prev10', this.currentPage);
      this.pageinationActionClicked.emit(this.pageClicked);
    }
  }

  onNextPageClicked() {
    if (!(this.currentPage + 1 > this.lastPage)) {
      this.currentPage = this.currentPage + 1;
      this.setPageClicked('Next', this.currentPage);
      this.pageinationActionClicked.emit(this.pageClicked);
    }
  }

  onLastPageClicked() {
    this.setPageClicked('Last', this.lastPage);
    this.currentPage = this.lastPage;
    this.pageinationActionClicked.emit(this.pageClicked);
  }

  onPrev10PageClicked() {
    if (!(this.currentPage - 10 < this.FirstPage)) {
      this.currentPage = this.currentPage - 10;
      this.setPageClicked('Prev10', this.currentPage);
      this.pageinationActionClicked.emit(this.pageClicked);
    }
  }

  onNext10PageClicked(){
    if (!(this.currentPage + 10 > this.lastPage)) {
      this.currentPage = this.currentPage + 10;
      this.setPageClicked('Next', this.currentPage);
      this.pageinationActionClicked.emit(this.pageClicked);
    }
  }

  setPageClicked(action: string, pageNumber: number) {
    this.pageClicked.action = action;
    this.pageClicked.pageDisplayed = pageNumber;
  }

}
