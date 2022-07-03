import React, { Dispatch, SetStateAction } from 'react';
import { Select, SelectItem } from '@management/core/ui-components';
import { EstatesAddressQuery } from '@management/graphql-services';
import { useQuery } from '@apollo/client';
import { EstateType } from '@management/core/types';

export interface SelectEstateProps {
  setEstateID: Dispatch<SetStateAction<string>>
}

type EstatesData = {
  estatesData: { estates: Pick<EstateType, '_id' | 'address'>[] };
};

export function SelectEstate(props: SelectEstateProps) {
  const { setEstateID } = props
  const { data } = useQuery<EstatesData>(EstatesAddressQuery, { fetchPolicy: 'no-cache' })

  return (
    <Select placeholder='בחר בניין' onValueChange={setEstateID}>
      {data?.estatesData.estates?.map(e => {
        const { address: { city, street, number, entry }, _id } = e
        const label = `${city}, ${street} ${number}${entry ? ` entry ${entry}` : ''}`
        return <SelectItem key={_id} label={label} value={_id} />
      })}
    </Select>
  );
}