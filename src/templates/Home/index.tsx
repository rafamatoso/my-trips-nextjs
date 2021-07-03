import dynamic from 'next/dynamic'
import LinkWrapper from 'components/LinkWrapper'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'
import { MapProps } from 'components/Map'
import { NextSeo } from 'next-seo'
import { URL_PRODUCTION } from 'utils/url'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="My Trips"
        description="A simple project to show in a map the places that I went and show informations and photos when clicked."
        canonical={`${URL_PRODUCTION}`}
        openGraph={{
          url: `${URL_PRODUCTION}`,
          title: 'My Trips',
          description:
            'A simple project to show in a map the places that I went and show more informations and photos when clicked.',
          images: [
            {
              url: `${URL_PRODUCTION}/img/cover.png`,
              width: 1280,
              height: 720,
              alt: 'My Trips'
            }
          ],
          site_name: 'My Trips'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About"></InfoOutline>
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
