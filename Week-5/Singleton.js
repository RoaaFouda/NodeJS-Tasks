class Student{
    static needInstructor = 0;
    constructor(name, age, instructor){
        this.name = name;
        this.age = age;
        this.instructor = instructor;

        if(this.instructor){
            Student.needInstructor = 1 ;
        }
    } 
}

class Instructor{
    constructor(name, course, level){
        if(Instructor.instance == null && Student.needInstructor){
            Instructor.instance = this;
            this.name = name;
            this.course = course;
            this.level = level;
        }else if(Student.needInstructor){
            return Instructor.instance;
        }else{
            Instructor.instance = null;
           return null;
        }
    }
}



const student1 = new Student('Vaxildan', 20, 1);
const instructor1 = new Instructor("John", ".net", "advanced");
const instructor2 = new Instructor("Jojo", "js", "intermediate");
console.log(instructor2, instructor1); // both return instructor1