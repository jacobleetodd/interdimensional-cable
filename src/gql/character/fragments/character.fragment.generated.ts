/* eslint-disable */
// @ts-nocheck
import * as Types from '../../../models/graphql-types.generated';

import { EpisodeFragment } from '../../episode/fragments/episode.fragment.generated';
import { LocationFragment } from '../../location/fragments/location.fragment.generated';
import { gql } from 'graphql.macro';
import { EpisodeFragmentDoc } from '../../episode/fragments/episode.fragment.generated';
import { LocationFragmentDoc } from '../../location/fragments/location.fragment.generated';
export type CharacterFragment = (
  { __typename: 'Character' }
  & Pick<Types.Character, 'created' | 'gender' | 'id' | 'name' | 'species' | 'status' | 'type'>
  & { episode: Array<Types.Maybe<(
    { __typename: 'Episode' }
    & EpisodeFragment
  )>>, location?: Types.Maybe<(
    { __typename: 'Location' }
    & LocationFragment
  )>, origin?: Types.Maybe<(
    { __typename: 'Location' }
    & LocationFragment
  )> }
);

export const CharacterFragmentDoc = gql`
    fragment Character on Character {
  created
  episode {
    ...Episode
  }
  gender
  id
  location {
    ...Location
  }
  name
  origin {
    ...Location
  }
  species
  status
  type
}
    ${EpisodeFragmentDoc}
${LocationFragmentDoc}`;