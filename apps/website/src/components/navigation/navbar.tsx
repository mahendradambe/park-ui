import { Link } from '@tanstack/react-router'
import { Divider, HStack, Stack } from 'styled-system/jsx'
import { Logo } from '~/components/logo'
import { ColorModeButton } from '~/components/navigation/color-mode-button'
import { MobileNavbar } from '~/components/navigation/mobile-navbar'
import { MobileNavbarLinks } from '~/components/navigation/mobile-navbar-links'
import { NavbarContainer } from '~/components/navigation/navbar-container'
import { NavbarLinks } from '~/components/navigation/navbar-links'
import { getFramework } from '~/lib/framework'
import { ThemeDrawer } from '../theming/theme-drawer'

export const Navbar =  () => {
  const framework = getFramework()

  return (
    <NavbarContainer>
      <HStack justify="space-between">
        <Link to="/" aria-label="Back to home">
          <Logo />
        </Link>
        <HStack gap="3" py="1" display={{ base: 'none', md: 'flex' }}>
          <NavbarLinks />
          <Divider orientation="vertical" h="6" />
          <HStack gap="2">
            <HStack gap="0">
              <ThemeDrawer />
              <ColorModeButton />
            </HStack>
          </HStack>
        </HStack>
        <HStack gap="3" py="0.5" display={{ base: 'flex', md: 'none' }}>
          <MobileNavbar>
            <Stack gap="0" width="17rem">
              <MobileNavbarLinks />
              <HStack gap="3" justifyContent="center" px="3" pt="6">
                <ColorModeButton />
              </HStack>
            </Stack>
          </MobileNavbar>
        </HStack>
      </HStack>
    </NavbarContainer>
  )
}
