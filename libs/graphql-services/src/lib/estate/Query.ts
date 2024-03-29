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

export const EstatesAddressQuery = gql`
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
      }
    }
  }
`

export const EstateQuery = gql`
  query Estate($estateID: String!) {
    estateData(estateID: $estateID) {
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
