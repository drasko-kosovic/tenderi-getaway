import { NgModule } from '@angular/core';

import { SharedModule } from 'app/shared/shared.module';
import { ViewPonudeComponent } from './list/view-ponude.component';

import { ViewPonudeRoutingModule } from './route/view-ponude-routing.module';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatTableExporterModule} from "mat-table-exporter";
import {MatSortModule} from "@angular/material/sort";

@NgModule({
  imports: [SharedModule, ViewPonudeRoutingModule, MatPaginatorModule, MatTableModule, MatTableExporterModule, MatSortModule],
  declarations: [ViewPonudeComponent],
  exports: [
    ViewPonudeComponent
  ]
})
export class OtvoreniViewPonudeModule {}
