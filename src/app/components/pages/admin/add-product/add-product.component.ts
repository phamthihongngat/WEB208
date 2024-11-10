import { NgIf } from '@angular/common';
import { ProductService } from './../../../services/product.service';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent {
  productForm: any;
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      imageUrl: ['', Validators.required],
      oldPrice: [''],
      in_stock: [true],
      description: [''],
    });
  }
  onHandleSubmit() {
    if (this.productForm.invalid) return;
    console.log(this.productForm.value);
    this.productService
      .addProduct(this.productForm.value)
      .subscribe((product) => {
        console.log(product);
        this.router.navigateByUrl('/admin/listproduct');
      });
  }
}
