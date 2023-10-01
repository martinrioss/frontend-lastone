import { useState } from 'react'
interface UseMenuProps {
  anchorEl: HTMLElement | null
  open: boolean
  handleClick: (e: React.MouseEvent<HTMLElement>) => void
  handleClose: () => void
}
function UseMenu (): UseMenuProps {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const open = Boolean(anchorEl)
  const handleClick = (e: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(e.currentTarget)
  }
  const handleClose = (): void => {
    setAnchorEl(null)
  }
  return { anchorEl, open, handleClick, handleClose }
}
export default UseMenu
