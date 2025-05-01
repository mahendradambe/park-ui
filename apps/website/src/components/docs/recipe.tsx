// import { readFile } from 'node:fs/promises'
// import { join } from 'node:path'
import { Box } from 'styled-system/jsx'
// import { CodePreview } from '~/components/code-preview'
import { getServerContext } from '~/lib/server-context'

export const Recipe =  () => {
  const { component } = getServerContext()
  // const path = join(process.cwd(), `../packages/preset/src/theme/recipes/${component}.ts`)

  // const program = pipe(
  //   Effect.tryPromise({
  //     try: () => readFile(path, 'utf8'),
  //     catch: () => new Error('Recipe not found'),
  //   }),
  //   Effect.catchAll(() => Effect.succeed('Not yet available')),
  //   Effect.flatMap((code) =>
  //     Effect.promise(() => highlight(code, 'ts')).pipe(
  //       Effect.map((html) => ({
  //         code,
  //         html,
  //       })),
  //     ),
  //   ),
  // )

  // const { code, html } = await Effect.runPromise(program)

  return (
    <Box borderRadius="l3" overflow="hidden" divideY="1px" borderWidth="1px" className="not-prose">
      {/* <CodePreview html={html} code={code} /> */}
    </Box>
  )
}
