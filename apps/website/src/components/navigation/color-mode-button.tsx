
import { MoonIcon, SunIcon } from 'lucide-react'
import { Box } from 'styled-system/jsx'
import { useIsClient } from 'usehooks-ts'
import { IconButton } from '~/components/ui/icon-button'
import { useTheme } from '~/lib/theme-provider'

export const ColorModeButton = () => {
  const isClient = useIsClient()
  const { theme, setTheme } = useTheme()

  if (!isClient) return <Box width="9" height="9" />

  const handleClick = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <IconButton
      onClick={handleClick}
      variant="ghost"
      size={{ base: 'md', md: 'sm' }}
      css={{
        color: 'fg.muted',
        _hover: { color: 'fg.default' },
        '& svg': {
          width: '5',
          height: '5',
        },
      }}
    >
      {theme === 'light' ? <SunIcon /> : <MoonIcon />}
    </IconButton>
  )
}
