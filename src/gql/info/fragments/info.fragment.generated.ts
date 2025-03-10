/* eslint-disable */
// @ts-nocheck
import * as Types from '../../../models/graphql-types.generated';

import { gql } from 'graphql.macro';
export type InfoFragment = (
  { __typename: 'Info' }
  & Pick<Types.Info, 'count' | 'next' | 'pages' | 'prev'>
);

export const InfoFragmentDoc = gql`
    fragment Info on Info {
  count
  next
  pages
  prev
}
    `;