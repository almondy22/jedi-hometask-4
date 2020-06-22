const schema = {
    name: {
        presence: true,
        length: {
            minimum: 3,
            maximum: 40,
        },
    },
    model: {
        presence: true,
        length: {
            minimum: 3,
            maximum: 40,
        },
    },
    starship_class: {
        presence: true,
        length: {
            minimum: 3,
            maximum: 40,
        },
    },
    length: {
        presence: true,
        numericality: {
            greaterThan: 0,
            lessThanOrEqualTo: 300000,
        },
    },
    passengers: {
        presence: true,
        numericality: {
            greaterThan: 0,
            lessThanOrEqualTo: 1000000,
        },
    },
};

export default schema;