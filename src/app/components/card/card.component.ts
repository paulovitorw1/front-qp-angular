import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Travel, TravelHour } from 'src/app/Interfaces/Travel.Interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Output() travelId: EventEmitter<Travel> = new EventEmitter()
  @Input() cardData?: Travel
  @Input() isButtonVisible: boolean = true

  getDateTime(date?: TravelHour): Date {
    const dateTimeString = date?.date + ' ' + date?.time;
    return new Date(dateTimeString);
  }

  handleClick(travelData: Travel) {
    this.travelId.emit(travelData);
  }
}