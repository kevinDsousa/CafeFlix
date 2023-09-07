import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { heroUsers } from '@ng-icons/heroicons/outline';
import { heroIdentification } from '@ng-icons/heroicons/outline';
import { NgIconsModule } from '@ng-icons/core';

import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    NgIconsModule.withIcons({ heroIdentification, heroUsers }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
