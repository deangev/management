export interface Address {
  city: string
  street: string
  number: number
  entry?: number
}

export interface Contact {
  name: string
  number: string
}

export interface Estate {
  _id: string
  address: Address
  floors: number
  apartments: number
  contacts: Contact[]
}