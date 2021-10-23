const people = [
    new Student('Pepe', 31, 'pepe@example.org'),
    new Teacher('Juan', 18, 'juan@example.org'),
    new User('María', 41, 'developer', 'maria@example.org')
];

console.log(people);

const ages = people.map((user) => user.age);
people.forEach((user) => user.greet());
