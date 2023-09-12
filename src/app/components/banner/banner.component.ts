import { Component } from '@angular/core';
import { urlBaseImg } from 'src/app/utils/consts/baseUrl';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
})
export class BannerComponent {
  public urlBaseImage: string = urlBaseImg;


}
