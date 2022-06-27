import { EstatesQuery } from '@sagi/graphql-services';
import { useQuery } from '@apollo/client';
import { EstateType } from '@sagi/core/types';
/* eslint-disable-next-line */
export interface PagesHomeProps {}

export function PagesHome(props: PagesHomeProps) {
  const {
    loading,
    data,
    error,
  } = useQuery(EstatesQuery);
  // TODO - Example of usage
  console.log(data);

  return (
    <div>
      {data?.estatesData.estates.map((building: EstateType) => (
        <div>{building.address.city}</div>
      ))}
    </div>
  );
}

export default PagesHome;
