export interface ProductInfo {
    current_page: number
    data: Product[]
    first_page_url: string
    from: number
    last_page: number
    last_page_url: string
    links: Link[]
    next_page_url: string
    path: string
    per_page: number
    prev_page_url: any
    to: number
    total: number
  }
  
  export interface Product {
    id: string
    product_category_id: string
    name: string
    price: number
    image: string
    description: string
    manufacturer: string
    created_at: string
    updated_at: string
    product_category: ProductCategory
  }
  
  export interface ProductCategory {
    id: string
    name: string
    created_at: string
    updated_at: string
  }
  
  export interface Link {
    url?: string
    label: string
    active: boolean
  }
  