import { gql } from '@apollo/client';

export const createEstateMutation = gql`
  mutation CreateEstate(
    $city: String!
    $street: String!
    $number: String
    $floors: Int
    $apartments: Int
    $contacts: [String]
    $elevators: Int
  ) {
    createEstate(
      estateData: {
        city: $city
        street: $street
        number: $number
        floors: $floors
        apartments: $apartments
        contacts: $contacts
        elevators: $elevators
      }
    ) {
      id
      city
      street
      number
      floors
      apartments
      contacts
      elevators
    }
  }
`;

export const updateEstateMutation = gql`
  mutation UpdateEstate(
    $city: String!
    $street: String!
    $number: String
    $floors: Int
    $apartments: Int
    $contacts: [String]
    $elevators: Int
  ) {
    updateEstate(
      estateData: {
        city: $city
        street: $street
        number: $number
        floors: $floors
        apartments: $apartments
        contacts: $contacts
        elevators: $elevators
      }
    ) {
      id
      city
      street
      number
      floors
      apartments
      contacts
      elevators
    }
  }
`;

export const deleteEstateMutation = gql`
  mutation DeleteEstate($estateId: String!) {
    deleteEstate(estateId: $estateId)
  }
`;
