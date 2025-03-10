/* eslint-disable */
// @ts-nocheck
import * as Types from '../../../models/graphql-types.generated';

import { CharacterFragment } from '../fragments/character.fragment.generated';
import { graphql, type GraphQLResponseResolver, type RequestHandlerOptions } from 'msw'
import { gql } from 'graphql.macro';
import { CharacterFragmentDoc } from '../fragments/character.fragment.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockCharacterQuery(
 *   ({ query, variables }) => {
 *     const { id } = variables;
 *     return HttpResponse.json({
 *       data: { character }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockCharacterQuery = (resolver: GraphQLResponseResolver<CharacterQuery, CharacterQueryVariables>, options?: RequestHandlerOptions) =>
  graphql.query<CharacterQuery, CharacterQueryVariables>(
    'Character',
    resolver,
    options
  )

export type CharacterQueryVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
}>;


export type CharacterQuery = { character?: Types.Maybe<(
    { __typename: 'Character' }
    & CharacterFragment
  )> };


export const CharacterDocument = gql`
    query Character($id: ID!) {
  character(id: $id) {
    ...Character
  }
}
    ${CharacterFragmentDoc}`;

/**
 * __useCharacterQuery__
 *
 * To run a query within a React component, call `useCharacterQuery` and pass it any options that fit your needs.
 * When your component renders, `useCharacterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCharacterQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCharacterQuery(baseOptions: Apollo.QueryHookOptions<CharacterQuery, CharacterQueryVariables> & ({ variables: CharacterQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CharacterQuery, CharacterQueryVariables>(CharacterDocument, options);
      }
export function useCharacterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CharacterQuery, CharacterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CharacterQuery, CharacterQueryVariables>(CharacterDocument, options);
        }
export function useCharacterSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<CharacterQuery, CharacterQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CharacterQuery, CharacterQueryVariables>(CharacterDocument, options);
        }
export type CharacterQueryHookResult = ReturnType<typeof useCharacterQuery>;
export type CharacterLazyQueryHookResult = ReturnType<typeof useCharacterLazyQuery>;
export type CharacterSuspenseQueryHookResult = ReturnType<typeof useCharacterSuspenseQuery>;
export type CharacterQueryResult = Apollo.QueryResult<CharacterQuery, CharacterQueryVariables>;
export function refetchCharacterQuery(variables: CharacterQueryVariables) {
      return { query: CharacterDocument, variables: variables }
    }