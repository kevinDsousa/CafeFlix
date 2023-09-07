import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  public logo = "../../assets/logo-white.png"
  public menu: Array<string> = ["Filmes", "Séries", "Animes", "Documentários"]
  public links: Array<string> = ["Logar", "Registrar-se"]
}
