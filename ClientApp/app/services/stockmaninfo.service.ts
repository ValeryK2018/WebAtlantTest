import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stockmaninfo } from '../vmodels/stockmaninfo';

@Injectable()
export class StockmaninfoService {

    private url = "/api/stockmaninfo";

    constructor(private http: HttpClient) {
    }

    getStockmaninfo() {
        return this.http.get(this.url);
    }
}