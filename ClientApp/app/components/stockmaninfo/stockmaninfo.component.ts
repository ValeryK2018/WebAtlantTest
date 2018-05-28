import { Component, OnInit } from '@angular/core';
import { StockmaninfoService } from '../../services/stockmaninfo.service';
import { Stockmaninfo } from '../../vmodels/stockmaninfo';
import { StockmanService } from '../../services/stockman.service';

@Component({
    selector: 'stockmaninfo',
    templateUrl: './stockmaninfo.component.html',
    styleUrls: ['./stockmaninfo.component.css'],
    providers: [StockmaninfoService]
})

export class StockmaninfoComponent implements OnInit {

    stockmaninfo: Stockmaninfo = new Stockmaninfo();
    stockmaninfos: Stockmaninfo[] = [];
    cols: any[] = [];
    error: any;

    selectedStockmaninfo: Stockmaninfo;
    selectedStockmansinfo: Stockmaninfo[];
    
    constructor(private stockmaninfoService: StockmaninfoService) { }

    // загрузка данных при старте компонента  
    ngOnInit() {
        this.loadStockmaninfo();

        this.cols = [
            { field: 'fio', header: 'ФИО кладовщика', width: '75%' },
            { field: 'summkolDetail', header: 'Количество деталей', width: '25%' },
        ];
    }

    // получаем данные через сервис
    loadStockmaninfo() {
        this.stockmaninfoService.getStockmaninfo().subscribe(result => this.stockmaninfos = result as Stockmaninfo[], error => { this.error = error; console.log(error); });
    }    

}