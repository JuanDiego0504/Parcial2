import { Component, Input } from '@angular/core';
import { Conferencia } from '../conferencia.model';

@Component({
  standalone:false,
  selector: 'app-conference-detail',
  templateUrl: './conference-detail.component.html',
  styleUrls: ['./conference-detail.component.css'],
})
export class ConferenceDetailComponent {
  @Input() conferencia: Conferencia | null = null;
}
