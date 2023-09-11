import { Routes } from '@angular/router'
import { HomeComponent } from '../home/home.component'

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'filmes', component: HomeComponent},
  {path: 'series', component: HomeComponent},
  {path: 'animes', component: HomeComponent},
  {path: 'documentarios', component: HomeComponent},
]
