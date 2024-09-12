import { Component } from '@angular/core';
import { NavegationComponent } from "../utils/navegation/navegation.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavegationComponent,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  //values 4 into a game



  constructor() {}

}
