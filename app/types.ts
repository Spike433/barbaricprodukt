export type Subheader = {
    id: string
    title: string
    content: string
    images?: string[]
  }
  
  export type Section = {
    id: string
    title: string
    content: string
    images?: string[]
    subheaders?: Subheader[]
  }