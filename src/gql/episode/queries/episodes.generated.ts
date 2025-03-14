/* eslint-disable */
// @ts-nocheck
import * as Types from '../../../models/graphql-types.generated';

import { InfoFragment } from '../../info/fragments/info.fragment.generated';
import { EpisodeFragment } from '../fragments/episode.fragment.generated';
import { graphql, type GraphQLResponseResolver, type RequestHandlerOptions } from 'msw'
import { gql } from 'graphql.macro';
import { InfoFragmentDoc } from '../../info/fragments/info.fragment.generated';
import { EpisodeFragmentDoc } from '../fragments/episode.fragment.generated';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

/**
 * @param resolver A function that accepts [resolver arguments](https://mswjs.io/docs/api/graphql#resolver-argument) and must always return the instruction on what to do with the intercepted request. ([see more](https://mswjs.io/docs/concepts/response-resolver#resolver-instructions))
 * @param options Options object to customize the behavior of the mock. ([see more](https://mswjs.io/docs/api/graphql#handler-options))
 * @see https://mswjs.io/docs/basics/response-resolver
 * @example
 * mockEpisodesQuery(
 *   ({ query, variables }) => {
 *     const { filter, page } = variables;
 *     return HttpResponse.json({
 *       data: { episodes }
 *     })
 *   },
 *   requestOptions
 * )
 */
export const mockEpisodesQuery = (resolver: GraphQLResponseResolver<EpisodesQuery, EpisodesQueryVariables>, options?: RequestHandlerOptions) =>
  graphql.query<EpisodesQuery, EpisodesQueryVariables>(
    'Episodes',
    resolver,
    options
  )

export type EpisodesQueryVariables = Types.Exact<{
  filter?: Types.InputMaybe<Types.FilterEpisode>;
  page?: Types.InputMaybe<Types.Scalars['Int']['input']>;
}>;


export type EpisodesQuery = { episodes?: Types.Maybe<(
    { __typename: 'Episodes' }
    & { info?: Types.Maybe<(
      { __typename: 'Info' }
      & InfoFragment
    )>, results?: Types.Maybe<Array<Types.Maybe<(
      { __typename: 'Episode' }
      & EpisodeFragment
    )>>> }
  )> };


export const EpisodesDocument = gql`
    query Episodes($filter: FilterEpisode, $page: Int) {
  episodes(filter: $filter, page: $page) {
    info {
      ...Info
    }
    results {
      ...Episode
    }
  }
}
    ${InfoFragmentDoc}
${EpisodeFragmentDoc}`;

/**
 * __useEpisodesQuery__
 *
 * To run a query within a React component, call `useEpisodesQuery` and pass it any options that fit your needs.
 * When your component renders, `useEpisodesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEpisodesQuery({
 *   variables: {
 *      filter: // value for 'filter'
 *      page: // value for 'page'
 *   },
 * });
 */
export function useEpisodesQuery(baseOptions?: Apollo.QueryHookOptions<EpisodesQuery, EpisodesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EpisodesQuery, EpisodesQueryVariables>(EpisodesDocument, options);
      }
export function useEpisodesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EpisodesQuery, EpisodesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EpisodesQuery, EpisodesQueryVariables>(EpisodesDocument, options);
        }
export function useEpisodesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<EpisodesQuery, EpisodesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<EpisodesQuery, EpisodesQueryVariables>(EpisodesDocument, options);
        }
export type EpisodesQueryHookResult = ReturnType<typeof useEpisodesQuery>;
export type EpisodesLazyQueryHookResult = ReturnType<typeof useEpisodesLazyQuery>;
export type EpisodesSuspenseQueryHookResult = ReturnType<typeof useEpisodesSuspenseQuery>;
export type EpisodesQueryResult = Apollo.QueryResult<EpisodesQuery, EpisodesQueryVariables>;
export function refetchEpisodesQuery(variables?: EpisodesQueryVariables) {
      return { query: EpisodesDocument, variables: variables }
    }