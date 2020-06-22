const schema = {
    name: {
        presence: true,
        length: {
            minimum: 3,
            maximum: 40,
        },
    },
    diameter: {
        presence: true,
        numericality: {
            greaterThan: 0,            
        },
    },
    population: {
        presence: true,
        length: {
            minimum: 3,
            maximum: 40,
        },
    },
    climate: {
        presence: true,        
        length: {
            minimum: 3,
            maximum: 40,
        },
    },
    created: {
        length: {
            minimum: 3,
            maximum: 40,
        },
    },
};

export default schema;