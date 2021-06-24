import client from 'graphql/client'
import { GET_PAGES } from 'graphql/queries'
import { useRouter } from 'next/dist/client/router'
import PageTemplate from 'templates/Pages'

export default function AboutPage() {
  const router = useRouter()

  // retorna um loading ou qualquer coisa que está sendo criada
  if (router.isFallback) {
    return null
  }

  return <PageTemplate />
}

export async function getStaticPaths() {
  const { pages } = await client.request(GET_PAGES, { first: 3 })

  const paths = pages.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

// export const getStaticProps = async () => {
//   console.log(pages)

//   return {
//     props: {}
//   }
// }

// getStaticPaths => serve para gerar as urls em build time: /about, /trip/cabo...
// getStaticProps => serve para buscar dados da página (props) - build time - estático
// getServerSideProps => serve para buscar dados da página (props) - runtime - toda requisição (bundle fica no server)
// getInitialProps => serve para buscar dados da página (props) - runtime - toda requisição (bundle também vai pra o client) - hydrate
