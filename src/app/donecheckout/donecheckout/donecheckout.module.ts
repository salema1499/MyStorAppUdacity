import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DonecheckoutComponent } from '../components/donecheckout/donecheckout.component';



@NgModule({
  declarations: [
    DonecheckoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
   
    FormsModule
  ]
})
export class DonecheckoutModule { }
