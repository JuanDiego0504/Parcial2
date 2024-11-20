import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConferenceListComponent } from './conference-list/conference-list.component';
import { ConferenceDetailComponent } from './conference-detail/conference-detail.component';

@NgModule({
  declarations: [ConferenceListComponent, ConferenceDetailComponent],
  imports: [CommonModule],
  exports: [ConferenceListComponent]
})
export class ConferenciasModule {}
