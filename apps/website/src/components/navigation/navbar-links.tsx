import { Link } from '@tanstack/react-router'
import { cva } from 'styled-system/css'
import { HStack } from 'styled-system/jsx'

const link = cva({
  base: {
    color: 'fg.muted',
    fontWeight: 'medium',
    textStyle: 'sm',
    transitionDuration: 'normal',
    transitionProperty: 'color',
    transitionTimingFunction: 'default',
    _hover: { color: 'colorPalette.text' },
    _currentPage: {
      color: 'colorPalette.text',
      _hover: {
        color: 'colorPalette.text',
      },
    },
  },
})()

export const NavbarLinks = () => {
  return (
    <HStack gap="6" me="2">
      <Link to="/">Docs</Link>
      <Link to="/">Blocks</Link>
    </HStack>
  )
}
