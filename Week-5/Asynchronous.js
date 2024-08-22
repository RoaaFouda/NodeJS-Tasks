/*Using XMLHttpRequest */
function getInfoUsingHttp(resource){
    
    return new Promise( (resolve, reject) => {

    const req = new XMLHttpRequest();

    req.onreadystatechange = () => {
        if(req.readyState === 4 && req.status === 200)
        {
            resolve(req.response);
        } else if(req.readyState === 4){
            reject('could not fetch data');
        }
    }
    req.open('GET', resource);
    req.send();
})
    
}

getInfoUsingHttp('http://numbersapi.com/42')
    .then((data) => console.log(data, 'response 1'))
    .catch((err) => console.log(err))



/*Using fetch api */
const getInfoUsingFetch = async (resource) => {
const res = await fetch(resource);
const data = await res.text();
return data;
}

getInfoUsingFetch('http://numbersapi.com/42')
    .then((data) => console.log(data, 'response2'))
    .catch((err) => console.error(err));





///////////////////////////////////////////
/* Using Star Wars API Documentation, write a program that gets the planet name of the character with ID 4 */
fetch('http://swapi.dev/api/planets/4/')
 .then((data) => data.json())
 .then((data) => console.log(data.name))
 .catch((err) => console.log(err))





///////////////////////////////////////////
/*Fake store products price */
const getProducts = async (productIds) => {
    try {
        const fetchPromises = productIds.map(id => fetch(`https://fakestoreapi.com/products/${id}`).then(res => res.json()));
        const products = await Promise.all(fetchPromises);
        return products;
    } catch (error) {
        console.error('Could not fetch data:', error);
    }
}

getProducts([1, 4, 3]).then(products => {
    if (products) {
        const quantities = [3, 4, 5]; // Quantities for product 1 , 4 and 3
        const totalPrice = products.reduce((sum, product, index) => sum + product.price * quantities[index], 0);
        console.log('Total Price =', totalPrice);
    }
});





///////////////////////////////////////////
/*setTimeout code using chained promises*/
const prom = (ms) => new Promise((resolve) => setTimeout(resolve,ms))
prom(5000)
    .then(() =>
        {
        console.log("Hey, there");
        return prom(3000);
    })
    .then(() =>
        {
        console.log("This code will help you understand");
        return prom(2000);
    })
    .then(() =>
        {
        console.log("Asynchronous Programming");
        return prom(3000);
    })
    .then(() =>
        {
        console.log("What The Callback Hell!!!");
        return prom(1000);
    })
    .then(() =>
        {
        console.log("I AM STUCK");
    })
  


/*setTimeout code using async/await */
const delay = async () => {
    const prom = (ms, str) => new Promise((resolve) => setTimeout(() => {
        console.log(str);
        resolve();
    },ms));

    
    await prom(5000, "Hey, there"),
    await prom(3000, "This code will help you understand"),
    await prom(2000, "Asynchronous Programming"),
    await prom(3000, "What The Callback Hell!!!"),
    await prom(1000, "I AM STUCK")
     
}

delay();



