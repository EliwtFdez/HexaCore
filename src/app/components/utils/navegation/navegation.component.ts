import { Component } from '@angular/core';
import { HomeComponent } from '../../home/home.component';

@Component({
  selector: 'app-navegation',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './navegation.component.html',
  styleUrl: './navegation.component.css'
})
export class NavegationComponent {

}
