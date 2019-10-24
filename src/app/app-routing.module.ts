import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UserGaurdsGuard } from './gaurds/user-gaurds.guard';
const routes: Routes = [
  { path: '', redirectTo: 'suggested-list', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'suggested-list', loadChildren: './pages/suggested-list/suggested-list.module#SuggestedListPageModule' },
  { path: 'map', loadChildren: './pages/map/map.module#MapPageModule' },
  { path: 'reset', loadChildren: './pages/reset/reset.module#ResetPageModule' },
  { path: 'see-more', loadChildren: './pages/see-more/see-more.module#SeeMorePageModule',canActivate:[UserGaurdsGuard] },
  { path: 'posts', loadChildren: './pages/posts/posts.module#PostsPageModule' },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  { path: 'services', loadChildren: './pages/services/services.module#ServicesPageModule' },
  { path: 'comments', loadChildren: './pages/comments/comments.module#CommentsPageModule' },
  { path: 'map2', loadChildren: './pages/map2/map2.module#Map2PageModule' },
  { path: 'internetCafe', loadChildren: './pages/add-internet-cafe/add-internet-cafe.module#AddInternetCafePageModule',canActivate:[UserGaurdsGuard]  },
  { path: 'service-form', loadChildren: './pages/service-form/service-form.module#ServiceFormPageModule' },
  { path: 'service-list', loadChildren: './pages/service-list/service-list.module#ServiceListPageModule' },
  { path: 'display', loadChildren: './pages/display/display.module#DisplayPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
