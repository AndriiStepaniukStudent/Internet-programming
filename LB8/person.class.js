class Person {
    constructor(firstName, lastName, gender, maritalStatus) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.gender = gender;
      this.maritalStatus = maritalStatus;
    }
  
    toLocaleString(locale) {
      const titles = {
        en: {
          male: 'Mr.',
          female: this.maritalStatus === 'married' ? 'Mrs.' : 'Miss'
        },
        fr: {
          male: 'M.',
          female: this.maritalStatus === 'married' ? 'Mme' : 'Mlle'
        },
        de: {
          male: 'Herr',
          female: this.maritalStatus === 'married' ? 'Frau' : 'Fräulein'
        }
      };
  
      const title = titles[locale][this.gender];
      return `${title} ${this.lastName}`;
    }
  }
  
  const person = new Person('John', 'Smith', 'male', 'married');
  console.log(person.toLocaleString('en'));
  console.log(person.toLocaleString('fr'));
  console.log(person.toLocaleString('de'));
  