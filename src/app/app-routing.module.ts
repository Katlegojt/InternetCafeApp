import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import * as firebase from "firebase"
const routes: Routes = [
  { path: '', redirectTo: 'suggested-list', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'suggested-list', loadChildren: './pages/suggested-list/suggested-list.module#SuggestedListPageModule' },
  { path: 'map', loadChildren: './pages/map/map.module#MapPageModule' },  { path: 'reset', loadChildren: './pages/reset/reset.module#ResetPageModule' },
  { path: 'see-more', loadChildren: './pages/see-more/see-more.module#SeeMorePageModule' },
  { path: 'posts', loadChildren: './pages/posts/posts.module#PostsPageModule' },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  { path: 'services', loadChildren: './pages/services/services.module#ServicesPageModule' },
  { path: 'comments', loadChildren: './pages/comments/comments.module#CommentsPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
