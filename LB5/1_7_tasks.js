//1
function invokeAfterDelay(func, delay) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(func());
        }, delay);
    });
}

invokeAfterDelay(() => Math.floor(Math.random() * 11), 2000)
    .then(result => console.log('Random number:', result));

//2
function produceRandomAfterDelay() {
    return invokeAfterDelay(() => Math.floor(Math.random() * 11), 2000);
}

Promise.all([produceRandomAfterDelay(), produceRandomAfterDelay()])
    .then(results => {
        let sum = results.reduce((acc, val) => acc + val, 0);
        console.log('Sum of two random numbers:', sum);
    });

//3
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//4
function getUser(id) {
    let users = [
        { id: 0, name: 'John', age: 30, city: 'New York' },
        { id: 1, name: 'Alice', age: 25, city: 'Los Angeles' },
        { id: 2, name: 'Bob', age: 40, city: 'Chicago' },
        { id: 3, name: 'Emily', age: 35, city: 'Houston' }
    ];

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let user = users.find(user => user.id === id);
            if (user) {
                resolve(user);
            } else {
                reject(new Error('User not found'));
            }
        }, 1000);
    });
}

//5
async function loadUsers(ids) {
    let promises = ids.map(id => getUser(id));
    try {
        let users = await Promise.all(promises);
        return users;
    } catch (error) {
        throw error;
    }
}

//6
function logCall(callback) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Current time:', new Date().toLocaleTimeString());
            resolve(callback());
        }, 1000);
    });
}

logCall(() => console.log('Callback function called'))
    .then(() => logCall(() => console.log('Callback function called')))
    .then(() => logCall(() => console.log('Callback function called')))
    .then(() => logCall(() => console.log('Callback function called')));

//7
async function showUsers(ids) {
    console.log('Loading...');
    try {
        let users = await loadUsers(ids);
        console.log('Loaded users:', users);
    } catch (error) {
        console.error(error.message);
    } finally {
        console.log('Loading finished');
    }
}

showUsers([0, 1, 2, 3]);
