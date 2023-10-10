import { AppBar, Toolbar, IconButton, Link, Box, Menu, MenuList } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import favicon from '../assets/favicon.png'
import NavLinks from '../components/NavLinks'
import UseMenu from '../hooks/UseMenu'
import ButtonDiscord from '../components/ButtonDiscord'
function NavBar (): JSX.Element {
  const { anchorEl, open, handleClick, handleClose } = UseMenu()
  return (
    <>
      <AppBar position='absolute' color='transparent' sx={{ boxShadow: 'none', p: 2 }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <IconButton sx={{ display: { xs: 'flex', md: 'none' } }} onClick={handleClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </IconButton>
          <Link component={RouterLink} to="/" sx={{ p: 1, display: { xs: 'none', md: 'flex' } }}>
            <img src={favicon} alt="logo lastone" className="h-14 border-r object-contain " />
          </Link>
          <Box className='w-[90%]' sx={{ display: { xs: 'none', md: 'block' } }}>
            <NavLinks menuitem={false} />
          </Box>
          <ButtonDiscord color= 'blue' width= '195px'/>
        </Toolbar>
      </AppBar>
      <Menu
        sx={{
          '& .MuiMenu-paper': { backgroundColor: 'primary.main' }, display: { xs: 'flex', md: 'none' }
        }}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        <MenuList>
          <NavLinks menuitem />
        </MenuList>
      </Menu>
    </>
  )
}
export default NavBar
