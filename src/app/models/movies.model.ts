export interface MoviesData {
    current_page: number
    data: Movies[]
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
  
  export interface Movies {
    id: string
    movie_id: number
    original_title: string
    original_language: string
    overview: string
    popularity: number
    poster_path: string
    backdrop_path: string
    release_date: string
    vote_average: number
    vote_count: number
    adult: number
    created_at: any
    updated_at: any
    casts: Cast[]
  }
  
  export interface Cast {
    id: string
    movie_id: number
    name: string
    original_name: string
    popularity: string
    profile_path: string
    character: string
    created_at: any
    updated_at: any
  }
  
  export interface Link {
    url?: string
    label: string
    active: boolean
  }
  