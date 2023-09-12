import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public logo = "../../assets/logo-white.png"

  isFixed: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any): void {
    if (window.pageYOffset > 100) {
      this.isFixed = true;
    } else {
      this.isFixed = false;
    }
  }
}
