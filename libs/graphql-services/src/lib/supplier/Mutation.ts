import { gql } from '@apollo/client';

export const createSupplierMutation = gql`
  mutation CreateSupplier($name: String!, $phoneNumber: String!) {
    createSupplier(supplierData: { name: $name, phoneNumber: $phoneNumber }) {
      _id
      name
      phoneNumber
    }
  }
`;

export const updateSupplierMutation = gql`
  mutation UpdateSupplier($_id: String!, $name: String, $phoneNumber: String) {
    updateSupplier(
      supplierData: {
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
