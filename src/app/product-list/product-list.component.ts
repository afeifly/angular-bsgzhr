import { Component, OnInit } from '@angular/core';

import { products,Product } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  ngOnInit(): void {
  }
  
  products = products;
  
  share() {
    window.alert('The product has been shared!');
  }
  onNotify() {

    window.alert('Will notify you when the product has been on sale!');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/