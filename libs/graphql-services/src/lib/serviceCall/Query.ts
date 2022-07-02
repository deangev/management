import { gql } from '@apollo/client';

export const ServiceCallsQuery = gql`
  query ServiceCalls {
    serviceCallsData {
      serviceCalls {
        _id
        estateID
        apartment
        description
        destination
        priority
        assignee
        note
        type
      }
      hits
    }
  }
`;