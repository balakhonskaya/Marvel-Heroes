export interface Heroes {
    data: {
        total: 'number',
        results: Results[]
    }
}

export interface Results {
        id: 'number',
        name:'string',
        description: 'string',
        thumbnail: 
        {
            path: 'string',
            extension: 'string'
        }
  }

  export interface Thumbnail {
    path: 'string',
    extension: 'string'
  }