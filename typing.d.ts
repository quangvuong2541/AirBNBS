export interface Genre  {
    id: number
    name: string
}
export interface Hotel {
    title: string
    images: string
    name : string
    // data : []
}
export interface HotelRoom {
    id: string
    maPhong: number
    type : string
    price:number
    discount : number
    hotel :string,
    images : Array
    // data : []
}
export interface Element {
    type :
    | 'Bloopers'
}