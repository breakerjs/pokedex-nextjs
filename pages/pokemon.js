import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function capitalizarPrimeraLetra(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function Home({ pokemons, minDatos }) {
  return (
    <>  
        <Head>
          <title>PokeNextJS - Pokemon Dex</title>
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"></link>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
          <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@800;900&display=swap" rel="stylesheet"></link>
        </Head>
        <Navbar/>
        <h1 className={styles.title}>
          Explorar Pokedex
        </h1>
        <br/>
        <br/>
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
                        <span key={index} className={tipos.type.name} id="pokemonType">
                          {tipos.type.name}
                          <br/>
                        </span>
                    )
                    })}
                  </a>
                </Link>
              )
            })
          }
        </div>
        <Footer/>
        <script 
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" 
      integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" 
      crossOrigin="anonymous">
      </script>
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
