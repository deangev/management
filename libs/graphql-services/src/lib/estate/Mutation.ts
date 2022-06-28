import { gql } from '@apollo/client';

export const createEstateMutation = gql`
  mutation CreateEstate(
    $city: String!
    $street: String!
    $number: Int!
    $entry: Int
    $floors: Int!
    $apartments: Int!
  ) {
    createEstate(
      estateData: {
        city: $city
        street: $street
        number: $number
        entry: $entry
        floors: $floors
        apartments: $apartments
      }
    ) {
      _id
      address {
        city
        street
        number
        entry
      }
      floors
      apartments
    }
  }
`;

export const updateEstateMutation = gql`
  mutation UpdateEstate(
    $_id: String!
    $city: String
    $street: String
    $number: Int
    $entry: Int
    $floors: Int
    $apartments: Int
  ) {
    updateEstate(
      estateData: {
        _id: $_id
        city: $city
        street: $street
        number: $number
        entry: $entry
        floors: $floors
        apartments: $apartments
      }
    ) {
      _id
      address {
        city
        street
        number
        entry
      }
      floors
      apartments
    }
  }
`;

export const deleteEstateMutation = gql`
  mutation DeleteEstate($estateId: String!) {
    deleteEstate(estateId: $estateId)
  }
`;
