import { Component } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { IProduct } from '../../../interface/product';
import { RouterLink } from '@angular/router';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [RouterLink, NgForOf],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css',
})
export class ListProductComponent {
  products!: IProduct[];
  constructor(private productService: ProductService) {}
  ngOnInit() {
    this.productService
      .getProducts()
      .subscribe((products) => (this.products = products));
  }
  removeItem(id: number) {
    const confirm = window.confirm('Ban co muon xoa khong?');
    if (confirm) {
      this.productService.deleteProduct(id).subscribe(() => {
        alert('Xoa thanh cong');
        this.products = this.products.filter((product) => product.id !== id);
      });
    }
  }
}
