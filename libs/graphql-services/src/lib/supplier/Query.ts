import { gql } from '@apollo/client';

export const SuppliersQuery = gql`
  query SuppliersData {
    suppliersData {
      suppliers {
        phoneNumber
        name
        _id
      }
    }
  }
`;

export const SupplierQuery = gql`
  query SupplierData($supplierID: String!) {
    supplierData(supplierID: $supplierID) {
      _id
      name
      phoneNumber
    }
  }
`;
