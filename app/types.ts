export type Subheader = {
    id: string
    title: string
    content: string
    images?: string[]
  }

  export type Picture = {
    size: string,
  }
  
  export type Section = {
    id: string
    title: string
    content: string    
    subheaders?: Subheader[]
  }