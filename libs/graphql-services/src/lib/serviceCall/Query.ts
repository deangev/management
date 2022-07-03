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

export const ServiceCallQuery = gql`
  query ServiceCall($serviceCallID: String!) {
    serviceCallData(serviceCallID: $serviceCallID) {
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
  }
`;
