export interface Heroes {
    data: {
        total: 'number',
        results: [
            {
            id: { type: 'number' },
            name: { type: 'string' },
            description: {type: 'string' },
            thumbnail: {
                path: 'string',
                extension: 'string'
            },
            }
        ]
    }
}