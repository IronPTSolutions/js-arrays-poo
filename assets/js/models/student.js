class Student extends User {
    constructor(name, age, email) {
        super(name, age, 'student', email);
        this.marks = [];
    }

    addMark(mark) {
        this.marks.push(mark);
    }

    addMarks(marks) {
        this.marks = this.marks.concat(marks);
    }

    greet() {
        console.log(`Hi! I'm ${this.name} and I'm ${this.position}`)
    }

}