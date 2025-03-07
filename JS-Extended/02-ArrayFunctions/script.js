const items = [
    { name : 'Bike', price : 100},
    { name : 'TV', price :200},
    { name : 'Album', price :10},
    { name : 'Book', price :5},
    { name : 'Phone', price :500},
    { name : 'Keyboard', price :25}
]


// Filter-Methode:

const filteredItems = items.filter((items) => {
    return items.price <= 100
})

console.log(filteredItems)


// Map-Methode:
const itemNames = items.map((item) => {
    return item.name
})
console.log(itemNames)


// Find-Methode:

const foundItem = items.find((item) => {
    return item.name === 'Album'
})
console.log(foundItem)


// ForEach-Methode:

items.forEach((item) => {
    console.log(item.name)
})


// Some-Methode:

const hasInexpensiveItems = items.some((item) => {
    return item.price <= 100
})

console.log(hasInexpensiveItems)


// Every-Methode:

const onlyInexpensiveItems = items.every((item) => {
    return item.price <= 1000
})

console.log(onlyInexpensiveItems)


// Reduce-Methode:

const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal 
}, 0)

console.log(total)


// Includes-Methode:

const numbers = [1, 2, 3, 4, 5]

const includesTwo = numbers.includes(2)

console.log(includesTwo)