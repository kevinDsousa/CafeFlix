import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './routes/app.routes';
import { HeaderComponent } from './layout/header/header.component';
import { PopularComponent } from './components/popular/popular.component'

import { bootstrapInstagram, bootstrapFacebook } from  '@ng-icons/bootstrap-icons';
import { heroIdentification, heroUsers } from '@ng-icons/heroicons/outline';
import { NgIconsModule } from '@ng-icons/core';
import { FooterComponent } from './layout/footer/footer.component';
import { BannerComponent } from './components/banner/banner.component';
import { CardMovieComponent } from './components/card-movie/card-movie.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RecoverPasswordComponent } from './pages/recover-password/recover-password.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BannerComponent,
    MenuComponent,
    HeaderComponent,
    PopularComponent,
    FooterComponent,
    CardMovieComponent,

    LoginComponent,
    RegisterComponent,
    RecoverPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({ heroIdentification, heroUsers, bootstrapInstagram, bootstrapFacebook }),
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
