import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ShardModule } from './shard/shard.module';


@NgModule({
  declarations: [
    AppComponent,
   
  
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ShardModule,
    ReactiveFormsModule
   
  
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
