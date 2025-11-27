exports.initFilters = {
    numOfBaths: undefined,
    sqftRange: undefined,
    balcony: false,
    terrace: false,
    tub: false,
    walkInCloset: false,
    kitchenIsland: false,
    numOfBeds: undefined,
    barrierFree: false,
    officeDen: false,
    pantry: false,
    builtIns: false,
    modelSuite: false,
    status: 'Vacant,Coming Soon',
    outdoorSpace: undefined
}

exports.dropdowns = [
    {
        label: 'Unit Type',
        id: 'unitType',
        options: [
            { label: 'One Bedroom', value: 'One Bedroom' },
            { label: 'One Bedroom + Den', value: 'One Bedroom + Den' },
            { label: 'Two Bedroom', value: 'Two Bedroom' },
            { label: 'Two Bedroom + Den', value: 'Two Bedroom + Den' },
            { label: 'Three Bedroom', value: 'Three Bedroom' },
            { label: 'Four Bedroom', value: 'Four Bedroom' }
        ]
    },
    { 
        label: 'Status', 
        id: 'status', 
        options: [
            { label: 'Available', value: ['Vacant', 'Coming Soon'] }, 
            { label: 'On Hold', value: ['On Hold', 'Lease Pending'] }, 
            { label: 'Occupied', value: 'Occupied' }
        ]
    },
    // { 
    //     label: 'Status', 
    //     id: 'status', 
    //     options: [
    //         { label: 'Vacant', value: 'Vacant' }, 
    //         { label: 'On Hold', value: 'On Hold' }, 
    //         { label: 'Coming Soon', value: 'Coming Soon' }, 
    //         { label: 'Lease Pending', value: 'Lease Pending' }, 
    //         { label: 'Occupied', value: 'Occupied' }
    //     ]
    // },
    {
        label: 'Number of Baths',
        id: 'numOfBaths',
        options: [
            { label: 'One Bath', value: 1 },
            { label: 'One Bath + Powder Room', value: 1.5 },
            { label: 'Two Bath', value: 2 },
            { label: 'Two Bath + Powder Room', value: 2.5 }
        ]
    },
    {
        label: 'Model',
        id: 'model',
        options: []
    },
    { 
        label: 'Area', 
        id: 'sqftRange', 
        options: [
            { label: '700 sqft - 799 sqft', value: '700-799' }, 
            { label: '800 sqft - 899 sqft', value: '800-899' }, 
            { label: '900 sqft - 999 sqft', value: '900-999' }, 
            { label: '1000 sqft - 1399 sqft', value: '1000-1399' }, 
            { label: '1400 sqft - 1699 sqft', value: '1400-1699' }, 
            { label: '1700+ sqft', value: '1700+' }
        ]
    },
    { 
        label: 'Outdoor Space', 
        id: 'outdoorSpace', 
        options: [
            { label: 'None', value: 'None' }, 
            { label: 'Terrace', value: 'Terrace' }, 
            { label: 'Balcony', value: 'Balcony' },
            { label: 'Juliet', value: 'Juliet' }
        ]
    }
];

exports.checkboxes = [
    { label: 'Tub', id: 'tub' },
    { label: 'Built Ins', id: 'builtIns' },
    { label: 'Pantry', id: 'pantry' },
    { label: 'Barrier Free', id: 'barrierFree' },
    { label: 'Model Suite', id: 'modelSuite' },
    { label: 'Is Featured', id: 'isFeatured' }
];

exports.editableFields = [
    { id: "model", label: "Model", type: "text" },
    { id: "type", label: "Type", type: "text" },
    // { id: "image", label: "Image", type: "text" },
    // { id: "pdf", label: "PDF", type: "text" },

    { id: "sqft", label: "Sqft", type: "number", min: 500, max: 2500 },
    { id: "price", label: "Price", type: "number", min: 1000, max: 9999 },
    { id: "numOfBeds", label: "Number of Beds", type: "number", min: 1, max: 4, step: 1 },
    { id: "numOfBaths", label: "Number of Baths", type: "number", min: 1, max: 3, step: 0.5 },

    { id: "balcony", label: "Balcony", type: "boolean" },
    { id: "tub", label: "Tub", type: "boolean" },
    { id: "pantry", label: "Pantry", type: "boolean" },
    { id: "terrace", label: "Terrace", type: "boolean" },
    { id: "officeDen", label: "Office Den", type: "boolean" },
    { id: "walkInCloset", label: "Walk-In Closet", type: "boolean" },
    { id: "barrierFree", label: "Barrier Free", type: "boolean" },
    { id: "builtIns", label: "Built Ins", type: "boolean" },
    { id: "juliet", label: "Juliet", type: "boolean" },
    { id: "modelSuite", label: "Model Suite", type: "boolean" },
    { id: "isFeatured", label: "Is Featured?", type: "boolean" },
]