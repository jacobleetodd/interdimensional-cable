/* eslint-disable */
// @ts-nocheck
import * as Types from '../../../models/graphql-types.generated';

import { InfoFragment } from '../../info/fragments/info.fragment.generated';
import { CharacterFragment } from '../fragments/character.fragment.generated';
import { graphql, type GraphQLResponseResolver, type RequestHandlerOptions } from 'msw'
import { gql } from 'graphql.macro';
import { InfoFragmentDoc } from '../../info/fragments/info.fragment.generated';
import { CharacterFragmentDoc } from '../fragments/character.fragment.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockCharactersQuery(
 *   ({ query, variables }) => {
 *     const { filter, page } = variables;
 *     return HttpResponse.json({
 *       data: { characters }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockCharactersQuery = (resolver: GraphQLResponseResolver<CharactersQuery, CharactersQueryVariables>, options?: RequestHandlerOptions) =>
  graphql.query<CharactersQuery, CharactersQueryVariables>(
    'Characters',
    resolver,
    options
  )

export type CharactersQueryVariables = Types.Exact<{
  filter?: Types.InputMaybe<Types.FilterCharacter>;
  page?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type CharactersQuery = { characters?: Types.Maybe<(
    { __typename: 'Characters' }
    & { info?: Types.Maybe<(
      { __typename: 'Info' }
      & InfoFragment
    )>, results?: Types.Maybe<Array<Types.Maybe<(
      { __typename: 'Character' }
      & CharacterFragment
    )>>> }
  )> };


export const CharactersDocument = gql`
    query Characters($filter: FilterCharacter, $page: Int) {
  characters(filter: $filter, page: $page) {
    info {
      ...Info
    }
    results {
      ...Character
    }
  }
}
    ${InfoFragmentDoc}
${CharacterFragmentDoc}`;

/**
 * __useCharactersQuery__
 *
 * To run a query within a React component, call `useCharactersQuery` and pass it any options that fit your needs.
 * When your component renders, `useCharactersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCharactersQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useCharactersQuery(baseOptions?: Apollo.QueryHookOptions<CharactersQuery, CharactersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CharactersQuery, CharactersQueryVariables>(CharactersDocument, options);
      }
export function useCharactersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CharactersQuery, CharactersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CharactersQuery, CharactersQueryVariables>(CharactersDocument, options);
        }
export function useCharactersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<CharactersQuery, CharactersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CharactersQuery, CharactersQueryVariables>(CharactersDocument, options);
        }
export type CharactersQueryHookResult = ReturnType<typeof useCharactersQuery>;
export type CharactersLazyQueryHookResult = ReturnType<typeof useCharactersLazyQuery>;
export type CharactersSuspenseQueryHookResult = ReturnType<typeof useCharactersSuspenseQuery>;
export type CharactersQueryResult = Apollo.QueryResult<CharactersQuery, CharactersQueryVariables>;
export function refetchCharactersQuery(variables?: CharactersQueryVariables) {
      return { query: CharactersDocument, variables: variables }
    }