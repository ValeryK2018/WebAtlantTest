import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { StockmanComponent } from './components/stockman/stockman.component';
import { StockmaninfoComponent } from './components/stockmaninfo/stockmaninfo.component';
import { DetailComponent } from './components/detail/detail.component';

import { ButtonModule, GrowlModule, InputTextarea } from 'primeng/primeng';
import { CalendarModule } from 'primeng/calendar';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { EditorModule } from 'primeng/editor';
import { ListboxModule } from 'primeng/listbox';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { InputSwitchModule } from 'primeng/inputswitch';
import { PasswordModule } from 'primeng/password';
import { SpinnerModule } from 'primeng/spinner';
import { CheckboxModule } from 'primeng/checkbox';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { DialogModule } from 'primeng/dialog';



@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        StockmanComponent,
        DetailComponent,
        StockmaninfoComponent
       
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'stockman', component: StockmanComponent },
            { path: 'stockmaninfo', component: StockmaninfoComponent },
            { path: 'detail', component: DetailComponent },
            { path: '**', redirectTo: 'home' }
        ]),
        CalendarModule,
        ButtonModule,
        GrowlModule,
        TableModule,
        SpinnerModule,
        DialogModule,
        InputTextModule,
        EditorModule,
        ListboxModule,
        InputTextareaModule,
        InputSwitchModule,
        PasswordModule,
        CheckboxModule,
        ToggleButtonModule        
    ]
    
})
export class AppModuleShared {
}
