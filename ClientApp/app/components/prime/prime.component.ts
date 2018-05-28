import { Component } from '@angular/core';
import { ButtonModule, GrowlModule, Message} from 'primeng/primeng';


@Component({

    selector: 'counter',
    templateUrl: './prime.component.html'
        
})

export class PrimeComponent {

    
    public currentCount = 0;
    clicks: number = 0;
    text: string = "";
    public msgs: Message[] = [];

    public incrementCounter() {
        this.currentCount++;
        this.msgs.push(

            {
                severity: 'info',
                summary: 'Info Message',
                detail: this.currentCount.toString()
            });
    }


    count() {
        this.clicks++;
    }
}