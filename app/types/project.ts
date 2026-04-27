export type ProjectType = 'commercial' | 'pet'

export interface Project {
  id: string
  title: string
  shortDescription: string
  description: string
  type: ProjectType
  stack: string[]
  githubUrl?: string
  liveUrl?: string
  image?: string
  imageAlt: string
  noScroll?: boolean
}
