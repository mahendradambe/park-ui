import { createFileRoute } from '@tanstack/react-router'
import { Box, Container, Stack } from 'styled-system/jsx'
import { DocumentationBadges } from '~/components/docs/documentation-badges'
import { MDXContent } from '~/components/mdx-content'
import { DocsFooter } from '~/components/navigation/docs/docs-footer'
import { TableOfContent } from '~/components/navigation/table-of-content'
import { Heading } from '~/components/ui/heading'
import { Prose } from '~/components/ui/prose'
import { Text } from '~/components/ui/text'
import { getSidebarGroups } from '~/lib/docs'


export const Route = createFileRoute('/docs/$')({
  component: Page,
})

export default function Page() {
  const params = Route.useParams()
  const slug = params._splat?.split("/") ?? []
  const currentPage = getPageBySlug(slug)
  const nextPage = getNextPage(slug)
  const prevPage = getPrevPage(slug)


  if (currentPage) {
    return (
      <Container display="flex" py="12" gap="8" justifyContent="center">
        <Stack gap="16" px={{ base: '0', xl: '8' }} width="full">
          <Prose css={{ maxWidth: '45rem', mx: 'auto', width: '100%' }}>
            <Heading as="h1" fontWeight="bold">
              {currentPage.id === 'introduction' ? 'Welcome to Park UI' : currentPage.title}
            </Heading>
            <Text className="lead" color="fg.muted" mb="6">
              {currentPage.id === 'introduction'
                ? 'A Component Library built on Ark UI and Panda CSS.'
                : currentPage.description}
            </Text>
            <DocumentationBadges href={currentPage.docs} />
            <MDXContent code={currentPage.code} />
          </Prose>
          <DocsFooter nextPage={nextPage} prevPage={prevPage} />
        </Stack>
        <Box flexGrow="1" width="full" maxW="14rem" display={{ base: 'none', xl: 'block' }}>
          <Box position="fixed">
            <TableOfContent entries={currentPage.toc} />
          </Box>
        </Box>
      </Container>
    )
  }
}


const pages = getSidebarGroups().flat()

export const generateStaticParams = () => pages.map((page) => ({ slug: page.slug.split('/') }))

const getPageBySlug = (slug: string[]) => {
  return pages.find((page) => page.slug === slug.join('/'))
}

const getNextPage = (slug: string[]) => {
  const index = pages.findIndex((page) => page.slug === slug.join('/'))
  return pages[index + 1]
}

const getPrevPage = (slug: string[]) => {
  const index = pages.findIndex((page) => page.slug === slug.join('/'))
  return pages[index - 1]
}
