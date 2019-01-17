import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FlowerListModel } from '../models/flower-list.model';
import { FlowerDetailsModel } from '../models/flower-details.model';

const listMock: FlowerListModel[] = [
  { id: 1, name: 'rose', color: 'yellow', count: 3, price: 1  },
  { id: 2, name: 'orchid', color: 'white', count: 4, price: 2 }
];

const detailsMocks: FlowerDetailsModel[] =
  listMock.map((x: FlowerListModel): FlowerDetailsModel => ({
    ...x,
    description: 'Symbolizing gentility and elegance, these dozen pink roses, punctuated with huckleberry and gypsophila, celebrate beauty and innocence. Send them to someone young at heart.'
  }));

@Injectable()
export class FlowersApiClientService {

  constructor() { }

  getFlowers(): Observable<FlowerListModel[]> {
    return of(listMock);
  }

  getFlowerDetails(id: number): Observable<FlowerDetailsModel> {
    return of(detailsMocks.find(x => x.id === id));
  }
}