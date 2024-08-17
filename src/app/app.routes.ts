import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Routes,
} from '@angular/router';
import { ListComponent } from './features/list/list.component';
import { CreateComponent } from './features/create/create.component';
import { ProductsService } from './shared/services/products.service';
import { inject } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
  {
    path: 'create-product',
    loadComponent: () =>
      import('./features/create/create.component').then(
        (m) => m.CreateComponent
      ),
  },
  {
    path: 'edit-product/:id',
    resolve: {
      product: (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
        const productsService = inject(ProductsService);
        return productsService.get(route.paramMap.get('id') as string);
      },
    },
    loadComponent: () =>
      import('./features/edit/edit.component').then((m) => m.EditComponent),
  },
];
