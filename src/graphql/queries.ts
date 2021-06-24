import { gql } from 'graphql-request'

export const GET_PAGES = gql`
  query Page {
    pages {
      id
      heading
      slug
      body {
        html
      }
    }
  }
`
