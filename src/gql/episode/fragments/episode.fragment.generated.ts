/* eslint-disable */
// @ts-nocheck
import * as Types from '../../../models/graphql-types.generated';

import { gql } from 'graphql.macro';
export type EpisodeFragment = (
  { __typename: 'Episode' }
  & Pick<Types.Episode, 'air_date' | 'created' | 'episode' | 'id' | 'name'>
);

export const EpisodeFragmentDoc = gql`
    fragment Episode on Episode {
  air_date
  created
  episode
  id
  name
}
    `;