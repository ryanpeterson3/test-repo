const propertySortOrder = [
    { property: 'thenormand', sort: 1 },
    { property: 'saintemilion', sort: 2 },
    { property: 'lepinelodge', sort: 3 },
    { property: 'thecristina', sort: 4 },
    { property: 'howardgrant', sort: 5 },
    { property: 'johannescourt', sort: 6 }
];

module.exports = (p) => {
    const property = propertySortOrder.find(property => property.property === p);
    return property ? property : null;
};