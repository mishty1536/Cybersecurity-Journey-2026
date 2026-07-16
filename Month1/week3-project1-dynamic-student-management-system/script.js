// Array to store students
let students = [];

//load students from localStorage on page load
const savedStudents = localStorage.getItem("students");

if (savedStudents) {
    students = JSON.parse(savedStudents);
}

// Variables for update functionality
let editMode = false;
let editStudentId = null;

// Selecting HTML Elements
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const courseInput = document.getElementById("course");
const button = document.getElementById("btn");
const studentList = document.getElementById("studentList");
const count = document.getElementById("count");
const searchInput = document.getElementById("search");

// Add / Update Student
button.addEventListener("click", () => {

    // Validation
    if (
        nameInput.value.trim() === "" ||
        ageInput.value.trim() === "" ||
        courseInput.value.trim() === ""
    ) {
        alert("Please fill all fields!");
        return;
    }

    if (editMode) {

        // Update Student
        const student = students.find(
            student => student.id === editStudentId
        );

        student.name = nameInput.value;
        student.age = ageInput.value;
        student.course = courseInput.value;

        editMode = false;
        editStudentId = null;

        button.innerText = "Add Student";

    } else {

        // Create Student Object
        const student = {
            id: Date.now(),
            name: nameInput.value,
            age: ageInput.value,
            course: courseInput.value
        };

        students.push(student);
        saveStudents();
    }

    // Display Updated List
    displayStudents(students);

    // Clear Inputs
    nameInput.value = "";
    ageInput.value = "";
    courseInput.value = "";
});

// Display Students
function displayStudents(studentArray) {

    studentList.innerHTML = "";

    studentArray.forEach(student => {

        studentList.innerHTML += `
        
        <div class="student-card">

            <h3>${student.name}</h3>

            <p><b>Age:</b> ${student.age}</p>

            <p><b>Course:</b> ${student.course}</p>

            <button onclick="editStudent(${student.id})">
                Edit
            </button>

            <button class="delete-btn"
            onclick="deleteStudent(${student.id})">
                Delete
            </button>

        </div>

        `;
    });

    count.innerText = studentArray.length;
}

// Delete Student
function deleteStudent(id) {

    students = students.filter(student => student.id !== id);

    displayStudents(students);
    saveStudents();
}

// Edit Student
function editStudent(id) {

    const student = students.find(
        student => student.id === id
    );

    nameInput.value = student.name;
    ageInput.value = student.age;
    courseInput.value = student.course;

    editMode = true;
    editStudentId = id;

    button.innerText = "Update Student";
    saveStudents();
}

// Search Student
searchInput.addEventListener("input", () => {

    const searchText = searchInput.value.toLowerCase();

    const filteredStudents = students.filter(student => {

        return (
            student.name.toLowerCase().includes(searchText) ||
            student.course.toLowerCase().includes(searchText)
        );

    });

    displayStudents(filteredStudents);

});

//SAVE student after every change
function saveStudents() {
    localStorage.setItem(
        "students",
        JSON.stringify(students)
    );
}

displayStudents(students);