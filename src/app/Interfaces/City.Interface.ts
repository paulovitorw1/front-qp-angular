export interface City {
    id: string,
    name: string
    substops: Substops[] | undefined
    type: string
    url: string
}

export interface Substops {
    id: string,
    name: string,
    type: string,
    url: string
}
