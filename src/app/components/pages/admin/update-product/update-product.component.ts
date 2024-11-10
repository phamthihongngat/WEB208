import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './update-product.component.html',
  styleUrl: './update-product.component.css',
})
export class UpdateProductComponent {
  productForm: any;
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private activeRoute: ActivatedRoute
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
  ngOnInit() {
    const id = this.activeRoute.snapshot.params['id'];
    console.log(id);
    this.productService.getProductsById(id).subscribe((product) => {
      this.productForm.patchValue(product);
    });
  }
  onHandleSubmit() {
    if (this.productForm.invalid) return;
    const id = +this.activeRoute.snapshot.params['id'];
    console.log(this.productForm.value);

    this.productService
      .updateProduct({ ...this.productForm.value, id })
      .subscribe((product) => {
        console.log(product);
        this.router.navigateByUrl('/admin/listproduct');
      });
  }
}
