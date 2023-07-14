export interface Travel {
    id: string;
    company: TravelCompany
    from: TravelLocation
    to: TravelLocation
    availableSeats: number;
    withBPE: boolean;
    departure: TravelHour
    arrival: TravelHour
    travelDuration: number;
    seatClass: string;
    price: PriceTravel;
    insurance: number;
    allowCanceling: boolean;
    travelCancellationLimitDate: string;
}

export interface TravelLocation {
    id: string;
    name: string;
}
export interface PriceTravel {
    seatPrice: number;
    taxPrice: number;
    price: number;
}

export interface TravelHour {
    date: string;
    time: string;
}

export interface TravelCompany {
    id: string;
    name: string;
}