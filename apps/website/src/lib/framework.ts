
export type Framework = (typeof frameworks)[number]
export const frameworks = ['react', 'vue', 'svelte', 'solid'] as const

export const getFramework = () => {

  return "react" as Framework
}
