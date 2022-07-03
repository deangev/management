import { gql } from '@apollo/client';

export const createServiceCallMutation = gql`
  mutation CreateServiceCall(
    $estateID: String!
    $apartment: Int
    $description: String!
    $destination: String!
    $priority: String
    $assignee: String
    $note: String
    $type: String
    $images: [String!]
  ) {
    createServiceCall(
      serviceCallData: {
        estateID: $estateID
        apartment: $apartment
        description: $description
        destination: $destination
        priority: $priority
        assignee: $assignee
        note: $note
        type: $type
        images: $images
      }
    ) {
      _id
      estateID
      apartment
      description
      destination
      priority
      assignee
      note
      type
      images
    }
  }
`;

export const updateServiceCallMutation = gql`
  mutation UpdateServiceCall(
    $_id: String!
    $estateID: String
    $apartment: Int
    $assignee: String
    $description: String
    $destination: String
    $images: [String!]
    $note: String
    $priority: String
    $type: String
  ) {
    createServiceCall(
      serviceCallData: {
        _id: $_id
        estateID: $estateID
        apartment: $apartment
        assignee: $assignee
        description: $description
        destination: $destination
        images: $images
        note: $note
        priority: $priority
        type: $type
      }
    ) {
      _id
      estateID
      apartment
      description
      destination
      priority
      assignee
      note
      type
      images
    }
  }
`;
