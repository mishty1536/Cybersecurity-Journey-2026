let students = [];

const addStudent = (id, name, age, course) => {

    const student = {
        id,
        name,
        age,
        course
    };

    students.push(student);

    console.log("Student Added");
};

const viewStudents = () => {

    students.forEach(student => {
        console.log(student);
    });

};

const searchStudent = (id) => {

    const student = students.find(
        student => student.id === id
    );

    console.log(student);

};

const deleteStudent = (id) => {

    students = students.filter(
        student => student.id !== id
    );

    console.log("Student Deleted");

};

addStudent(1,"Mishty",20,"CSE");
addStudent(2,"Rahul",21,"IT");
addStudent(3,"Priya",20,"ECE");

viewStudents();

searchStudent(2);

deleteStudent(2);

viewStudents();

const updateStudent = (id, newName, newAge, newCourse) => {

    const student = students.find(
        student => student.id === id
    );

    if(student){
        student.name = newName;
        student.age = newAge;
        student.course = newCourse;

        console.log("Student Updated");
    }
    else{
        console.log("Student Not Found");
    }
};

updateStudent(1, "Mishty", 21, "Cybersecurity");

viewStudents();