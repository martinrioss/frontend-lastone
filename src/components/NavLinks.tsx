import { Link, MenuItem } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import routesLinks from '../utilities/routesLinks-utility'

interface Props {
  menuitem: boolean
}
const NavLinks: React.FC<Props> = ({ menuitem }) => {
  return (
    <nav className='text-font'>
        {
        menuitem
          ? (
              routesLinks.map((item) => (
            <MenuItem key={item.title}>
              <Link underline="none" color="white.main" sx={{ m: 1 }} component={RouterLink} to={item.path} key={item.title}>{item.title}</Link>
            </MenuItem>
              ))
            )
          : routesLinks.map((item) => (
            <Link underline="none" color="white" sx={{ p: 1 }} component={RouterLink} to={item.path} key={item.title}>{item.title}</Link>
          ))
    }
    </nav>
  )
}
export default NavLinks
