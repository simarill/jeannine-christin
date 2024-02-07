import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ayurveda',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ayurveda.component.html',
  styleUrl: './ayurveda.component.scss'
})
export class AyurvedaComponent {
  doshas = [
    { title: 'VATA', elemente: 'Luft & Äther', prinzip: 'Das Prinzip der Bewegung' },
    { title: 'PITTA', elemente: 'Feuer & Wasser', prinzip: 'Das Prinzip der Umwandlung' },
    { title: 'KAPHA', elemente: 'Wasser & Erde', prinzip: 'Das Prinzip der Stabiltät' }
  ];

}
