import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

function capitalizarPrimeraLetra(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function PokemonPage({ pokemons, minDatos }) {
  return (
    <>
        <h1 className={styles.title}>
          Explorar Pokedex
        </h1>
      <div className={styles.grid}>
          {
            minDatos.map(pokemon => {
              return (
                <Link href={`/pokemon/${pokemon.name}`} key={pokemon.id}>
                  <a className={styles.card}>
                  <img
                      src={pokemon.image}
                      alt={pokemon.name}
                      width={100}
                      height={100}
                      className={styles.imagen}
                    />
                    <p>{capitalizarPrimeraLetra(pokemon.name)}</p>
                    {pokemon.types.map((tipos, index) => {
                      return (
                        <div key={index} className={styles.tipo}>
                          {tipos.type.name}
                        </div>
                    )
                    })}
                  </a>
                </Link>
              )
            })
          }
        </div>

    </>
  )
}

export async function getStaticProps () {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
  const data = await res.json()

  const traerPokemon = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const pokemon = await response.json()

    return pokemon
  }

  let pokemons = []

  for(let i = 0; i < data.results.length; i++) {
    const pokemon = await traerPokemon(data.results[i].name)
    pokemons.push(pokemon)
  }

  let minDatos = pokemons.map(pokeData => {
    return {
      id: pokeData.id,
      name: pokeData.name,
      image: pokeData.sprites.other.dream_world.front_default,
      types: pokeData.types
    }
  })
  return {
    props: {
      pokeRef: data.results,
      minDatos,
    }
  }
}
// ARREGLAR REDIRECCION :))
// ARREGLAR REDIRECCION :))
// ARREGLAR REDIRECCION :))