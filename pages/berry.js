import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'

function capitalizarPrimeraLetra(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function BerryPage ({data}) {
    return (
        <>
        <Navbar/>
        <div className={styles.grid}>
          {
            data.results.map(berry => {
              return (
                <Link href={`/berry/${berry.name}`} key={berry.name}>
                  <a className={styles.card}>
                    <p>{capitalizarPrimeraLetra(berry.name)}</p>
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
    const res = await fetch('https://pokeapi.co/api/v2/berry?limit=100')
    const data = await res.json()
    
    const traerBerry = async (id) => {
        const response = await fetch(`https://pokeapi.co/api/v2/berry/${id}`)
        const berry = await response.json()
    
        return berry
    }
    
    return {
        props: {
        data,
        },
    }
}