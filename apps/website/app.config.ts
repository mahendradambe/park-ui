import { defineConfig } from '@tanstack/react-start/config'
import dynamicImport from 'vite-plugin-dynamic-import'
import tsConfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  tsr: {
    appDirectory: 'src',
  },
  vite: {
    plugins: [
      dynamicImport(),
      tsConfigPaths({
        projects: ['./tsconfig.json'],
      }),
    ],
  },
})