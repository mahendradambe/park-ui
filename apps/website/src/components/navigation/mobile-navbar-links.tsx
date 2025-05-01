import { Link } from "@tanstack/react-router"
import { cva } from 'styled-system/css'

const link = cva({
  base: {
    borderBottomWidth: '1px',
    color: 'fg.muted',
    fontWeight: 'medium',
    p: '3',
    transitionDuration: 'normal',
    transitionProperty: 'color',
    transitionTimingFunction: 'default',
    _hover: { color: 'fg.default' },
    _currentPage: {
      color: 'colorPalette.default',
      _hover: {
        color: 'colorPalette.default',
      },
    },
  },
})()

export const MobileNavbarLinks = () => {
  // const pathname = usePathname()

  return (
    <>
      <Link
        to="/docs"
        className={link}
      >
        Docs
      </Link>
    </>
  )
}
