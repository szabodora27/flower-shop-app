import { Component, OnInit } from '@angular/core';
import { FlowersApiClientService } from '../clients/flower-api-client.service';
import { ActivatedRoute } from '@angular/router';
import { FlowerDetailsModel } from '../models/flower-details.model';

@Component({
  templateUrl: './flower-details.page.component.html'
})
export class FlowerDetailsPageComponent implements OnInit {
    flower: FlowerDetailsModel;

    constructor( private route: ActivatedRoute, private flowersApiClient: FlowersApiClientService ) { }

    ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');

    this.flowersApiClient
        .getFlowerDetails(id)
        .subscribe(res => this.flower = res);
    }
}