

let studentForm = document.getElementById('StudentForm');
let studentList = document.getElementById('StudentList');



let students  = [];
studentForm.addEventListener('submit' , function (e) {
    e.preventDefault();
    
    let name =document.getElementById('nameinput').value;
    let email =document.getElementById('emailinput').value;
    
    if (name == "" || email == "") {
        alert('Enter both name & email');
        return
    }
    
    let rollNum = generateRollNumber();
    let serial = generateCerialNum(); 
    let student = {rollNum, name, email, serial}
    
    students.push(student);
    displayStudents();

    document.getElementById('nameinput').value = "";
    document.getElementById('emailinput').value = "";
});



function displayStudents() {
    studentList.innerHTML = '';
    
    students.forEach(student => {
        let studentDiv = document.createElement('div');
        studentDiv.classList.add('student');
        studentDiv.innerHTML += `<p><strong>Name:</strong>${student.name}</p>
        <p><strong>Email:</strong> ${student.email}</p>
        <p><strong>RollNumber:</strong> ${student.rollNum}</p>
        <p><strong>Serial Number:</strong> ${student.serial}</p>
        <button onclick="removeStudent(${student.rollNum})"> Remove</button>`;
        
        studentList.appendChild(studentDiv);
    })
}



function removeStudent(rollNum) {
    students = students.filter(student => student.rollNum !== rollNum);
    displayStudents();
}


function generateRollNumber() {
    return Math.floor( 1000 + Math.random()*9000);
};


function generateCerialNum() {
    return Math.floor( 100000 + Math.random()*900000);
};














//edit button

// let studentForm = document.getElementById('StudentForm');
// let studentList = document.getElementById('StudentList');



// let students  = [];
// studentForm.addEventListener('submit', function (event) {
//     event.preventDefault();

//     let name =document.getElementById('nameinput').value.trim();
//     let email =document.getElementById('emailinput').value.trim();

//     if (name == "" || email == "") {
//         alert('Enter both name & email');
//         return
//     }

//     let rollNum = generateRollNumber();
//     let student = {rollNum, name, email}

//     students.push(student);
//     displayStudents();

//     document.getElementById('nameinput').value = "";
//     document.getElementById('emailinput').value = "";
// });



// function displayStudents() {
//     studentList.innerHTML = '';

//     students.forEach(student => {
//         let studentDiv = document.createElement('div');
//         studentDiv.classList.add('student');
//         studentDiv.innerHTML = `<p><strong>Name:</strong>${student.name}</p>
//      <p><strong>Email:</strong> ${student.email}</p>
//      <p><strong>RollNumber:</strong> ${student.rollNum}</p>
//      <button onclick="removeStudent(${student.rollNum})"> Remove</button>
//      <button onclick="editStudent(${student.rollNum}, '${student.name}', '${student.email}')"> Edit</button>`;

//      studentList.appendChild(studentDiv);
//     })
// }

// function removeStudent(rollNum) {
//     students = students.filter(student => student.rollNum!== rollNum);
//     displayStudents();
// }

// function editStudent(rollNum, name, email) {
//     document.getElementById('nameinput').value = name;
//     document.getElementById('emailinput').value = email;
//     document.getElementById('rollNumInput').value = rollNum;
//     document.getElementById('submitBtn').value = 'Update';
// }

// function generateRollNumber() {
//     return Math.floor( 1000 + Math.random()*9000);
// };

// studentForm.addEventListener('submit', function(event) {
//     event.preventDefault();

//     let name = document.getElementById('nameinput').value.trim();
//     let email = document.getElementById('emailinput').value.trim();
//     let rollNum = document.getElementById('rollNumInput').value.trim();

//     if (name == "" || email == "") {
//         alert('Enter both name & email');
//         return
//     }

//     if (rollNum) {
//         // Update existing student
//         let student = students.find(student => student.rollNum === parseInt(rollNum));
//         if (student) {
//             student.name = name;
//             student.email = email;
//         }
//     } else {
//         // Add new student
//         rollNum = generateRollNumber();
//         let student = { rollNum, name, email };
//         students.push(student);
//     }

//     displayStudents();

//     document.getElementById('nameinput').value = "";
//     document.getElementById('emailinput').value = "";
//     document.getElementById('rollNumInput').value = "";
//     document.getElementById('submitBtn').value = 'Submit';
// });