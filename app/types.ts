export type Subheader = {
    id: string
    title: string
    content: string
    images?: Picture[]
  }

  export type Picture = {
    title: string
    description: string
    src: string    
  }
  
  export type Section = {
    id: string
    title: string
    content: string    
    subheaders?: Subheader[]
  }