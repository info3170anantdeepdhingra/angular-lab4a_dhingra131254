import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-shopping-cart-products',
  templateUrl: './shopping-cart-products.component.html',
  styleUrls: ['./shopping-cart-products.component.css'],
})
export class ShoppingCartProductsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  @Input() product: Product | null = null;
}
