import { getServerSideSitemap } from 'next-sitemap'
import { GetServerSideProps } from 'next'
import client from 'graphql/client'
import { GetPlacesQuery } from 'graphql/generated/graphql'
import { GET_PLACES } from 'graphql/queries'
import { URL_PRODUCTION } from 'utils/url'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES)

  const fields = places.map(({ slug }) => ({
    loc: `${URL_PRODUCTION}/${slug}`,
    lastmod: new Date().toISOString()
  }))

  fields.push(
    {
      loc: `${URL_PRODUCTION}`,
      lastmod: new Date().toISOString()
    },
    {
      loc: `${URL_PRODUCTION}/about`,
      lastmod: new Date().toISOString()
    }
  )

  return getServerSideSitemap(ctx, fields)
}

// Default export to prevent next.js errors
// eslint-disable-next-line @typescript-eslint/no-empty-function
export default () => {}
