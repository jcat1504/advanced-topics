const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums',
]

Promise.all(urls.map(url => {
    return fetch(url).then(resp => resp.json())
})).then(results => {
    console.log(results[0])
    console.log(results[1])
    console.log(results[2])
}).catch(() => console.log('error'))

//ASYNC AWAIT

fetch('https://jsonplaceholder.typicode.com/users')
.then(resp => resp.json())
.then(console.log)

async function fetchUsers() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.json()
    console.log(data)
}

//PROMISE ALL
Promise.all(urls.map(url =>
    fetch(url).then(resp => resp.json())
    )).then(array => {
        console.log('users', array[0])
        console.log('posts',  array[1])
        console.log('albums',  array[2])
    }).catch('oops')


const getData = async function () {
    try {
    const [ users, posts, albums ] = await Promise.all(urls.map(url =>{
    const response = await fetch(url);
    return response.json();
}));
console.log('users', users);
console.log('posts', posts);
console.log('albums', albums);
    } catch (err) {
        console.log('oooops', err)
    }
}

//await for all

const loopThroughUrls = urls => {
    const arrayOfPromises = urls.map(url => fetch(url))
    for await (let request of arrayOfPromises) {
        const data = await request.json();
        console.log(data);
    }
    }
//will loop through and iterate through each url and console log