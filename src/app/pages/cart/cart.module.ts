import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartComponent } from './cart.component';
import { CartRoutingModule } from './cart-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDivider } from '@angular/material/divider';


@NgModule({
    declarations: [
      CartComponent
    ],
    imports: [
      CommonModule,
      CartRoutingModule,
      MatButtonModule,
      MatCardModule,
      MatIconModule,
      MatDivider,
    ]
  })
  export class CartModule { }