/* eslint-disable */
// @ts-nocheck
import * as Types from '../../../models/graphql-types.generated';

import { gql } from 'graphql.macro';
export type LocationFragment = (
  { __typename: 'Location' }
  & Pick<Types.Location, 'created' | 'dimension' | 'id' | 'name' | 'type'>
);

export const LocationFragmentDoc = gql`
    fragment Location on Location {
  created
  dimension
  id
  name
  type
}
    `;