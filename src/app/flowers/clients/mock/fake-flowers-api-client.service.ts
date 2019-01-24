import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { FlowerListModel } from '../../models/flower-list.model';
import { FlowerDetailsModel } from '../../models/flower-details.model';

export const listMock: FlowerListModel[] = [
    { id: 1, name: 'rose', color: 'yellow', count: 3, price: 1  },
    { id: 2, name: 'orchid', color: 'white', count: 4, price: 2 }
  ];

export const detailsMocks: FlowerDetailsModel[] =
  listMock.map((x: FlowerListModel): FlowerDetailsModel => ({
    ...x,
    description: 'Symbolizing gentility and elegance, these dozen pink roses, punctuated with huckleberry and gypsophila, celebrate beauty and innocence. Send them to someone young at heart.'
  }));


@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        return of(null).pipe(
            mergeMap(() => {
                if (request.url.match(/\/flowers\/\d+$/) && request.method === 'GET') {
                    const urlParts = request.url.split('/');
                    const id = parseInt(urlParts[urlParts.length - 1], 10);
                    const flower = detailsMocks.find(x => x.id === id);
                    if (flower) {
                        return of(new HttpResponse({
                            status: 200,
                            body: flower
                        }));
                    } else {
                        return throwError({ error: { message: 'Not found' } });
                    }
                }
                return next.handle(request);
            })
        )
        .pipe(materialize())
        .pipe(delay(500))
        .pipe(dematerialize());

    }
}
