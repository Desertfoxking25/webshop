import { Component, OnInit } from '@angular/core';
import { Product } from '../../shared/models/Product';
import { ProductService } from '../../shared/services/product.service';

 
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit{
  productId: string | null = null;
  product: Product | undefined;
  
  constructor(private productService: ProductService){ }

  ngOnInit(): void {

  }
}
