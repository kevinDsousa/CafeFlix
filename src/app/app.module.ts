import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './home/banner/banner.component';
import { PostMovieComponent } from './post-movie/post-movie.component';
import { MenuComponent } from './header/menu/menu.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './routes/app.routes';
import { HeaderComponent } from './header/header.component';

import { bootstrapInstagram, bootstrapFacebook } from  '@ng-icons/bootstrap-icons';
import { heroIdentification, heroUsers } from '@ng-icons/heroicons/outline';
import { NgIconsModule } from '@ng-icons/core';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BannerComponent,
    PostMovieComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({ heroIdentification, heroUsers, bootstrapInstagram, bootstrapFacebook }),
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
