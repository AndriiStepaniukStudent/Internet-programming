//1
let persons = [
    { name: 'John', age: 23, city: 'Boston' },
    { name: 'Alice', age: 30, city: 'New York' },
    { name: 'Michael', age: 28, city: 'Los Angeles' },
    { name: 'Emily', age: 25, city: 'Chicago' },
    { name: 'David', age: 35, city: 'San Francisco' }
];

persons.groupName = 'A';
persons.teacher = 'Joan Doe';
persons.year = '2023';

for (let key in persons) {
    console.log(key + ": " + persons[key]);
}

for (let person of persons) {
    console.log(person);
}

//2
let defaults = { mode: 'test', debugLevel: 'error', logFolder: 'root' };
let userSetting = { mode: 'production', debugLevel: 'trace' };

function mergeSettings(defaults, userSetting) {
    return { ...defaults, ...userSetting };
}

console.log(mergeSettings(defaults, userSetting));

//3
Object.defineProperty(persons[0], 'birthYear', {
    get: function () {
        return new Date().getFullYear() - this.age;
    }
});
console.log(persons[0].birthYear);

//4
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let mergedArray1 = arr1.concat(arr2);

let mergedArray2 = [...arr1, ...arr2];

//5
let textFragments = persons.map(person => `${person.name} from ${person.city} born in ${new Date().getFullYear() - person.age}`);
console.log(textFragments);

//6
let personsOver20 = persons.filter(person => person.age > 20);
console.log(personsOver20);

//7
let { name, city } = persons[0];
console.log(name, city);

let [firstPerson] = persons;
console.log(firstPerson);

//8
function getUserData(username) {
    let user = persons.find(person => person.name === username);
    if (!user) {
        throw new Error('Unable to find user');
    }
    return user;
}

function showUserInfo(username) {
    console.log('Loading');
    try {
        let user = getUserData(username);
        console.log(user);
        console.log('Loading finished');
    } catch (error) {
        console.log(error.message);
    } finally {
        console.log('Loading finished');
    }
}

//9
function textToLetters(text) {
    return text.split('');
}

//10
function reverseWord(word) {
    return word.split('').reverse().join('');
}

//11
function isJSFile(filename) {
    return filename.endsWith('.js');
}

//12
function sentenceToWords(sentence) {
    return sentence.split(' ');
}

//13
function replaceWord(text, oldWord, newWord) {
    return text.replace(oldWord, newWord);
}
