const schema = {
    name: {
        length: {
            minimum: 3,
            maximum: 40,
        },
    },
    height: {
        numericality: {
            greaterThan: 0,
            lessThanOrEqualTo: 300,
        },
    },
    mass: {
        numericality: {
            greaterThan: 0,
            lessThanOrEqualTo: 300,
        },
    },
    gender: {
        length: {
            minimum: 3,
            maximum: 40,
        },
    },
    birth_year: {
        length: {
            minimum: 3,
            maximum: 40,
        },
    },
};

export default schema;