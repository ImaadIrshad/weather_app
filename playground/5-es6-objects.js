// OBJECT PROPERTY SHORTHAND

const name = 'Imaad'
const userAge = 23

const user = {
    /*name: name,
    Above is normal object property, we can use object property shorthand when the object name and variable name is same.
    just like above name example name: name, how to use shorthand syntax? see below*/
    name, 
    // just type name and it will give you same output, it creates a name property on object user with variable name
    age: userAge,
    location: 'Custom'
}

console.log(user)


// OBJECT DESTRUCTURING

// create an object first 
const product = {
    label: 'Blue notebook',
    price: 20,
    stock: 100,    
}

/* now, if we wanted to have access to the properties we use product.label, product.price, etc. or we can use
const label = product.label and const price = product.price if we want to access the properties values with just the property name,
with object destructuring its made simple and it is done like this below*/

const {label, price, stock} = product
// now when you use label variable it will give product.lable, goes similarly for price and stock

console.log(label), console.log(price), console.log (stock)

// if we want to rename a property name then we can do that like this below
const {label:productlabel} = product
console.log(productlabel)
// in the output both label and productlabel now have same values
/* we can also pass values to properties if it is not defined in the const {}, but it will be default value and it will be only used when
the property is not defined in the Object, if the property is defined and has some value then that value will be used, remember the lecture*/


// OBJECT DESTRUCTURING IN FUNCTION ARGUMENTS

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock)
}

transaction('order', product)