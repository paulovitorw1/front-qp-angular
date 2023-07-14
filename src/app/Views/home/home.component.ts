import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/Interfaces/City.Interface';
import { SearchTravel } from 'src/app/Interfaces/SearchTravel.Interface';
import { Travel } from 'src/app/Interfaces/Travel.Interface';
import { ListPassageService } from 'src/app/services/list-passage.service';
import { formatDate } from '@angular/common';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [MessageService]
})

export class HomeComponent implements OnInit {
  currentDate: Date = new Date()
  allCities?: City[]
  suggestionsCity: any = []
  selectedDepartureItem?: City
  selectedArrivalItem?: City
  travelDate: Date = new Date()

  listPassages: Travel[] = []

  constructor(private listPassageService: ListPassageService,
    private messageService: MessageService,
    private router: Router,
    private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.getCities()
  }

  search(event: any): void {
    const searchTerm = event.query.toLowerCase()
    this.suggestionsCity = []
    this.suggestionsCity = this.allCities?.filter((city) =>
      city.name.toLowerCase().includes(searchTerm)
    );
  }

  getCities(): void {
    this.listPassageService.fetchCities().subscribe((response) => this.allCities = response.data)
  }

  fetchPassages(): void {
    if (!this.selectedArrivalItem?.id || !this.selectedDepartureItem?.id || !this.travelDate) {
      return;
    }

    const data: SearchTravel = {
      from: this.selectedDepartureItem?.id,
      nameDepartureCity: this.selectedDepartureItem.name,
      to: this.selectedArrivalItem?.id,
      nameArrivalCity: this.selectedArrivalItem.name,
      travelDate: formatDate(this.travelDate, 'yyyy-MM-dd', 'en-US')
    }

    this.listPassages = [];
    this.listPassageService.fetchPassage(data).subscribe(
      (response) => {
        this.listPassages = response.data;
      },
      (error) => {
        if (error.status == 422) {
          this.messageService.add({ severity: 'error', summary: 'Erro ao efetuar ação.', detail: error.error.response.message });
          return
        }
      });
  }

  redirectListSeat(travelData: Travel) {
    this.localStorageService.setLocalStorage('travelInformation', travelData)
    this.router.navigate(['poltronas/', travelData.id]);
  }
}
