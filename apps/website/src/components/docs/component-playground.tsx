import { controls } from '.velite'
import { Box } from 'styled-system/jsx'
import { Route } from "~/routes/docs.$"
import { ComponentPreview } from './component-preview'

export const ComponentPlayground = () => {
  const params = Route.useParams()
  const component = getComponentName(params._splat!)
  const defaultControls = { component, props: {} }

  const componentControls =
    controls.filter((control) => control.component === component)[0] || defaultControls

  return (
    <Box borderWidth="1px" borderRadius="l3" overflow="hidden" mt="12">
      <ComponentPreview controls={componentControls} />
    </Box>
  )
}

const getComponentName = (route: string ) => route.split("/")[1]