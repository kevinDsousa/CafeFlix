import { Routes } from '@angular/router'
import { HomeComponent } from '../pages/home/home.component'
import { LoginComponent } from '../pages/login/login.component'
import { RegisterComponent } from '../pages/register/register.component'
import { RecoverPasswordComponent } from '../pages/recover-password/recover-password.component'
import { CardDetailComponent } from '../pages/card-detail/card-detail.component'

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'filmes', component: HomeComponent},
  {path: 'series', component: HomeComponent},
  {path: 'animes', component: HomeComponent},
  {path: 'documentarios', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'recover-password', component: RecoverPasswordComponent},
  {path: 'movie', component: CardDetailComponent},
]
