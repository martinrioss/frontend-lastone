import ButtonDiscord from '../components/ButtonDiscord'
import logo from '../assets/lastone.png'
import { Button } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
function Home (): JSX.Element {
  return (
    <main className="bg-bghome bg-cover flex flex-col items-center">
      <section className="bg-home bg-cover h-[100vh] w-full flex flex-col justify-center items-center">
        <figure>
          <img src={logo} alt="logo lastone" className='sm:h-22 md:h-40 h-20' />
        </figure>
          <Button component={RouterLink} to='/hola' sx={{ backgroundColor: 'font.main', textTransform: 'none', borderRadius: 2, width: '100px', ':hover': { backgroundColor: 'font.main' } }}>Explorar</Button>
      </section>
      <section className='flex flex-wrap justify-evenly w-full m-16 font-semibold'>
        <div className="bg-bgwhite w-80 h-48 rounded-3xl flex flex-col justify-center text-center m-3">
          <h1 className="text-4xl mb-7 font-bold">CONOCE</h1>
          <p>Interactua y crea vinculos con jugadores de todas partes</p>
        </div>
        <div className="bg-bgwhite w-80 h-48 rounded-3xl flex flex-col justify-center text-center m-3">
          <h1 className="text-4xl mb-7 font-bold">JUEGA</h1>
          <p>Disfruta al maximo de tus juegos y medios de juego favoritos</p>
        </div>
        <div className="bg-bgwhite w-80 h-48 rounded-3xl flex flex-col justify-center text-center m-3">
          <h1 className="text-4xl mb-7 font-bold">COMPITE</h1>
          <p>Construye tu propio camino convirtiendote en jugador profesional</p>
        </div>
      </section>
      <section className='text-font font-light flex flex-col text-center items-center w-3/4 m-7'>
        <h1 className="text-5xl font-bold mb-8">¿En qué consiste?</h1>
        <div className='opacity-80'>
          <p>LASTONE es una plataforma web para buscar jugadores en linea. principalmente </p>
          <p>pensada para promover el compañerismo . disminuir la toxicidad entre partidas y crear vinculos con jugadores de todas partes del mundo</p>
          <p>Contamos con funciones adicionales para cada tipo de jugadores, seas un jugador principiante, intermedio o avanzado</p>
          <p>Usar LASTONE es sencillo. pero si tienes dudas no olvides visitar como usar</p>
        </div>
      </section>
      <section className='text-font font-light flex flex-col text-center items-center w-3/4 m-7'>
        <h1 className="text-5xl font-bold mb-5">Sobre Nosotros</h1>
        <div className='opacity-80 '>
          <p>Nuestra plataforma nace bajo un propósito, crear un lugar para buscar, conocer y formar amistades mientras juegas en linea.</p>
          <p>Nosotros, sus fundadores, tuvimos este problema, al momento de utilizar las herramientas de búsqueda que teníamos en ese momento, nos dimos cuenta de que no eran tan efectivas como pensábamos, fue ahi cuando sé nos ocurrió crear LASTONE, una plataforma de búsqueda de jugadores efectiva, simple y facil de usar.</p>
          <p></p>
        </div>
      </section>
      <section className='text-font font-light flex flex-col text-center items-center w-3/4 m-7'>
        <h1 className="text-5xl font-bold mb-5">Nuestra misión</h1>
        <div className='opacity-80'>
          <p>Nuestro objetivo es ayudar a esas personas que día a día buscan personas que quieran jugar, ademas de ofrecer distintos tipos de servicios para formatear la competetividad y el aprendizaje.</p>
          <p>LASTONE siempre se penso para ser un espacio amigable, divertido y por sobre todo efectivo y facil de usar.</p>
          <p>¡Esperamos que puedas encontrar y crear amistades mientras jugamos en linea!</p>
        </div>
      </section>
      <section className="bg-bgwhite h-[65vh] w-full flex flex-col items-center justify-center text-center font-semibold mt-5">
        <div className='mb-10'>
          <h1 className="text-4xl font-bold mb-5">Únete a la comunidad</h1>
          <p>Únete a nuestro discord, enterate de las ultimas</p>
          <p>novedades, eventos y noticias de nuestra plataforma</p>
        </div>
        <ButtonDiscord color='primary' width='150px'/>
      </section>
    </main>
  )
}
export default Home
