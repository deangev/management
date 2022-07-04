import { gql } from '@apollo/client';

export const WorkersQuery = gql`
  query WorkersData {
    workersData {
      workers {
        phoneNumber
        name
        _id
      }
    }
  }
`;

export const WorkerQuery = gql`
  query WorkerData($workerID: String!) {
    workerData(workerID: $workerID) {
      _id
      name
      phoneNumber
    }
  }
`;
