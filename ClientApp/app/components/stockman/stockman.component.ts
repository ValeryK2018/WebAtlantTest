import { Component, OnInit } from '@angular/core';
import { StockmanService } from '../../services/stockman.service';
import { Stockman } from '../../models/stockman';
import { TableModule } from 'primeng/table';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
    selector: 'stockman',
    templateUrl: './stockman.component.html',
    styleUrls: ['./stockman.component.css'],
    providers: [StockmanService, MessageService]
})
export class StockmanComponent implements OnInit {
   
    error: any;
    msgs: Message[] = [];
    stockman: Stockman = new Stockman();
    stockmans: Stockman[] = [];

    cols: any[]=[];
    display: boolean = false;

    selectedStockman: Stockman;
    selectedStockmans: Stockman[];

    // табличный режим
    tableMode: boolean = true;          

    constructor(private stockmanService: StockmanService, private messageService: MessageService) { }

     // загрузка данных при старте компонента  
    ngOnInit() {
        this.loadStockmans();   
                
        this.cols = [
            { field: 'fio', header: 'ФИО кладовщика', width: '45%' }
        ];
    }

    // получаем данные через сервис
    loadStockmans() {
        this.stockmanService.getStockmans().subscribe(result => this.stockmans = result as Stockman[]);
    }

    // сохранение данных
    save() {
        if (this.stockman.id == null) {
            this.stockmanService.createStockman(this.stockman)
                .subscribe(result => this.stockmans.push(result), error => { this.error = error; console.log(error);  });
        } else {
            this.stockmanService.updateStockman(this.stockman).subscribe(data => this.loadStockmans());
        }
        this.cancel();
    }

    editStockman(p: Stockman) {
        this.stockman = p;
    }

    cancel() {
        this.stockman = new Stockman();
        this.display = false;
    }

    delete(p: number) {
       this.msgs = [];
       this.stockmanService.deleteStockman(p).subscribe(data => this.loadStockmans(), error => { this.error = error; this.showWarn(); });
    }
    
    add() {
        this.cancel();
     }

    showSuccess() {
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Данные успешно удаленны!', detail: '' });
    }

    showWarn() {
        this.msgs = [];
        this.msgs.push({ severity: 'error', summary: 'Ошибка при удалении записи', detail: 'Нельзя удалить запись' });
    }

    showDialog() {
        this.display = true;
    }
       
}