import { EstatesQuery } from '@sagi/graphql-services';
import { useQuery } from '@apollo/client';
import { Estate } from '@sagi/core/types';
/* eslint-disable-next-line */
export interface PagesHomeProps {}

export function PagesHome(props: PagesHomeProps) {
  const {
    loading,
    data,
    error,
  } = useQuery(EstatesQuery);
  // TODO - Example of usage
  console.log(loading);
  console.log(error);

  return (
    <div>
      {data?.estatesData.estates.map((building: Estate) => (
        <div>{building.street}</div>
      ))}
    </div>
  );
}

export default PagesHome;
