import { gql } from '@apollo/client';

export const createServiceCallMutation = gql`
  mutation CreateServiceCall(
    $estateId: String!
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
        estateId: $estateId
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
      estateId
      apartment
      description
      destination
      priority
      assignee
      note
      type
      images
    }
  }`