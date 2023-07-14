export interface Seats {
    seat: number,
    position: {
        x: number,
        y: number,
        z: number
    },
    occupied: boolean,
    type: string
}