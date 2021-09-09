import { NgModule } from '@angular/core';

import { SharedModule } from 'app/shared/shared.module';
import { ViewPonudeComponent } from './list/view-ponude.component';
import { ViewPonudeDetailComponent } from './detail/view-ponude-detail.component';
import { ViewPonudeRoutingModule } from './route/view-ponude-routing.module';
import {MatTableModule} from "@angular/material/table";
import {MatTableExporterModule} from "mat-table-exporter";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";

@NgModule({
    imports: [SharedModule, ViewPonudeRoutingModule, MatTableModule, MatTableExporterModule, MatSortModule, MatPaginatorModule],
    declarations: [ViewPonudeComponent, ViewPonudeDetailComponent],
    exports: [
        ViewPonudeComponent
    ]
})
export class OtvoreniViewPonudeModule {}
