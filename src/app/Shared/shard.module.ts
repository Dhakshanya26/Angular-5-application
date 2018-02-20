import { NgModule } from '@angular/core';
import { StarComponent } from '../Shared/StarComponent';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
  ],
  declarations: [StarComponent],
  exports:[StarComponent]
})
export class ShardModule { }
