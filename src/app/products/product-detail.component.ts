import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ResolveEnd } from '@angular/router';

import { Product, ProductResolved } from './product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  product: Product;
  errorMessage: string;

  constructor(private route: ActivatedRoute) {}

  onProductRetrieved(product: Product): void {
    this.product = product;

    if (this.product) {
      this.pageTitle = `Product Detail: ${this.product.productName}`;
    } else {
      this.pageTitle = 'No product found';
    }
  }

  ngOnInit() {
    // const id = this.route.snapshot.paramMap.get('id');
    // this.getProduct(+id);

    const resolvedData: ProductResolved = this.route.snapshot.data[
      'resolvedData'
    ];
    this.errorMessage = resolvedData.error;
    this.onProductRetrieved(resolvedData.product);
  }
}
