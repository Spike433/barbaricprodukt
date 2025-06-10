export type Subheader = {
    id: string    
    images?: Picture[]
  }

  export type Picture = {
    title: string    
    src: string    
  }
  
  export type Section = {
    id: string
    title: string    
    subheaders?: Subheader[]
  }