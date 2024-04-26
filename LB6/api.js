function fetchUsers() {
    const users = [];
    for (let i = 0; i < 20; i++) {
        users.push({
            firstname: `User${i + 1}`,
            lastname: `Lastname${i + 1}`,
            score: Math.floor(Math.random() * 101)
        });
    }
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(users.slice(0, 10));
        }, 1000);
    });
}

function getNewUsers() {
    const users = [];
    for (let i = 0; i < 5; i++) {
        users.push(`User${i + 1}`);
    }
    return users;
}
