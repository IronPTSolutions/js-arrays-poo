class Teacher extends User {
    constructor(name, age, email) {
        super(name, age, 'teacher', email);
        this.courses = [];
    }

    addCourse(course) {
        this.courses.push(course);
    }


}