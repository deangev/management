import { AddressType, ContactType } from "../../"

export interface EstateType {
    _id: string
    address: AddressType
    floors: number
    apartments: number
    contacts: ContactType[]
  }