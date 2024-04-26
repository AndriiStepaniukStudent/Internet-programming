function init() {
    const mainDiv = document.getElementById('main');

    const header = document.createElement('header');
    header.innerHTML = '<button>User Rating</button><button>News</button><button>Contacts</button><button>About</button>';
    mainDiv.appendChild(header);

    const mainContent = document.createElement('main');
    mainContent.innerHTML = `
        <div class="leftPanel" style="background-color: lightyellow;">
            <div class="loader"></div>
        </div>
        <div class="content" style="background-color: lightcyan;"></div>
        <div class="rightPanel" style="background-color: lightpink;">
            <div class="loader"></div>
        </div>
    `;
    mainDiv.appendChild(mainContent);

    const footer = document.createElement('footer');
    footer.innerHTML = `
        <div class="currentUsers">Current users: <span id="currentUsersCount">0</span></div>
        <div class="newUsers">New users: <ul id="newUsersList"></ul></div>
    `;
    mainDiv.appendChild(footer);

    // Content initialization
    setTimeout(() => {
        const content = document.querySelector('.content');
        const loader = content.querySelector('.loader');
        loader.style.display = 'none';
        content.textContent = 'No users';
        const getUsersButton = document.createElement('button');
        getUsersButton.textContent = 'Get Users';
        content.appendChild(getUsersButton);
        getUsersButton.addEventListener('click', getUsers);
    }, 1000);

    // Left Panel initialization
    setTimeout(() => {
        const leftPanel = document.querySelector('.leftPanel');
        const input = document.createElement('input');
        input.placeholder = 'Search...';
        const searchButton = document.createElement('button');
        searchButton.textContent = 'Search';
        leftPanel.appendChild(input);
        leftPanel.appendChild(searchButton);
        searchButton.addEventListener('click', searchTable);
    }, 1000);

    // Right Panel initialization
    setTimeout(() => {
        const rightPanel = document.querySelector('.rightPanel');
        const loader = rightPanel.querySelector('.loader');
        loader.style.display = 'none';
        const sumScore = document.createElement('div');
        sumScore.textContent = 'Total score of 10 users: ';
        const scoreValue = document.createElement('span');
        scoreValue.id = 'scoreValue';
        sumScore.appendChild(scoreValue);
        rightPanel.appendChild(sumScore);
        fetchUsers();
    }, 1000);
}

function getUsers() {
    fetchUsers()
        .then(users => createTable(users));
}

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

function createTable(users) {
    const content = document.querySelector('.content');
    content.innerHTML = '';
    if (users.length === 0) {
        content.textContent = 'No users found';
        return;
    }
    const table = document.createElement('table');
    const tableHeader = table.createTHead();
    const row = tableHeader.insertRow();
    row.innerHTML = '<th>Firstname</th><th>Lastname</th><th>Score</th>';
    const tableBody = table.createTBody();
    users.forEach(user => {
        const row = tableBody.insertRow();
        row.innerHTML = `<td>${user.firstname}</td><td>${user.lastname}</td><td>${user.score}</td>`;
    });
    content.appendChild(table);
}

function searchTable() {
    const input = document.querySelector('.leftPanel input');
    const searchText = input.value.trim().toLowerCase();
    const tableRows = document.querySelectorAll('.content table tbody tr');
    tableRows.forEach(row => {
        row.classList.remove('highlight');
        const columns = row.querySelectorAll('td');
        columns.forEach(column => {
            if (column.textContent.toLowerCase().includes(searchText)) {
                row.classList.add('highlight');
            }
        });
    });
}

init();
