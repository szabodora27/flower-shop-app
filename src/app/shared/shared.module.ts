import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NumberToPricePipe } from './pipes/number-to-price.pipe';

@NgModule({
  declarations: [
      NumberToPricePipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    NumberToPricePipe
  ]
})
export class SharedModule { }