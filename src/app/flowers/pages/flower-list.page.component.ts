import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FlowersApiClientService } from '../clients/flower-api-client.service';
import { FlowerListModel } from '../models/flower-list.model';

@Component({
  templateUrl: './flower-list.page.component.html'
})
export class FlowerListPageComponent implements OnInit {
  flowers: FlowerListModel[] = [];

  constructor(private booksApiClient: FlowersApiClientService) { }

  ngOnInit() {
    this.booksApiClient.getFlowers().subscribe(res => this.flowers = res);
  }

  getFaIconForStock(inStock: boolean) {
    console.log('getFaIconForStock');
    return inStock ? 'fa fa-check' : 'fa fa-times';
  }
}