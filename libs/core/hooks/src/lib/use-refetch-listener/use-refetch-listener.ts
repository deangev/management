import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ApolloQueryResult, OperationVariables } from '@apollo/client';

export interface UseRefetchListener {
  refetch: (
    variables?: Partial<OperationVariables> | undefined
  ) => Promise<ApolloQueryResult<any>>;
}

export function useRefetchListener({ refetch }: UseRefetchListener) {
  const navigation = useNavigation();

  useEffect(() => {
    return navigation.addListener('focus', () => {
      if (refetch) {
        refetch();
      }
    });
  }, [navigation, refetch]);
}

export default useRefetchListener;
