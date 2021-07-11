import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {ScrollingModule} from '@angular/cdk/scrolling';

const exports = [
  CommonModule,
  MatButtonModule,
  MatListModule,
  MatIconModule,
  MatCardModule,
  ScrollingModule,
];
@NgModule({
  declarations: [],
  imports: exports,
  exports,
})
export class MaterialProxyModule { }
