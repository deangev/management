import { gql } from '@apollo/client';

export const EstatesQuery = gql`
  query Estates {
    estatesData {
      estates {
        id
        city
        street
        number
        floors
        apartments
        contacts
        elevators
      }
      estatesCount
    }
  }
`;

export const EstateQuery = gql`
  query Estate($estateId: String!) {
    estateData(estateId: $estateId) {
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
