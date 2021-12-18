import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home({ pokemons, minDatos }) {
  return (
    <>
        <h1>ID</h1>
    </>
  )
}

export async function getStaticPaths() {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
        const data = res.json()
        const paths = data.map(pokemon => ({params: {name: pokemon.name}}))
        return {
            paths,
            fallback: false,
        }
}
// ARREGLAR REDIRECCION :))
export async function getStaticProps ({params}) {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/' + params.name)
  const data = await res.json()
  return {
    props: {
      data,
    },
  }
}