import { gql } from '@apollo/client';

export const createServiceCallMutation = gql`
  mutation CreateServiceCall(
    $estateId: String!
    $type: String
    $description: String!
    $destination: String!
  ) {
    createServiceCall(
      serviceCallData: {
        estateId: $estateId
        type: $type
        description: $description
        destination: $destination
      }
    ) {
      _id
      estateId
      apartment
      description
      destination
      priority
      assignee
      note
      type
      images
      updatedAt
      createdAt
    }
  }
`;