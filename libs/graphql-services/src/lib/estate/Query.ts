import { gql } from '@apollo/client';

export const EstatesQuery = gql`
  query Estates {
    estatesData {
      estates {
        _id
        address {
          city
          street
          number
          entry
        }
        floors
        apartments
        contacts {
          _id
          name
          phoneNumber
        }
      }
      hits
    }
  }
`;

export const EstateQuery = gql`
  query Estate($estateId: String!) {
    estateData(estateId: $estateId) {
      _id
      address {
        city
        street
        number
        entry
      }
      floors
      apartments
      contacts {
        _id
        phoneNumber
        name
      }
    }
  }
`;
