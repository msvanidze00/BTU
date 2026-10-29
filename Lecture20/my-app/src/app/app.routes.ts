import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Product } from './product/product';
import { ProductList } from './product-list/product-list';
import { Shop } from './shop/shop';
import { Secret } from './secret/secret';
import { authGuard } from './auth-guard';
import { Dashboard } from './dashboard/dashboard';
import { Stats } from './stats/stats';
import { Reports } from './reports/reports';
import { NotFound } from './not-found/not-found';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  {
    path: 'dashboard',
    component: Dashboard,
    children: [
      { path: 'stats', component: Stats },
      { path: 'reports', component: Reports },
      {
        path: '',
        redirectTo: 'stats',
        pathMatch: 'full',
      },
    ],
  },
  { path: 'product-static', component: Product, data: { category: 'electronics' } },
  {
    path: 'products',
    component: ProductList,
  },
  {
    path: 'products/:id',
    component: Product,
  },
  { path: 'shop', component: Shop },
  {
    path: 'secret',
    component: Secret,
    canActivate: [authGuard],
  },
  {
    path: '**',
    component: NotFound,
  },
];
