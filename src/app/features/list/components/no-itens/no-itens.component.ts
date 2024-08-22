import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-no-itens',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './no-itens.component.html',
  styleUrl: './no-itens.component.scss'
})
export class NoItensComponent {

}
