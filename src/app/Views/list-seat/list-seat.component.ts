import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { SearchSeats } from 'src/app/Interfaces/SearchSeats.Interfaces';
import { Seats } from 'src/app/Interfaces/Seats.Interface';
import { Travel } from 'src/app/Interfaces/Travel.Interface';
import { ListSeatsService } from 'src/app/services/list-seats.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
	selector: 'app-list-seat',
	templateUrl: './list-seat.component.html',
	styleUrls: ['./list-seat.component.scss'],
	providers: [MessageService]
})
export class ListSeatComponent implements OnInit {
	id: string = '';
	travelInformation?: Travel
	listSeats: Seats[] = []

	constructor(private route: ActivatedRoute,
		private messageService: MessageService,
		private localStorageService: LocalStorageService,
		private listSeatsService: ListSeatsService) { }

	ngOnInit() {
		this.id = this.route.snapshot.paramMap.get('id') as string;
		this.travelInformation = this.localStorageService.getLocalStorage('travelInformation')
		this.getSeats()
	}

	getSeats() {
		if (!this.id) {
			return;
		}

		const travelId: SearchSeats = {
			travelId: this.id
		}

		this.listSeatsService.fetchSeats(travelId).subscribe(
			(response) => {
				this.listSeats = response.data;
			},
			(error) => {
				this.messageService.add({ severity: 'error', summary: 'Erro ao efetuar ação.', detail: 'Erro inesperado. Tente novamente mais tarde.' });
			});
	}
}
