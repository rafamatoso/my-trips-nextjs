import { GraphQLClient } from 'graphql-request'

const ENDPOINT = process.env.GRAPHQL_HOST || ''

const client = new GraphQLClient(ENDPOINT, {
  headers: {
    authorization: `Bearer ${process.env.GRAPHQL_TOKEN}`
  }
})

export default client
