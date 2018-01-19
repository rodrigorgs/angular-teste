import { NumeroService } from './numero.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  numeros = [];

  constructor(private numeroService: NumeroService) {
  }

  atualizaNumeros(): void {
    this.numeros = this.numeroService.getNumeros();
  }
}
