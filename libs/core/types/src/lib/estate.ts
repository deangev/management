export interface Address {
  city: string
  street: string
  number: number
  entry?: number
}
export interface Estate {
  _id: string
  address: Address
  floors: number
  apartments: number
  contacts: string[]
  elevators: string[]
}
