import { Button, Typography } from '@mui/material'
import discord from '../assets/discord.png'

interface Props {
  color: string
  width: string
}

const ButtonDiscord: React.FC<Props> = ({ color, width }) => {
  return (
    <Button href="https://discord.com/" target="_blank" rel="noreferrer" variant="contained" sx={{ textTransform: 'none', backgroundColor: `${color}.main`, borderRadius: 2, width: { xs: '10px', sm: `${width}` } }}>
        <img src={discord} alt="discord logo" className="h-7 w-7 sm:mr-2" />
        {color === 'blue' ? <Typography component="p" color="font.main" className="hidden md:block">Iniciar Sesión</Typography> : null}
    </Button>
  )
}
export default ButtonDiscord
