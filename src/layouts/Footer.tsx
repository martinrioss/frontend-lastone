import { Grid, Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import logo from '../assets/lastone.png'
import instagram from '../assets/instagram.png'
import x from '../assets/x.png'
import discord from '../assets/discord.png'

function Footer (): JSX.Element {
  return (
    <footer className='bg-footer flex flex-col items-center text-font bg-cover'>
      <figure className=' p-2'>
        <img src={logo} alt='lastone' className='h-10 opacity-40' />
      </figure>
      <section className='w-full opacity-40'>
        <Grid container spacing={2} sx={{ textAlign: 'center', p: 2 }}>
          <Grid item xs={12} sm={4} md={3}>
            <Link component={RouterLink} to='/politicas' color={'font.main'} underline='none'>Politicas de privacidad</Link>
          </Grid>
          <Grid item xs={12} sm={4} md={2}>
            <Link component={RouterLink} to='/cookies' color={'font.main'} underline='none'>Ajustes de cookies</Link>
          </Grid>
          <Grid item xs={12} sm={4} md={2}>
            <Link component={RouterLink} to='/terminosycondiciones' color={'font.main'} underline='none'>Terminos de uso</Link>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <Link component={RouterLink} to='/contacto' color={'font.main'} underline='none'>Contacto</Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Link component={RouterLink} to='/soporte' color={'font.main'} underline='none'>Soporte técnico</Link>
          </Grid>
        </Grid>
      </section>
      <section className='flex p-2 w-full md:w-2/12  justify-evenly opacity-40'>
        <figure><img src={x} alt="x" className='h-5' /></figure>
        <figure><img src={instagram} alt="instagram" className='h-5' /></figure>
        <figure><img src={discord} alt="discord" className='h-5' /></figure>
      </section>
      <small className='opacity-40 p-2'>@2023 LASTONE, inc.</small>
    </footer>
  )
}
export default Footer
