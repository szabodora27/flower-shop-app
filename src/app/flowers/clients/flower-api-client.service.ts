import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { FlowerListModel } from '../models/flower-list.model';
import { FlowerDetailsModel } from '../models/flower-details.model';
import { delay } from 'rxjs/operators';
import { listMock, detailsMocks } from './mock/fake-flowers-api-client.service';
import { HttpClient } from '@angular/common/http';
import { FlowerFilterModel } from '../models/flower-filter.model';

const flowerfilter = (filter: FlowerFilterModel) => {
  return (x: FlowerListModel): boolean => {
    return ((filter.name && x.name.toLowerCase().indexOf(filter.name.toLowerCase()) !== -1) || !filter.name)
        && ((filter.color && x.color.toLowerCase().indexOf(filter.color.toLowerCase()) !== -1) || !filter.color);
  };
};

@Injectable()
export class FlowersApiClientService {

  constructor(private http: HttpClient) { }

  getFlowers(filter: FlowerFilterModel): Observable<FlowerListModel[]> {
    const obs = filter
      ? of(listMock.filter(flowerfilter(filter)))
      : of(listMock);
    return obs.pipe(delay(500));
  }

  getFlowerDetails(id: number): Observable<FlowerDetailsModel> {
    return this.http.get<FlowerDetailsModel>(`/flowers/${id}`);
  }
}
