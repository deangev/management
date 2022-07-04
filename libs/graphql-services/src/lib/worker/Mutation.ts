import { gql } from '@apollo/client';

export const createWorkerMutation = gql`
  mutation CreateWorker($name: String!, $phoneNumber: String!) {
    createWorker(workerData: { name: $name, phoneNumber: $phoneNumber }) {
      _id
      name
      phoneNumber
    }
  }
`;

export const updateWorkerMutation = gql`
  mutation UpdateWorker($_id: String!, $name: String, $phoneNumber: String) {
    updateWorker(
      workerData: {
        _id: $_id
        name: $name
        phoneNumber: $phoneNumber
      }
    ) {
      _id
      name
      phoneNumber
    }
  }
`;
