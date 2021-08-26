import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { DashComponent } from './dash/dash.component';


import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ChartsModule } from 'ng2-charts';
import { PriseRendezVousComponent } from './prise-rendez-vous/prise-rendez-vous.component';
import { DoctorComponent } from './doctor/doctor.component';


@NgModule({
  declarations: [DashboardComponent, HomeComponent, DashComponent, PriseRendezVousComponent, DoctorComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,ReactiveFormsModule,Ng2SmartTableModule,ChartsModule
  ]
})
export class DashboardModule { }
