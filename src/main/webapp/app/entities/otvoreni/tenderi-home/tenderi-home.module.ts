import { NgModule } from '@angular/core';

import { SharedModule } from 'app/shared/shared.module';
import { TenderiHomeComponent } from './list/tenderi-home.component';
import { TenderiHomeRoutingModule } from './route/tenderi-home-routing.module';
import { MatTabsModule } from '@angular/material/tabs';
import {JhMaterialModule} from "app/shared/jh-material.module";
import {OtvoreniSpecifikacijeModule} from "app/entities/otvoreni/specifikacije/specifikacije.module";
import {OtvoreniViewPonudeModule} from "app/entities/otvoreni/view-ponude/view-ponude.module";

@NgModule({
    imports: [
        SharedModule,
        TenderiHomeRoutingModule,
        MatTabsModule,
        JhMaterialModule,
        OtvoreniSpecifikacijeModule,
        OtvoreniViewPonudeModule,

    ],
  declarations: [TenderiHomeComponent],
})
export class TenderiHomeModule {}
