console.log('ARRAYS FILE');

const users = [
  {
    name: 'Pepe',
    age: 31,
    position: 'developer',
    email: 'pepe@example.org'
  },
  {
    name: 'Juan',
    age: 18,
    position: 'hhrr',
    email: 'juan@example.org'
  },
  {
    name: 'María',
    age: 41,
    position: 'developer',
    email: 'maria@example.org'
  }
];


const emails = users.map((user) => user.email);
console.log(emails);

const developers = users.filter((user) => user.position === 'developer');
console.log(developers);


const sortedByAge = users.sort((user1, user2) => {
  // 1 -> user1 > user2
  // 0 -> user1 == user2
  // -1 -> user1 < user2
  if (user1.age > user2.age) {
    return 1;
  } else if (user1.age < user2.age) {
    return -1;
  } else {
    return 0;
  }
});
console.log(sortedByAge);

const sortedByAge2 = users.sort((user1, user2) => user1.age - user2.age);
console.log('asc', sortedByAge2);

const sortedByName = users.sort((user1, user2) => user1.name.localeCompare(user2.name))
console.log(sortedByName);