import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Stockman } from '../models/stockman';

@Injectable()
export class StockmanService {

    private url = "/api/stockmans";

    constructor(private http: HttpClient) {
    }

    getStockmans() {
        return this.http.get(this.url);
    }

    getStockman(id: number) {
        return this.http.get(this.url + '/' + id);
    }

    createStockman(stockman: Stockman) {
        return this.http.post(this.url, stockman);
    }

    updateStockman(stockman: Stockman) {
        return this.http.put(this.url + '/' + stockman.id, stockman);
    }

    deleteStockman(id: number) {
        return this.http.delete(this.url + '/' + id);
    }
}