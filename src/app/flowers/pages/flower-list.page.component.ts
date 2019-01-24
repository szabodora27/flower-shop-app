import { Component, OnInit, OnDestroy, AfterViewInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { FlowersApiClientService } from '../clients/flower-api-client.service';
import { FlowerListModel } from '../models/flower-list.model';
import { Subject, fromEvent, forkJoin, merge as c_merge } from 'rxjs';
import { debounceTime, takeUntil, distinctUntilChanged, filter, switchMap, map, catchError, tap, merge } from 'rxjs/operators';
import { FlowerFilterModel } from '../models/flower-filter.model';

@Component({
  templateUrl: './flower-list.page.component.html'
})
export class FlowerListPageComponent implements OnInit {
  
  destroy$ = new Subject();
  debouncer$ = new Subject<string>();

  error: string | null = null;
  isLoading = true;
  filter: FlowerFilterModel = {};
  flowers: FlowerListModel[] = [];

  @ViewChildren('filterField') filterFields: QueryList<ElementRef>;

  constructor(private flowersApiClient: FlowersApiClientService) { }

  // ngAfterViewInit(): void {

  //   const fields = this.filterFields.map(f => f.nativeElement);

  //   fromEvent(fields, 'input')
  //     .pipe(takeUntil(this.destroy$))
  //     .subscribe(x => console.log('i'));
  // }

  ngOnInit() {
    this.loadBooks();
    this.debouncer$
      .pipe(
        filter((x: string) => (x && x.length > 1) || !x),
        // tslint:disable-next-line:triple-equals
        distinctUntilChanged((x, y) => x == y),
        debounceTime(500),
        takeUntil(this.destroy$))
      .subscribe(() => this.loadBooks());
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  loadBooks() {
    this.isLoading = true;
    this.flowersApiClient.getFlowers(this.filter).subscribe(
      res => {
        this.flowers = res;
      }, error => {
        this.error = error;
      }, () => {
        this.isLoading = false;
      });
  }
}