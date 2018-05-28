import { Component, OnInit } from '@angular/core';
import { DetailService } from '../../services/detail.service';
import { Detail } from '../../models/detail';
import { Stockman } from '../../models/stockman';
import { StockmanService } from '../../services/stockman.service';
import { Detailinfo } from '../../vmodels/detailinfo';
import { DetailinfoService } from '../../services/detailinfo.service';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
    selector: 'detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css'],
    providers: [DetailService, StockmanService, DetailinfoService, MessageService]
})
export class DetailComponent implements OnInit {
       
    error: any;
    msgs: Message[] = [];
    selectedItems: string[] = [];
    checked: boolean = false;
    first: number = 0;
    detail: Detail = new Detail();
    detailinfo: Detailinfo = new Detailinfo();
    details: Detail[] = [];
    detailsinfo: Detailinfo[] = [];
    stockmans: Stockman[] = [];
    
    cols: any[]=[];
    display: boolean = false;

    selectedDetailinfo: Detailinfo;
    selectedDetailsinfo: Detailinfo[];

    tableMode: boolean = true;          

    constructor(private detailService: DetailService, private stockmanService: StockmanService, private detailinfoService: DetailinfoService, private messageService: MessageService) { }

    // загрузка данных при старте компонента  
    ngOnInit() {
        this.loadDetails();
        this.checked = true;    

        this.cols = [
            { field: 'nomenclatureCode', header: 'Ном.код', width: '9%' },
            { field: 'name', header: 'Наименование', width: '45%' },
            { field: 'quantity', header: 'Количество', width: '12%' },
            { field: 'nameStockman', header: 'Кладовщик', width: '12%' },
            { field: 'createDate', header: 'Дата создания', width: '11%' },
            { field: 'deleteDate', header: 'Дата удаления', width: '11%' }
        ];
     }

    // получаем данные через сервис
    loadDetails() {

        this.detailinfoService.getDetailinfo().subscribe(result => this.detailsinfo = (result as Detailinfo[]).filter(function (item, i, arr)
        {
            return item.deleteDate == null;
        })
        );
        this.stockmanService.getStockmans().subscribe(result => this.stockmans = result as Stockman[]);
        this.reset();
    }

    // сохранение данных
    save() {
        if (this.detail.id == null) {
            this.detailService.createDetail(this.detail).subscribe(data => this.loadDetails(), error => { this.error = error.message; console.log(error);});
        }
        else {
            this.detailService.updateDetail(this.detail).subscribe(data => this.loadDetails());
        }
        this.cancel();
    }
   
    editDetail(p: Detail) {
        this.detail = p;
    }

    cancel() {
        this.detail = new Detail();
        this.detailinfo = new Detailinfo();
        this.display = false;
    }

    delete(p: number) {
        this.detailinfo.deleteDate = "";
        this.detailService.deleteDetail(p).subscribe(data => this.loadDetails(), error => { this.error = error; this.showWarn(); });
        this.reset();

      //  this.checked = !this.checked;
    }

    add() {
        this.cancel();
        this.tableMode = false;
        this.reset();
    }
      
    updateDel() {
        if (!this.checked) {
            this.detailinfoService.getDetailinfo().subscribe(result => this.detailsinfo = result as Detailinfo[]);
            this.reset();
        }
        else {
            this.loadDetails();
            this.reset();
        }
    }

    reset() {
        this.first = 0;
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