import { DashboardComponent } from './components/pages/admin/dashboard/dashboard.component';
import { Routes } from '@angular/router';
import { LayoutWebsiteComponent } from './components/layouts/layout-website/layout-website.component';
import { HomeComponent } from './components/pages/home/home.component';
import { DetailComponent } from './components/pages/detail/detail.component';
import { AddProductComponent } from './components/pages/admin/add-product/add-product.component';
import { UpdateProductComponent } from './components/pages/admin/update-product/update-product.component';
import { ListProductComponent } from './components/pages/admin/list-product/list-product.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { LayoutAdminComponent } from './components/layouts/layout-admin/layout-admin.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutWebsiteComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'detail', component: DetailComponent },
    ],
  },
  {
    path: 'admin',
    component: LayoutAdminComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'listproduct', component: ListProductComponent },
      { path: 'addproduct', component: AddProductComponent },
      { path: 'updateproduct/:id', component: UpdateProductComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },
];
