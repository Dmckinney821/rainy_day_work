
const name = 'Dan'
const age = 36

const user = {
    name,
    age,
    location: 'NYC"'
}

console.log(user)

const product = {
    label: 'Red Notebook',
    pride: 2,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

// const label = product.label
// const stock = product.stock

// const { label:productLabel, stock, rating = 5 } = product;
// console.log(productLabel, stock, rating)

const transaction = (type, { label, stock }) => {
   console.log(type, label, stock)
}

transaction('order', product)