import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular';
  buttonLabel: string = "CARRINHO";
  buttonSecond: string = "ADICIONAR AOS FAVOITOS";
}
