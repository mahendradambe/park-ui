import { SiReact } from '@icons-pack/react-simple-icons'
import { Link as RouterLink } from '@tanstack/react-router'
import { ArrowRightIcon } from 'lucide-react'
import { Box, HStack, Stack } from 'styled-system/jsx'
import { Button } from '~/components/ui/button'
import { Heading } from '~/components/ui/heading'
import { Text } from '~/components/ui/text'
import { ThemeDrawer } from '../theming/theme-drawer'

export const Hero = () => {
  return (
    <Stack gap={{ base: '8', md: '12' }} maxW={{ md: '2xl' }}>
      <Stack gap={{ base: '4', md: '6' }}>
        <Stack gap="4">
          <Heading as="h1" textStyle={{ base: '4xl', md: '6xl' }} fontWeight="bold">
            Build your own Design System
          </Heading>
        </Stack>
        <Text textStyle={{ base: 'lg', md: 'xl' }} color="fg.muted">
          Beautifully designed components built with Ark UI and Panda CSS that work with a variety
          of JS frameworks.
        </Text>
      </Stack>
      <Stack direction={{ base: 'column', sm: 'row' }} gap="3">
        <Button asChild size={{ base: 'xl', md: '2xl' }}>
          <RouterLink to="/docs">
            Get Started <ArrowRightIcon />
          </RouterLink>
        </Button>
        <ThemeDrawer isHero />
      </Stack>
      <HStack gap="2">
        <Box fontSize="3xl">
          <SiReact />
        </Box>
        <Text as="span" color="fg.muted" hideBelow="sm">
          React
        </Text>
      </HStack>
    </Stack>
  )
}
