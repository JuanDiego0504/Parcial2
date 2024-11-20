import { Component, OnInit } from '@angular/core';
import { ConferenciasService } from '../conferencias.service';
import { Conferencia } from '../conferencia.model';

@Component({
  standalone:false,
  selector: 'app-conference-list',
  templateUrl: './conference-list.component.html',
  styleUrls: ['./conference-list.component.css'],
})
export class ConferenceListComponent implements OnInit {
  conferencias: Conferencia[] = [];
  upcomingConferencesCount: number = 0;
  selectedConferencia: Conferencia | null = null;

  constructor(private conferenciasService: ConferenciasService) {}

  ngOnInit(): void {
    this.conferenciasService.getConferencias().subscribe((data) => {
      this.conferencias = data;
      this.calculateUpcomingConferences();
    });
  }

  calculateUpcomingConferences(): void {
    const currentDate = new Date();
    this.upcomingConferencesCount = this.conferencias.filter((conferencia) => {
      const startDate = new Date(conferencia.starts);
      return startDate > currentDate;
    }).length;
  }

  onSelectConferencia(conferencia: Conferencia): void {
    this.selectedConferencia = conferencia;
  }
}
