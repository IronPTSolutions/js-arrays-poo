class User {
    constructor(name, age, position, email) {
        this.name = name;
        this.age = age;
        this.position = position;
        this.email = email;
    }

    greet() {
        console.log(`Hi! I'm ${this.name}`)
    }
}
