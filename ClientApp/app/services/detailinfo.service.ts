import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Detailinfo } from '../vmodels/detailinfo';
import { Detail } from '../models/detail';

@Injectable()
export class DetailinfoService {

    private url = "/api/detailinfo";
    
    constructor(private http: HttpClient) {
    }

    getDetailinfo() {
        return this.http.get(this.url);
    }

   
}