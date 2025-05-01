import { Box } from 'styled-system/jsx'
import { Tabs } from '~/components/ui/tabs'
import { getServerContext } from '~/lib/server-context'
import { ManualIntallationGuide } from './manual-installation-guide'

export const InstallationGuide = () => {
  const { component } = getServerContext()

  const code = `npx @park-ui/cli components add ${component}`
  // const html =  highlight(code, 'bash')

  return (
    <Tabs.Root defaultValue="cli">
      <Tabs.List>
        <Tabs.Trigger value="cli">CLI</Tabs.Trigger>
        <Tabs.Trigger value="manual">Manual</Tabs.Trigger>
        <Tabs.Indicator />
      </Tabs.List>
      <Tabs.Content value="cli" pt="6">
        <Box borderWidth="1px" borderRadius="l3" overflow="hidden">
          {/* <CodePreview html={html} code={code} /> */}
        </Box>
      </Tabs.Content>
      <Tabs.Content value="manual" pt="6">
        <ManualIntallationGuide />
      </Tabs.Content>
    </Tabs.Root>
  )
}
