import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>PokeNextJS</title>
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"></link>
      </Head>
      <Navbar/>
      <div className='bannerEntry'>
        <h1 className={styles.title}>Bienvenido a <br/> <strong>PokeNextJS</strong></h1>
        <p className='text-muted text-center'>
          Este es un proyecto de Franco Piccirilli, para aprender NextJS.
        </p>
      </div>
      <br/><br/><br/><br/><br/>
      <hr className='hrSep'/>
      <h1 className='text-center mt-4'>¿Como funciona este sitio?</h1>
      <br></br>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title text-center'>NextJS</h5>
                <p className='card-text text-center'>
                NextJS es un framework de JavaScript que nos permite crear fácilmente sitios web de React listos para salir a producción
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title text-center'>PokeAPI</h5>
                <p className='card-text text-center'>
                  PokeAPI es una Rest-API que permite acceder a información de Pokémon. Ademas de esta información, permite acceder a la información de sus evoluciones y sus tipos.
                </p>
              </div>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title text-center'>Server-Side Rendering</h5>
                <p className='card-text text-center'>
                  Server-Side Rendering es una técnica de desarrollo web que permite renderizar una página web en tiempo de ejecución.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer mt-auto py-3 bg-light">
        <div className="container">
          <span id='footer' className="text-muted text-center">Proyecto de NextJS realizado por Franco Piccirilli.</span>
        </div>
       </footer>
      <script 
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" 
      integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" 
      crossOrigin="anonymous">
      </script>
    </>
  )
}
